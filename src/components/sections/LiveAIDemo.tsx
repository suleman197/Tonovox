"use client";

import React, { useState } from "react";
import { Bot, Send, Sparkles, PhoneCall, Mic, RefreshCw, CheckCircle2, User, ArrowUpRight } from "lucide-react";
import { AudioWaveform } from "@/components/AudioWaveform";
import { ConsultationModal } from "@/components/ConsultationModal";

interface DemoMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
}

export const LiveAIDemo: React.FC = () => {
  const [messages, setMessages] = useState<DemoMessage[]>([
    {
      id: "1",
      sender: "bot",
      text: "Hi, I'm Tonovox AI. How can I help you today? You can test my knowledge of our AI Voice Agents, Chatbots, or Web Engineering capabilities.",
      timestamp: "Just now",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [activeTab, setActiveTab] = useState<"chat" | "voice">("chat");
  const [isSimulatingCall, setIsSimulatingCall] = useState(false);
  const [callTimer, setCallTimer] = useState("00:32");
  const [isConsultOpen, setIsConsultOpen] = useState(false);

  const quickActions = [
    { label: "Ask About Services", prompt: "What core technology services does Tonovox provide?" },
    { label: "Explore AI Call Agents", prompt: "How do your AI Call Agents handle inbound appointment booking?" },
    { label: "Book A Consultation", prompt: "How do I book a consultation with your engineering team?" },
    { label: "Tech Stack Inquiries", prompt: "What tech stack do you use for high-performance web development?" },
  ];

  const handleSendPrompt = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg: DemoMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: textToSend,
      timestamp: "Just now",
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: textToSend }),
      });

      const data = await res.json();
      const botResponse =
        data.reply ||
        "Tonovox AI delivers autonomous Voice Agents, Conversational Chatbots, and Next.js Web Platforms engineered for maximum conversion. Would you like to schedule a quick 30-min strategy call?";

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: botResponse,
          timestamp: "Just now",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: "Tonovox Technologies specializes in sub-500ms AI Call Agents, custom RAG Chatbots, and high-performance Web Applications. Click 'Book a Consultation' to speak with our architects directly!",
          timestamp: "Just now",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <section id="demo" className="py-20 sm:py-28 lg:py-32 bg-[#F7F7F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E7E7E4] text-[11px] font-bold uppercase tracking-widest text-neutral-700 shadow-2xs">
              <Sparkles className="w-3 h-3 text-blue-600" />
              <span>INTERACTIVE PLAYGROUND</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
              Experience Tonovox AI.
            </h2>

            <p className="text-base sm:text-lg text-[#555555] leading-relaxed">
              Test our conversational engine and voice agent simulation in real time.
            </p>

            {/* Tab Selector */}
            <div className="pt-2 flex justify-center">
              <div className="bg-white p-1 rounded-full border border-[#E7E7E4] shadow-xs inline-flex items-center gap-1">
                <button
                  onClick={() => setActiveTab("chat")}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                    activeTab === "chat"
                      ? "bg-neutral-900 text-white shadow-xs"
                      : "text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  Interactive AI Chatbot
                </button>
                <button
                  onClick={() => setActiveTab("voice")}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                    activeTab === "voice"
                      ? "bg-neutral-900 text-white shadow-xs"
                      : "text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  Voice Agent Simulator
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Interface Box */}
          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#E7E7E4] shadow-2xl overflow-hidden">
            {activeTab === "chat" ? (
              <div>
                {/* Chat Header */}
                <div className="bg-[#F0F0ED] px-6 py-4 border-b border-[#E7E7E4] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-neutral-950 flex items-center justify-center text-white">
                      <Bot className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-neutral-900">TONOVOX AI ASSISTANT</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      </div>
                      <span className="text-[11px] text-neutral-500">Online • Ready to assist</span>
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      setMessages([
                        {
                          id: "1",
                          sender: "bot",
                          text: "Hi, I'm Tonovox AI. How can I help you today? You can test my knowledge of our AI Voice Agents, Chatbots, or Web Engineering capabilities.",
                          timestamp: "Just now",
                        },
                      ])
                    }
                    className="p-2 text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200 rounded-lg transition-colors"
                    title="Reset chat"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                </div>

                {/* Quick Action Prompt Chips */}
                <div className="px-6 py-3 bg-[#F7F7F5] border-b border-[#E7E7E4] overflow-x-auto flex items-center gap-2">
                  <span className="text-[10px] uppercase font-bold text-neutral-400 flex-shrink-0">
                    Quick Prompts:
                  </span>
                  {quickActions.map((qa) => (
                    <button
                      key={qa.label}
                      onClick={() => handleSendPrompt(qa.prompt)}
                      className="px-3 py-1 bg-white hover:bg-neutral-100 border border-[#E7E7E4] rounded-full text-xs font-medium text-neutral-800 transition-colors whitespace-nowrap flex-shrink-0 cursor-pointer"
                    >
                      {qa.label}
                    </button>
                  ))}
                </div>

                {/* Messages Container */}
                <div className="p-6 space-y-4 min-h-[300px] max-h-[380px] overflow-y-auto bg-[#FBFBFA]">
                  {messages.map((m) => (
                    <div
                      key={m.id}
                      className={`flex items-start gap-3 ${
                        m.sender === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      {m.sender === "bot" && (
                        <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-xs shadow-xs">
                          <Bot className="w-4 h-4" />
                        </div>
                      )}

                      <div
                        className={`text-xs sm:text-sm p-4 rounded-2xl max-w-[82%] leading-relaxed ${
                          m.sender === "user"
                            ? "bg-neutral-950 text-white rounded-tr-xs"
                            : "bg-white text-neutral-800 border border-[#E7E7E4] rounded-tl-xs shadow-xs"
                        }`}
                      >
                        {m.text}
                      </div>

                      {m.sender === "user" && (
                        <div className="w-8 h-8 rounded-xl bg-neutral-200 text-neutral-800 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                          <User className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex items-center gap-2 text-xs text-neutral-500 italic p-2">
                      <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce" />
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce [animation-delay:0.2s]" />
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce [animation-delay:0.4s]" />
                      </div>
                      <span>Tonovox AI is formulating response...</span>
                    </div>
                  )}
                </div>

                {/* Input Field */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendPrompt(input);
                  }}
                  className="p-4 bg-white border-t border-[#E7E7E4] flex items-center gap-3"
                >
                  <input
                    type="text"
                    placeholder="Ask about AI call agents, response latency, pricing or custom pipelines..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 px-4 py-3 text-xs sm:text-sm bg-neutral-50 border border-[#E7E7E4] rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-900 text-neutral-900"
                  />
                  <button
                    type="submit"
                    className="px-5 py-3 bg-neutral-950 text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
                  >
                    <span>Ask AI</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            ) : (
              /* VOICE AGENT SIMULATOR TAB */
              <div className="p-8 sm:p-12 text-center space-y-8">
                <div className="max-w-md mx-auto space-y-3">
                  <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto border border-blue-200">
                    <PhoneCall className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">
                    AI Voice Call Simulator
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600">
                    Experience ultra-low latency conversational speech synthesis with automatic calendar reservation.
                  </p>
                </div>

                {/* Interactive Phone Screen Component */}
                <div className="max-w-sm mx-auto p-6 bg-[#F7F7F5] rounded-3xl border border-[#E7E7E4] space-y-5 shadow-inner">
                  <div className="flex justify-between items-center text-xs text-neutral-500 font-mono">
                    <span>CALL IN PROGRESS</span>
                    <span className="font-bold text-neutral-900">{callTimer}</span>
                  </div>

                  <AudioWaveform isActive={isSimulatingCall} barCount={18} className="h-14 bg-neutral-950 border-neutral-800" color="bg-blue-500" />

                  <div className="space-y-2 text-xs text-neutral-700 bg-white p-3.5 rounded-xl border border-[#E7E7E4] text-left">
                    <p className="font-semibold text-neutral-900">Agent Audio Stream:</p>
                    <p className="italic text-neutral-600">
                      "I've reserved your 30-minute discovery consultation for this Thursday at 2:00 PM EST. A calendar invite was sent to your business email."
                    </p>
                  </div>

                  <div className="flex gap-2 justify-center">
                    <button
                      onClick={() => setIsSimulatingCall(!isSimulatingCall)}
                      className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                        isSimulatingCall
                          ? "bg-rose-600 text-white hover:bg-rose-700"
                          : "bg-emerald-600 text-white hover:bg-emerald-700"
                      }`}
                    >
                      {isSimulatingCall ? "End Call Demo" : "Start Voice Call"}
                    </button>

                    <button
                      onClick={() => setIsConsultOpen(true)}
                      className="px-5 py-2.5 bg-neutral-900 text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-neutral-800 transition-colors"
                    >
                      Book Call
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <ConsultationModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
      />
    </>
  );
};
