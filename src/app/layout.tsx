import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CookieConsent } from "@/components/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

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
    "qorvai",
    "Qorvai",
  ],
  openGraph: {
    title: "Qorvai | AI Automation Agency India",
    description:
      "Custom AI agents, web scrapers & automation for Visa agencies, CA firms & E-commerce brands. Free 30-min audit.",
    url: "https://qorvai.com",
    siteName: "Qorvai",
    type: "website",
    images: [
      {
        url: "https://qorvai.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Qorvai Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qorvai | AI Automation Agency India",
    description:
      "Custom AI agents & automation for Indian businesses. Free audit.",
    images: ["https://qorvai.com/logo.png"],
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
              name: "Qorvai",
              url: "https://qorvai.com",
              logo: "https://qorvai.com/logo.png",
              description:
                "AI automation agency building custom agents, web scrapers and workflows for Indian businesses",
              foundingDate: "2025",
              foundingLocation: "India",
              contactPoint: {
                "@type": "ContactPoint",
                email: "business@qorvai.com",
                contactType: "sales",
                availableLanguage: ["English", "Hindi"],
              },
              sameAs: [
                "https://linkedin.com/company/qorvai",
                "https://instagram.com/qorvai",
                "https://x.com/dipeshsingh",
              ],
              serviceType: [
                "AI Automation",
                "Web Scraping",
                "n8n Workflows",
                "Full-Stack Development",
                "Visa Portal Automation",
                "E-Commerce Automation",
              ],
            }),
          }}
        />
        <meta
          name="google-site-verification"
          content="p93oRgGM9rXYJDkK6Pvalmw73nA9tj-XJlkoaSJQMrI"
        />
      </head>
      <body className={inter.className}>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
