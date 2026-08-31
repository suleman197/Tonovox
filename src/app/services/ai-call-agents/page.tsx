"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PhoneCall, Mic, Clock, Check, ArrowRight, ShieldCheck, Calendar, Activity, Zap, Play } from "lucide-react";
import { AudioWaveform } from "@/components/AudioWaveform";
import { ConsultationModal } from "@/components/ConsultationModal";
import { SERVICES } from "@/data/siteContent";

export default function AICallAgentsPage() {
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  const [isLiveCall, setIsLiveCall] = useState(true);

  const serviceData = SERVICES.find((s) => s.slug === "ai-call-agents")!;

  return (
    <>
      <main className="flex-1 py-16 sm:py-24 bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {/* 1. HERO */}
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7E7E4] text-[11px] font-bold uppercase tracking-widest text-neutral-700 shadow-2xs">
              <Mic className="w-3.5 h-3.5 text-blue-600" />
              <span>VOICE AUTOMATION PLATFORM</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-900 leading-tight">
              AI Voice Agents That Handle Customer Conversations.
            </h1>

            <p className="text-base sm:text-xl text-[#555555] max-w-2xl mx-auto leading-relaxed">
              Answer calls within milliseconds, qualify inbound prospects, schedule appointments, and connect directly to your CRM with human-grade natural speech.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsConsultOpen(true)}
                className="w-full sm:w-auto px-8 py-4 bg-neutral-950 text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <span>Deploy My AI Call Agent</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#demo"
                className="w-full sm:w-auto px-8 py-4 bg-white border border-[#E7E7E4] text-neutral-900 text-xs font-bold uppercase tracking-wider rounded-full hover:bg-neutral-50 transition-colors flex items-center justify-center"
              >
                Try Voice Simulator
              </a>
            </div>
          </div>

          {/* 2. REALISTIC VOICE AGENT INTERFACE DEMO */}
          <div id="demo" className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#E7E7E4] p-6 sm:p-10 shadow-xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#E7E7E4]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center">
                  <PhoneCall className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-neutral-900">Live Voice Agent Demo</h3>
                  <span className="text-xs text-neutral-500 font-mono">Response Latency: 360ms</span>
                </div>
              </div>
              <button
                onClick={() => setIsLiveCall(!isLiveCall)}
                className="px-4 py-1.5 rounded-full bg-[#F7F7F5] border border-[#E7E7E4] text-xs font-semibold text-neutral-700 hover:bg-neutral-100 transition-colors"
              >
                {isLiveCall ? "Pause Simulation" : "Resume Simulation"}
              </button>
            </div>

            <div className="py-6 flex justify-center">
              <AudioWaveform isActive={isLiveCall} barCount={24} className="h-16 px-8 bg-neutral-950 border-neutral-800" color="bg-blue-500" />
            </div>

            {/* Conversation Transcript */}
            <div className="space-y-3 bg-[#F7F7F5] p-5 rounded-2xl border border-[#E7E7E4] text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <span className="px-2 py-0.5 rounded bg-neutral-200 text-neutral-800 font-mono text-[10px] font-bold mt-0.5">
                  CALLER
                </span>
                <p className="text-neutral-800 font-medium">
                  "Hi, I saw your website and want to know how quickly we can implement an AI receptionist for our clinic?"
                </p>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-[#E7E7E4]">
                <span className="px-2 py-0.5 rounded bg-blue-600 text-white font-mono text-[10px] font-bold mt-0.5">
                  TONOVOX
                </span>
                <p className="text-neutral-700 leading-relaxed">
                  "We typically deploy fully customized clinic voice receptionists within 7 to 10 business days, complete with calendar booking and phone number porting. Would you like me to book an engineering onboarding slot for you?"
                </p>
              </div>
            </div>
          </div>

          {/* 3. WHAT IS AN AI CALL AGENT & HOW IT WORKS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Core Architecture
              </span>
              <h2 className="text-3xl font-extrabold text-neutral-900 tracking-tight">
                How Tonovox Voice AI Operates Under The Hood
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Traditional phone trees rely on keypad digits and pre-recorded audio files. Tonovox connects high-bandwidth SIP trunking to sub-millisecond speech-to-speech models that parse syntax, intent, and tone instantaneously.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { step: "01", title: "Instant Inbound Pickup", desc: "Answers within 1 ring with zero hold time or robotic menu delays." },
                { step: "02", title: "Natural Language Reasoning", desc: "Understands intent, interrupts smoothly, and handles conversational nuance." },
                { step: "03", title: "Action Execution & CRM Sync", desc: "Queries calendars, saves contact data, and triggers automated follow-ups." },
              ].map((s) => (
                <div key={s.step} className="p-5 bg-white rounded-2xl border border-[#E7E7E4] flex items-start gap-4">
                  <span className="text-xl font-bold font-mono text-neutral-400">{s.step}</span>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900">{s.title}</h4>
                    <p className="text-xs text-neutral-600 mt-0.5">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. CAPABILITIES & FEATURES */}
          <div className="bg-white rounded-3xl border border-[#E7E7E4] p-8 sm:p-12 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
                Complete Voice Capabilities
              </h3>
              <p className="text-sm text-neutral-500">
                Engineered for enterprise reliability, high concurrent call volume, and seamless handover.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceData.features.map((feat) => (
                <div key={feat} className="p-5 bg-[#F7F7F5] rounded-2xl border border-[#E7E7E4] flex items-start gap-3">
                  <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-neutral-800 leading-snug">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 5. USE CASES */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
                Targeted Voice Use Cases
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {serviceData.useCases.map((uc) => (
                <div key={uc.title} className="p-6 bg-white rounded-3xl border border-[#E7E7E4] space-y-3 shadow-xs">
                  <h4 className="text-base font-bold text-neutral-900">{uc.title}</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">{uc.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 6. BOTTOM CTA */}
          <div className="bg-neutral-950 rounded-3xl p-8 sm:p-14 text-white text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Ready to give your business an AI Voice Agent?
            </h2>
            <p className="text-sm text-neutral-400 max-w-xl mx-auto">
              Schedule a technical discovery session. We will build a live test agent trained on your business data.
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
        defaultService="AI Call Agent"
      />
    </>
  );
}
