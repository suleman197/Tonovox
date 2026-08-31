"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MessageSquare, Check, ArrowRight, Bot, Send, Sparkles, User, Database, ShieldCheck } from "lucide-react";
import { ConsultationModal } from "@/components/ConsultationModal";

export const ChatbotFeature: React.FC = () => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! Welcome to Tonovox. I can answer questions about our AI agents, check availability, or outline our tech stack. What brings you by today?",
    },
    {
      sender: "user",
      text: "Can the AI chatbot look up real-time inventory from our database?",
    },
    {
      sender: "bot",
      text: "Yes! We connect directly to your PostgreSQL, MongoDB, Shopify, or REST APIs via secure webhooks to provide real-time inventory and pricing lookups.",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isConsultOpen, setIsConsultOpen] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue;
    setMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setInputValue("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Thanks for asking! Our engineering team customizes this entire knowledge-retrieval pipeline for your business. Would you like to schedule a quick 15-minute architecture review?",
        },
      ]);
    }, 700);
  };

  const features = [
    "Instant sub-second conversational responses",
    "Lead generation with automated email validation",
    "24/7 Tier-1 customer support deflection",
    "Intelligent product recommendations & assistance",
    "Zero-hallucination FAQ retrieval automation",
    "Knowledge-base ingestion (PDFs, Notion, Docs)",
    "Human escalation with full conversational history",
  ];

  return (
    <>
      <section className="py-20 sm:py-28 lg:py-32 bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* LEFT: Explanatory Content & Checklist */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7E7E4] text-[11px] font-bold uppercase tracking-widest text-neutral-700 shadow-2xs">
                <MessageSquare className="w-3 h-3 text-indigo-600" />
                <span>AI CHATBOTS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
                Turn Website Visitors Into Conversations.
              </h2>

              <p className="text-base text-[#555555] leading-relaxed">
                Your customers should never have to wait for an answer. Our AI chatbots engage visitors instantly and help businesses capture, support and convert more leads.
              </p>

              {/* Feature Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-xs text-neutral-800 font-medium leading-tight">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setIsConsultOpen(true)}
                  className="px-6 py-3.5 bg-neutral-900 text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 group cursor-pointer shadow-sm"
                >
                  <span>Build My AI Chatbot</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <Link
                  href="/services/ai-chatbots"
                  className="px-6 py-3.5 bg-white border border-[#E7E7E4] text-neutral-900 text-xs font-bold uppercase tracking-wider rounded-full hover:bg-neutral-50 transition-colors flex items-center justify-center shadow-2xs"
                >
                  Explore Chatbot Features
                </Link>
              </div>
            </div>

            {/* RIGHT: Interactive Conversational UI Mockup */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl border border-[#E7E7E4] shadow-2xl overflow-hidden">
                {/* Chat Header */}
                <div className="bg-[#F0F0ED] px-6 py-4 border-b border-[#E7E7E4] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-neutral-950 flex items-center justify-center text-white">
                      <Bot className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-neutral-900">Tonovox Conversational Agent</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      </div>
                      <span className="text-[10px] text-neutral-500">Vector Knowledge Base Synced</span>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-neutral-600 bg-white px-2.5 py-1 rounded-md border border-[#E7E7E4]">
                    <Database className="w-3 h-3 text-indigo-600" />
                    <span>RAG: 0.18s query</span>
                  </div>
                </div>

                {/* Messages Viewport */}
                <div className="p-6 space-y-4 min-h-[280px] max-h-[340px] overflow-y-auto bg-[#FBFBFA]">
                  {messages.map((m, idx) => (
                    <div
                      key={idx}
                      className={`flex items-start gap-2.5 ${
                        m.sender === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      {m.sender === "bot" && (
                        <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center flex-shrink-0 text-xs shadow-2xs">
                          <Bot className="w-3.5 h-3.5" />
                        </div>
                      )}

                      <div
                        className={`text-xs sm:text-sm p-3.5 rounded-2xl max-w-[80%] leading-relaxed ${
                          m.sender === "user"
                            ? "bg-neutral-900 text-white rounded-br-xs"
                            : "bg-white text-neutral-800 border border-[#E7E7E4] rounded-tl-xs shadow-2xs"
                        }`}
                      >
                        {m.text}
                      </div>

                      {m.sender === "user" && (
                        <div className="w-7 h-7 rounded-lg bg-neutral-200 text-neutral-700 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                          <User className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Chat Input Field */}
                <form onSubmit={handleSend} className="p-4 bg-white border-t border-[#E7E7E4] flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Type a question (e.g. Can it connect to Stripe?)..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="flex-1 px-4 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-[#E7E7E4] rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 text-neutral-900 placeholder-neutral-400"
                  />
                  <button
                    type="submit"
                    className="p-2.5 bg-neutral-900 text-white rounded-xl hover:bg-neutral-800 transition-colors flex-shrink-0 cursor-pointer shadow-xs"
                    aria-label="Send message"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
        defaultService="AI Chatbot"
      />
    </>
  );
};
