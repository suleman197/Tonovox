import React from "react";
import { PROCESS_STEPS } from "@/data/siteContent";

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-20 sm:py-28 lg:py-32 bg-white border-y border-[#E7E7E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F7F5] border border-[#E7E7E4] text-[11px] font-bold uppercase tracking-widest text-neutral-700">
            <span>OUR PROCESS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
            From Idea To Intelligent Solution.
          </h2>

          <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
            A disciplined engineering lifecycle designed for rapid deployment, security, and measurable operational impact.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="bg-[#F7F7F5] rounded-3xl border border-[#E7E7E4] p-8 space-y-4 relative overflow-hidden group hover:bg-white hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl font-black font-mono text-neutral-400 group-hover:text-neutral-900 transition-colors">
                  {step.number}
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-300 group-hover:bg-blue-600 transition-colors" />
              </div>

              <h3 className="text-xl font-bold text-neutral-900 tracking-tight">
                {step.title}
              </h3>

              <p className="text-sm text-neutral-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
