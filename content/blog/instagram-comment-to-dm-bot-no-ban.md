---
title: "How to Build an Instagram Comment-to-DM Bot (No Ban Risk)"
description: "Step-by-step guide to building an Instagram automation that turns post comments into qualified leads via DM — without getting your account banned. Uses official Meta APIs."
date: "2026-04-10"
readTime: "8 min read"
category: "Social Media Automation"
keywords: ["instagram dm automation bot", "instagram comment automation", "instagram lead generation automation", "meta api instagram"]
---

## Why Comment-to-DM Automation Works

When someone comments "interested" or "price?" on your Instagram post, that's a hot lead. But if you respond 4 hours later (or never), they've already moved on.

The fix: an automation that detects specific comments and instantly sends a personalized DM — while you're asleep, in a meeting, or just busy running your business.

Done right (using official Meta APIs), this does not get you banned. Done wrong (using third-party bots that simulate clicks), you risk a permanent ban.

Here's the right way.

---

## The Official Way: Meta Graph API

Instagram's Comment Reply and DM automation is available through the **Meta Graph API** for Instagram Business accounts. This is the only safe method.

What you need:
- Instagram Business account (not personal)
- Facebook Page linked to the Instagram account
- Meta Developer account + App
- Webhook configured on your server

---

## Step 1: Meta App Setup

1. Go to [developers.facebook.com](https://developers.facebook.com)
2. Create a new App → Choose "Business" type
3. Add **Instagram Graph API** product
4. Set up **Webhooks** for Instagram (subscribe to \`comments\` and \`messages\`)
5. Generate a **Page Access Token** (long-lived)

---

## Step 2: Webhook Server (Receives Comment Notifications)

\`\`\`python
from flask import Flask, request, jsonify
import requests
import json

app = Flask(__name__)

VERIFY_TOKEN = "your_webhook_verify_token"
PAGE_ACCESS_TOKEN = "your_long_lived_page_access_token"
INSTAGRAM_ACCOUNT_ID = "your_instagram_business_account_id"

@app.route("/webhook", methods=["GET"])
def verify_webhook():
    """Meta calls this to verify your webhook"""
    if request.args.get("hub.verify_token") == VERIFY_TOKEN:
        return request.args.get("hub.challenge")
    return "Forbidden", 403

@app.route("/webhook", methods=["POST"])
def handle_webhook():
    """Receives comment notifications"""
    data = request.json
    
    for entry in data.get("entry", []):
        for change in entry.get("changes", []):
            if change["field"] == "comments":
                comment = change["value"]
                comment_text = comment.get("text", "").lower()
                commenter_id = comment.get("from", {}).get("id")
                
                # Check for trigger keywords
                trigger_words = ["interested", "price", "cost", "how much", "details", "dm me", "dm"]
                
                if any(word in comment_text for word in trigger_words):
                    send_dm(commenter_id, comment_text)
    
    return jsonify({"status": "ok"})

def send_dm(user_id, original_comment):
    """Send personalized DM to commenter"""
    
    # Personalize message based on comment
    if "price" in original_comment or "cost" in original_comment or "how much" in original_comment:
        message = """Hi! Thanks for your interest 🙏

I've sent you our complete pricing details and service packages.

To get a custom quote for your specific needs, tap the link below to book a free 15-min call:
https://qorvai.com#cta

We typically respond within 2 hours. Looking forward to chatting!"""
    else:
        message = """Hi! Thanks for commenting 😊

I'd love to share more details with you. What specifically are you looking for help with?

Feel free to reply here or book a free call: https://qorvai.com#cta"""
    
    url = f"https://graph.facebook.com/v18.0/{INSTAGRAM_ACCOUNT_ID}/messages"
    
    payload = {
        "recipient": {"id": user_id},
        "message": {"text": message},
        "access_token": PAGE_ACCESS_TOKEN
    }
    
    response = requests.post(url, json=payload)
    print(f"DM sent to {user_id}: {response.status_code}")
    return response.json()

if __name__ == "__main__":
    app.run(port=5000)
\`\`\`

---

## Step 3: Also Reply to the Comment (Optional but Recommended)

\`\`\`python
def reply_to_comment(comment_id):
    """Public reply on the comment thread"""
    url = f"https://graph.facebook.com/v18.0/{comment_id}/replies"
    
    payload = {
        "message": "Thanks for your comment! Sent you a DM with details 📩",
        "access_token": PAGE_ACCESS_TOKEN
    }
    
    requests.post(url, json=payload)
\`\`\`

This shows other people watching the post that you respond quickly — social proof.

---

## Step 4: Deploy on a Server

\`\`\`bash
# Deploy on a cheap VPS (same one as n8n if you have it)
pip install flask requests gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 app:app

# Use nginx as reverse proxy + SSL (required by Meta)
# Meta only accepts HTTPS webhooks
\`\`\`

Or deploy on **Railway.app** or **Render.com** (free tier works) for instant HTTPS.

---

## The n8n Version (No-Code Alternative)

If you don't want to write code, n8n has an Instagram node:

1. **Trigger:** Instagram → "New Comment on Post"
2. **IF node:** Check if comment contains trigger words
3. **Action:** Instagram → "Send DM"
4. **Action:** Instagram → "Reply to Comment"

Five nodes. Done in 20 minutes.

---

## Anti-Ban Best Practices

1. **Use official Meta API only** — never third-party tools like ManyChat's unofficial features, or browser-extension bots
2. **Rate limit your DMs** — don't send more than 1 DM per unique user per 24 hours
3. **Personalize messages** — identical DMs to many people trigger spam detection
4. **Only DM people who engaged first** — responding to commenters is explicitly allowed by Meta's policies
5. **Don't buy followers or fake engagement** — this is a separate issue but can trigger account review

---

## Results: Restaurant Client in Bangalore

A restaurant client posting daily food content saw:
- Average 40-60 "price?" and "how much?" comments per post
- Previously responded to ~10% manually
- After automation: 100% responded within 90 seconds
- DM → booking conversion: 23%
- Monthly online reservations increased by 67%

---

## Want This Built for Your Brand?

Qorvai builds Instagram lead automation for restaurants, retail brands, coaching businesses, and agencies. [Book a free strategy call](https://qorvai.com#cta).
