import React from "react";
import Link from "next/link";
import { USE_CASES } from "@/data/siteContent";
import { ArrowRight, CheckCircle2, Sparkles, PhoneCall, Bot, Zap, Calendar, UserCheck, Shield } from "lucide-react";

export const metadata = {
  title: "Solutions | Tonovox Technologies",
  description:
    "Explore Tonovox AI solutions categorized by business objectives: Lead Qualification, 24/7 Support, Automated Booking, and Workflow Automation.",
};

export default function SolutionsPage() {
  const categories = [
    {
      id: "lead-qualification",
      title: "Lead Qualification & Inbound Screening",
      desc: "Engage prospects instantly within seconds of inquiry. Collect budget, timeline, and requirements before routing to your sales team.",
      benefits: ["Eliminates cold lead drop-off", "Pre-qualifies prospects 24/7", "Syncs directly with CRM"],
      icon: UserCheck,
    },
    {
      id: "customer-support",
      title: "24/7 Tier-1 Autonomous Support",
      desc: "Resolve routine customer inquiries, order updates, and technical FAQs autonomously with zero hold times.",
      benefits: ["70%+ ticket deflection", "Under 500ms response time", "Human handoff with full transcript"],
      icon: Bot,
    },
    {
      id: "appointment-booking",
      title: "Automated Calendar Booking & Rescheduling",
      desc: "Allow callers and website visitors to schedule, confirm, or reschedule appointments in real time without human intervention.",
      benefits: ["Two-way calendar syncing", "Automated SMS/Email reminders", "Zero double-booking"],
      icon: Calendar,
    },
    {
      id: "business-automation",
      title: "End-to-End Business System Automation",
      desc: "Connect your disparate software tools into seamless automated data pipelines that eliminate repetitive manual data entry.",
      benefits: ["Zero data entry errors", "Guaranteed webhook delivery", "Scales with business volume"],
      icon: Zap,
    },
  ];

  return (
    <main className="flex-1 py-16 sm:py-24 bg-[#F7F7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7E7E4] text-[11px] font-bold uppercase tracking-widest text-neutral-700 shadow-2xs">
            <Sparkles className="w-3 h-3 text-blue-600" />
            <span>BUSINESS SOLUTIONS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 leading-tight">
            Solutions Built For Measurable Business ROI.
          </h1>

          <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
            Whether your goal is capturing more inbound leads, eliminating support backlogs, or automating back-office tasks, Tonovox provides production-grade technology.
          </p>
        </div>

        {/* 4 Major Solution Areas */}
        <div className="space-y-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                id={cat.id}
                className="bg-white rounded-3xl border border-[#E7E7E4] p-8 sm:p-12 shadow-xs hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-7 space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F7F7F5] border border-[#E7E7E4] flex items-center justify-center text-neutral-900">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
                    {cat.title}
                  </h2>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    {cat.desc}
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-950 hover:text-blue-600 transition-colors"
                    >
                      <span>Inquire About This Solution</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#F7F7F5] p-6 sm:p-8 rounded-2xl border border-[#E7E7E4] space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block">
                    Core Business Benefits
                  </span>
                  {cat.benefits.map((b) => (
                    <div key={b} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-neutral-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Real-World Use Case Grid */}
        <div className="bg-white rounded-3xl border border-[#E7E7E4] p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              All Supported Solution Frameworks
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {USE_CASES.map((uc) => (
              <div key={uc.title} className="p-6 bg-[#F7F7F5] rounded-2xl border border-[#E7E7E4] space-y-2">
                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white text-neutral-700">
                  {uc.category}
                </span>
                <h4 className="text-sm font-bold text-neutral-900 pt-1">{uc.title}</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
