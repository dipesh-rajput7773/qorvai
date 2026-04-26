import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CookieConsent } from "@/components/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Qorvai | Premium AI Automation & Workflow Agency",
  description:
    "Qorvai builds custom AI agents, web scrapers & workflow automations for scaling businesses. 50+ automations delivered. Claim your free operations audit.",
  keywords: [
    "AI automation agency",
    "web scraping services",
    "workflow automation",
    "n8n automation",
    "AI agent development",
    "custom software development",
    "business operations automation",
    "Qorvai",
    "qorvai",
  ],
  openGraph: {
    title: "Qorvai | Premium AI Automation Agency",
    description:
      "Custom AI agents, web scrapers & automated workflows for modern businesses. Claim your free 30-min audit.",
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
    title: "Qorvai | Premium AI Automation Agency",
    description:
      "Custom AI agents & operations automation for scaling businesses. Free audit.",
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
                "Premium AI automation agency building custom agents, web scrapers and operational workflows for scaling businesses worldwide.",
              foundingDate: "2025",
              contactPoint: {
                "@type": "ContactPoint",
                email: "business@qorvai.com",
                contactType: "sales",
                availableLanguage: ["English"],
              },
              sameAs: [
                "https://linkedin.com/company/qorvai",
                "https://instagram.com/qorvai",
                "https://x.com/dipeshsingh",
              ],
              serviceType: [
                "AI Automation",
                "Web Scraping",
                "Operational Workflows",
                "Full-Stack Development",
                "Custom AI Agents",
                "Business Process Automation",
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
