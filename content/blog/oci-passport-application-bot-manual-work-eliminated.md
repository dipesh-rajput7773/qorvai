---
title: "OCI/Passport Application Bot: How We Eliminated 100% Manual Work"
description: "Case study: How Qorvai built an OCI application automation system that processes 500+ applications/month without any manual data entry for an immigration agency."
date: "2026-04-18"
readTime: "7 min read"
category: "Case Studies"
keywords: ["oci application automation", "passport automation india", "immigration agency automation", "visa bot india"]
---

## The Client: A Mumbai Immigration Agency

A mid-sized immigration consultancy in Mumbai came to us with a specific pain: their team of 4 agents was spending 80% of their time on pure data entry — logging into the OCI portal, copying applicant details from WhatsApp messages and email PDFs, filling forms, uploading documents.

The remaining 20% — the actual consulting work clients were paying for — was being squeezed into whatever time was left.

**The brief:** Automate everything that doesn't require human judgment.

---

## What We Audited First

Before writing a single line of code, we mapped the full workflow:

| Step | Time Taken | Automatable? |
|------|------------|--------------|
| Read client WhatsApp/email | 3 min | Partially |
| Log into OCI portal | 1 min | ✅ Yes |
| Fill 12 form fields | 8 min | ✅ Yes |
| Upload 3 documents | 4 min | ✅ Yes |
| Screenshot confirmation | 2 min | ✅ Yes |
| Send confirmation to client | 3 min | ✅ Yes |
| Handle errors/rejections | 15 min | ❌ No |

**Total per application: ~36 minutes → 15 steps automatable → target: under 3 minutes**

---

## The System We Built

### Component 1: Data Intake (WhatsApp → Structured Data)

Clients send documents via WhatsApp. We built an n8n workflow that:
1. Receives WhatsApp messages via WhatsApp Business API
2. Extracts attachments + text
3. Uses Claude API to parse unstructured text into structured fields (name, DOB, passport number, etc.)
4. Saves to Airtable with status "pending"

### Component 2: Document Processor

\`\`\`python
# Extract data from passport scan using Claude Vision
import anthropic
import base64

def extract_passport_data(image_path):
    client = anthropic.Anthropic()
    
    with open(image_path, "rb") as f:
        image_data = base64.b64encode(f.read()).decode()
    
    response = client.messages.create(
        model="claude-opus-4-6",
        max_tokens=500,
        messages=[{
            "role": "user",
            "content": [
                {
                    "type": "image",
                    "source": {"type": "base64", "media_type": "image/jpeg", "data": image_data}
                },
                {
                    "type": "text",
                    "text": "Extract: full_name, date_of_birth, passport_number, expiry_date, nationality. Return JSON only."
                }
            ]
        }]
    )
    
    import json
    return json.loads(response.content[0].text)
\`\`\`

### Component 3: Portal Bot (Playwright)

Full Playwright automation that handles the OCI portal end-to-end — login, form fill, document upload, confirmation capture.

### Component 4: Client Notification

n8n sends WhatsApp message back to client with confirmation number + screenshot PDF automatically.

---

## Timeline and Results

**Build time:** 11 days  
**Testing:** 3 days (50 test applications)  
**Go-live:** Day 14

**After 30 days live:**

- 487 applications processed
- 2 human interventions needed (both CAPTCHA failures, resolved in under 5 minutes)
- 0 data entry errors
- Agent team freed up to handle 60% more consulting calls
- Agency revenue increased by 35% in month 1 (more capacity = more clients)

---

## What the Agents Do Now

Instead of data entry, the 4 agents now:
- Handle complex cases requiring legal judgment
- Do sales calls with new clients
- Review the bot's daily summary report (5 minutes)
- Handle the rare error cases flagged by the system

**The bot runs 7 days a week. The agents work 5.**

---

## The Stack

- **Playwright** (portal automation)
- **n8n** (workflow orchestration)
- **Claude API** (document parsing)
- **WhatsApp Business API** (client communication)
- **Airtable** (data storage + tracking)
- **2captcha** (CAPTCHA solving)

---

## Want the Same System?

Qorvai builds end-to-end automation for immigration agencies, CA firms, and document-heavy businesses. [Book a free 30-minute audit](https://qorvai.com#cta) — we'll show you exactly what's automatable in your workflow.
