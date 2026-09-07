import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, PhoneCall, Bot, Layout, Search, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Page Not Found (404) | Tonovox Technologies",
  description: "The page you are looking for does not exist or has been moved.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  const quickLinks = [
    { title: "AI Call Agents", href: "/services/ai-call-agents", icon: PhoneCall },
    { title: "AI Chatbots", href: "/services/ai-chatbots", icon: Bot },
    { title: "Web Development", href: "/services/web-development", icon: Layout },
    { title: "Case Studies", href: "/case-studies", icon: Search },
  ];

  return (
    <main className="flex-1 py-20 sm:py-28 bg-[#F7F7F5] flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E7E7E4] text-[11px] font-bold uppercase tracking-widest text-neutral-700 shadow-2xs">
          <span>ERROR 404 • PAGE NOT FOUND</span>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 leading-tight">
            Lost in the Architecture?
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 max-w-xl mx-auto leading-relaxed">
            The page or resource you requested could not be located. It might have been moved or updated.
          </p>
        </div>

        {/* Quick Navigation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto text-left">
          {quickLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.title}
                href={item.href}
                className="p-4 bg-white rounded-2xl border border-[#E7E7E4] flex items-center justify-between hover:border-neutral-900 transition-all group shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#F7F7F5] border border-[#E7E7E4] flex items-center justify-center text-neutral-900">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-neutral-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-0.5 transition-all" />
              </Link>
            );
          })}
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-4 bg-neutral-950 text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-neutral-800 transition-all inline-flex items-center justify-center gap-2 shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-white border border-[#E7E7E4] text-neutral-900 text-xs font-bold uppercase tracking-wider rounded-full hover:bg-neutral-50 transition-colors inline-flex items-center justify-center gap-2"
          >
            <span>Contact Support</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
