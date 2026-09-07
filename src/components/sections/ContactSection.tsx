"use client";

import React, { useState } from "react";
import {
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { InstagramIcon, FacebookIcon, EmailIcon } from "@/components/SocialIcons";
import { COMPANY_INFO } from "@/data/siteContent";
import confetti from "canvas-confetti";

export const ContactSection: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceNeeded, setServiceNeeded] = useState("AI Call Agent");
  const [projectDetails, setProjectDetails] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim() || !email.trim() || !projectDetails.trim()) {
      setErrorMessage("Please fill in all required fields (Name, Email, Project Details).");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          company,
          phone,
          serviceNeeded,
          projectDetails,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit your inquiry.");
      }

      setIsSuccess(true);
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {
        // silent fail
      }
    } catch (err: unknown) {
      const errorObj = err as Error;
      setErrorMessage(errorObj.message || "An unexpected error occurred. Please reach out via email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 lg:py-32 bg-white border-y border-[#E7E7E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* LEFT: Contact Info & Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7F7F5] border border-[#E7E7E4] text-[11px] font-bold uppercase tracking-widest text-neutral-700">
                <span>CONTACT US</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
                Let's Build Something Intelligent.
              </h2>

              <p className="text-base text-[#555555] leading-relaxed">
                Tell us what you're trying to build, automate or improve. An engineering lead will review your project requirements and respond within 24 hours.
              </p>
            </div>

            {/* Direct Channels Cards */}
            <div className="space-y-4">
              {/* Email Card */}
              <a
                href={COMPANY_INFO.socials.email}
                className="p-5 bg-[#F7F7F5] hover:bg-neutral-100 rounded-2xl border border-[#E7E7E4] flex items-center gap-4 transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-white border border-[#E7E7E4] flex items-center justify-center text-emerald-600 group-hover:scale-105 transition-transform flex-shrink-0">
                  <EmailIcon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] uppercase font-bold text-neutral-400 block">Direct Email</span>
                  <span className="text-xs sm:text-sm font-semibold text-neutral-900 group-hover:text-emerald-700 transition-colors break-all">
                    {COMPANY_INFO.email}
                  </span>
                </div>
              </a>

              {/* Instagram Card */}
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-[#F7F7F5] hover:bg-neutral-100 rounded-2xl border border-[#E7E7E4] flex items-center gap-4 transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-white border border-[#E7E7E4] flex items-center justify-center text-pink-600 group-hover:scale-105 transition-transform flex-shrink-0">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-neutral-400 block">Instagram</span>
                  <span className="text-xs sm:text-sm font-semibold text-neutral-900 group-hover:text-pink-600 transition-colors">
                    @tonovoxtechnologies
                  </span>
                </div>
              </a>

              {/* Facebook Card */}
              <a
                href={COMPANY_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-[#F7F7F5] hover:bg-neutral-100 rounded-2xl border border-[#E7E7E4] flex items-center gap-4 transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-white border border-[#E7E7E4] flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform flex-shrink-0">
                  <FacebookIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-neutral-400 block">Facebook</span>
                  <span className="text-xs sm:text-sm font-semibold text-neutral-900 group-hover:text-blue-600 transition-colors">
                    Tonovox Technologies Official
                  </span>
                </div>
              </a>
            </div>

            {/* Location & Availability */}
            <div className="p-5 bg-white rounded-2xl border border-[#E7E7E4] text-xs text-neutral-600 space-y-2">
              <div className="flex items-center gap-2 font-semibold text-neutral-900">
                <MapPin className="w-4 h-4 text-neutral-500" />
                <span>{COMPANY_INFO.location}</span>
              </div>
              <p className="text-neutral-500 pl-6">
                Operating global AI voice & web infrastructure with round-the-clock monitoring.
              </p>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#F7F7F5] rounded-3xl border border-[#E7E7E4] p-6 sm:p-10 shadow-lg">
              {isSuccess ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">
                    Project Inquiry Received!
                  </h3>
                  <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{fullName}</strong>. Your project specifications have been dispatched to our engineering leads. We will review your architecture requirements and reach back to <strong>{email}</strong> shortly.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setFullName("");
                        setEmail("");
                        setCompany("");
                        setPhone("");
                        setProjectDetails("");
                      }}
                      className="px-6 py-3 bg-neutral-900 text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-neutral-800 transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-[#E7E7E4] pb-4 mb-2">
                    <h3 className="text-xl font-bold text-neutral-900 tracking-tight">
                      Start Your Project Inquiry
                    </h3>
                    <p className="text-xs text-neutral-500">
                      Fields marked with * are required.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 text-xs bg-red-50 text-red-700 rounded-xl border border-red-200 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-full-name" className="block text-xs font-semibold text-neutral-800 mb-1">
                        Full Name *
                      </label>
                      <input
                        id="contact-full-name"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-4 py-3 text-sm bg-white border border-[#E7E7E4] rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 text-neutral-900"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold text-neutral-800 mb-1">
                        Business Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 text-sm bg-white border border-[#E7E7E4] rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 text-neutral-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-company" className="block text-xs font-semibold text-neutral-800 mb-1">
                        Company Name
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        placeholder="Acme Enterprises"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full px-4 py-3 text-sm bg-white border border-[#E7E7E4] rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 text-neutral-900"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold text-neutral-800 mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-3 text-sm bg-white border border-[#E7E7E4] rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 text-neutral-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-service" className="block text-xs font-semibold text-neutral-800 mb-1">
                      Service Needed *
                    </label>
                    <select
                      id="contact-service"
                      value={serviceNeeded}
                      onChange={(e) => setServiceNeeded(e.target.value)}
                      className="w-full px-4 py-3 text-sm bg-white border border-[#E7E7E4] rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 text-neutral-900 font-medium"
                    >
                      <option value="AI Call Agent">AI Call Agent / Voice Automation</option>
                      <option value="AI Chatbot">AI Chatbot / Conversational Support</option>
                      <option value="Web Development">Web Development / Modern Platform</option>
                      <option value="AI Automation">AI Workflow & Backend Automation</option>
                      <option value="API Integration">API & System Integrations</option>
                      <option value="Other">Other / Full AI Transformation</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="contact-details" className="block text-xs font-semibold text-neutral-800 mb-1">
                      Project Details *
                    </label>
                    <textarea
                      id="contact-details"
                      rows={4}
                      required
                      placeholder="Describe your goals, current systems, call volume, or expected deliverables..."
                      value={projectDetails}
                      onChange={(e) => setProjectDetails(e.target.value)}
                      className="w-full px-4 py-3 text-sm bg-white border border-[#E7E7E4] rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 text-neutral-900 resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 bg-neutral-950 text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-neutral-800 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Dispatching Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Project Inquiry</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-neutral-500 text-center mt-2.5">
                      Your privacy is protected. We will never share or sell your business information.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
