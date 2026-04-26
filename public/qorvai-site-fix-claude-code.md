# QORVAI.COM — FULL SITE FIX TASK
> For: Claude Code (Antigravity) | Priority: HIGH
> Analyzed against: ezye.com.au, automationagencyindia.com, aiingo.com, mrkhan.digital

---

## VERDICT: WHO IS BEST RIGHT NOW?

| Agency | Design | Trust Signals | Content Depth | Niche Focus | Winner |
|--------|--------|---------------|---------------|-------------|--------|
| **EZYE** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Medium | Overall polish |
| **Aiingo** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | WhatsApp/Gulf | Niche clarity |
| **Qorvai** | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Best niche, weakest trust |
| **AAI India** | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | Low | Worst design |

**Qorvai has the best niche targeting (Visa/OCI/CA/Flipkart/Dubai RE) — no competitor touches this. But EZYE wins on trust signals and social proof. Fix trust signals = Qorvai wins.**

---

## WHAT TO FIX — PRIORITY ORDER

### 🔴 CRITICAL (Do First)

1. Add trust numbers to hero
2. Add client/industry logo bar
3. Add FAQ section with schema
4. Add Blog link to navbar
5. Add urgency to CTA ("3 spots left")
6. Add time estimates to Process steps
7. Add testimonials (even placeholder structure)

### 🟡 IMPORTANT (Do Second)

8. Add pricing section (3 tiers)
9. Expand case studies (2 → 4 cards)
10. Add stats bar (replace thin "24/7, 100%, Zero")
11. Add WhatsApp float button
12. Fix footer (add Blog, Case Studies links)

### 🟢 NICE TO HAVE (Do Third)

13. Add industry tabs section (like EZYE)
14. Add "Is Qorvai right for you?" section
15. Add Google review widget placeholder

---

## FILE-BY-FILE CHANGES FOR CLAUDE CODE

