import { NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function POST(request: Request) {
    try {
        const body = await request.json();
        
        console.log('✅ New Lead Submitted:', body);

        const message = `🔥 *NEW LEAD: QorvAI*
        
*Name:* ${body.name}
*Email:* ${body.email}
*Volume:* ${body.volume}

*Bottleneck:*
${body.bottleneck}`;

        // Send to Telegram
        await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message,
                parse_mode: 'Markdown'
            })
        });

        return NextResponse.json(
            { message: 'Lead captured successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error processing lead:', error);
        return NextResponse.json(
            { error: 'Failed to process lead' },
            { status: 500 }
        );
    }
}
