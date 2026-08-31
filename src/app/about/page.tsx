import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, HeartHandshake, Zap, Compass, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "@/data/siteContent";

export const metadata = {
  title: "About Tonovox Technologies | Our Mission & Principles",
  description:
    "Learn about Tonovox Technologies, our mission to democratize enterprise AI, and our engineering philosophy.",
};

export default function AboutPage() {
  const principles = [
    {
      title: "Pragmatism Over Hype",
      desc: "We don't build flashy AI demos that break in production. We engineer stable, deterministic systems with strict error recovery and measurable business ROI.",
    },
    {
      title: "Obsession With Latency & Speed",
      desc: "In AI voice and conversational software, sub-second latency is the difference between delightful conversation and customer frustration.",
    },
    {
      title: "Integration First",
      desc: "We respect your existing software stack. We connect our AI tools seamlessly to your existing CRMs, databases, and calendars.",
    },
    {
      title: "Transparent & Grounded AI",
      desc: "Our conversational models adhere strictly to your verified knowledge base with strict guardrails to eliminate hallucinations.",
    },
  ];

  return (
    <main className="flex-1 py-16 sm:py-24 bg-[#F7F7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7E7E4] text-[11px] font-bold uppercase tracking-widest text-neutral-700 shadow-2xs">
            <Sparkles className="w-3 h-3 text-blue-600" />
            <span>ABOUT TONOVOX TECHNOLOGIES</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 leading-tight">
            We Build Technology That Makes Business Simpler.
          </h1>

          <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
            From intelligent voice agents and AI chatbots to high-performance websites and web applications, we help businesses automate repetitive work, improve customer experiences and build stronger digital operations.
          </p>
        </div>

        {/* Mission Banner */}
        <div className="bg-white rounded-3xl border border-[#E7E7E4] p-8 sm:p-14 shadow-sm space-y-6 max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Our North Star
          </span>
          <p className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight leading-relaxed italic">
            "{COMPANY_INFO.positioning}"
          </p>
          <p className="text-sm text-neutral-600 max-w-2xl mx-auto">
            Our mission is to make powerful AI and software technology accessible to businesses of every size.
          </p>
        </div>

        {/* 4 Core Principles */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              Our Engineering Principles
            </h2>
            <p className="text-sm text-neutral-500">
              The non-negotiable standards behind every system we architect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-3xl border border-[#E7E7E4] p-8 space-y-3 shadow-xs hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#F7F7F5] border border-[#E7E7E4] flex items-center justify-center text-neutral-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 tracking-tight">{p.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed pl-11">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-neutral-950 rounded-3xl p-8 sm:p-14 text-white text-center space-y-6 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Let's Collaborate On Your Next Project
          </h2>
          <p className="text-sm text-neutral-400 max-w-xl mx-auto">
            Speak directly with our technical team to explore how we can automate your customer operations.
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-neutral-950 text-xs font-bold uppercase tracking-wider rounded-full hover:bg-neutral-200 transition-colors inline-flex items-center gap-2"
          >
            <span>Contact Tonovox Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
