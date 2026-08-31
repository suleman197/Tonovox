"use client";

import React from "react";
import Link from "next/link";
import { PhoneCall, MessageSquare, Layout, ArrowRight, Check, Sparkles, AudioWaveform as WaveIcon } from "lucide-react";
import { AudioWaveform } from "@/components/AudioWaveform";

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 sm:py-28 lg:py-32 bg-[#F7F7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7E7E4] text-[11px] font-bold uppercase tracking-widest text-neutral-600 shadow-2xs">
            <Sparkles className="w-3 h-3 text-blue-600" />
            <span>OUR SERVICES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
            Problem-Solving AI & Technology.
          </h2>

          <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
            We combine AI, automation and modern software development to help businesses work smarter and serve customers better.
          </p>
        </div>

        {/* 3 Primary Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* CARD 1: AI Call Agents */}
          <div className="bg-white rounded-3xl border border-[#E7E7E4] p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="space-y-6">
              {/* Header Icon + Label */}
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-neutral-950 text-white flex items-center justify-center shadow-xs">
                  <PhoneCall className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                  Voice AI
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">
                  AI Call Agents
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  AI-powered voice agents that answer calls, qualify leads, schedule appointments and handle customer conversations 24/7.
                </p>
              </div>

              {/* Visual Voice Interface Card */}
              <div className="p-4 bg-[#F7F7F5] rounded-2xl border border-[#E7E7E4] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-semibold text-neutral-800">Voice Inbound Active</span>
                  </div>
                  <span className="text-[10px] text-neutral-500 font-mono">00:48</span>
                </div>
                <AudioWaveform isActive={true} barCount={12} className="h-9 py-1 bg-white border-[#E7E7E4]" />
              </div>

              {/* Capabilities List */}
              <div className="space-y-2 pt-2 border-t border-[#E7E7E4]">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                  Key Capabilities
                </span>
                {[
                  "Inbound & Outbound calls",
                  "Lead qualification & screening",
                  "Automated appointment booking",
                  "FAQ & support handling",
                  "Live human agent transfer",
                  "Custom CRM integrations",
                ].map((cap) => (
                  <div key={cap} className="flex items-center gap-2 text-xs text-neutral-700 font-medium">
                    <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8 mt-6 border-t border-[#E7E7E4]">
              <Link
                href="/services/ai-call-agents"
                className="inline-flex items-center gap-2 text-sm font-bold text-neutral-950 group-hover:text-blue-600 transition-colors"
              >
                <span>Explore AI Call Agents</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* CARD 2: AI Chatbots */}
          <div className="bg-white rounded-3xl border border-[#E7E7E4] p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="space-y-6">
              {/* Header Icon + Label */}
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-neutral-950 text-white flex items-center justify-center shadow-xs">
                  <MessageSquare className="w-5 h-5 text-indigo-400" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                  Conversational AI
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">
                  AI Chatbots
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Intelligent AI chatbots that interact with website visitors, answer questions, capture leads and automate customer support.
                </p>
              </div>

              {/* Visual Conversational Preview */}
              <div className="p-4 bg-[#F7F7F5] rounded-2xl border border-[#E7E7E4] space-y-2.5 text-xs">
                <div className="bg-neutral-900 text-white p-2.5 rounded-xl rounded-br-xs max-w-[85%] ml-auto text-[11px]">
                  How quickly can this integrate with HubSpot?
                </div>
                <div className="bg-white border border-[#E7E7E4] p-2.5 rounded-xl rounded-tl-xs max-w-[90%] text-[11px] text-neutral-800">
                  Instantly! We sync leads & transcripts via bi-directional webhook.
                </div>
              </div>

              {/* Capabilities List */}
              <div className="space-y-2 pt-2 border-t border-[#E7E7E4]">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                  Key Capabilities
                </span>
                {[
                  "Website chat & lead capture",
                  "Knowledge-base & document AI",
                  "24/7 FAQ automation",
                  "Zero-hallucination guardrails",
                  "Human agent handoff",
                  "Multi-platform deployment",
                ].map((cap) => (
                  <div key={cap} className="flex items-center gap-2 text-xs text-neutral-700 font-medium">
                    <Check className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8 mt-6 border-t border-[#E7E7E4]">
              <Link
                href="/services/ai-chatbots"
                className="inline-flex items-center gap-2 text-sm font-bold text-neutral-950 group-hover:text-indigo-600 transition-colors"
              >
                <span>Explore AI Chatbots</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* CARD 3: Web Development */}
          <div className="bg-white rounded-3xl border border-[#E7E7E4] p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="space-y-6">
              {/* Header Icon + Label */}
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-neutral-950 text-white flex items-center justify-center shadow-xs">
                  <Layout className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400">
                  Engineering
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">
                  Web Development
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  High-performance websites and web applications built around your brand, audience and business goals.
                </p>
              </div>

              {/* Visual Performance / Code Preview */}
              <div className="p-4 bg-[#F7F7F5] rounded-2xl border border-[#E7E7E4] space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-neutral-800">Core Web Vitals</span>
                  <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    100 / 100
                  </span>
                </div>
                <div className="flex gap-1.5 pt-1">
                  <span className="px-2 py-1 bg-white rounded border border-[#E7E7E4] text-[10px] font-mono text-neutral-700">Next.js 15</span>
                  <span className="px-2 py-1 bg-white rounded border border-[#E7E7E4] text-[10px] font-mono text-neutral-700">TypeScript</span>
                  <span className="px-2 py-1 bg-white rounded border border-[#E7E7E4] text-[10px] font-mono text-neutral-700">Tailwind</span>
                </div>
              </div>

              {/* Capabilities List */}
              <div className="space-y-2 pt-2 border-t border-[#E7E7E4]">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                  Key Capabilities
                </span>
                {[
                  "Custom business websites",
                  "High-converting landing pages",
                  "Web applications & portals",
                  "E-commerce & checkout systems",
                  "API & database integrations",
                  "SEO & speed optimization",
                ].map((cap) => (
                  <div key={cap} className="flex items-center gap-2 text-xs text-neutral-700 font-medium">
                    <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-8 mt-6 border-t border-[#E7E7E4]">
              <Link
                href="/services/web-development"
                className="inline-flex items-center gap-2 text-sm font-bold text-neutral-950 group-hover:text-emerald-600 transition-colors"
              >
                <span>Explore Web Development</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
