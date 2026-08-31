import React from "react";
import { USE_CASES } from "@/data/siteContent";
import { CheckCircle2 } from "lucide-react";

export const UseCasesSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-white border-y border-[#E7E7E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F7F5] border border-[#E7E7E4] text-[11px] font-bold uppercase tracking-widest text-neutral-700">
            <span>REAL-WORLD APPLICATIONS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
            High-Impact Use Cases.
          </h2>

          <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
            Concrete business workflows that Tonovox AI automates from day one to eliminate manual bottlenecks.
          </p>
        </div>

        {/* 3x3 Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {USE_CASES.map((uc, index) => (
            <div
              key={uc.title}
              className="bg-[#F7F7F5] rounded-3xl border border-[#E7E7E4] p-7 space-y-3 hover:bg-white hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-white border border-[#E7E7E4] text-neutral-700">
                  {uc.category}
                </span>
                <span className="text-xs font-bold font-mono text-neutral-400">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 tracking-tight pt-1">
                {uc.title}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {uc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
