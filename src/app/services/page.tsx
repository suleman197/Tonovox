import React from "react";
import Link from "next/link";
import { SERVICES } from "@/data/siteContent";
import { ArrowRight, Check, Sparkles, PhoneCall, MessageSquare, Layout, Cpu } from "lucide-react";

export const metadata = {
  title: "Services | Tonovox Technologies",
  description:
    "Explore our complete suite of AI-powered solutions: AI Call Agents, AI Chatbots, Web Development, and Enterprise Automation.",
};

const iconMap: Record<string, React.ElementType> = {
  "ai-call-agents": PhoneCall,
  "ai-chatbots": MessageSquare,
  "web-development": Layout,
  "ai-automation": Cpu,
};

export default function ServicesPage() {
  return (
    <main className="flex-1 py-16 sm:py-24 bg-[#F7F7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7E7E4] text-[11px] font-bold uppercase tracking-widest text-neutral-700 shadow-2xs">
            <Sparkles className="w-3 h-3 text-blue-600" />
            <span>OUR CORE SERVICES</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 leading-tight">
            AI & Engineering Services Built For Growth.
          </h1>

          <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
            From autonomous voice agents and conversational RAG chatbots to high-velocity web platforms, we engineer modern technology that transforms customer operations.
          </p>
        </div>

        {/* Services List Grid */}
        <div className="space-y-12">
          {SERVICES.map((srv, idx) => {
            const Icon = iconMap[srv.slug] || Cpu;
            return (
              <div
                key={srv.slug}
                id={srv.slug}
                className="bg-white rounded-3xl border border-[#E7E7E4] p-8 sm:p-12 shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                <div className="lg:col-span-6 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-neutral-950 text-white flex items-center justify-center shadow-xs">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 block">
                        {srv.eyebrow}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
                        {srv.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    {srv.description}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={`/services/${srv.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-neutral-950 text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors shadow-sm group"
                    >
                      <span>Explore Dedicated Page</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-6 bg-[#F7F7F5] rounded-2xl border border-[#E7E7E4] p-6 sm:p-8 space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block">
                    Core Capabilities & Features
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {srv.capabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-2 text-xs text-neutral-800 font-medium">
                        <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
