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
  Sparkles,
  Check,
} from "lucide-react";

export const metadata = {
  title: "Industries | Tonovox Technologies",
  description:
    "Explore how Tonovox AI Voice Agents, Chatbots, and Software adapt to Healthcare, Real Estate, E-Commerce, Professional Services, and more.",
};

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

export default function IndustriesPage() {
  return (
    <main className="flex-1 py-16 sm:py-24 bg-[#F7F7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7E7E4] text-[11px] font-bold uppercase tracking-widest text-neutral-700 shadow-2xs">
            <Sparkles className="w-3 h-3 text-blue-600" />
            <span>INDUSTRY APPLICATIONS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 leading-tight">
            AI Built Around Your Industry's Workflows.
          </h1>

          <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
            Every vertical has unique compliance constraints, customer expectations, and software ecosystems. We tailor our voice agents, chatbots, and web platforms to your exact operational requirements.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INDUSTRIES.map((ind) => {
            const Icon = iconMap[ind.icon] || Building2;
            return (
              <div
                key={ind.slug}
                id={ind.slug}
                className="bg-white rounded-3xl border border-[#E7E7E4] p-8 sm:p-10 space-y-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-[#F7F7F5] border border-[#E7E7E4] flex items-center justify-center text-neutral-900">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-neutral-900 tracking-tight">{ind.name}</h2>
                      <p className="text-xs text-neutral-500">{ind.tagline}</p>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <div className="p-4 bg-[#F7F7F5] rounded-xl border border-[#E7E7E4] text-xs sm:text-sm space-y-1">
                      <strong className="text-neutral-900 block font-semibold">Voice Automation:</strong>
                      <p className="text-neutral-600">{ind.useCase1}</p>
                    </div>

                    <div className="p-4 bg-[#F7F7F5] rounded-xl border border-[#E7E7E4] text-xs sm:text-sm space-y-1">
                      <strong className="text-neutral-900 block font-semibold">Conversational Web Chat:</strong>
                      <p className="text-neutral-600">{ind.useCase2}</p>
                    </div>

                    <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 font-semibold flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{ind.impact}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E7E7E4]">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-900 hover:text-blue-600 transition-colors"
                  >
                    <span>Request Industry Blueprint</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
