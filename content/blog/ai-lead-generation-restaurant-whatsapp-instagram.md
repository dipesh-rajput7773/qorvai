---
title: "AI Agents for Restaurant Lead Generation: WhatsApp + Instagram Automation"
description: "How restaurants and food brands in India can use AI-powered WhatsApp bots and Instagram automation to capture, qualify, and convert leads automatically — 24/7."
date: "2026-04-06"
readTime: "7 min read"
category: "AI Automation"
keywords: ["restaurant automation india", "whatsapp bot restaurant", "restaurant lead generation", "food brand instagram automation"]
---

## The Problem: 70% of Restaurant Leads Die in DMs

A food delivery brand or restaurant gets 50-100 DMs and comments daily: "what are your timings?", "do you deliver to Andheri?", "what's the bulk order price?". Most of these go unanswered for hours — or forever.

Each unanswered DM is a lost customer. And in the food business, a lost customer usually goes to the competitor two taps away.

Here's the full automation system we build for restaurant clients.

---

## The 3-Channel Lead System

### Channel 1: WhatsApp Business API Bot
### Channel 2: Instagram Comment-to-DM
### Channel 3: Google Maps Review + Q&A Auto-Response

All three feed into a single Airtable CRM and trigger the same qualification flow.

---

## Channel 1: WhatsApp AI Bot

\`\`\`python
import anthropic
from flask import Flask, request
import requests

app = Flask(__name__)
client = anthropic.Anthropic()

WHATSAPP_TOKEN = "your_whatsapp_token"
PHONE_NUMBER_ID = "your_phone_number_id"

RESTAURANT_CONTEXT = """
You are a friendly assistant for [Restaurant Name], a North Indian restaurant in Mumbai.

Key info:
- Timings: 11am to 11pm, all days
- Delivery: Yes, within 5km via Swiggy and Zomato. Direct delivery orders above ₹500.
- Bulk orders: Available with 6-hour advance notice. Min order ₹2000.
- Seating: 40 covers. Reservation recommended on weekends.
- Specialties: Dal Makhani, Butter Chicken, Tandoori items
- Contact for reservations: +91-XXXXXXXXXX

Respond in the same language the customer uses (Hindi or English).
Keep responses brief and warm. Always end with a clear next step.
"""

conversation_history = {}

def get_ai_response(user_id, message):
    if user_id not in conversation_history:
        conversation_history[user_id] = []
    
    conversation_history[user_id].append({"role": "user", "content": message})
    
    response = client.messages.create(
        model="claude-opus-4-6",
        max_tokens=300,
        system=RESTAURANT_CONTEXT,
        messages=conversation_history[user_id][-10:]  # Last 10 messages for context
    )
    
    reply = response.content[0].text
    conversation_history[user_id].append({"role": "assistant", "content": reply})
    return reply

@app.route("/whatsapp", methods=["POST"])
def whatsapp_webhook():
    data = request.json
    
    for entry in data.get("entry", []):
        for change in entry.get("changes", []):
            if change["field"] == "messages":
                message_data = change["value"].get("messages", [])
                for msg in message_data:
                    user_phone = msg["from"]
                    user_message = msg.get("text", {}).get("body", "")
                    
                    if user_message:
                        ai_reply = get_ai_response(user_phone, user_message)
                        send_whatsapp_message(user_phone, ai_reply)
                        
                        # Log to CRM
                        log_lead(user_phone, user_message, ai_reply)
    
    return "OK", 200

def send_whatsapp_message(to, message):
    url = f"https://graph.facebook.com/v18.0/{PHONE_NUMBER_ID}/messages"
    headers = {"Authorization": f"Bearer {WHATSAPP_TOKEN}", "Content-Type": "application/json"}
    payload = {
        "messaging_product": "whatsapp",
        "to": to,
        "type": "text",
        "text": {"body": message}
    }
    requests.post(url, headers=headers, json=payload)
\`\`\`

---

## Channel 2: Instagram Comment-to-DM

(See our full guide on [Instagram automation without ban risk](/blog/instagram-comment-to-dm-bot-no-ban))

For restaurants, the trigger keywords are:
- "timing", "timings", "open"
- "delivery", "deliver"
- "price", "menu", "cost"
- "order", "booking", "reserve"
- "address", "location", "where"

The DM sent is a **WhatsApp deep link** that opens a conversation with your WhatsApp Business account directly.

\`\`\`python
INSTAGRAM_DM_TEMPLATE = """Hi {name}! 👋

Thanks for your interest in [Restaurant Name].

For quick answers on timings, menu, delivery and reservations — chat with us directly on WhatsApp:
👉 https://wa.me/91XXXXXXXXXX?text=Hi%2C+I+saw+your+post

We reply instantly! 🙏"""
\`\`\`

---

## The Qualification Flow in Airtable

Every WhatsApp conversation is logged. n8n classifies each lead:

\`\`\`
Lead types:
- "inquiry" → simple question, answered by bot
- "bulk_order" → order > ₹2000, flag for human follow-up
- "reservation" → weekend reservation, send Google Calendar link
- "complaint" → negative sentiment, escalate immediately to owner
\`\`\`

n8n workflow:
1. New WhatsApp message → classify intent with Claude API
2. If bulk_order → notify owner on WhatsApp + create Airtable record
3. If reservation → check availability → confirm or suggest alternative
4. If complaint → immediate owner alert + auto-reply: "We're so sorry, our manager will call you in 10 minutes."

---

## Results: 3 Restaurant Clients

**Client 1 — Mumbai Cloud Kitchen:**
- DM response time: 4 hours → 45 seconds
- Bulk order conversions: +89%
- Monthly direct orders (non-aggregator): +₹85,000

**Client 2 — Bangalore Restaurant Chain (3 outlets):**
- Weekend reservation fill rate: 67% → 94%
- Staff time on phone/DM: 3 hours/day → 20 minutes/day

**Client 3 — Delhi Catering Business:**
- Bulk order lead qualification automated
- Human only handles orders above ₹10,000
- 40% more leads processed with same team size

---

## The Stack

- **Claude API** (AI conversation handling)
- **WhatsApp Business API** (messaging)
- **Instagram Graph API** (comment automation)
- **n8n** (workflow orchestration)
- **Airtable** (CRM + lead tracking)
- **Google Calendar API** (reservation management)

---

## Want This for Your Restaurant?

Qorvai builds end-to-end lead automation for restaurants, cloud kitchens, catering businesses, and food brands across India. [Book a free strategy call](https://qorvai.com#cta).
