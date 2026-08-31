import React from "react";
import Link from "next/link";
import { INDUSTRIES } from "@/data/siteContent";
import {
  Activity,
  Building2,
  ShoppingBag,
  Briefcase,
  Hotel,
  GraduationCap,
  Rocket,
  Wrench,
  ArrowRight,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Activity,
  Building2,
  ShoppingBag,
  Briefcase,
  Hotel,
  GraduationCap,
  Rocket,
  Wrench,
};

export const IndustriesSection: React.FC = () => {
  return (
    <section id="industries" className="py-20 sm:py-28 lg:py-32 bg-[#F7F7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7E7E4] text-[11px] font-bold uppercase tracking-widest text-neutral-700 shadow-2xs">
            <span>INDUSTRIES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
            AI That Adapts To Your Industry.
          </h2>

          <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
            Tailored voice models, conversational knowledge graphs, and automation logic configured for specific sector compliance and customer workflows.
          </p>
        </div>

        {/* 8 Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((ind) => {
            const Icon = iconMap[ind.icon] || Building2;
            return (
              <div
                key={ind.slug}
                className="bg-white rounded-3xl border border-[#E7E7E4] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#F7F7F5] border border-[#E7E7E4] flex items-center justify-center text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 tracking-tight">
                    {ind.name}
                  </h3>

                  <p className="text-xs text-neutral-500 font-medium leading-relaxed">
                    {ind.tagline}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[#E7E7E4] text-xs text-neutral-700">
                    <p className="line-clamp-2">
                      <strong className="text-neutral-900">Voice:</strong> {ind.useCase1}
                    </p>
                    <p className="line-clamp-2">
                      <strong className="text-neutral-900">Chat & Web:</strong> {ind.useCase2}
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-[#E7E7E4]">
                  <Link
                    href={`/industries#${ind.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-900 group-hover:text-blue-600 transition-colors"
                  >
                    <span>View Use Cases</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
