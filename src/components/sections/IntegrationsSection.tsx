import React from "react";
import { INTEGRATIONS } from "@/data/siteContent";
import { Network, Database, Calendar, MessageSquare, Webhook, Zap, Layers, CreditCard } from "lucide-react";

const iconMap = [Network, Calendar, MessageSquare, Webhook, Zap, Database, Layers, CreditCard];

export const IntegrationsSection: React.FC = () => {
  return (
    <section id="integrations" className="py-20 sm:py-28 lg:py-32 bg-[#F7F7F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7E7E4] text-[11px] font-bold uppercase tracking-widest text-neutral-700 shadow-2xs">
            <span>INTEGRATIONS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
            Connect Tonovox With Your Existing Stack.
          </h2>

          <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
            We don't force you into a proprietary silo. Our AI agents and software sync with the business tools, databases, and CRMs you already trust.
          </p>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INTEGRATIONS.map((item, index) => {
            const Icon = iconMap[index % iconMap.length];
            return (
              <div
                key={item.name}
                className="bg-white rounded-3xl border border-[#E7E7E4] p-6 space-y-3 shadow-2xs hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-xl bg-[#F7F7F5] border border-[#E7E7E4] flex items-center justify-center text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-all">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-neutral-100 text-neutral-600">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-neutral-900 tracking-tight pt-1">
                  {item.name}
                </h3>

                <p className="text-xs text-neutral-600 leading-relaxed font-mono">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
