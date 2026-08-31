import React from "react";
import Link from "next/link";
import { COMPANY_INFO } from "@/data/siteContent";
import { FileText } from "lucide-react";

export const metadata = {
  title: "Terms of Service | Tonovox Technologies",
  description: "Terms of Service and legal agreements for Tonovox Technologies.",
};

export default function TermsOfServicePage() {
  return (
    <main className="flex-1 py-16 sm:py-24 bg-[#F7F7F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <header className="space-y-3 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7E7E4] text-[11px] font-bold uppercase tracking-widest text-neutral-700">
            <FileText className="w-3 h-3 text-blue-600" />
            <span>TERMS OF SERVICE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500">
            Effective Date: January 1, 2026 • Last updated: August 2026
          </p>
        </header>

        <div className="bg-white rounded-3xl border border-[#E7E7E4] p-8 sm:p-14 shadow-sm space-y-8 text-neutral-700 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-neutral-900">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the services, website, AI demonstrations, and software platforms operated by Tonovox Technologies ("Tonovox"), you agree to be bound by these Terms of Service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-neutral-900">2. Scope of Services</h2>
            <p>
              Tonovox provides custom AI voice agent engineering, chatbot development, web application engineering, and business automation consulting. Specific deliverables, service level agreements (SLAs), and project scopes are governed by separate Master Services Agreements (MSAs) or Statements of Work (SOWs) executed with clients.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-neutral-900">3. Intellectual Property</h2>
            <p>
              All proprietary AI models, source code, frameworks, trademarks, logos, and UI designs created by Tonovox remain the intellectual property of Tonovox Technologies unless explicitly transferred under a signed written agreement. Client-provided materials and proprietary business data remain the exclusive property of the client.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-neutral-900">4. Limitation of Liability</h2>
            <p>
              While our AI models and software systems are built with rigorous guardrails, AI speech synthesis and natural language processing may occasionally generate unexpected outputs. Tonovox shall not be liable for indirect, incidental, or consequential damages arising from third-party telephony disruptions or API outages.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-neutral-900">5. Contact</h2>
            <p>
              For legal inquiries regarding these terms, contact{" "}
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