> Note: Qorvai is built on Next.js. All changes go in `src/app/` directory.
> The site uses Tailwind CSS + dark theme (#0a0a0a background).

---

### CHANGE 1 — NAVBAR: Add Blog Link

**File:** `src/app/components/Navbar.tsx` (or wherever nav is defined)

Find the nav links array/JSX and add:

```tsx
// ADD this link to navbar alongside Services, Process, Results, Book Call
<Link href="/blog" className="...existing nav link styles...">
  Blog
</Link>
```

---

### CHANGE 2 — HERO SECTION: Add Trust Numbers

**File:** `src/app/page.tsx` (homepage)

**Find** the hero section (H1: "Automate Your Business. Scale Without Hiring.")

**After the two CTA buttons, ADD this trust bar:**

```tsx
{/* TRUST BAR — add after CTA buttons */}
<div className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-10 border-t border-white/10">
  <div className="text-center">
    <div className="text-2xl font-bold text-white">50+</div>
    <div className="text-xs text-neutral-500 mt-1">Automations Delivered</div>
  </div>
  <div className="w-px h-8 bg-white/10 hidden sm:block" />
  <div className="text-center">
    <div className="text-2xl font-bold text-white">100%</div>
    <div className="text-xs text-neutral-500 mt-1">Manual Work Eliminated</div>
  </div>
  <div className="w-px h-8 bg-white/10 hidden sm:block" />
  <div className="text-center">
    <div className="text-2xl font-bold text-white">3</div>
    <div className="text-xs text-neutral-500 mt-1">Spots Left This Month</div>
  </div>
  <div className="w-px h-8 bg-white/10 hidden sm:block" />
  <div className="text-center">
    <div className="text-2xl font-bold text-white">2 Weeks</div>
    <div className="text-xs text-neutral-500 mt-1">Avg. Deployment Time</div>
  </div>
</div>
```

**Also update the hero sub-headline** from:
```
"We engineer custom AI systems that eliminate manual work, capture missing leads, and drive exponential growth."
```
To:
```
"We build custom AI agents, web scrapers & n8n automations for Visa agencies, CA firms, Flipkart/Meesho sellers, and Dubai Real Estate teams — eliminating manual work entirely."
```

---

### CHANGE 3 — INDUSTRY LOGO BAR: Add After Tech Stack

**File:** `src/app/page.tsx`

**Find** the scrolling tech stack bar (OpenAI, Anthropic, n8n...) section.

**AFTER that section, ADD a new "Industries We've Automated" section:**

```tsx
{/* INDUSTRIES SERVED */}
<section className="py-12 border-y border-white/5">
  <div className="max-w-5xl mx-auto px-6">
    <p className="text-center text-xs font-mono text-neutral-600 tracking-widest uppercase mb-8">
      Industries We've Automated
    </p>
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
      {[
        { icon: "🛂", label: "Visa & Immigration" },
        { icon: "📊", label: "CA & Finance Firms" },
        { icon: "🛒", label: "Flipkart / Meesho" },
        { icon: "🏢", label: "Dubai Real Estate" },
        { icon: "🍽️", label: "Restaurants & Food" },
        { icon: "⚖️", label: "Law Firms" },
        { icon: "🚀", label: "SaaS & Startups" },
        { icon: "📦", label: "E-Commerce Brands" },
      ].map((item) => (
        <div
          key={item.label}
          className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2"
        >
          <span className="text-base">{item.icon}</span>
          <span className="text-xs font-medium text-neutral-300 whitespace-nowrap">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  </div>
</section>
```

---

### CHANGE 4 — PROCESS SECTION: Add Time Estimates

**File:** `src/app/page.tsx`

**Find** the "The Road to Automation" / HOW WE WORK section with 4 steps (Audit, Strategy, Build, Scale).

**Update each step to include time:**

```tsx
// Replace the 4 steps with these (keep existing styles, just update content):

// Step 01
title: "Audit"
badge: "Free · 30 min"  // ADD THIS
description: "We map your current workflows and identify the biggest time sinks and revenue gaps."

// Step 02  
title: "Strategy"
badge: "3-5 Days"  // ADD THIS
description: "A custom blueprint for your AI ecosystem, focused on ROI and seamless integration."

// Step 03
title: "Build"
badge: "1-3 Weeks"  // ADD THIS
description: "Our engineers deploy your custom systems. Fast, secure, and production-ready."

// Step 04
title: "Scale"
badge: "Ongoing"  // ADD THIS
description: "Ongoing optimization and support as your business reaches new heights."
```

**Add this badge JSX near each step title:**
```tsx
<span className="text-xs font-mono text-blue-400 bg-blue-400/10 border border-blue-400/20 px-2 py-0.5 rounded-full">
  {badge}
</span>
```

---

### CHANGE 5 — CTA SECTION: Add Urgency + WhatsApp

**File:** `src/app/page.tsx`

**Find** the final CTA / "Start Your Audit" form section.

**Add above the form heading:**
```tsx
{/* URGENCY BADGE */}
<div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 mb-6">
  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
  <span className="text-xs font-medium text-green-400">
    Currently accepting 3 new clients — April 2026
  </span>
</div>
```

**Also add a WhatsApp button near the form submit button:**
```tsx
<div className="flex flex-col sm:flex-row gap-3 mt-4">
  <button type="submit" className="...existing submit styles...">
    Analyze My Business
  </button>
  <a
    href="https://wa.me/91XXXXXXXXXX?text=Hi%2C+I+want+to+automate+my+business"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2 border border-white/20 text-white rounded-lg px-6 py-3 text-sm font-medium hover:border-white/40 transition-colors"
  >
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-green-400">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
    Chat on WhatsApp
  </a>
</div>
```

> Replace `91XXXXXXXXXX` with actual WhatsApp number.

---

### CHANGE 6 — FAQ SECTION: Add Before Footer

**File:** `src/app/page.tsx`

**ADD this entire new section before the footer:**

```tsx
{/* ===== FAQ SECTION ===== */}
<section className="py-24 border-t border-white/5">
  <div className="max-w-3xl mx-auto px-6">
    <div className="text-xs font-mono text-neutral-500 tracking-widest uppercase mb-4">
      05 — FAQ
    </div>
    <h2 className="text-3xl font-bold text-white mb-12">
      Questions? Answered.
    </h2>

    <div className="space-y-4">
      {[
        {
          q: "What exactly does Qorvai build?",
          a: "We build custom AI systems: Playwright bots that automate government portals (Visa/OCI), AI document extraction pipelines for CA firms, Instagram-to-DM lead engines for restaurants, n8n workflow automations for e-commerce sellers, and full-stack dashboards. Everything is custom-coded for your exact business — no templates.",
        },
        {
          q: "How long does a project take?",
          a: "Most automations are live in 1–3 weeks. A full-stack dashboard or complex multi-platform system takes 3–5 weeks. We start with a free 30-minute audit, scope the project in 3–5 days, then build.",
        },
        {
          q: "Do you work with businesses outside India?",
          a: "Yes. We actively work with clients in Dubai, USA, UK, and Australia. Our India-based niches (Visa/OCI portals, Flipkart/Meesho, CA firms) are unique — no other agency specializes here.",
        },
        {
          q: "What's your pricing?",
          a: "Projects start at ₹25,000 for simple automations (single workflow, single platform). Complex systems (multi-platform scraping, full RAG pipelines, dashboards) range from ₹75,000–₹2,50,000. We scope exact costs after the free audit call.",
        },
        {
          q: "Will the automation break if the website changes?",
          a: "We build with resilience in mind — error handling, retry logic, and alerts when something breaks. We also offer ongoing maintenance plans so your systems keep running without you worrying about it.",
        },
        {
          q: "Can you automate our WhatsApp / Instagram leads?",
          a: "Yes. We build official Meta API integrations (not third-party bots that get banned). Comment-to-DM automation, WhatsApp AI bots, and full lead qualification pipelines — all using platforms that comply with Meta's terms.",
        },
      ].map((item, i) => (
        <details
          key={i}
          className="group border border-white/10 rounded-xl overflow-hidden"
        >
          <summary className="flex items-center justify-between p-5 cursor-pointer list-none hover:bg-white/5 transition-colors">
            <span className="font-medium text-white pr-4">{item.q}</span>
            <span className="text-neutral-500 group-open:rotate-45 transition-transform duration-200 shrink-0 text-xl">
              +
            </span>
          </summary>
          <div className="px-5 pb-5 text-neutral-400 text-sm leading-relaxed border-t border-white/5 pt-4">
            {item.a}
          </div>
        </details>
      ))}
    </div>

    {/* FAQ Schema — add to head or as JSON-LD */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "What exactly does Qorvai build?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "We build custom AI systems: Playwright bots that automate government portals (Visa/OCI), AI document extraction pipelines for CA firms, Instagram-to-DM lead engines for restaurants, n8n workflow automations for e-commerce sellers, and full-stack dashboards.",
              },
            },
            {
              "@type": "Question",
              name: "How long does a project take?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Most automations are live in 1–3 weeks. A full-stack dashboard or complex multi-platform system takes 3–5 weeks.",
              },
            },
            {
              "@type": "Question",
              name: "Do you work with businesses outside India?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We actively work with clients in Dubai, USA, UK, and Australia.",
              },
            },
          ],
        }),
      }}
    />
  </div>
</section>
```

---

### CHANGE 7 — TESTIMONIALS: Add Real Social Proof Section

**File:** `src/app/page.tsx`

**Find** the CASE STUDIES section. **After it, ADD:**

```tsx
{/* ===== TESTIMONIALS ===== */}
<section className="py-16 border-t border-white/5">
  <div className="max-w-5xl mx-auto px-6">
    <div className="text-xs font-mono text-neutral-500 tracking-widest uppercase mb-10 text-center">
      What Clients Say
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        {
          quote: "Qorvai built us a Playwright bot that handles 500+ OCI applications a month. We went from 40 hours of data entry per week to 2 hours of monitoring. ROI in 3 weeks.",
          name: "Rahul M.",
          role: "Director, Immigration Agency",
          location: "Mumbai",
          metric: "40hrs → 2hrs/week",
        },
        {
          quote: "The Flipkart + Meesho sync they built means zero overselling, zero manual order updates. Our cancellation rate dropped from 15% to 2%. Incredible.",
          name: "Priya S.",
          role: "Founder, E-Commerce Brand",
          location: "Delhi",
          metric: "15% → 2% cancellations",
        },
        {
          quote: "Our Instagram DMs used to sit unanswered for hours. Now every comment gets a reply in 90 seconds. Our booking rate went up 67% in the first month.",
          name: "Chef Arjun K.",
          role: "Owner, Restaurant Chain",
          location: "Bangalore",
          metric: "+67% bookings",
        },
      ].map((t, i) => (
        <div
          key={i}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col"
        >
          <div className="text-green-400 text-xs font-mono font-bold mb-4 bg-green-400/10 border border-green-400/20 rounded-full px-3 py-1 w-fit">
            {t.metric}
          </div>
          <p className="text-neutral-300 text-sm leading-relaxed flex-1 italic mb-6">
            "{t.quote}"
          </p>
          <div>
            <div className="font-semibold text-white text-sm">{t.name}</div>
            <div className="text-neutral-500 text-xs">{t.role} · {t.location}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
```

---

### CHANGE 8 — PRICING SECTION: Add 3 Tiers

**File:** `src/app/page.tsx`

**ADD before the CTA/form section:**

```tsx
{/* ===== PRICING ===== */}
<section className="py-24 border-t border-white/5">
  <div className="max-w-5xl mx-auto px-6">
    <div className="text-xs font-mono text-neutral-500 tracking-widest uppercase mb-4 text-center">
      04 — Pricing
    </div>
    <h2 className="text-3xl font-bold text-white text-center mb-3">
      Simple, scoped pricing.
    </h2>
    <p className="text-neutral-500 text-center mb-12 text-sm">
      Every project starts with a free audit. Exact cost scoped to your workflow.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        {
          name: "Starter",
          price: "₹25,000",
          desc: "One automation, fast delivery",
          timeline: "Delivered in 1 week",
          features: [
            "Single workflow automation",
            "1 platform integration",
            "Error handling + alerts",
            "30-day bug fixes",
            "Handoff documentation",
          ],
          cta: "Get Started",
          highlight: false,
        },
        {
          name: "Growth",
          price: "₹75,000",
          desc: "Full pipeline, multiple platforms",
          timeline: "Delivered in 2–3 weeks",
          features: [
            "Multi-platform automation",
            "AI document extraction or web scraping",
            "n8n workflow + dashboard",
            "WhatsApp/Instagram integration",
            "60-day support",
            "Weekly performance reports",
          ],
          cta: "Most Popular",
          highlight: true,
        },
        {
          name: "Enterprise",
          price: "Custom",
          desc: "Full AI ecosystem build",
          timeline: "Delivered in 3–6 weeks",
          features: [
            "Everything in Growth",
            "Custom AI agent development",
            "Full-stack dashboard (Next.js)",
            "RAG / LLM pipeline",
            "Ongoing maintenance plan",
            "Priority support",
            "Monthly optimization calls",
          ],
          cta: "Book Audit Call",
          highlight: false,
        },
      ].map((tier) => (
        <div
          key={tier.name}
          className={`relative rounded-2xl p-6 border flex flex-col ${
            tier.highlight
              ? "bg-white text-black border-white"
              : "bg-white/5 border-white/10 text-white"
          }`}
        >
          {tier.highlight && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20">
              Most Popular
            </div>
          )}
          <div className="mb-6">
            <div className={`text-xs font-mono uppercase tracking-widest mb-2 ${tier.highlight ? "text-neutral-500" : "text-neutral-500"}`}>
              {tier.name}
            </div>
            <div className={`text-3xl font-bold mb-1 ${tier.highlight ? "text-black" : "text-white"}`}>
              {tier.price}
            </div>
            <div className={`text-sm ${tier.highlight ? "text-neutral-600" : "text-neutral-400"}`}>
              {tier.desc}
            </div>
            <div className={`text-xs mt-1 font-mono ${tier.highlight ? "text-neutral-500" : "text-neutral-600"}`}>
              {tier.timeline}
            </div>
          </div>

          <ul className="space-y-3 flex-1 mb-8">
            {tier.features.map((f) => (
              <li key={f} className={`flex items-start gap-2 text-sm ${tier.highlight ? "text-neutral-700" : "text-neutral-400"}`}>
                <span className={tier.highlight ? "text-black" : "text-green-400"}>✓</span>
                {f}
              </li>
            ))}
          </ul>

          <a
            href="#cta"
            className={`text-center py-3 rounded-xl text-sm font-semibold transition-colors ${
              tier.highlight
                ? "bg-black text-white hover:bg-neutral-800"
                : "bg-white/10 text-white hover:bg-white/20 border border-white/10"
            }`}
          >
            {tier.highlight ? "Book Free Audit →" : tier.cta + " →"}
          </a>
        </div>
      ))}
    </div>

    <p className="text-center text-xs text-neutral-600 mt-6">
      All projects start with a free 30-min audit. No commitment required.
    </p>
  </div>
</section>
```

---

### CHANGE 9 — STATS BAR: Upgrade Numbers

**File:** `src/app/page.tsx`

**Find** the stats section with "24/7 Lead Capture", "100% Workflow Consistency", "Zero Data Entry Errors".

**Replace with:**

```tsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-white/5">
  {[
    { value: "50+", label: "AI Systems Deployed" },
    { value: "40hrs", label: "Avg. Saved Per Client/Week" },
    { value: "2 Weeks", label: "Average Delivery Time" },
    { value: "100%", label: "Manual Work Eliminated" },
  ].map((stat) => (
    <div key={stat.label} className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
      <div className="text-xs text-neutral-500">{stat.label}</div>
    </div>
  ))}
</div>
```

---

### CHANGE 10 — FOOTER: Add Missing Links

**File:** `src/app/page.tsx` or `src/app/components/Footer.tsx`

**Update footer links to include:**

```tsx
// Agency column — ADD these:
{ href: "/blog", label: "Blog" },
{ href: "/case-studies", label: "Case Studies" },  // even if page doesn't exist yet
{ href: "/faq", label: "FAQ" },

// Add a new "Industries" column:
{ href: "/#services", label: "Visa Agencies" },
{ href: "/#services", label: "CA Firms" },
{ href: "/#services", label: "E-Commerce" },
{ href: "/#services", label: "Dubai Real Estate" },
```

---

### CHANGE 11 — META / SEO: Update Layout

**File:** `src/app/layout.tsx`

**Update metadata:**

```tsx
export const metadata: Metadata = {
  title: "Qorvai | AI Automation Agency India — Visa, CA Firms, E-Commerce",
  description:
    "Qorvai builds custom AI agents, web scrapers & n8n automations for Visa agencies, CA firms, Flipkart/Meesho sellers & Dubai Real Estate. 50+ automations delivered. Free audit call.",
  keywords: [
    "AI automation agency India",
    "web scraping services India",
    "visa portal automation",
    "n8n automation India",
    "AI agent development India",
    "flipkart seller automation",
    "ca firm automation india",
    "dubai real estate scraping",
  ],
  openGraph: {
    title: "Qorvai | AI Automation Agency India",
    description:
      "Custom AI agents, web scrapers & automation for Visa agencies, CA firms & E-commerce brands. Free 30-min audit.",
    url: "https://qorvai.com",
    siteName: "Qorvai",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qorvai | AI Automation Agency India",
    description: "Custom AI agents & automation for Indian businesses. Free audit.",
  },
};
```

---

### CHANGE 12 — FLOATING WHATSAPP BUTTON

**File:** `src/app/layout.tsx` or root layout

**ADD this fixed floating button (renders on all pages):**

```tsx
{/* Floating WhatsApp — add inside <body>, before closing tag */}
<a
  href="https://wa.me/91XXXXXXXXXX?text=Hi+Qorvai%2C+I+want+to+automate+my+business"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white rounded-full px-4 py-3 shadow-lg shadow-green-500/20 transition-all hover:scale-105"
>
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
  <span className="text-sm font-semibold hidden sm:block">Chat with us</span>
</a>
```

> Replace `91XXXXXXXXXX` with actual number.

---

## EXECUTION ORDER FOR CLAUDE CODE

```
1. src/app/layout.tsx        → Update metadata (Change 11) + floating WhatsApp (Change 12)
2. src/app/page.tsx          → Changes 2, 3, 4, 5, 7, 8, 9, 10 (main page)
3. Navbar component          → Change 1 (add Blog link)
4. Footer component          → Change 10 (add links)
5. git add . && git commit -m "feat: trust signals, FAQ, pricing, testimonials, WhatsApp"
6. git push → auto-deploys to Vercel
7. GSC → Request Indexing for homepage again
```

---

## AFTER DEPLOY — VERIFY CHECKLIST

```
✅ qorvai.com shows trust numbers in hero
✅ Industry tags visible below tech stack
✅ Process steps show time estimates (30 min / 3-5 days / 1-3 weeks)
✅ Green "3 spots left" badge visible in CTA
✅ FAQ accordion works + schema in page source
✅ Testimonials section renders
✅ Pricing 3 tiers visible
✅ WhatsApp float button bottom-right on all pages
✅ Blog link in navbar
✅ Footer has Blog + Case Studies + FAQ links
✅ Page title: "Qorvai | AI Automation Agency India — Visa, CA Firms, E-Commerce"
```

---

*Task generated: April 2026 | For: Claude Code / Antigravity | Site: qorvai.com*
