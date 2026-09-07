import React from "react";
import type { Metadata } from "next";
import { AIChatbotsView } from "@/components/views/AIChatbotsView";

export const metadata: Metadata = {
  title: "AI Chatbots & Conversational RAG Assistants | Tonovox Technologies",
  description:
    "Intelligent conversational AI chatbots that ingest your knowledge base, answer visitor questions with verified citations, qualify leads, and automate customer support 24/7.",
  keywords: [
    "AI Chatbot",
    "AI Chatbot Development",
    "Conversational AI",
    "RAG Chatbot",
    "Knowledge Base AI",
    "Customer Support Automation",
    "Lead Capture Bot",
    "Tonovox Technologies",
  ],
  alternates: {
    canonical: "https://tonovox.com/services/ai-chatbots",
  },
  openGraph: {
    title: "AI Chatbots & Conversational RAG | Tonovox Technologies",
    description:
      "Transform website traffic into qualified leads and delighted customers with zero-hallucination conversational AI.",
    url: "https://tonovox.com/services/ai-chatbots",
    siteName: "Tonovox Technologies",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 1200,
        alt: "Tonovox AI Chatbots",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Chatbots & Conversational RAG | Tonovox Technologies",
    description: "Transform website traffic into qualified leads with conversational AI.",
    images: ["/logo.png"],
  },
};

export default function AIChatbotsPage() {
  return <AIChatbotsView />;
}
