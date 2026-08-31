import React from "react";
import { WHY_US_CARDS } from "@/data/siteContent";
import { Zap, Cpu, Clock, TrendingUp, Network, Target } from "lucide-react";

const icons = [Zap, Cpu, Clock, TrendingUp, Network, Target];

export const WhyTonovox: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-[#F7F7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7E7E4] text-[11px] font-bold uppercase tracking-widest text-neutral-700 shadow-2xs">
            <span>WHY TONOVOX</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
            Technology Built Around Your Business.
          </h2>

          <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
            We reject fragile, superficial gimmicks. We engineer robust, enterprise-grade AI agents and software architectures that deliver tangible ROI.
          </p>
        </div>

        {/* 6 Elegant Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_US_CARDS.map((card, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={card.number}
                className="bg-white rounded-3xl border border-[#E7E7E4] p-8 space-y-6 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black font-mono text-neutral-300 group-hover:text-neutral-950 transition-colors">
                      {card.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#F7F7F5] border border-[#E7E7E4] flex items-center justify-center text-neutral-800 group-hover:bg-neutral-950 group-hover:text-white transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-neutral-900 tracking-tight">
                    {card.title}
                  </h3>

                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E7E7E4] flex items-center justify-between text-[11px] font-semibold text-neutral-400">
                  <span>Tonovox Principle</span>
                  <span className="text-neutral-800">Verified Architecture</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
