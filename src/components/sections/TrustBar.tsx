import React from "react";
import { Zap, Clock, Wrench, BarChart3, Code2, ShieldCheck } from "lucide-react";

export const TrustBar: React.FC = () => {
  const capabilities = [
    { label: "AI Automation", icon: Zap },
    { label: "24/7 Availability", icon: Clock },
    { label: "Custom Solutions", icon: Wrench },
    { label: "Scalable Systems", icon: BarChart3 },
    { label: "Modern Technology", icon: Code2 },
    { label: "Enterprise Security", icon: ShieldCheck },
  ];

  return (
    <section className="border-y border-[#E7E7E4] bg-white py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
          {/* Trust Headline */}
          <div className="text-center lg:text-left flex-shrink-0">
            <span className="text-xs uppercase font-bold tracking-widest text-neutral-400 block mb-1">
              Engineered For Reliability
            </span>
            <p className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight">
              Built for businesses that want to move faster.
            </p>
          </div>

          {/* Capability Tags */}
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-2.5 sm:gap-3">
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F7F7F5] border border-[#E7E7E4] text-xs font-semibold text-neutral-800 hover:bg-neutral-100 transition-colors shadow-2xs"
                >
                  <Icon className="w-3.5 h-3.5 text-neutral-600" />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
