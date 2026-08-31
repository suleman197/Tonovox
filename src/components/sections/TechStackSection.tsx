import React from "react";
import { TECH_STACK } from "@/data/siteContent";
import { Code2 } from "lucide-react";

export const TechStackSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-[#F7F7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7E7E4] text-[11px] font-bold uppercase tracking-widest text-neutral-700 shadow-2xs">
            <span>OUR STACK</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
            Built With Modern Technology.
          </h2>

          <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
            We build with modern, production-hardened frameworks and scalable edge infrastructure.
          </p>
        </div>

        {/* Monochrome Tech Stack Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {TECH_STACK.map((tech) => (
            <div
              key={tech.name}
              className="bg-white rounded-2xl border border-[#E7E7E4] p-5 space-y-2 hover:border-neutral-900 hover:shadow-xs transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400">
                  {tech.category}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
              </div>

              <h3 className="text-base font-bold text-neutral-900 font-sans tracking-tight">
                {tech.name}
              </h3>

              <p className="text-[11px] text-neutral-500 line-clamp-2 leading-relaxed">
                {tech.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
