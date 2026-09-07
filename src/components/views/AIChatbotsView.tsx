"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MessageSquare, Bot, Database, UserCheck, ArrowRight, Check, Sparkles, Send, User } from "lucide-react";
import { ConsultationModal } from "@/components/ConsultationModal";
import { SERVICES } from "@/data/siteContent";

export function AIChatbotsView() {
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  const [demoChat, setDemoChat] = useState([
    { sender: "bot", text: "Hello! I am trained on Tonovox's knowledge base. Ask me anything about our AI Chatbots, pricing models, or integration capabilities!" },
  ]);
  const [inputVal, setInputVal] = useState("");

  const serviceData = SERVICES.find((s) => s.slug === "ai-chatbots")!;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    const msg = inputVal;
    setInputVal("");
    setDemoChat((prev) => [...prev, { sender: "user", text: msg }]);

    setTimeout(() => {
      setDemoChat((prev) => [
        ...prev,
        {
          sender: "bot",
          text: `Great question regarding "${msg}". Our chatbots use vector retrieval to access your actual company documentation without hallucinating. We can hook this into your website in just a few days!`,
        },
      ]);
    }, 600);
  };

  return (
    <>
      <main className="flex-1 py-16 sm:py-24 bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {/* HERO */}
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7E7E4] text-[11px] font-bold uppercase tracking-widest text-neutral-700 shadow-2xs">
              <MessageSquare className="w-3.5 h-3.5 text-indigo-600" />
              <span>CONVERSATIONAL AI & RAG</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-900 leading-tight">
              AI Chatbots That Turn Conversations Into Opportunities.
            </h1>

            <p className="text-base sm:text-xl text-[#555555] max-w-2xl mx-auto leading-relaxed">
              Engage high-intent website visitors, answer complex questions with verified knowledge-base citations, and capture sales opportunities 24/7.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setIsConsultOpen(true)}
                className="w-full sm:w-auto px-8 py-4 bg-neutral-950 text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <span>Build My AI Chatbot</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#demo"
                className="w-full sm:w-auto px-8 py-4 bg-white border border-[#E7E7E4] text-neutral-900 text-xs font-bold uppercase tracking-wider rounded-full hover:bg-neutral-50 transition-colors flex items-center justify-center"
              >
                Test Live Chatbot
              </a>
            </div>
          </div>

          {/* INTERACTIVE CHATBOT DEMO */}
          <div id="demo" className="max-w-3xl mx-auto bg-white rounded-3xl border border-[#E7E7E4] shadow-2xl overflow-hidden">
            <div className="bg-[#F0F0ED] px-6 py-4 border-b border-[#E7E7E4] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-900">Tonovox RAG Chat Engine</h3>
                  <span className="text-[10px] text-neutral-500">Vector Embeddings Active</span>
                </div>
              </div>
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded bg-emerald-100 text-emerald-800">
                Online
              </span>
            </div>

            <div className="p-6 space-y-4 min-h-[260px] max-h-[340px] overflow-y-auto bg-[#FBFBFA]">
              {demoChat.map((msg, i) => (
                <div key={i} className={`flex items-start gap-2.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.sender === "bot" && (
                    <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs flex-shrink-0">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}
                  <div
                    className={`text-xs sm:text-sm p-3.5 rounded-2xl max-w-[80%] ${
                      msg.sender === "user"
                        ? "bg-neutral-900 text-white rounded-br-xs"
                        : "bg-white text-neutral-800 border border-[#E7E7E4] rounded-tl-xs shadow-2xs"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSend} className="p-4 bg-white border-t border-[#E7E7E4] flex items-center gap-2">
              <input
                type="text"
                placeholder="Ask a question..."
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                className="flex-1 px-4 py-2.5 text-xs sm:text-sm bg-neutral-50 border border-[#E7E7E4] rounded-xl focus:outline-none focus:border-neutral-900 text-neutral-900"
              />
              <button
                type="submit"
                className="p-2.5 bg-neutral-900 text-white rounded-xl hover:bg-neutral-800 transition-colors cursor-pointer"
                aria-label="Send query"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* 4 PILLARS OF CHATBOT ARCHITECTURE */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Knowledge Base RAG", desc: "Ingests your PDFs, help centers, and database manuals to provide precise citations without guessing." },
              { title: "Lead Qualification", desc: "Interactively asks for budget, timeline, and company size, then syncs with your CRM." },
              { title: "Customer Support", desc: "Instantly handles order lookups, return requests, and FAQ resolutions without support delays." },
              { title: "Human Escalation", desc: "Seamlessly routes high-value opportunities to live agents on Slack, email, or live chat." },
            ].map((pillar) => (
              <div key={pillar.title} className="p-6 bg-white rounded-3xl border border-[#E7E7E4] space-y-3 shadow-xs">
                <h4 className="text-base font-bold text-neutral-900">{pillar.title}</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>

          {/* FEATURES GRID */}
          <div className="bg-white rounded-3xl border border-[#E7E7E4] p-8 sm:p-12 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
                Enterprise Chatbot Capabilities
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceData.features.map((f) => (
                <div key={f} className="p-5 bg-[#F7F7F5] rounded-2xl border border-[#E7E7E4] flex items-start gap-3">
                  <Check className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-neutral-800 leading-snug">
                    {f}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-neutral-950 rounded-3xl p-8 sm:p-14 text-white text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Transform your website with an AI Chatbot
            </h2>
            <p className="text-sm text-neutral-400 max-w-xl mx-auto">
              Book a strategy consultation to explore custom RAG knowledge pipelines.
            </p>
            <button
              onClick={() => setIsConsultOpen(true)}
              className="px-8 py-4 bg-white text-neutral-950 text-xs font-bold uppercase tracking-wider rounded-full hover:bg-neutral-200 transition-colors inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Schedule Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </main>

      <ConsultationModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
        defaultService="AI Chatbot"
      />
    </>
  );
}
