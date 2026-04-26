---
title: "Full-Stack AI Dashboard with Next.js + n8n: Step-by-Step Build"
description: "How to build a production-ready AI-powered business dashboard using Next.js 14, n8n for automation, and Claude API for intelligent summaries — complete with real-time data."
date: "2026-04-02"
readTime: "10 min read"
category: "Full-Stack Development"
keywords: ["nextjs ai dashboard tutorial", "fullstack ai app development", "n8n nextjs integration", "ai dashboard india"]
---

## What We're Building

A real-time business operations dashboard that:
- Pulls data from multiple sources (CRM, e-commerce, analytics)
- Displays live metrics and charts
- Generates AI-written daily summaries
- Triggers n8n workflows from the UI
- Sends WhatsApp alerts on key thresholds

This is the exact type of dashboard we build for clients at Qorvai. Here's the full stack, explained.

---

## Tech Stack

- **Next.js 14** (App Router, Server Components)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** components
- **Recharts** for charts
- **n8n** (backend automation)
- **Claude API** (AI summaries)
- **Prisma + PostgreSQL** (data storage)

---

## Project Structure

\`\`\`
src/
├── app/
│   ├── dashboard/
│   │   ├── page.tsx          # Main dashboard
│   │   └── components/
│   │       ├── MetricCard.tsx
│   │       ├── RevenueChart.tsx
│   │       └── AISummary.tsx
│   └── api/
│       ├── metrics/route.ts  # Fetch metrics
│       ├── summary/route.ts  # Generate AI summary
│       └── trigger/route.ts  # Trigger n8n workflows
├── lib/
│   ├── anthropic.ts          # Claude client
│   ├── n8n.ts               # n8n webhook triggers
│   └── db.ts                # Prisma client
\`\`\`

---

## Step 1: API Routes

### Metrics API

\`\`\`typescript
// src/app/api/metrics/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
  const [revenue, leads, orders, conversionRate] = await Promise.all([
    prisma.transaction.aggregate({
      _sum: { amount: true },
      where: { createdAt: { gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) } }
    }),
    prisma.lead.count({
      where: { createdAt: { gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) } }
    }),
    prisma.order.count({
      where: { status: 'completed', createdAt: { gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) } }
    }),
    // Conversion rate calculation
    prisma.$queryRaw\`SELECT ROUND(COUNT(CASE WHEN status = 'converted' THEN 1 END) * 100.0 / COUNT(*), 2) as rate FROM leads WHERE created_at > NOW() - INTERVAL '30 days'\`
  ]);

  return NextResponse.json({
    revenue: revenue._sum.amount || 0,
    leads,
    orders,
    conversionRate: (conversionRate as any)[0]?.rate || 0,
    updatedAt: new Date().toISOString()
  });
}
\`\`\`

### AI Summary API

\`\`\`typescript
// src/app/api/summary/route.ts
import Anthropic from '@anthropic-ai/sdk';
import { NextResponse } from 'next/server';

const anthropic = new Anthropic();

export async function POST(req: Request) {
  const { metrics, trend } = await req.json();
  
  const message = await anthropic.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 300,
    messages: [{
      role: "user",
      content: \`You are a business analyst. Write a 3-sentence executive summary of today's performance.
      
Metrics (last 30 days):
- Revenue: ₹\${metrics.revenue.toLocaleString('en-IN')}
- New Leads: \${metrics.leads}
- Orders Completed: \${metrics.orders}
- Conversion Rate: \${metrics.conversionRate}%
- Trend vs last period: \${trend}

Be specific, actionable, and concise. Mention the most important insight first.\
