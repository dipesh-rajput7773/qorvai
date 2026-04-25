export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  keywords: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "automate-visa-portal-data-entry-playwright",
    title: "How to Automate Visa Portal Data Entry with Playwright",
    description: "Step-by-step guide to building a Playwright bot that automates OCI, passport, and visa portal submissions — eliminating 100% of manual data entry for immigration agencies.",
    date: "2026-04-20",
    readTime: "9 min read",
    category: "Web Scraping",
    keywords: ["visa portal automation python", "playwright web scraping", "automate visa application", "oci portal automation"],
    content: `
## The Problem: 500 Applications, 0 Automation

A visa agency in Mumbai was processing 500+ OCI and passport applications every month. Each one required an agent to manually log in, fill 12 fields, upload 3 documents, and click submit. That's roughly 40 hours of repetitive work per week — work that a bot can do in minutes.

We built a Playwright-based automation that handles the entire flow. Here's exactly how.

---

## Why Playwright and Not Selenium?

Playwright is the modern standard for browser automation. Here's why we chose it:

- **Auto-wait built-in**: No more flaky \`time.sleep()\` hacks. Playwright waits for elements intelligently.
- **Handles dynamic SPAs**: Government portals often use heavy JavaScript rendering. Playwright handles it natively.
- **Stealth-friendly**: With minor configuration, Playwright avoids most bot detection mechanisms.
- **Multi-browser**: Chromium, Firefox, WebKit — all from one API.

---

## Architecture Overview

\`\`\`
CSV/Excel Input (applicant data)
        ↓
Python script reads row by row
        ↓
Playwright launches headless Chrome
        ↓
Logs into portal → fills form → uploads docs → submits
        ↓
Screenshot + confirmation number saved
        ↓
Status written back to spreadsheet
\`\`\`

---

## Step 1: Install Playwright

\`\`\`bash
pip install playwright pandas openpyxl
playwright install chromium
\`\`\`

---

## Step 2: Read Applicant Data from Excel

\`\`\`python
import pandas as pd

df = pd.read_excel("applicants.xlsx")

for index, row in df.iterrows():
    name = row["Full Name"]
    dob = row["Date of Birth"]
    passport_num = row["Passport Number"]
    doc_path = row["Document Path"]
    # pass to automation function
    process_application(name, dob, passport_num, doc_path)
\`\`\`

---

## Step 3: Playwright Core — Login + Form Fill

\`\`\`python
from playwright.sync_api import sync_playwright
import time

def process_application(name, dob, passport_num, doc_path):
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Go to portal
        page.goto("https://portal.example.gov.in/login")

        # Login
        page.fill("#username", "YOUR_AGENCY_LOGIN")
        page.fill("#password", "YOUR_PASSWORD")
        page.click("#login-btn")
        page.wait_for_url("**/dashboard")

        # Navigate to new application
        page.click("text=New Application")
        page.wait_for_selector("#applicant-form")

        # Fill applicant details
        page.fill("#full-name", name)
        page.fill("#dob", dob)
        page.fill("#passport-number", passport_num)

        # Upload document
        page.set_input_files("#doc-upload", doc_path)

        # Submit
        page.click("#submit-btn")
        page.wait_for_selector(".confirmation-number")

        # Save confirmation
        conf_number = page.inner_text(".confirmation-number")
        print(f"Submitted: {name} — Confirmation: {conf_number}")

        # Screenshot for records
        page.screenshot(path=f"screenshots/{passport_num}.png")
        browser.close()
        return conf_number
\`\`\`

---

## Step 4: Handle CAPTCHAs

Most government portals have CAPTCHAs. Two options:

**Option A — 2captcha API (paid, ~$1 per 1000 CAPTCHAs):**
\`\`\`python
import requests

def solve_captcha(site_key, page_url):
    response = requests.post("https://2captcha.com/in.php", data={
        "key": "YOUR_2CAPTCHA_KEY",
        "method": "userrecaptcha",
        "googlekey": site_key,
        "pageurl": page_url
    })
    captcha_id = response.text.split("|")[1]
    time.sleep(20)  # wait for solve
    result = requests.get(f"https://2captcha.com/res.php?key=YOUR_KEY&action=get&id={captcha_id}")
    return result.text.split("|")[1]
\`\`\`

**Option B — Manual intervention mode:**  
Set \`headless=False\`, pause script, human solves CAPTCHA, script resumes.

---

## Step 5: Error Handling + Retry Logic

\`\`\`python
import time

def process_with_retry(name, dob, passport_num, doc_path, max_retries=3):
    for attempt in range(max_retries):
        try:
            result = process_application(name, dob, passport_num, doc_path)
            return result
        except Exception as e:
            print(f"Attempt {attempt+1} failed for {name}: {e}")
            time.sleep(5)
    print(f"FAILED after {max_retries} attempts: {name}")
    return None
\`\`\`

---

## Results: What This Achieved

For our visa agency client:

- **40 hours/week → 2 hours/week** (human just monitors)
- **Zero data entry errors** (manual typos eliminated)
- **500+ applications/month** processed autonomously
- **Confirmation screenshots** auto-saved per applicant
- **Payback period**: 3 weeks

---

## What This Doesn't Do (Intentionally)

This bot automates **form submission of legitimate applications** — it does not fake documents, bypass identity checks, or circumvent government security. All applicant data used is real and legally submitted.

---

## Want This Built for Your Agency?

Qorvai builds custom portal automation bots for visa agencies, immigration consultants, and CA firms across India and Dubai. [Book a free strategy call](https://qorvai.com#cta) to see how much time you can reclaim.
    `
  },
  {
    slug: "oci-passport-application-bot-manual-work-eliminated",
    title: "OCI/Passport Application Bot: How We Eliminated 100% Manual Work",
    description: "Case study: How Qorvai built an OCI application automation system that processes 500+ applications/month without any manual data entry for an immigration agency.",
    date: "2026-04-18",
    readTime: "7 min read",
    category: "Case Studies",
    keywords: ["oci application automation", "passport automation india", "immigration agency automation", "visa bot india"],
    content: `
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
    `
  },
  {
    slug: "ai-document-extraction-ca-firms-gst-invoice-automation",
    title: "AI Document Extraction for CA Firms: GST + Invoice Automation",
    description: "How Indian CA firms can use AI-powered RAG pipelines to extract data from GST invoices, TDS certificates, and financial PDFs — and pipe it directly into Tally or their CRM.",
    date: "2026-04-16",
    readTime: "8 min read",
    category: "AI Automation",
    keywords: ["ai invoice extraction india", "gst automation ca firm", "rag pipeline documents", "tally automation india"],
    content: `
## The CA Firm's Monthly Nightmare

Every month, a typical CA firm in India receives hundreds — sometimes thousands — of PDFs from clients: GST invoices, purchase bills, TDS certificates, bank statements, salary slips. Someone has to open each one, read the numbers, and type them into Tally or an Excel sheet.

This is not accounting work. This is data entry. And AI can do it better, faster, and without errors.

Here's how to build an AI document extraction pipeline for your CA firm.

---

## What Is RAG and Why Does It Matter Here?

RAG (Retrieval-Augmented Generation) is typically used for chatbots, but the same architecture — extracting structured information from unstructured documents — is exactly what we need here.

The core idea:
1. **Parse** the PDF (extract text/images)
2. **Send to AI** with a structured extraction prompt
3. **Get back JSON** with the fields you need
4. **Write to Tally/Excel/CRM** automatically

---

## Step 1: PDF Text Extraction

\`\`\`python
import pdfplumber
import json

def extract_text_from_pdf(pdf_path):
    with pdfplumber.open(pdf_path) as pdf:
        full_text = ""
        for page in pdf.pages:
            full_text += page.extract_text() + "\\n"
    return full_text

# For scanned PDFs (image-based), use OCR:
import pytesseract
from pdf2image import convert_from_path

def extract_text_scanned_pdf(pdf_path):
    images = convert_from_path(pdf_path)
    text = ""
    for image in images:
        text += pytesseract.image_to_string(image)
    return text
\`\`\`

---

## Step 2: AI Extraction with Claude API

\`\`\`python
import anthropic

client = anthropic.Anthropic()

def extract_invoice_data(pdf_text):
    response = client.messages.create(
        model="claude-opus-4-6",
        max_tokens=1000,
        messages=[{
            "role": "user",
            "content": f"""Extract the following fields from this GST invoice and return ONLY valid JSON:
            
Fields needed:
- invoice_number
- invoice_date  
- seller_name
- seller_gstin
- buyer_name
- buyer_gstin
- taxable_amount
- cgst_amount
- sgst_amount
- igst_amount
- total_amount
- hsn_codes (array)

Invoice text:
{pdf_text}

Return only JSON, no explanation."""
        }]
    )
    
    return json.loads(response.content[0].text)
\`\`\`

---

## Step 3: Batch Process a Folder of PDFs

\`\`\`python
import os
import pandas as pd
from pathlib import Path

def process_invoice_folder(folder_path):
    results = []
    
    for pdf_file in Path(folder_path).glob("*.pdf"):
        try:
            # Extract text
            text = extract_text_from_pdf(str(pdf_file))
            
            # AI extraction
            data = extract_invoice_data(text)
            data["source_file"] = pdf_file.name
            data["status"] = "success"
            
        except Exception as e:
            data = {"source_file": pdf_file.name, "status": "error", "error": str(e)}
        
        results.append(data)
        print(f"Processed: {pdf_file.name}")
    
    # Export to Excel for Tally import
    df = pd.DataFrame(results)
    df.to_excel("extracted_invoices.xlsx", index=False)
    print(f"Done. {len(results)} invoices processed.")
    return df
\`\`\`

---

## Step 4: Auto-Push to Tally via TallyPrime API

TallyPrime supports XML-based data import. Here's how to auto-create voucher entries:

\`\`\`python
import requests

def push_to_tally(invoice_data):
    xml_payload = f"""
<ENVELOPE>
  <HEADER>
    <TALLYREQUEST>Import Data</TALLYREQUEST>
  </HEADER>
  <BODY>
    <IMPORTDATA>
      <REQUESTDESC>
        <REPORTNAME>Vouchers</REPORTNAME>
      </REQUESTDESC>
      <REQUESTDATA>
        <TALLYMESSAGE xmlns:UDF="TallyUDF">
          <VOUCHER VCHTYPE="Purchase" ACTION="Create">
            <DATE>{invoice_data['invoice_date']}</DATE>
            <VOUCHERNUMBER>{invoice_data['invoice_number']}</VOUCHERNUMBER>
            <PARTYLEDGERNAME>{invoice_data['seller_name']}</PARTYLEDGERNAME>
            <AMOUNT>{invoice_data['total_amount']}</AMOUNT>
          </VOUCHER>
        </TALLYMESSAGE>
      </REQUESTDATA>
    </IMPORTDATA>
  </BODY>
</ENVELOPE>"""
    
    response = requests.post(
        "http://localhost:9000",  # TallyPrime local server
        data=xml_payload,
        headers={"Content-Type": "text/xml"}
    )
    return response.text
\`\`\`

---

## Real Results from a CA Firm in Pune

- **Before:** 3 staff, 8 hours/day, processing ~200 invoices/day
- **After:** Same staff, 1 hour/day monitoring, processing **800+ invoices/day**
- **Accuracy:** 98.7% (vs 94% manual — humans make typos)
- **Monthly cost saved:** ₹1.2 lakh in staff time

---

## What Else Can Be Automated

The same pipeline works for:
- **TDS certificates** → extract deductor name, PAN, amount, quarter
- **Bank statements** → categorize transactions automatically
- **Salary slips** → extract gross, deductions, net pay per employee
- **Purchase orders** → match against invoices for reconciliation

---

## The Full Stack

- **pdfplumber** + **pytesseract** (PDF parsing)
- **Claude API** (AI extraction)
- **n8n** (workflow trigger when new PDF arrives in folder/email)
- **TallyPrime XML API** (Tally integration)
- **Google Drive** (document storage + trigger)

---

## Want This for Your CA Firm?

Qorvai builds custom AI document extraction pipelines for CA firms, law firms, and finance teams across India. [Book a free audit](https://qorvai.com#cta) — we'll map exactly which documents in your workflow can be automated.
    `
  },
  {
    slug: "flipkart-meesho-seller-automation-sync-orders",
    title: "Flipkart & Meesho Seller Automation: Sync Orders Without Clicking",
    description: "How Indian e-commerce sellers on Flipkart and Meesho can automate order syncing, inventory updates, and shipment tracking using Python and n8n — zero manual work.",
    date: "2026-04-14",
    readTime: "8 min read",
    category: "E-Commerce",
    keywords: ["flipkart seller automation", "meesho automation tool", "ecommerce automation india", "flipkart api integration"],
    content: `
## Selling on 3 Platforms, Losing Your Mind?

Most Indian e-commerce sellers are managing Flipkart, Meesho, and Amazon simultaneously — and doing it through three separate seller panels, three separate Excel sheets, and three separate brains.

New order on Flipkart → manually update inventory on Meesho → manually mark shipped → manually update tracker → repeat 200 times a day.

This is the problem. Here's the system that solves it.

---

## What We're Automating

1. **Order sync**: New orders from all platforms → single dashboard
2. **Inventory sync**: When stock decreases on one platform → auto-update others
3. **Shipment updates**: AWB generated → auto-update all platforms
4. **Return processing**: Return request received → auto-acknowledge + initiate pickup
5. **Low stock alerts**: Stock < threshold → WhatsApp alert + auto-pause listing

---

## Platform APIs You Need

### Flipkart Seller API
\`\`\`python
# Flipkart uses OAuth2
import requests

FLIPKART_APP_ID = "your_app_id"
FLIPKART_APP_SECRET = "your_app_secret"

def get_flipkart_token():
    response = requests.post(
        "https://api.flipkart.net/oauth-service/oauth/token",
        params={
            "grant_type": "client_credentials",
            "scope": "Seller_Api"
        },
        auth=(FLIPKART_APP_ID, FLIPKART_APP_SECRET)
    )
    return response.json()["access_token"]

def get_flipkart_orders(token, status="APPROVED"):
    headers = {"Authorization": f"Bearer {token}"}
    response = requests.get(
        "https://api.flipkart.net/sellers/orders/search",
        headers=headers,
        params={"filter": {"states": [status]}, "pagination": {"pageSize": 20}}
    )
    return response.json()
\`\`\`

### Meesho API
\`\`\`python
# Meesho Supplier API
MEESHO_API_KEY = "your_meesho_api_key"

def get_meesho_orders():
    headers = {"api-key": MEESHO_API_KEY, "Content-Type": "application/json"}
    response = requests.post(
        "https://developer.meesho.com/api/v1/orders",
        headers=headers,
        json={"page": 0, "page_size": 25, "status": "NEW"}
    )
    return response.json()

def update_meesho_shipment(order_id, awb, courier):
    headers = {"api-key": MEESHO_API_KEY, "Content-Type": "application/json"}
    requests.post(
        "https://developer.meesho.com/api/v1/orders/update-shipment-details",
        headers=headers,
        json={
            "order_id": order_id,
            "awb_number": awb,
            "courier_name": courier
        }
    )
\`\`\`

---

## The n8n Workflow (No-Code Orchestration)

Instead of running scripts manually, wire everything in n8n:

\`\`\`
Schedule Trigger (every 15 min)
    ↓
[Parallel] Fetch Flipkart orders + Fetch Meesho orders
    ↓
Merge + deduplicate
    ↓
Save new orders to Airtable/Google Sheets
    ↓
IF new order → Send WhatsApp notification to warehouse
    ↓
IF low stock → Update listing status to "inactive" on both platforms
    ↓
IF return request → Auto-acknowledge + trigger pickup
\`\`\`

---

## Inventory Sync Logic

\`\`\`python
def sync_inventory_across_platforms(sku, new_quantity):
    """
    When inventory changes on any platform, sync to all others
    """
    # Update Flipkart
    flipkart_token = get_flipkart_token()
    requests.post(
        "https://api.flipkart.net/sellers/skus/listings/update",
        headers={"Authorization": f"Bearer {flipkart_token}"},
        json={"skuId": sku, "available": new_quantity > 0, "quantity": new_quantity}
    )
    
    # Update Meesho
    requests.post(
        "https://developer.meesho.com/api/v1/inventory",
        headers={"api-key": MEESHO_API_KEY},
        json={"sku_id": sku, "inventory": new_quantity}
    )
    
    print(f"Synced {sku}: quantity = {new_quantity}")
\`\`\`

---

## The Dashboard We Built

For our e-commerce client, we built a single Next.js dashboard showing:

- All orders from all platforms in one view
- Real-time inventory across platforms
- Daily revenue by platform
- Return rate by SKU
- Low stock alerts

**Everything auto-updates every 15 minutes. No manual refresh.**

---

## Results: Flipkart + Meesho Seller, Delhi

**Before automation:**
- 2 staff, 6 hours/day on order management
- Frequent overselling (stock mismatch between platforms)
- 15% order cancellation rate due to late processing

**After automation:**
- Same 2 staff, 45 minutes/day monitoring
- Zero overselling incidents in 60 days
- Order cancellation rate: 2.3%
- Capacity to onboard 2 more platforms (Amazon + Myntra)

---

## The Stack

- **Flipkart Seller API** + **Meesho Supplier API**
- **n8n** (workflow automation)
- **Python** (custom scripts for complex logic)
- **Airtable** (order database)
- **Next.js** (dashboard)
- **WhatsApp Business API** (alerts)

---

## Ready to Automate Your Seller Operations?

Qorvai builds custom e-commerce automation for sellers on Flipkart, Meesho, Amazon, and Myntra. [Book a free strategy call](https://qorvai.com#cta) and we'll audit your current workflow.
    `
  },
  {
    slug: "n8n-vs-zapier-indian-startups-cost-comparison-2026",
    title: "n8n vs Zapier for Indian Startups: Real Cost Comparison 2026",
    description: "Honest breakdown of n8n vs Zapier vs Make for Indian businesses — pricing in INR, use cases, limitations, and which one to choose based on your workflow complexity.",
    date: "2026-04-12",
    readTime: "7 min read",
    category: "Automation",
    keywords: ["n8n vs zapier india", "zapier alternative india", "automation tools comparison 2026", "n8n self hosted"],
    content: `
## The Real Question: Which Tool Won't Drain Your Budget?

For Indian startups, the cost of automation tools matters differently than it does for US companies. $49/month sounds reasonable until you convert it: ₹4,100/month for a startup running on runway.

Here's the honest comparison of n8n, Zapier, and Make — including actual INR costs, hidden limitations, and which one to use for different scenarios.

---

## The Three Contenders

### Zapier
The original no-code automation platform. Largest app library (6,000+ integrations), easiest to use, most expensive at scale.

### Make (formerly Integromat)  
More powerful than Zapier, visual flow builder, better for complex multi-step workflows. Mid-tier pricing.

### n8n
Open-source, self-hostable, dramatically cheaper at scale. Steeper learning curve but far more powerful for developers.

---

## Pricing in INR (2026)

### Zapier
| Plan | USD/mo | INR/mo | Tasks/mo |
|------|--------|--------|----------|
| Free | $0 | ₹0 | 100 |
| Starter | $29.99 | ₹2,500 | 750 |
| Professional | $73.50 | ₹6,100 | 2,000 |
| Team | $103.50 | ₹8,600 | 50,000 |

**Reality check:** 2,000 tasks/month sounds like a lot until you realize one Zap with 3 steps = 3 tasks. A modest CRM automation can eat through this in a week.

### Make
| Plan | USD/mo | INR/mo | Operations/mo |
|------|--------|--------|---------------|
| Free | $0 | ₹0 | 1,000 |
| Core | $10.59 | ₹880 | 10,000 |
| Pro | $18.82 | ₹1,565 | 10,000 + advanced features |
| Teams | $34.12 | ₹2,840 | 10,000 per user |

**Better value than Zapier.** Make's "operations" count differently — one scenario run = operations equal to the number of modules.

### n8n
| Option | Cost/mo | Executions |
|--------|---------|------------|
| n8n Cloud Starter | $24 | 2,500 |
| n8n Cloud Pro | $60 | 10,000 |
| **Self-hosted (VPS)** | **~₹600-1,500** | **Unlimited** |

**The n8n self-hosting advantage:** Rent a DigitalOcean/Hetzner VPS for $5-10/month (₹420-840), install n8n, and run unlimited workflows forever. This is the setup we recommend for Indian startups doing serious volume.

---

## Self-Hosting n8n: 15-Minute Setup

\`\`\`bash
# On a Ubuntu VPS (minimum 1GB RAM)

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Run n8n
docker run -d \\
  --name n8n \\
  -p 5678:5678 \\
  -v ~/.n8n:/home/node/.n8n \\
  -e N8N_BASIC_AUTH_ACTIVE=true \\
  -e N8N_BASIC_AUTH_USER=admin \\
  -e N8N_BASIC_AUTH_PASSWORD=yourpassword \\
  n8nio/n8n

# Access at http://your-vps-ip:5678
\`\`\`

Total monthly cost: ₹840 (Hetzner CX11 VPS). Unlimited workflows.

---

## Feature Comparison

| Feature | Zapier | Make | n8n |
|---------|--------|------|-----|
| No-code UI | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| App integrations | 6,000+ | 1,000+ | 400+ (+ custom HTTP) |
| Custom code | ❌ (paid add-on) | ✅ | ✅ |
| Self-hostable | ❌ | ❌ | ✅ |
| Webhook support | ✅ | ✅ | ✅ |
| Error handling | Basic | Good | Excellent |
| Indian app support | Partial | Partial | Via HTTP API |
| WhatsApp integration | ❌ native | ❌ native | ✅ via API |

---

## Which One for Your Use Case?

**Use Zapier if:**
- You're non-technical and need it working in 30 minutes
- You need a specific pre-built integration (Salesforce, HubSpot, etc.)
- Volume is low (under 1,000 tasks/month)

**Use Make if:**
- You want more power than Zapier at lower cost
- You're comfortable with visual workflow builders
- You need complex conditional logic

**Use n8n (self-hosted) if:**
- You're a developer or have one on your team
- Volume is high (1,000+ executions/month)
- You need custom code nodes
- You want to keep data on your own infrastructure
- You're building automation for clients (white-label possible)

---

## For Indian Use Cases Specifically

n8n wins for Indian startups because:

1. **Razorpay webhook support** — trigger workflows on payment events
2. **WhatsApp Business API** — native HTTP node handles it perfectly
3. **Indiamart/JustDial lead capture** — custom webhook receivers
4. **Tally integration** — custom HTTP calls to TallyPrime
5. **Cost** — ₹840/month vs ₹6,100+ for equivalent Zapier

---

## The Verdict

For serious Indian startups doing 5,000+ automation runs per month: **n8n self-hosted wins every time**.

For small businesses that need something working today with zero setup: **Make at ₹880/month** is the sweet spot.

Zapier is for enterprises with US-dollar budgets.

---

## Need Help Setting Up Your Automation Stack?

Qorvai builds and manages n8n automation infrastructure for Indian startups and agencies. [Book a free 30-minute call](https://qorvai.com#cta) — we'll design your automation architecture and get it running in under 2 weeks.
    `
  },
  {
    slug: "instagram-comment-to-dm-bot-no-ban",
    title: "How to Build an Instagram Comment-to-DM Bot (No Ban Risk)",
    description: "Step-by-step guide to building an Instagram automation that turns post comments into qualified leads via DM — without getting your account banned. Uses official Meta APIs.",
    date: "2026-04-10",
    readTime: "8 min read",
    category: "Social Media Automation",
    keywords: ["instagram dm automation bot", "instagram comment automation", "instagram lead generation automation", "meta api instagram"],
    content: `
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
    `
  },
  {
    slug: "web-scraping-dubai-real-estate-property-data-pipeline",
    title: "Web Scraping for Dubai Real Estate: Building a Property Data Pipeline",
    description: "How Dubai real estate agencies can scrape Bayut, Property Finder, and Dubizzle to build a live property database — automating competitive intelligence and lead tracking.",
    date: "2026-04-08",
    readTime: "7 min read",
    category: "Web Scraping",
    keywords: ["real estate web scraping", "dubai property data scraping", "bayut scraper", "property finder api alternative"],
    content: `
## The Dubai Real Estate Data Problem

Dubai's property market moves fast. A 2BR in Dubai Marina listed today at AED 180k/year might be gone by tomorrow — or repriced three times in a week. Agents who track this manually are always a step behind.

The solution: a live property data pipeline that scrapes Bayut, Property Finder, and Dubizzle every few hours and pipes the data into your CRM or dashboard.

Here's how to build it.

---

## What We're Scraping

- **Bayut.com** — largest UAE property portal
- **Propertyfinder.ae** — premium listings, developer inventory
- **Dubizzle.com** — secondary market, budget properties

Data we extract per listing:
- Property title, type, location
- Price (AED/year for rent, AED for sale)
- Beds, baths, area (sqft)
- Agent/agency name
- Listing date
- Property images (for automated newsletters)
- Direct URL

---

## Tool Choice: Playwright for Dynamic Sites

All three portals are JavaScript-rendered (React/Next.js). Requests + BeautifulSoup won't work. We use Playwright.

\`\`\`bash
pip install playwright pandas asyncio
playwright install chromium
\`\`\`

---

## Bayut Scraper

\`\`\`python
from playwright.sync_api import sync_playwright
import json
import time

def scrape_bayut(location="dubai-marina", property_type="apartments", purpose="for-rent"):
    
    url = f"https://www.bayut.com/{purpose}/{property_type}/{location}/"
    listings = []
    
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        )
        page = context.new_page()
        page.goto(url, wait_until="networkidle")
        
        # Scroll to load all listings
        for _ in range(5):
            page.keyboard.press("End")
            time.sleep(2)
        
        # Extract listing cards
        cards = page.query_selector_all("[class*='property-card']")
        
        for card in cards:
            try:
                listing = {
                    "title": card.query_selector("h2")?.inner_text(),
                    "price": card.query_selector("[class*='price']")?.inner_text(),
                    "location": card.query_selector("[class*='location']")?.inner_text(),
                    "beds": card.query_selector("[aria-label*='bed']")?.inner_text(),
                    "baths": card.query_selector("[aria-label*='bath']")?.inner_text(),
                    "area": card.query_selector("[aria-label*='area']")?.inner_text(),
                    "url": card.query_selector("a")?.get_attribute("href"),
                    "scraped_at": time.strftime("%Y-%m-%d %H:%M")
                }
                if listing["title"]:
                    listings.append(listing)
            except:
                continue
        
        browser.close()
    
    return listings
\`\`\`

---

## Property Finder Scraper

\`\`\`python
def scrape_propertyfinder(area="dubai-marina", beds=2):
    url = f"https://www.propertyfinder.ae/en/rent/apartments-for-rent-in-{area}.html?beds={beds}"
    listings = []
    
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto(url)
        page.wait_for_selector("[data-testid='property-card']", timeout=10000)
        
        cards = page.query_selector_all("[data-testid='property-card']")
        
        for card in cards:
            try:
                listing = {
                    "price": card.query_selector("[data-testid='price']")?.inner_text(),
                    "title": card.query_selector("[data-testid='property-title']")?.inner_text(),
                    "location": card.query_selector("[data-testid='location']")?.inner_text(),
                    "agent": card.query_selector("[data-testid='agent-name']")?.inner_text(),
                    "url": "https://www.propertyfinder.ae" + card.query_selector("a")?.get_attribute("href"),
                    "portal": "propertyfinder",
                    "scraped_at": time.strftime("%Y-%m-%d %H:%M")
                }
                listings.append(listing)
            except:
                continue
        
        browser.close()
    
    return listings
\`\`\`

---

## The n8n Orchestration Workflow

\`\`\`
Schedule Trigger (every 4 hours)
        ↓
HTTP Request → Run scraper via API
        ↓
Compare with existing database
        ↓
New listing found? → 
    ├── Add to Airtable/Google Sheets
    ├── Send WhatsApp alert to agent
    └── Add to email newsletter queue

Price changed? → 
    ├── Update database
    └── Alert if price dropped > 5%
        
Listing removed? → Mark as inactive
\`\`\`

---

## The Dashboard Output

We built a Next.js dashboard for our Dubai client showing:
- Live listings by area, type, price range
- Price trend charts per location (30-day)
- New listings in last 24 hours (highlighted)
- Price drop alerts
- Competitor agency activity

---

## Use Cases for Dubai RE Agencies

1. **Competitive pricing** — see what competitors list similar units for
2. **Inventory monitoring** — track when new stock hits from specific developers
3. **Lead qualification** — client wants 2BR in JVC under AED 80k? Auto-alert when one appears
4. **Market reports** — generate weekly PDF reports automatically from the data
5. **Off-plan tracking** — monitor developer portals for new project launches

---

## Legal Note

Web scraping publicly available listing data for internal business intelligence is standard practice in the real estate industry globally. We do not scrape personal contact details, bypass authentication, or use data for spam. Always review a site's Terms of Service before scraping.

---

## Want This Pipeline Built?

Qorvai builds real estate data pipelines for agencies in Dubai, India, and internationally. [Book a free strategy call](https://qorvai.com#cta).
    `
  },
  {
    slug: "ai-lead-generation-restaurant-whatsapp-instagram",
    title: "AI Agents for Restaurant Lead Generation: WhatsApp + Instagram Automation",
    description: "How restaurants and food brands in India can use AI-powered WhatsApp bots and Instagram automation to capture, qualify, and convert leads automatically — 24/7.",
    date: "2026-04-06",
    readTime: "7 min read",
    category: "AI Automation",
    keywords: ["restaurant automation india", "whatsapp bot restaurant", "restaurant lead generation", "food brand instagram automation"],
    content: `
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
    `
  },
  {
    slug: "rag-pipeline-legal-documents-ca-firms-save-time",
    title: "RAG Pipeline for Legal Documents: How CA Firms Save 20hrs/Week",
    description: "How to build a Retrieval-Augmented Generation (RAG) pipeline that lets CA firms and law offices instantly search, extract, and analyze hundreds of PDF contracts and legal documents.",
    date: "2026-04-04",
    readTime: "8 min read",
    category: "AI Automation",
    keywords: ["rag pipeline for documents", "legal document ai india", "document search ai ca firm", "pdf rag pipeline python"],
    content: `
## The Document Search Problem in CA and Law Firms

A CA firm with 200 active clients has thousands of documents: contracts, agreements, GST filings, audit reports, certificates. When a client calls asking "what was the depreciation rate we used in last year's audit?", someone has to dig through folders for 20 minutes.

RAG (Retrieval-Augmented Generation) solves this. Build it once, and you can ask plain-English questions about any document in your database and get an instant, accurate answer.

---

## What Is RAG, Actually?

RAG is a two-part system:
1. **Retrieval**: Find the most relevant document chunks for a given query
2. **Generation**: Use an AI (Claude/GPT) to synthesize an answer from those chunks

The key difference from regular AI: RAG only answers from **your actual documents**, not from general training data. That means no hallucinations about your specific client contracts.

---

## Architecture

\`\`\`
PDF Documents (contracts, audit reports, filings)
        ↓
Text Extraction (pdfplumber / pytesseract for scanned)
        ↓
Chunking (split into 500-token overlapping segments)
        ↓
Embedding (convert text chunks to vectors)
        ↓
Vector Database (ChromaDB / Pinecone)
        ↓
User asks question
        ↓
Question embedded → search vector DB → retrieve top 5 chunks
        ↓
Claude API: "Answer this question using only these document excerpts: ..."
        ↓
Answer with source document citations
\`\`\`

---

## Step 1: Install Dependencies

\`\`\`bash
pip install chromadb sentence-transformers pdfplumber anthropic langchain
\`\`\`

---

## Step 2: Extract and Chunk Documents

\`\`\`python
import pdfplumber
from pathlib import Path

def extract_text(pdf_path):
    with pdfplumber.open(pdf_path) as pdf:
        return " ".join(page.extract_text() or "" for page in pdf.pages)

def chunk_text(text, chunk_size=500, overlap=50):
    """Split text into overlapping chunks"""
    words = text.split()
    chunks = []
    for i in range(0, len(words), chunk_size - overlap):
        chunk = " ".join(words[i:i + chunk_size])
        if len(chunk.strip()) > 50:  # Skip tiny chunks
            chunks.append(chunk)
    return chunks

def process_document_folder(folder_path):
    all_chunks = []
    for pdf_file in Path(folder_path).glob("**/*.pdf"):
        text = extract_text(str(pdf_file))
        chunks = chunk_text(text)
        for i, chunk in enumerate(chunks):
            all_chunks.append({
                "text": chunk,
                "source": pdf_file.name,
                "chunk_id": f"{pdf_file.stem}_{i}"
            })
    return all_chunks
\`\`\`

---

## Step 3: Build the Vector Database

\`\`\`python
import chromadb
from sentence_transformers import SentenceTransformer

# Initialize
chroma_client = chromadb.PersistentClient(path="./legal_docs_db")
collection = chroma_client.get_or_create_collection("legal_documents")
model = SentenceTransformer("all-MiniLM-L6-v2")  # Fast, good quality

def index_documents(chunks):
    texts = [c["text"] for c in chunks]
    ids = [c["chunk_id"] for c in chunks]
    sources = [c["source"] for c in chunks]
    
    # Generate embeddings
    embeddings = model.encode(texts).tolist()
    
    # Store in ChromaDB
    collection.add(
        documents=texts,
        embeddings=embeddings,
        ids=ids,
        metadatas=[{"source": s} for s in sources]
    )
    print(f"Indexed {len(chunks)} chunks")

# Run once to build the database
chunks = process_document_folder("./client_documents")
index_documents(chunks)
\`\`\`

---

## Step 4: Query the System

\`\`\`python
import anthropic

claude_client = anthropic.Anthropic()

def ask_documents(question, top_k=5):
    # Embed the question
    question_embedding = model.encode([question]).tolist()[0]
    
    # Retrieve relevant chunks
    results = collection.query(
        query_embeddings=[question_embedding],
        n_results=top_k
    )
    
    relevant_chunks = results["documents"][0]
    sources = [m["source"] for m in results["metadatas"][0]]
    
    # Build context
    context = "\\n\\n---\\n\\n".join(
        f"[Source: {src}]\\n{chunk}" 
        for src, chunk in zip(sources, relevant_chunks)
    )
    
    # Ask Claude
    response = claude_client.messages.create(
        model="claude-opus-4-6",
        max_tokens=800,
        messages=[{
            "role": "user",
            "content": f"""Answer this question using ONLY the document excerpts provided below.
If the answer is not in the documents, say "I couldn't find this in the available documents."

Question: {question}

Document excerpts:
{context}

Answer with the source document name in brackets after each fact."""
        }]
    )
    
    return {
        "answer": response.content[0].text,
        "sources": list(set(sources))
    }

# Example usage
result = ask_documents("What depreciation rate was used for Plant & Machinery in the FY2024 audit for ABC Ltd?")
print(result["answer"])
print("Sources:", result["sources"])
\`\`\`

---

## Step 5: Simple Web UI (Streamlit)

\`\`\`python
import streamlit as st

st.title("📄 Legal Document Assistant")
st.caption("Ask questions about any document in your database")

question = st.text_input("Your question:")

if st.button("Search") and question:
    with st.spinner("Searching documents..."):
        result = ask_documents(question)
    
    st.markdown("### Answer")
    st.write(result["answer"])
    
    st.markdown("### Source Documents")
    for source in result["sources"]:
        st.code(source)
\`\`\`

Run with: \`streamlit run app.py\`

---

## Real-World Performance at a Pune CA Firm

**Documents indexed:** 4,200 PDFs (3 years of client files)  
**Index build time:** 2.5 hours (one-time)  
**Query response time:** 3-8 seconds  
**Accuracy on test queries:** 94%  

**Use cases they automated:**
- "When does [client]'s GST registration expire?" → instant answer
- "What was the net profit ratio for [client] in FY23?" → pulls from audit report
- "Which clients have turnover > ₹5cr?" → scans all P&L statements
- "Find all contracts with renewal clauses expiring this quarter" → compliance alert

**Time saved: 22 hours/week** across a 6-person team.

---

## The Stack

- **pdfplumber** (text extraction)
- **ChromaDB** (vector database, runs locally)
- **sentence-transformers** (embeddings)
- **Claude API** (answer generation)
- **Streamlit** (UI)

Total infrastructure cost: **₹0/month** (runs on your existing computer or a cheap VPS).

---

## Want This Built for Your Firm?

Qorvai builds custom RAG document intelligence systems for CA firms, law offices, and compliance teams. [Book a free audit call](https://qorvai.com#cta).
    `
  },
  {
    slug: "fullstack-ai-dashboard-nextjs-n8n-step-by-step",
    title: "Full-Stack AI Dashboard with Next.js + n8n: Step-by-Step Build",
    description: "How to build a production-ready AI-powered business dashboard using Next.js 14, n8n for automation, and Claude API for intelligent summaries — complete with real-time data.",
    date: "2026-04-02",
    readTime: "10 min read",
    category: "Full-Stack Development",
    keywords: ["nextjs ai dashboard tutorial", "fullstack ai app development", "n8n nextjs integration", "ai dashboard india"],
    content: `
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

Be specific, actionable, and concise. Mention the most important insight first.\`
    }]
  });
  
  return NextResponse.json({
    summary: message.content[0].type === 'text' ? message.content[0].text : ''
  });
}
\`\`\`

### n8n Trigger API

\`\`\`typescript
// src/app/api/trigger/route.ts
export async function POST(req: Request) {
  const { workflow, payload } = await req.json();
  
  const webhookUrls: Record<string, string> = {
    'send-report': process.env.N8N_WEBHOOK_REPORT!,
    'alert-team': process.env.N8N_WEBHOOK_ALERT!,
    'sync-crm': process.env.N8N_WEBHOOK_CRM!,
  };
  
  const webhookUrl = webhookUrls[workflow];
  if (!webhookUrl) return new Response('Unknown workflow', { status: 400 });
  
  await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  
  return new Response('Triggered', { status: 200 });
}
\`\`\`

---

## Step 2: Dashboard Components

### Metric Card

\`\`\`tsx
// src/app/dashboard/components/MetricCard.tsx
interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
}

export function MetricCard({ title, value, change, icon }: MetricCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-500 font-medium">{title}</span>
        <div className="p-2 bg-gray-50 rounded-lg">{icon}</div>
      </div>
      <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
      <div className={\`text-sm font-medium \${change >= 0 ? 'text-green-600' : 'text-red-600'}\`}>
        {change >= 0 ? '↑' : '↓'} {Math.abs(change)}% vs last month
      </div>
    </div>
  );
}
\`\`\`

### AI Summary Component

\`\`\`tsx
// src/app/dashboard/components/AISummary.tsx
'use client';
import { useState, useEffect } from 'react';

export function AISummary({ metrics }: { metrics: any }) {
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/summary', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ metrics, trend: 'up 12%' })
    })
    .then(r => r.json())
    .then(data => { setSummary(data.summary); setLoading(false); });
  }, [metrics]);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100 p-6">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-lg">🤖</span>
        <h3 className="font-semibold text-gray-900">AI Daily Briefing</h3>
      </div>
      {loading ? (
        <div className="animate-pulse h-16 bg-blue-100 rounded-lg" />
      ) : (
        <p className="text-gray-700 leading-relaxed">{summary}</p>
      )}
    </div>
  );
}
\`\`\`

---

## Step 3: Main Dashboard Page

\`\`\`tsx
// src/app/dashboard/page.tsx
import { MetricCard } from './components/MetricCard';
import { AISummary } from './components/AISummary';

async function getMetrics() {
  const res = await fetch(\`\${process.env.NEXT_PUBLIC_URL}/api/metrics\`, {
    next: { revalidate: 300 } // Revalidate every 5 minutes
  });
  return res.json();
}

export default async function DashboardPage() {
  const metrics = await getMetrics();
  
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Operations Dashboard</h1>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <MetricCard title="Revenue (30d)" value={\`₹\${(metrics.revenue/100000).toFixed(1)}L\`} change={12} icon="💰" />
        <MetricCard title="New Leads" value={metrics.leads} change={8} icon="🎯" />
        <MetricCard title="Orders" value={metrics.orders} change={-3} icon="📦" />
        <MetricCard title="Conversion" value={\`\${metrics.conversionRate}%\`} change={5} icon="📈" />
      </div>
      
      <AISummary metrics={metrics} />
    </main>
  );
}
\`\`\`

---

## Deployment

\`\`\`bash
# Vercel (recommended for Next.js)
npx vercel deploy

# Environment variables needed:
DATABASE_URL=postgresql://...
ANTHROPIC_API_KEY=sk-ant-...
N8N_WEBHOOK_REPORT=https://your-n8n.com/webhook/...
NEXT_PUBLIC_URL=https://your-domain.com
\`\`\`

---

## Want This Dashboard Built for Your Business?

Qorvai builds custom operational dashboards for agencies, e-commerce brands, and service businesses. [Book a free strategy call](https://qorvai.com#cta) — we deliver in 2-3 weeks.
    `
  }
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map(post => post.slug);
}
