import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tonovox.com"),
  title: {
    default: "Tonovox Technologies | AI Solutions For Smarter Business",
    template: "%s | Tonovox Technologies",
  },
  description:
    "Tonovox Technologies is a modern technology company specializing in AI Voice Agents, Conversational Chatbots, Intelligent Automation, and high-performance Web Applications.",
  keywords: [
    "AI Call Agent",
    "AI Voice Agent",
    "AI Chatbot",
    "AI Chatbot Development",
    "AI Automation",
    "AI Automation Services",
    "Web Development",
    "AI Solutions",
    "Business Automation",
    "Tonovox Technologies",
  ],
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  authors: [{ name: "Tonovox Technologies" }],
  creator: "Tonovox Technologies",
  publisher: "Tonovox Technologies",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/logo.png", type: "image/png" },
    ],
    apple: [
      { url: "/logo.png", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tonovox.com",
    siteName: "Tonovox Technologies",
    title: "Tonovox Technologies | AI Solutions For Smarter Business",
    description:
      "Automate conversations, improve customer experiences, and build powerful digital products with Tonovox Technologies.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 1200,
        alt: "Tonovox Technologies AI & Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tonovox Technologies | AI Solutions For Smarter Business",
    description:
      "Automate conversations, improve customer experiences, and build powerful digital products with Tonovox Technologies.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tonovox Technologies",
    alternateName: "Tonovox",
    url: "https://tonovox.com",
    logo: "https://tonovox.com/logo.png",
    description:
      "Tonovox Technologies builds AI Voice Agents, Conversational Chatbots, Intelligent Automation, and modern Web Applications.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-800-866-6869",
      contactType: "customer service",
      email: "tonovoxtechnologies@gmail.com",
      availableLanguage: ["English"],
    },
    sameAs: [
      "https://www.instagram.com/tonovoxtechnologies?igsi=MTMzY3NsY3RrcjU4dA==",
      "https://www.facebook.com/share/1C9XerHJRd/",
    ],
  };

  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F7F7F5] text-[#111111] antialiased selection:bg-neutral-900 selection:text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
