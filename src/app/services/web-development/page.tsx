"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Layout, Check, ArrowRight, Sparkles, Gauge, Shield, Smartphone, Globe, Code, Layers } from "lucide-react";
import { ConsultationModal } from "@/components/ConsultationModal";
import { SERVICES } from "@/data/siteContent";

export default function WebDevelopmentPage() {
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  const serviceData = SERVICES.find((s) => s.slug === "web-development")!;

  const areas = [
    { title: "Business Websites", desc: "Authoritative, modern corporate websites built with Next.js to showcase your brand and solutions." },
    { title: "High-Converting Landing Pages", desc: "Laser-focused lead capture and product pages engineered for PPC campaigns and product launches." },
    { title: "E-Commerce Platforms", desc: "Headless Shopify, Stripe, and custom checkout flows with zero lag and frictionless conversion." },
    { title: "Web Applications & Portals", desc: "Interactive customer portals, onboarding flows, and internal tools with secure authentication." },
    { title: "Admin Dashboards", desc: "Real-time analytics and data visualization dashboards tailored for operations and executives." },
    { title: "API & Backend Integrations", desc: "High-throughput serverless microservices connecting databases, CRMs, and payment gateways." },
    { title: "Responsive Fluid Engineering", desc: "Tested across 10+ devices to ensure flawless typography and touch performance." },
    { title: "Technical SEO & Performance", desc: "Structured Schema, semantic HTML5, and automated image optimization for 99+ Core Web Vitals." },
  ];

  return (
    <>
      <main className="flex-1 py-16 sm:py-24 bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {/* HERO */}
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7E7E4] text-[11px] font-bold uppercase tracking-widest text-neutral-700 shadow-2xs">
              <Layout className="w-3.5 h-3.5 text-emerald-600" />
              <span>MODERN WEB ENGINEERING</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-900 leading-tight">
              Digital Experiences Built For Growth.
            </h1>

            <p className="text-base sm:text-xl text-[#555555] max-w-2xl mx-auto leading-relaxed">
              We design and develop fast, responsive, and conversion-focused digital platforms that turn your online presence into a revenue-generating business asset.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsConsultOpen(true)}
                className="w-full sm:w-auto px-8 py-4 bg-neutral-950 text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <span>Start Your Web Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                href="/case-studies"
                className="w-full sm:w-auto px-8 py-4 bg-white border border-[#E7E7E4] text-neutral-900 text-xs font-bold uppercase tracking-wider rounded-full hover:bg-neutral-50 transition-colors flex items-center justify-center"
              >
                View Selected Work
              </Link>
            </div>
          </div>

          {/* 8 SERVICE CAPABILITY CATEGORIES */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map((area) => (
              <div key={area.title} className="p-6 bg-white rounded-3xl border border-[#E7E7E4] space-y-3 shadow-xs hover:shadow-md transition-all">
                <h3 className="text-base font-bold text-neutral-900 tracking-tight">{area.title}</h3>
                <p className="text-xs text-neutral-600 leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>

          {/* PERFORMANCE BENCHMARK HIGHLIGHT */}
          <div className="bg-white rounded-3xl border border-[#E7E7E4] p-8 sm:p-12 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                  Performance & Core Web Vitals
                </span>
                <h2 className="text-3xl font-bold text-neutral-900 tracking-tight">
                  Speed That Converts & Dominates Search Rankings
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Google prioritizes fast, clean websites. We architect with Next.js Server Components, asset preloading, edge caching, and zero layout shift.
                </p>
                <div className="space-y-2 pt-2 text-xs text-neutral-800">
                  <div className="flex items-center gap-2 font-medium">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Sub-500ms Largest Contentful Paint (LCP)</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>0.00 Cumulative Layout Shift (CLS)</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>Automated OpenGraph & Schema JSON-LD metadata</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 bg-[#F7F7F5] rounded-2xl border border-[#E7E7E4] p-8 text-center space-y-6">
                <div className="inline-flex items-center justify-center w-28 h-28 rounded-full border-4 border-emerald-500 bg-white shadow-inner">
                  <span className="text-3xl font-black text-emerald-600">100</span>
                </div>
                <div>
                  <h4 className="text-base font-bold text-neutral-900">Google PageSpeed Score</h4>
                  <p className="text-xs text-neutral-500 mt-1">Mobile & Desktop Performance Benchmark</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-neutral-950 rounded-3xl p-8 sm:p-14 text-white text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Ready to build a website that delivers results?
            </h2>
            <p className="text-sm text-neutral-400 max-w-xl mx-auto">
              Tell us about your brand and goals. We will provide a custom design concept and engineering roadmap.
            </p>
            <button
              onClick={() => setIsConsultOpen(true)}
              className="px-8 py-4 bg-white text-neutral-950 text-xs font-bold uppercase tracking-wider rounded-full hover:bg-neutral-200 transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </main>

      <ConsultationModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
        defaultService="Web Development"
      />
    </>
  );
}
