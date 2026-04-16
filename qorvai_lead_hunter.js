const { chromium } = require('playwright');
const fs = require('fs');

// The ultimate list of high-ticket niches that can afford $300-$3000 automation
const HIGH_TICKET_QUERIES = [
    "Real Estate Agency in Dubai",
    "Immigration Visa Consultants in London",
    "Visa Agency in Toronto Canada",
    "Chartered Accountants in Texas USA",
    "Boutique Financial Advisory in Sydney",
    "Premium E-Commerce Logistics in USA"
];

async function runQorvaiHunter() {
    console.log("🚀 Booting QorvAI Autonomous Lead Hunter...");
    
    // Set to headless: false so you can watch your bot work in real time
    const browser = await chromium.launch({ headless: false }); 
    const context = await browser.newContext();
    const page = await context.newPage();
    
    let masterLeadsList = [];

    for (const query of HIGH_TICKET_QUERIES) {
        console.log(`\n🔍 Penetrating Map Data for: ${query}`);
        
        // Navigate to Maps Search
        const searchUrl = `https://www.google.com/maps/search/${encodeURIComponent(query)}`;
        await page.goto(searchUrl, { waitUntil: 'domcontentloaded' });
        
        // Wait for results to populate
        await page.waitForTimeout(5000);

        console.log("Scrolling to load maximum B2B leads...");
        // In production, you write a loop here to scroll the left pane
        // await page.mouse.wheel(0, 10000); 

        // Extracting Data (DOM selectors change, but this is the core logic)
        // We look for name, website, and phone.
        console.log("Extracting business intelligence...");
        
        const extractedLeads = await page.evaluate(() => {
            const leads = [];
            // Google Maps uses changing class names, usually anchor tags with specific roles
            const resultNodes = document.querySelectorAll('a[href*="/maps/place/"]');
            
            resultNodes.forEach(node => {
                const parent = node.closest('div');
                if (!parent) return;
                
                const textData = parent.innerText;
                
                // Advanced regex to grab anything that looks like a phone number
                const phoneMatch = textData.match(/\+?\d[\d -]{8,}\d/);
                
                // Check if they have a website link
                const hasWebsite = textData.toLowerCase().includes('website') || parent.querySelector('a[href^="http"]');

                leads.push({
                    name: node.getAttribute('aria-label') || "Unknown Business",
                    phone: phoneMatch ? phoneMatch[0] : "No Phone",
                    hasWebsite: !!hasWebsite,
                    needsDigitalTransformation: !hasWebsite, // Prime target for $300-$1000 Site+Bot
                    needsAdvancedAutomation: !!hasWebsite  // Prime target for $3000 RAG / n8n Integrations
                });
            });
            return leads;
        });

        // Filter out junk
        const pristineLeads = [...new Map(extractedLeads.map(item => [item['name'], item])).values()];
        
        console.log(`✅ Extracted ${pristineLeads.length} High-Ticket Leads for ${query}`);
        masterLeadsList.push(...pristineLeads);
        
        // Save dynamically as it hunts
        fs.writeFileSync('qorvai_leads.json', JSON.stringify(masterLeadsList, null, 2));
    }

    console.log(`\n🎯 Hunt complete. Total high-ticket leads locked in: ${masterLeadsList.length}`);
    console.log("💾 Next step: Pipe `qorvai_leads.json` into your qorvai_lead_agent.jsx to write the DMs!");
    
    await browser.close();
}

runQorvaiHunter().catch(console.error);
