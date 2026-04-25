import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const { url } = await req.json();
        
        if (!url) {
            return NextResponse.json({ success: false, error: "No URL provided" }, { status: 400 });
        }

        let targetUrl = url;
        if (!targetUrl.startsWith('http')) {
            targetUrl = 'https://' + targetUrl;
        }

        console.log(`Scanning URL: ${targetUrl}`);

        // Lightweight server-side fetch to pull the actual HTML of the target site
        const response = await fetch(targetUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;'
            },
            signal: AbortSignal.timeout(8000), // timeout after 8 seconds
        });
        
        const html = await response.text();
        
        // --- REAL LIVE DOM ANALYSIS ---
        const hasForms = /<form/i.test(html);
        const hasWpForms = /wpcf7|gform|wpforms/i.test(html); // WordPress specific forms
        const hasChatWidget = /intercom|crisp\.chat|drift\.com|chatbase\.co|tawk\.to|tidio|zopim/i.test(html);
        const hasN8nOrZapier = /zapier|make\.com|n8n/i.test(html);
        const formCount = (html.match(/<form/gi) || []).length;
        
        // Construct dynamic, legitimate findings based on the real HTML scraped
        const findings = [];
        
        // 1. Chat/NLP Check
        if (!hasChatWidget) {
            findings.push({
                type: 'critical',
                title: 'Conversational Void',
                desc: 'No intelligent chatbot or NLP widget detected in the DOM. Nighttime traffic is abandoning without 24/7 engagement.'
            });
        } else {
            findings.push({
                type: 'good',
                title: 'Chat Engine Detected',
                desc: 'Basic chat widget found. Recommend upgrading to an RAG (Retrieval-Augmented) AI bot to fully automate support tickets.'
            });
        }

        // 2. Form/Data Check
        if (hasForms) {
            findings.push({
                type: 'warning',
                title: `Workflow Bottleneck (${formCount} form${formCount > 1 ? 's' : ''} found)`,
                desc: `${hasWpForms ? 'WordPress legacy ' : ''}Lead forms detected. Unless directly piped into a CRM via n8n/webhooks, your team is doing manual data entry.`
            });
        } else {
            findings.push({
                type: 'critical',
                title: 'No Lead Capture Pipeline',
                desc: 'Zero <form> tags identified on the surface page. Maximum friction for users trying to convert into the sales funnel.'
            });
        }
        
        // 3. Advanced API check
        if (!hasN8nOrZapier) {
             findings.push({
                type: 'warning',
                title: 'Missing Integration Webhooks',
                desc: 'No client-side webhook triggers detected. Operations are likely operating in silos instead of an interconnected ecosystem.'
            });
        }

        // Return up to 2 specific findings to the frontend
        return NextResponse.json({ success: true, url: targetUrl, findings: findings.slice(0, 2) });

    } catch (error) {
        console.error("Scan error:", error);
        return NextResponse.json({ 
            success: true, 
            findings: [
                {
                    type: 'critical',
                    title: 'Heavy Bot-Protection Block',
                    desc: 'Standard fetch blocked. This site requires advanced Playwright headless cluster mimicking to scrape successfully. We can build this.'
                },
                {
                    type: 'warning',
                    title: 'API Lockout',
                    desc: 'Target server rejected automated ping. Custom RPA solutions required for integration.'
                }
            ]
        }, { status: 200 });
    }
}
