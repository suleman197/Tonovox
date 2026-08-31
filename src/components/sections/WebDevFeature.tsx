"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Layout, ArrowRight, Check, Sparkles, Gauge, Shield, Smartphone, Zap } from "lucide-react";
import { ConsultationModal } from "@/components/ConsultationModal";

export const WebDevFeature: React.FC = () => {
  const [isConsultOpen, setIsConsultOpen] = useState(false);

  const categories = [
    "Business Websites",
    "Landing Pages",
    "E-commerce Platforms",
    "Web Applications",
    "Admin Dashboards",
    "Custom Platforms",
    "API Integrations",
    "Performance Optimization",
  ];

  return (
    <>
      <section className="py-20 sm:py-28 lg:py-32 bg-white border-y border-[#E7E7E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Heading */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F7F5] border border-[#E7E7E4] text-[11px] font-bold uppercase tracking-widest text-neutral-700">
              <Layout className="w-3 h-3 text-emerald-600" />
              <span>WEB DEVELOPMENT</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
              Websites That Look Great. <br className="hidden sm:inline" />
              And Work Even Better.
            </h2>

            <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
              We design and develop fast, responsive and conversion-focused digital experiences that turn your online presence into a business asset.
            </p>
          </div>

          {/* Service Category Pills */}
          <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto mb-14">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 bg-[#F7F7F5] hover:bg-neutral-100 border border-[#E7E7E4] rounded-full text-xs font-semibold text-neutral-800 transition-colors shadow-2xs"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Browser Mockup Visual Composition */}
          <div className="bg-[#F7F7F5] rounded-3xl border border-[#E7E7E4] p-4 sm:p-8 shadow-2xl">
            <div className="bg-white rounded-2xl border border-[#E7E7E4] overflow-hidden shadow-md">
              {/* Browser Header */}
              <div className="bg-[#F0F0ED] px-4 py-3 border-b border-[#E7E7E4] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
                </div>

                <div className="px-4 py-1 bg-white rounded-full border border-[#E7E7E4] text-[11px] font-mono text-neutral-600">
                  https://client-portal.tonovox.com
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                    HTTPS 200 OK
                  </span>
                </div>
              </div>

              {/* Mockup Platform Content */}
              <div className="p-6 sm:p-10 space-y-8">
                {/* Mock Hero Inside Platform */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#E7E7E4]">
                  <div className="space-y-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                      High-Performance Architecture
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                      Enterprise SaaS Portal & Dashboard
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 max-w-lg">
                      Engineered with Next.js App Router, Tailwind CSS, TypeScript, and server components for sub-second page transitions.
                    </p>
                  </div>

                  <div className="flex items-center gap-4 bg-[#F7F7F5] p-4 rounded-2xl border border-[#E7E7E4]">
                    <div className="text-center">
                      <span className="text-xs text-neutral-500 block">LCP</span>
                      <span className="text-base font-bold text-neutral-900">0.4s</span>
                    </div>
                    <div className="w-[1px] h-8 bg-[#E7E7E4]" />
                    <div className="text-center">
                      <span className="text-xs text-neutral-500 block">CLS</span>
                      <span className="text-base font-bold text-neutral-900">0.00</span>
                    </div>
                    <div className="w-[1px] h-8 bg-[#E7E7E4]" />
                    <div className="text-center">
                      <span className="text-xs text-neutral-500 block">PageSpeed</span>
                      <span className="text-base font-bold text-emerald-600">100/100</span>
                    </div>
                  </div>
                </div>

                {/* 3 Metric Value Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-5 bg-[#F7F7F5] rounded-2xl border border-[#E7E7E4] space-y-2">
                    <Gauge className="w-5 h-5 text-neutral-900" />
                    <h4 className="text-sm font-bold text-neutral-900">Lightning-Fast Speed</h4>
                    <p className="text-xs text-neutral-600">
                      Optimized asset delivery, server-side caching, and minimal JavaScript bundles.
                    </p>
                  </div>

                  <div className="p-5 bg-[#F7F7F5] rounded-2xl border border-[#E7E7E4] space-y-2">
                    <Smartphone className="w-5 h-5 text-neutral-900" />
                    <h4 className="text-sm font-bold text-neutral-900">Responsive Perfection</h4>
                    <p className="text-xs text-neutral-600">
                      Pixel-perfect fluidity across mobile smartphones, tablets, laptops, and ultra-wide displays.
                    </p>
                  </div>

                  <div className="p-5 bg-[#F7F7F5] rounded-2xl border border-[#E7E7E4] space-y-2">
                    <Zap className="w-5 h-5 text-neutral-900" />
                    <h4 className="text-sm font-bold text-neutral-900">Conversion-Engineered</h4>
                    <p className="text-xs text-neutral-600">
                      Strategic layout hierarchy, psychological CTAs, and frictionless booking flows.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section CTA */}
          <div className="text-center pt-10">
            <button
              onClick={() => setIsConsultOpen(true)}
              className="px-8 py-4 bg-neutral-900 text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-neutral-800 transition-colors shadow-md cursor-pointer inline-flex items-center gap-2"
            >
              <span>Build Your Custom Web Solution</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
        defaultService="Web Development"
      />
    </>
  );
};
