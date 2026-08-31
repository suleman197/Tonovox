"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Phone } from "lucide-react";
import { InstagramIcon, FacebookIcon, EmailIcon } from "@/components/SocialIcons";
import { COMPANY_INFO } from "@/data/siteContent";
import { ConsultationModal } from "./ConsultationModal";

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isConsultOpen, setIsConsultOpen] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setIsSubscribed(true);
      fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newsletterEmail }),
      }).catch(() => {});
    }
  };

  return (
    <>
      <footer className="bg-[#111111] text-white pt-16 pb-12 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Row: Brand + Newsletter */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-neutral-800">
            {/* Logo & Tagline */}
            <div className="lg:col-span-5 space-y-5">
              <Link href="/" className="inline-flex items-center gap-3 group">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-neutral-700 bg-black flex-shrink-0">
                  <Image
                    src="/logo.png"
                    alt="Tonovox Technologies Logo"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold tracking-tight text-white font-sans">
                    TONOVOX
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-neutral-400 -mt-0.5">
                    Technologies
                  </span>
                </div>
              </Link>

              <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
                AI-powered solutions for modern businesses. We design and build autonomous AI voice agents, intelligent chatbots, and high-performance digital platforms.
              </p>

              {/* Social Channels with explicit Icons and working links */}
              <div className="flex items-center gap-3 pt-2">
                {/* Instagram */}
                <a
                  href={COMPANY_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Tonovox Technologies on Instagram"
                  className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-pink-500 hover:bg-neutral-800 transition-all group"
                >
                  <InstagramIcon className="w-4 h-4 group-hover:scale-110 transition-transform text-neutral-300 group-hover:text-pink-400" />
                </a>

                {/* Facebook */}
                <a
                  href={COMPANY_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Tonovox Technologies on Facebook"
                  className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-blue-500 hover:bg-neutral-800 transition-all group"
                >
                  <FacebookIcon className="w-4 h-4 group-hover:scale-110 transition-transform text-neutral-300 group-hover:text-blue-400" />
                </a>

                {/* Email */}
                <a
                  href={COMPANY_INFO.socials.email}
                  aria-label="Email Tonovox Technologies"
                  className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-emerald-500 hover:bg-neutral-800 transition-all group"
                >
                  <EmailIcon className="w-4 h-4 group-hover:scale-110 transition-transform text-neutral-300 group-hover:text-emerald-400" />
                </a>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="lg:col-span-7 flex flex-col justify-center bg-neutral-900/60 p-6 sm:p-8 rounded-2xl border border-neutral-800/80">
              <div className="max-w-md space-y-2 mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Stay Updated with AI Insights
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Get our bi-weekly breakdown on voice agents & enterprise AI.
                </h4>
              </div>

              {isSubscribed ? (
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium bg-emerald-950/40 p-3.5 rounded-xl border border-emerald-900/60">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>You are subscribed. We respect your privacy and never spam.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2.5">
                  <input
                    type="email"
                    required
                    placeholder="Enter your work email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 px-4 py-3 text-sm bg-neutral-950 border border-neutral-800 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-white text-neutral-950 text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 flex-shrink-0 cursor-pointer"
                  >
                    Subscribe
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-12 border-b border-neutral-800 text-sm">
            {/* SERVICES */}
            <div className="space-y-3.5">
              <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-200">
                Services
              </h4>
              <ul className="space-y-2.5 text-neutral-400 text-xs sm:text-sm">
                <li>
                  <Link href="/services/ai-call-agents" className="hover:text-white transition-colors">
                    AI Call Agents
                  </Link>
                </li>
                <li>
                  <Link href="/services/ai-chatbots" className="hover:text-white transition-colors">
                    AI Chatbots
                  </Link>
                </li>
                <li>
                  <Link href="/services/web-development" className="hover:text-white transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/ai-automation" className="hover:text-white transition-colors">
                    AI Automation
                  </Link>
                </li>
                <li>
                  <Link href="/services#integrations" className="hover:text-white transition-colors">
                    API Integrations
                  </Link>
                </li>
              </ul>
            </div>

            {/* COMPANY */}
            <div className="space-y-3.5">
              <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-200">
                Company
              </h4>
              <ul className="space-y-2.5 text-neutral-400 text-xs sm:text-sm">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Tonovox
                  </Link>
                </li>
                <li>
                  <Link href="/#process" className="hover:text-white transition-colors">
                    Our Process
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog & Insights
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* SOLUTIONS */}
            <div className="space-y-3.5">
              <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-200">
                Solutions
              </h4>
              <ul className="space-y-2.5 text-neutral-400 text-xs sm:text-sm">
                <li>
                  <Link href="/solutions#lead-qualification" className="hover:text-white transition-colors">
                    Lead Qualification
                  </Link>
                </li>
                <li>
                  <Link href="/solutions#customer-support" className="hover:text-white transition-colors">
                    Customer Support
                  </Link>
                </li>
                <li>
                  <Link href="/solutions#appointment-booking" className="hover:text-white transition-colors">
                    Appointment Booking
                  </Link>
                </li>
                <li>
                  <Link href="/solutions#business-automation" className="hover:text-white transition-colors">
                    Business Automation
                  </Link>
                </li>
                <li>
                  <Link href="/industries" className="hover:text-white transition-colors">
                    By Industry
                  </Link>
                </li>
              </ul>
            </div>

            {/* RESOURCES */}
            <div className="space-y-3.5">
              <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-200">
                Resources
              </h4>
              <ul className="space-y-2.5 text-neutral-400 text-xs sm:text-sm">
                <li>
                  <Link href="/#faq" className="hover:text-white transition-colors">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Tech Articles
                  </Link>
                </li>
                <li>
                  <Link href="/services/ai-call-agents#demo" className="hover:text-white transition-colors">
                    Voice Agent Demo
                  </Link>
                </li>
                <li>
                  <Link href="/services/ai-chatbots#demo" className="hover:text-white transition-colors">
                    Chatbot Sandbox
                  </Link>
                </li>
              </ul>
            </div>

            {/* DIRECT CONTACT */}
            <div className="col-span-2 md:col-span-1 space-y-3.5">
              <h4 className="text-xs font-bold uppercase tracking-widest text-neutral-200">
                Direct Contact
              </h4>
              <ul className="space-y-3 text-neutral-400 text-xs sm:text-sm">
                <li>
                  <a
                    href="mailto:tonovoxtechnologies@gmail.com"
                    className="hover:text-white flex items-center gap-2 transition-colors break-all"
                  >
                    <EmailIcon className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    <span>tonovoxtechnologies@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/tonovoxtechnologies?igsi=MTMzY3NsY3RrcjU4dA=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <InstagramIcon className="w-3.5 h-3.5 text-pink-400 flex-shrink-0" />
                    <span>Instagram Profile</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/share/1C9XerHJRd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white flex items-center gap-2 transition-colors"
                  >
                    <FacebookIcon className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                    <span>Facebook Page</span>
                  </a>
                </li>
                <li className="pt-1">
                  <button
                    onClick={() => setIsConsultOpen(true)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-neutral-800 hover:bg-neutral-700 px-3 py-2 rounded-lg transition-colors cursor-pointer"
                  >
                    <span>Book a Consultation</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Legal */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
            <div>
              © 2026 Tonovox Technologies. All rights reserved.
            </div>

            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="hover:text-neutral-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-neutral-300 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="hover:text-neutral-300 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <ConsultationModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
      />
    </>
  );
};
