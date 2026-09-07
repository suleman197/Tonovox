import React from "react";
import type { Metadata } from "next";
import { AIAutomationView } from "@/components/views/AIAutomationView";

export const metadata: Metadata = {
  title: "AI Automation & Backend Workflow Pipelines | Tonovox Technologies",
  description:
    "Custom AI automation pipelines connecting databases, CRMs, APIs, and AI models to eliminate repetitive manual tasks and scale business operations.",
  keywords: [
    "AI Automation",
    "AI Workflow Automation",
    "Business Automation Services",
    "API Integrations",
    "Data Pipeline Automation",
    "CRM Automation",
    "Tonovox Technologies",
  ],
  alternates: {
    canonical: "https://tonovox.com/services/ai-automation",
  },
  openGraph: {
    title: "AI Automation & Workflow Pipelines | Tonovox Technologies",
    description:
      "Automate repetitive workflows, connect legacy databases with modern AI models, and accelerate operations.",
    url: "https://tonovox.com/services/ai-automation",
    siteName: "Tonovox Technologies",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 1200,
        alt: "Tonovox AI Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation & Workflow Pipelines | Tonovox Technologies",
    description: "Automate repetitive workflows and connect legacy databases with modern AI models.",
    images: ["/logo.png"],
  },
};

export default function AIAutomationPage() {
  return <AIAutomationView />;
}
