---
title: "How to Automate Visa Portal Data Entry with Playwright"
description: "Step-by-step guide to building a Playwright bot that automates OCI, passport, and visa portal submissions — eliminating 100% of manual data entry for immigration agencies."
date: "2026-04-20"
readTime: "9 min read"
category: "Web Scraping"
keywords: ["visa portal automation python", "playwright web scraping", "automate visa application", "oci portal automation"]
---

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
