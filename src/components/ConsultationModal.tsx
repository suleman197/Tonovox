"use client";

import React, { useState, useEffect } from "react";
import { X, Calendar, Clock, CheckCircle2, Sparkles, ArrowRight, Loader2 } from "lucide-react";
import confetti from "canvas-confetti";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultService = "AI Call Agent",
}) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState(defaultService);
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("10:00 AM EST");
  const [projectNotes, setProjectNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (defaultService) {
      setService(defaultService);
    }
  }, [defaultService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) {
      setError("Please provide your full name and a valid business email.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          company,
          serviceNeeded: service,
          projectDetails: `CONSULTATION REQUEST: Preferred Date: ${preferredDate || "Earliest Available"} at ${preferredTime}. Notes: ${projectNotes}`,
        }),
      });

      if (!res.ok) {
        throw new Error("Unable to reserve your consultation at this moment. Please try again.");
      }

      setIsSuccess(true);
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 },
        });
      } catch {
        // silent fail if canvas not ready
      }
    } catch (err: unknown) {
      const errorObj = err as Error;
      setError(errorObj.message || "Something went wrong. Please reach us directly at tonovoxtechnologies@gmail.com");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFullName("");
    setEmail("");
    setPhone("");
    setCompany("");
    setProjectNotes("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm transition-all duration-300">
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-[#E7E7E4] overflow-hidden transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E7E7E4] bg-[#F7F7F5]">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2.5 w-2.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-600">
              Schedule Free 30-Min Strategy Call
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-500 hover:text-neutral-900 rounded-full hover:bg-neutral-200 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
          {isSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">
                Consultation Reserved!
              </h3>
              <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{fullName}</strong>. A senior technology architect from Tonovox has received your request and will confirm your calendar invitation at <strong>{email}</strong> shortly.
              </p>
              <div className="p-4 bg-[#F7F7F5] rounded-xl border border-[#E7E7E4] text-xs text-neutral-700 text-left max-w-sm mx-auto space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Service:</span>
                  <span className="font-semibold">{service}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Proposed Slot:</span>
                  <span className="font-semibold">{preferredDate || "Upcoming available slot"} ({preferredTime})</span>
                </div>
              </div>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-3 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-colors shadow-sm"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-neutral-900 tracking-tight">
                  Book a Free Strategy Consultation
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600">
                  Discuss your AI, voice agent, or web architecture goals with our engineering leads. No sales fluff.
                </p>
              </div>

              {error && (
                <div className="p-3 text-xs bg-red-50 text-red-700 rounded-lg border border-red-200">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-[#E7E7E4] rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-[#E7E7E4] rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Corp"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-[#E7E7E4] rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    Phone / WhatsApp (Optional)
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-[#E7E7E4] rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Primary Solution Needed *
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-[#E7E7E4] rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900"
                >
                  <option value="AI Call Agent">AI Call Agents / Voice AI</option>
                  <option value="AI Chatbot">AI Chatbots & Conversational RAG</option>
                  <option value="Web Development">Web Development & Custom Platforms</option>
                  <option value="AI Automation">AI Workflow & Backend Automation</option>
                  <option value="API Integration">API & Business-System Integrations</option>
                  <option value="Multiple / End-to-End">Complete End-to-End AI Transformation</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-[#E7E7E4] rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-neutral-500" />
                    Time Window
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-[#E7E7E4] rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900"
                  >
                    <option value="9:00 AM EST">Morning (9:00 AM – 12:00 PM EST)</option>
                    <option value="1:00 PM EST">Afternoon (1:00 PM – 4:00 PM EST)</option>
                    <option value="5:00 PM EST">Evening (5:00 PM – 7:00 PM EST)</option>
                    <option value="Flexible">Earliest Available Time</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Brief Project Overview (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us about your call volume, website goals, or existing software stack..."
                  value={projectNotes}
                  onChange={(e) => setProjectNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-[#E7E7E4] rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 bg-neutral-900 text-white text-sm font-semibold rounded-xl hover:bg-neutral-800 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-70 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Scheduling Your Call...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-blue-400" />
                      Confirm Consultation Booking
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
                <p className="text-[11px] text-neutral-500 text-center mt-2.5">
                  100% Free • No commitment • Direct conversation with engineers
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
