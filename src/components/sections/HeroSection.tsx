"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  PhoneCall,
  Bot,
  Layers,
  Activity,
  CheckCircle2,
  Calendar,
  UserCheck,
  TrendingUp,
  Cpu,
  Mic,
} from "lucide-react";
import { AudioWaveform } from "@/components/AudioWaveform";
import { ConsultationModal } from "@/components/ConsultationModal";

export const HeroSection: React.FC = () => {
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  const [isWaveActive, setIsWaveActive] = useState(true);

  return (
    <>
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-36 bg-[#F7F7F5]">
        {/* Subtle decorative background grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#E7E7E4_1px,transparent_1px),linear-gradient(to_bottom,#E7E7E4_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Centered Editorial Header */}
          <div className="text-center max-w-4xl mx-auto space-y-6">
            {/* Small Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E7E7E4] shadow-xs text-xs font-semibold uppercase tracking-widest text-neutral-800">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              <span>AI + SOFTWARE SOLUTIONS</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] text-[#111111] leading-[1.08] font-sans">
              AI Solutions For <br className="hidden sm:inline" />
              <span className="text-neutral-900">Smarter Business.</span>
            </h1>

            {/* Alternative Supporting Line */}
            <p className="text-base sm:text-lg lg:text-xl text-[#555555] max-w-2xl mx-auto font-normal leading-relaxed">
              Automate conversations, improve customer experiences, and build powerful digital products with Tonovox Technologies.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
              <button
                onClick={() => setIsConsultOpen(true)}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#111111] text-white text-sm font-semibold hover:bg-neutral-800 active:scale-[0.98] transition-all duration-200 shadow-md flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-1 group-hover:text-white transition-all" />
              </button>

              <Link
                href="/services"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white border border-[#E7E7E4] text-[#111111] text-sm font-semibold hover:bg-neutral-50 hover:border-neutral-400 transition-all duration-200 shadow-xs flex items-center justify-center gap-2"
              >
                <span>Explore Our Services</span>
              </Link>
            </div>
          </div>

          {/* Layered Product-Style UI Composition */}
          <div className="mt-14 sm:mt-20 relative max-w-5xl mx-auto">
            {/* Background Panel 1: Analytics / Dashboard (Top Right Layer) */}
            <div className="hidden md:block absolute -top-8 -right-6 lg:-right-10 w-72 lg:w-80 bg-white/90 backdrop-blur-md rounded-2xl border border-[#E7E7E4] p-5 shadow-lg z-10 animate-soft-float">
              <div className="flex items-center justify-between pb-3 border-b border-[#E7E7E4]">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-bold text-neutral-800">Voice Inbound Flow</span>
                </div>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  99.8% Uptime
                </span>
              </div>
              <div className="mt-3 space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs text-neutral-500">Avg. Response Time</span>
                  <span className="text-sm font-bold text-neutral-900">420ms</span>
                </div>
                <div className="w-full bg-neutral-100 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-blue-600 h-1.5 rounded-full w-4/5" />
                </div>
                <div className="flex justify-between items-center text-[11px] text-neutral-500 pt-1">
                  <span>Calls Handled Today</span>
                  <span className="font-semibold text-neutral-800">318 calls</span>
                </div>
              </div>
            </div>

            {/* Background Panel 2: Automation Workflow Node (Bottom Left Layer) */}
            <div className="hidden md:block absolute -bottom-6 -left-6 lg:-left-10 w-72 lg:w-80 bg-white/90 backdrop-blur-md rounded-2xl border border-[#E7E7E4] p-5 shadow-lg z-10">
              <div className="flex items-center gap-2 pb-2.5 border-b border-[#E7E7E4]">
                <div className="w-6 h-6 rounded-md bg-neutral-900 flex items-center justify-center text-white text-[10px]">
                  <Layers className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-bold text-neutral-800">Automated Pipeline</span>
              </div>
              <div className="mt-3 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-neutral-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span className="truncate">Caller Intent: Schedule Showing</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span className="truncate">Calendar: Slot Booked (Fri 2PM)</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span className="truncate">CRM Synced: HubSpot Lead Created</span>
                </div>
              </div>
            </div>

            {/* CENTRAL MAIN BROWSER / INTERFACE MOCKUP */}
            <div className="relative z-20 bg-white rounded-3xl border border-[#E7E7E4] shadow-2xl overflow-hidden transition-all duration-300">
              {/* Browser Top Window Bar */}
              <div className="bg-[#F0F0ED] px-4 sm:px-6 py-3.5 border-b border-[#E7E7E4] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-neutral-300 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-neutral-300 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-neutral-300 inline-block" />
                </div>

                <div className="flex items-center gap-2 px-3.5 py-1 bg-white rounded-full border border-[#E7E7E4] text-[11px] font-medium text-neutral-600 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>app.tonovox.ai/live-agent</span>
                </div>

                <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium">
                  <span className="hidden sm:inline">Tonovox Engine v2.4</span>
                </div>
              </div>

              {/* Central Interface Body */}
              <div className="p-6 sm:p-8 lg:p-10 space-y-6">
                {/* Agent Status Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#E7E7E4]">
                  <div className="flex items-center gap-3.5">
                    <div className="relative w-12 h-12 rounded-2xl bg-neutral-950 flex items-center justify-center text-white shadow-xs">
                      <PhoneCall className="w-5 h-5 text-blue-400" />
                      <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white animate-pulse" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-base sm:text-lg font-bold text-neutral-900 font-sans">
                          TONOVOX AI
                        </h2>
                        <span className="px-2 py-0.5 bg-neutral-100 text-neutral-700 rounded-md text-[10px] font-semibold border border-neutral-200">
                          AI Call Agent
                        </span>
                      </div>
                      <p className="text-xs text-neutral-500 flex items-center gap-1.5 mt-0.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                        Connected • Live Call in Progress (01:24)
                      </p>
                    </div>
                  </div>

                  {/* Audio Waveform Interactive Control */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsWaveActive(!isWaveActive)}
                      className="text-xs font-semibold text-neutral-600 hover:text-neutral-900 flex items-center gap-1.5 bg-[#F7F7F5] border border-[#E7E7E4] px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                    >
                      <Mic className="w-3.5 h-3.5 text-blue-600" />
                      <span>{isWaveActive ? "Simulating Audio" : "Paused"}</span>
                    </button>
                    <AudioWaveform isActive={isWaveActive} barCount={14} className="hidden sm:flex" />
                  </div>
                </div>

                {/* Simulated Conversation Bubble */}
                <div className="space-y-4 max-w-2xl mx-auto py-2">
                  {/* Customer Message */}
                  <div className="flex items-start gap-3 justify-end">
                    <div className="bg-[#111111] text-white text-xs sm:text-sm px-4 py-3 rounded-2xl rounded-tr-xs max-w-md shadow-xs">
                      <p className="font-medium">"I want to schedule an appointment for a consultation."</p>
                      <span className="text-[10px] text-neutral-400 block mt-1 text-right">Caller • Inbound</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-700 text-xs font-bold flex-shrink-0">
                      C
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 shadow-xs">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="bg-[#F7F7F5] border border-[#E7E7E4] text-neutral-900 text-xs sm:text-sm px-4 py-3.5 rounded-2xl rounded-tl-xs max-w-md shadow-xs space-y-1.5">
                      <p className="font-normal leading-relaxed">
                        "Absolutely! I have availability this Thursday at 2:00 PM or Friday at 10:30 AM EST. What date works best for you?"
                      </p>
                      <span className="text-[10px] text-neutral-500 block font-mono">
                        Tonovox Voice AI • Latency: 380ms
                      </span>
                    </div>
                  </div>
                </div>

                {/* Below Status Pill Badges */}
                <div className="pt-4 border-t border-[#E7E7E4] grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 bg-[#F7F7F5] rounded-xl border border-[#E7E7E4] flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-white border border-[#E7E7E4] flex items-center justify-center text-emerald-600">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-neutral-500 block">Call Status</span>
                      <span className="text-xs font-semibold text-neutral-900">Active & Stable</span>
                    </div>
                  </div>

                  <div className="p-3 bg-[#F7F7F5] rounded-xl border border-[#E7E7E4] flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-white border border-[#E7E7E4] flex items-center justify-center text-blue-600">
                      <UserCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-neutral-500 block">Lead Status</span>
                      <span className="text-xs font-semibold text-neutral-900">Qualified (Enterprise)</span>
                    </div>
                  </div>

                  <div className="p-3 bg-[#F7F7F5] rounded-xl border border-[#E7E7E4] flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-white border border-[#E7E7E4] flex items-center justify-center text-indigo-600">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-neutral-500 block">Next Action</span>
                      <span className="text-xs font-semibold text-neutral-900">Appointment Ready</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
      />
    </>
  );
};
