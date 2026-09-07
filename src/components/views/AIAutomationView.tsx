"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Cpu, Check, ArrowRight, Sparkles, Webhook, Database, Zap, GitBranch, Layers, ShieldCheck } from "lucide-react";
import { ConsultationModal } from "@/components/ConsultationModal";
import { SERVICES } from "@/data/siteContent";

export function AIAutomationView() {
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  const serviceData = SERVICES.find((s) => s.slug === "ai-automation")!;

  return (
    <>
      <main className="flex-1 py-16 sm:py-24 bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {/* HERO */}
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7E7E4] text-[11px] font-bold uppercase tracking-widest text-neutral-700 shadow-2xs">
              <Cpu className="w-3.5 h-3.5 text-blue-600" />
              <span>AI WORKFLOW AUTOMATION</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-900 leading-tight">
              Automate Repetitive Workflows with Intelligent Pipelines.
            </h1>

            <p className="text-base sm:text-xl text-[#555555] max-w-2xl mx-auto leading-relaxed">
              Connect your databases, CRMs, APIs, and AI models into automated pipelines that eliminate manual data entry and accelerate business operations.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsConsultOpen(true)}
                className="w-full sm:w-auto px-8 py-4 bg-neutral-950 text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <span>Automate My Workflows</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-white border border-[#E7E7E4] text-neutral-900 text-xs font-bold uppercase tracking-wider rounded-full hover:bg-neutral-50 transition-colors flex items-center justify-center"
              >
                Speak with an Architect
              </Link>
            </div>
          </div>

          {/* 3 USE CASE HIGHLIGHTS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceData.useCases.map((uc) => (
              <div key={uc.title} className="p-8 bg-white rounded-3xl border border-[#E7E7E4] space-y-3 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center">
                  <Zap className="w-4 h-4 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 tracking-tight">{uc.title}</h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>

          {/* CAPABILITIES */}
          <div className="bg-white rounded-3xl border border-[#E7E7E4] p-8 sm:p-12 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
                Enterprise Automation Capabilities
              </h3>
              <p className="text-sm text-neutral-500">
                End-to-end webhook architecture, error monitoring, and guaranteed delivery.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {serviceData.capabilities.map((cap) => (
                <div key={cap} className="p-4 bg-[#F7F7F5] rounded-2xl border border-[#E7E7E4] flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span className="text-xs font-semibold text-neutral-800">{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-neutral-950 rounded-3xl p-8 sm:p-14 text-white text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Ready to eliminate manual bottlenecks?
            </h2>
            <p className="text-sm text-neutral-400 max-w-xl mx-auto">
              Schedule a strategy call to map your current software stack and identify high-ROI automation opportunities.
            </p>
            <button
              onClick={() => setIsConsultOpen(true)}
              className="px-8 py-4 bg-white text-neutral-950 text-xs font-bold uppercase tracking-wider rounded-full hover:bg-neutral-200 transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Schedule Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </main>

      <ConsultationModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
        defaultService="AI Automation"
      />
    </>
  );
}
