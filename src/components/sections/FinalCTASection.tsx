"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, PhoneCall, Bot, CheckCircle } from "lucide-react";
import { ConsultationModal } from "@/components/ConsultationModal";

export const FinalCTASection: React.FC = () => {
  const [isConsultOpen, setIsConsultOpen] = useState(false);

  return (
    <>
      <section className="py-20 sm:py-28 lg:py-32 bg-[#F7F7F5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-neutral-950 rounded-3xl p-8 sm:p-14 lg:p-20 text-white overflow-hidden shadow-2xl border border-neutral-800">
            {/* Subtle background glow */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-bold uppercase tracking-widest text-neutral-300">
                <Sparkles className="w-3 h-3 text-blue-400" />
                <span>START YOUR TRANSFORMATION</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Ready To Automate Your Business?
              </h2>

              <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                Let's build an AI-powered solution that saves time, improves customer experience and helps your business grow.
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setIsConsultOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-neutral-950 text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group cursor-pointer shadow-lg"
                >
                  <span>Book A Free Consultation</span>
                  <ArrowRight className="w-4 h-4 text-neutral-950 group-hover:translate-x-1 transition-transform" />
                </button>

                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-neutral-900 border border-neutral-700 text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-all flex items-center justify-center gap-2"
                >
                  <span>Talk To Us</span>
                  <ArrowRight className="w-4 h-4 text-neutral-400" />
                </Link>
              </div>

              {/* Guarantees */}
              <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Free Initial Strategy Session</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>No Lock-In Long Term Contracts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Dedicated Senior Architects</span>
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
