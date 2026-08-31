"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PhoneCall, Check, ArrowRight, Mic, Volume2, Calendar, Clock, User, ShieldCheck, Play, Pause } from "lucide-react";
import { AudioWaveform } from "@/components/AudioWaveform";
import { ConsultationModal } from "@/components/ConsultationModal";

export const CallAgentFeature: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isConsultOpen, setIsConsultOpen] = useState(false);

  const features = [
    "Answer calls instantly with zero hold times",
    "Understand natural spoken language & accents",
    "Qualify leads based on custom business criteria",
    "Schedule appointments directly into your calendar",
    "Handle FAQs from your knowledge base with precision",
    "Capture caller contact info & notes accurately",
    "Follow custom multi-step business logic workflows",
    "Transfer calls to humans smoothly when needed",
  ];

  return (
    <>
      <section className="py-20 sm:py-28 lg:py-32 bg-white border-y border-[#E7E7E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* LEFT: Large Realistic Product UI Mockup */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="bg-[#F7F7F5] rounded-3xl border border-[#E7E7E4] p-6 sm:p-8 shadow-xl relative overflow-hidden">
                {/* Top Status Header */}
                <div className="flex items-center justify-between pb-5 border-b border-[#E7E7E4]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center">
                      <PhoneCall className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-neutral-900">Tonovox Voice Agent</span>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                          Active Inbound
                        </span>
                      </div>
                      <span className="text-xs text-neutral-500 font-mono">+1 (800) 866-VOX</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#E7E7E4] rounded-lg text-xs font-semibold text-neutral-700 hover:bg-neutral-50 transition-colors cursor-pointer shadow-2xs"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5 text-blue-600" /> : <Play className="w-3.5 h-3.5 text-blue-600" />}
                    <span>{isPlaying ? "Simulate Active" : "Play Demo"}</span>
                  </button>
                </div>

                {/* Live Call Visualization Area */}
                <div className="py-6 space-y-5">
                  <div className="flex justify-center">
                    <AudioWaveform isActive={isPlaying} barCount={22} className="h-14 px-6 bg-neutral-950 border-neutral-800" color="bg-blue-500" />
                  </div>

                  {/* Transcript Stream */}
                  <div className="space-y-3 bg-white p-5 rounded-2xl border border-[#E7E7E4] shadow-xs text-xs sm:text-sm">
                    <div className="flex items-start gap-2.5">
                      <span className="px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-600 font-mono text-[10px] font-bold flex-shrink-0 mt-0.5">
                        CALLER
                      </span>
                      <p className="text-neutral-800 font-medium">
                        "Hi, I'm calling to see if you have availability for an enterprise demo this Thursday afternoon?"
                      </p>
                    </div>

                    <div className="flex items-start gap-2.5 pt-2 border-t border-neutral-100">
                      <span className="px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 font-mono text-[10px] font-bold flex-shrink-0 mt-0.5">
                        TONOVOX AI
                      </span>
                      <p className="text-neutral-700 leading-relaxed">
                        "Hi! Yes, we have an opening with our solutions architect at 2:00 PM EST this Thursday. May I confirm your name and business email to reserve that slot?"
                      </p>
                    </div>
                  </div>

                  {/* Live Call Meta Data Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center">
                    <div className="p-3 bg-white rounded-xl border border-[#E7E7E4]">
                      <span className="text-[10px] font-semibold text-neutral-400 uppercase block">Latency</span>
                      <span className="text-xs font-bold text-neutral-900">380ms</span>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-[#E7E7E4]">
                      <span className="text-[10px] font-semibold text-neutral-400 uppercase block">Sentiment</span>
                      <span className="text-xs font-bold text-emerald-600">Positive / High</span>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-[#E7E7E4]">
                      <span className="text-[10px] font-semibold text-neutral-400 uppercase block">Intent</span>
                      <span className="text-xs font-bold text-blue-600">Demo Booking</span>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-[#E7E7E4]">
                      <span className="text-[10px] font-semibold text-neutral-400 uppercase block">Action</span>
                      <span className="text-xs font-bold text-neutral-900">Calendar Sync</span>
                    </div>
                  </div>
                </div>

                {/* Footer Badges */}
                <div className="pt-4 border-t border-[#E7E7E4] flex items-center justify-between text-xs text-neutral-500">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>SOC2 & HIPAA Compliant Audio Pipelines</span>
                  </div>
                  <span className="font-mono text-[11px]">Powered by Tonovox Engine</span>
                </div>
              </div>
            </div>

            {/* RIGHT: Explanatory Content & Checklist */}
            <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F7F5] border border-[#E7E7E4] text-[11px] font-bold uppercase tracking-widest text-neutral-700">
                <Mic className="w-3 h-3 text-blue-600" />
                <span>AI CALL AGENTS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
                Your AI Employee For Every Customer Call.
              </h2>

              <p className="text-base text-[#555555] leading-relaxed">
                Give your business a voice that can answer questions, qualify leads, schedule appointments and handle repetitive conversations around the clock.
              </p>

              {/* Feature Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-xs text-neutral-800 font-medium leading-tight">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setIsConsultOpen(true)}
                  className="px-6 py-3.5 bg-neutral-900 text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 group cursor-pointer shadow-sm"
                >
                  <span>Build My AI Call Agent</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <Link
                  href="/services/ai-call-agents"
                  className="px-6 py-3.5 bg-white border border-[#E7E7E4] text-neutral-900 text-xs font-bold uppercase tracking-wider rounded-full hover:bg-neutral-50 transition-colors flex items-center justify-center"
                >
                  View Voice Architecture
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
        defaultService="AI Call Agent"
      />
    </>
  );
};
