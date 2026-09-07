import React from "react";
import type { Metadata } from "next";
import { WebDevelopmentView } from "@/components/views/WebDevelopmentView";

export const metadata: Metadata = {
  title: "High-Performance Web Development & Next.js Platforms | Tonovox Technologies",
  description:
    "We build modern digital platforms utilizing Next.js, React, and TypeScript engineered for sub-second speeds, 99+ Core Web Vitals, and maximum conversion rates.",
  keywords: [
    "Web Development",
    "Next.js Development",
    "React Web Applications",
    "SaaS Platform Development",
    "High-Performance Websites",
    "Conversion Rate Optimization",
    "Tonovox Technologies",
  ],
  alternates: {
    canonical: "https://tonovox.com/services/web-development",
  },
  openGraph: {
    title: "High-Performance Web Development | Tonovox Technologies",
    description:
      "Modern digital platforms engineered for sub-second speeds, 99+ Core Web Vitals, and conversion rate optimization.",
    url: "https://tonovox.com/services/web-development",
    siteName: "Tonovox Technologies",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 1200,
        alt: "Tonovox Web Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "High-Performance Web Development | Tonovox Technologies",
    description: "Modern digital platforms engineered for sub-second speeds and maximum conversions.",
    images: ["/logo.png"],
  },
};

export default function WebDevelopmentPage() {
  return <WebDevelopmentView />;
}
