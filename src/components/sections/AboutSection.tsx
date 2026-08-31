import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Shield, Compass, Zap, CheckCircle2 } from "lucide-react";

export const AboutSection: React.FC = () => {
  const valuePillars = [
    {
      title: "AI-First Approach",
      desc: "Architected around intelligent models rather than bolted-on as an afterthought.",
    },
    {
      title: "Custom Solutions",
      desc: "No rigid one-size-fits-all templates. Every agent and workflow is tailored to your business.",
    },
    {
      title: "24/7 Automation",
      desc: "Systems that work tirelessly without fatigue, downtime, or missed customer opportunities.",
    },
    {
      title: "Built To Scale",
      desc: "Cloud-native infrastructure that grows seamlessly alongside your customer volume.",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 lg:py-32 bg-white border-y border-[#E7E7E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: Copy and Mission */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F7F5] border border-[#E7E7E4] text-[11px] font-bold uppercase tracking-widest text-neutral-700">
              <span>ABOUT TONOVOX</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
              We Build Technology That Makes Business Simpler.
            </h2>

            <p className="text-base text-[#555555] leading-relaxed">
              Tonovox Technologies is a technology company focused on building AI-powered and modern digital solutions for businesses. From intelligent voice agents and AI chatbots to high-performance websites and web applications, we help businesses automate repetitive work, improve customer experiences and build stronger digital operations.
            </p>

            {/* Mission Callout */}
            <div className="p-6 bg-[#F7F7F5] rounded-2xl border-l-4 border-l-neutral-950 border border-[#E7E7E4] space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                Our Mission
              </span>
              <p className="text-sm font-semibold text-neutral-900 leading-relaxed italic">
                "Our mission is to make powerful AI and software technology accessible to businesses of every size."
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-900 hover:text-blue-600 transition-colors"
              >
                <span>Read Full Company Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* RIGHT: Non-numeric Value Pillars Grid (Section 21) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {valuePillars.map((pillar) => (
              <div
                key={pillar.title}
                className="p-6 bg-[#F7F7F5] rounded-3xl border border-[#E7E7E4] space-y-3 hover:bg-white hover:shadow-sm transition-all duration-200"
              >
                <div className="w-8 h-8 rounded-xl bg-white border border-[#E7E7E4] flex items-center justify-center text-neutral-900">
                  <CheckCircle2 className="w-4 h-4 text-neutral-900" />
                </div>
                <h3 className="text-base font-bold text-neutral-900 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
