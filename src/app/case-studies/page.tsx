import React from "react";
import Link from "next/link";
import { CASE_STUDIES } from "@/data/siteContent";
import { ArrowRight, CheckCircle2, Sparkles, Layers, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Case Studies & Selected Work | Tonovox Technologies",
  description:
    "Explore real-world architecture case studies and pilot benchmarks built by Tonovox Technologies.",
};

export default function CaseStudiesPage() {
  return (
    <main className="flex-1 py-16 sm:py-24 bg-[#F7F7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7E7E4] text-[11px] font-bold uppercase tracking-widest text-neutral-700 shadow-2xs">
            <Sparkles className="w-3 h-3 text-blue-600" />
            <span>SELECTED WORK & CASE STUDIES</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 leading-tight">
            Architectures Engineered To Solve Real Problems.
          </h1>

          <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
            Transparent case studies detailing technical challenges, custom software architectures, and measured performance outcomes.
          </p>
        </div>

        {/* Case Studies List */}
        <div className="space-y-12">
          {CASE_STUDIES.map((cs) => (
            <div
              key={cs.id}
              id={cs.id}
              className="bg-white rounded-3xl border border-[#E7E7E4] p-8 sm:p-12 shadow-sm hover:shadow-md transition-all space-y-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-[#E7E7E4]">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-blue-600">
                    {cs.industry} • {cs.projectType}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mt-1">
                    {cs.title}
                  </h2>
                </div>
                <span className="text-xs text-neutral-500 font-mono self-start sm:self-center bg-[#F7F7F5] px-3 py-1.5 rounded-lg border border-[#E7E7E4]">
                  {cs.projectType}
                </span>
              </div>

              <p className="text-base text-neutral-700 font-medium">
                {cs.tagline}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-[#F7F7F5] rounded-2xl border border-[#E7E7E4] space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-700 block">
                    1. Problem & Challenge
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    {cs.problem}
                  </p>
                </div>

                <div className="p-6 bg-[#F7F7F5] rounded-2xl border border-[#E7E7E4] space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-700 block">
                    2. Tonovox Solution
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    {cs.solution}
                  </p>
                </div>

                <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block">
                    3. Measured Result
                  </span>
                  <p className="text-xs sm:text-sm text-emerald-950 font-semibold leading-relaxed">
                    {cs.result}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E7E7E4] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 mr-2">
                    Stack:
                  </span>
                  {cs.architecture.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-[#F7F7F5] border border-[#E7E7E4] rounded text-[11px] font-mono text-neutral-700 font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-950 text-white rounded-full text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors shadow-xs"
                >
                  <span>Request Similar Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
