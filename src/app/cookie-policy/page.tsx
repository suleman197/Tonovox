import React from "react";
import Link from "next/link";
import { COMPANY_INFO } from "@/data/siteContent";
import { Cookie } from "lucide-react";

export const metadata = {
  title: "Cookie Policy | Tonovox Technologies",
  description: "Cookie Policy and tracking preferences for Tonovox Technologies.",
};

export default function CookiePolicyPage() {
  return (
    <main className="flex-1 py-16 sm:py-24 bg-[#F7F7F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <header className="space-y-3 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7E7E4] text-[11px] font-bold uppercase tracking-widest text-neutral-700">
            <Cookie className="w-3 h-3 text-amber-600" />
            <span>COOKIE TRANSPARENCY</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Cookie Policy
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500">
            Effective Date: January 1, 2026 • Last updated: August 2026
          </p>
        </header>

        <div className="bg-white rounded-3xl border border-[#E7E7E4] p-8 sm:p-14 shadow-sm space-y-8 text-neutral-700 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-neutral-900">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your browser or device when you visit websites. They help us maintain your session preferences, evaluate website traffic, and ensure security.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-neutral-900">2. Cookies We Use</h2>
            <ul className="list-disc pl-6 space-y-2 text-neutral-600">
              <li><strong>Essential Cookies:</strong> Required for secure navigation, form submission integrity, and core functionality.</li>
              <li><strong>Performance & Analytics Cookies:</strong> Anonymous aggregated telemetry to gauge page load times and improve Core Web Vitals.</li>
              <li><strong>Functional Cookies:</strong> Store preferences such as consultation booking state or active chat sessions in live demos.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-neutral-900">3. Managing Your Cookie Preferences</h2>
            <p>
              You can adjust your cookie settings through your browser preferences at any time. Disabling essential cookies may impact certain interactive demo features on our site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-neutral-900">4. Contact Us</h2>
            <p>
              If you have any questions regarding our cookie practices, reach out to{" "}
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
