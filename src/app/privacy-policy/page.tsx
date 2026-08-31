import React from "react";
import Link from "next/link";
import { COMPANY_INFO } from "@/data/siteContent";
import { Shield } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Tonovox Technologies",
  description: "Privacy Policy and data protection standards for Tonovox Technologies.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1 py-16 sm:py-24 bg-[#F7F7F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <header className="space-y-3 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7E7E4] text-[11px] font-bold uppercase tracking-widest text-neutral-700">
            <Shield className="w-3 h-3 text-emerald-600" />
            <span>LEGAL & COMPLIANCE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500">
            Effective Date: January 1, 2026 • Last updated: August 2026
          </p>
        </header>

        <div className="bg-white rounded-3xl border border-[#E7E7E4] p-8 sm:p-14 shadow-sm space-y-8 text-neutral-700 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-neutral-900">1. Overview</h2>
            <p>
              Tonovox Technologies ("we", "our", "us") values your privacy. This Privacy Policy outlines how we collect, process, and protect your information when you interact with our website (https://tonovox.com), our AI Voice Agents, Chatbot demos, and client consultation platforms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-neutral-900">2. Information We Collect</h2>
            <p>We may collect information you voluntarily provide, including:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-neutral-600">
              <li><strong>Contact Identifiers:</strong> Name, work email address, company name, phone number, and project specifications.</li>
              <li><strong>Communication Transcripts:</strong> Audio transcripts or chat logs from interactions with our live demo systems.</li>
              <li><strong>Technical Metadata:</strong> IP address, browser type, device information, and anonymous session telemetry.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-neutral-900">3. How We Use Your Information</h2>
            <p>We use collected data solely to:</p>
            <ul className="list-disc pl-6 space-y-1.5 text-neutral-600">
              <li>Respond to your technical inquiries and schedule requested consultations.</li>
              <li>Improve the latency, accuracy, and natural language understanding of our AI agent systems.</li>
              <li>Deliver agreed-upon software engineering and voice automation deliverables.</li>
              <li>Ensure enterprise security, fraud prevention, and system stability.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-neutral-900">4. Zero Sale of Personal Data</h2>
            <p>
              We do not sell, rent, or trade your personal or business information to third-party data brokers or advertisers under any circumstances.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-neutral-900">5. Contact Information</h2>
            <p>
              For privacy-related inquiries or data deletion requests, contact our data protection team at{" "}
              <a href={COMPANY_INFO.socials.email} className="font-semibold text-neutral-900 underline">
                {COMPANY_INFO.email}
              </a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
