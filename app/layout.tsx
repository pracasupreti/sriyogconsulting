import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FloatingIcons from "@/components/FloatingIcons";
import Script from "next/script";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "SRIYOG Consulting | IT Consulting Company in Nepal",
  description:
    "Digital Professional Marketplace of Skilled Professional. Hire professional based on their skills, location and availability.",
  keywords: "IT consulting, software development, cloud solutions, Nepal IT company",
  authors: [{ name: "SRIYOG Consulting" }],
  icons: "/assets/images/title/logo.svg",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "SRIYOG Consulting | IT Consulting Company in Nepal",
    description:
      "Digital Professional Marketplace of Skilled Professional. Hire professional based on their skills, location and availability. ",
    url: "https://www.sriyogconsulting.com",
    siteName: "SRIYOG Consulting",
    images: [
      {
        url: "https://www.sriyogconsulting.com/assets/images/og/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SRIYOG Consulting OG Image",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SRIYOG Consulting | IT Consulting Company in Nepal",
    description:
      "Discover digital innovation with SRIYOG Consulting – your trusted IT partner in Nepal.",
    images: ["https://www.sriyogconsulting.com/assets/images/og-image.jpg"],
    creator: "@sriyog", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=YOUR_GA_TRACKING_ID`}
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'YOUR_GA_TRACKING_ID');
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <Navbar />
        {children}
        <FloatingIcons />
        <Footer />
      </body>
    </html>
  );
}
