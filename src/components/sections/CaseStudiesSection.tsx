import React from "react";
import Link from "next/link";
import { CASE_STUDIES } from "@/data/siteContent";
import { ArrowRight, CheckCircle, Code, Layers } from "lucide-react";

export const CaseStudiesSection: React.FC = () => {
  return (
    <section id="case-studies" className="py-20 sm:py-28 lg:py-32 bg-white border-y border-[#E7E7E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F7F5] border border-[#E7E7E4] text-[11px] font-bold uppercase tracking-widest text-neutral-700">
            <span>SELECTED WORK</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
            Solutions Built To Solve Real Problems.
          </h2>

          <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
            Transparently presented pilot blueprints, concept architectures, and internal benchmarks demonstrating our end-to-end capabilities.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {CASE_STUDIES.map((project) => (
            <div
              key={project.id}
              className="bg-[#F7F7F5] rounded-3xl border border-[#E7E7E4] p-8 flex flex-col justify-between hover:border-neutral-400 transition-all duration-300 group shadow-xs"
            >
              <div className="space-y-6">
                {/* Meta Badges */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-white border border-[#E7E7E4] text-neutral-800">
                    {project.projectType}
                  </span>
                  <span className="text-xs font-semibold text-neutral-500 font-mono">
                    Industry: {project.industry}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 font-medium">
                    {project.tagline}
                  </p>
                </div>

                {/* Problem vs Solution vs Result */}
                <div className="space-y-3 pt-2 text-xs sm:text-sm">
                  <div className="p-3.5 bg-white rounded-xl border border-[#E7E7E4] space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-700 block">
                      Problem Context
                    </span>
                    <p className="text-neutral-700 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div className="p-3.5 bg-white rounded-xl border border-[#E7E7E4] space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 block">
                      Engineered Solution
                    </span>
                    <p className="text-neutral-700 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  <div className="p-3.5 bg-emerald-50/70 rounded-xl border border-emerald-200/80 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">
                      Measured Outcome / Result
                    </span>
                    <p className="text-emerald-950 font-semibold leading-relaxed">
                      {project.result}
                    </p>
                  </div>
                </div>

                {/* Architecture Pills */}
                <div className="pt-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block mb-2">
                    Technology Stack
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.architecture.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-white border border-[#E7E7E4] text-[10px] font-mono text-neutral-700 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-6 mt-6 border-t border-[#E7E7E4]">
                <Link
                  href={`/case-studies#${project.id}`}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-900 group-hover:text-blue-600 transition-colors"
                >
                  <span>Read Architecture Breakdown</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
