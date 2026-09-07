import React from "react";
import type { Metadata } from "next";
import { AICallAgentsView } from "@/components/views/AICallAgentsView";

export const metadata: Metadata = {
  title: "AI Call Agents & Voice Automation Solutions | Tonovox Technologies",
  description:
    "Deploy ultra-low latency, sub-500ms AI Voice Agents that answer inbound calls, qualify leads, schedule appointments, and sync with your CRM 24/7.",
  keywords: [
    "AI Call Agent",
    "AI Voice Agent",
    "Voice AI",
    "AI Receptionist",
    "Automated Phone Answering",
    "Telephony AI",
    "Conversational Voice AI",
    "Tonovox Technologies",
  ],
  alternates: {
    canonical: "https://tonovox.com/services/ai-call-agents",
  },
  openGraph: {
    title: "AI Call Agents & Voice Automation | Tonovox Technologies",
    description:
      "Sub-500ms AI voice agents handling high-volume inbound calls, appointment scheduling, and CRM syncing 24/7.",
    url: "https://tonovox.com/services/ai-call-agents",
    siteName: "Tonovox Technologies",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 1200,
        alt: "Tonovox AI Call Agents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Call Agents & Voice Automation | Tonovox Technologies",
    description: "Sub-500ms AI voice agents handling high-volume inbound calls and bookings.",
    images: ["/logo.png"],
  },
};

export default function AICallAgentsPage() {
  return <AICallAgentsView />;
}
