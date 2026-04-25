import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CookieConsent } from "@/components/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Automation Agency India | Qorvai — Scale Without Hiring",
  description: "Qorvai builds custom AI agents, web scrapers & n8n automations for Visa agencies, CA firms & e-com brands in India. Free strategy call.",
  keywords: ["qorvai", "Qorvai", "ai automation agency india", "web scraping services india", "n8n workflow automation india", "custom ai agents india", "ai chatbot development", "business process automation"],
  openGraph: {
    title: "AI Automation Agency India | Qorvai — Scale Without Hiring",
    description: "Qorvai builds custom AI agents, web scrapers & n8n automations for Visa agencies, CA firms & e-com brands in India. Free strategy call.",
    url: "https://qorvai.com",
    siteName: "Qorvai",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Qorvai",
              "url": "https://qorvai.com",
              "description": "AI automation agency building custom agents, web scrapers and workflows for Indian businesses",
              "foundingLocation": "India",
              "sameAs": [
                "https://linkedin.com/company/qorvai",
                "https://instagram.com/qorvai",
                "https://x.com/dipeshsingh"
              ],
              "serviceType": ["AI Automation", "Web Scraping", "n8n Workflows", "Full-Stack Development"]
            })
          }}
        />
        <meta name="google-site-verification" content="p93oRgGM9rXYJDkK6Pvalmw73nA9tj-XJlkoaSJQMrI" />
      </head>
      <body className={inter.className}>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
