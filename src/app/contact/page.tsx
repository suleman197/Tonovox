import React from "react";
import { ContactSection } from "@/components/sections/ContactSection";
import { Sparkles } from "lucide-react";

export const metadata = {
  title: "Contact Tonovox Technologies | Book Strategy Call",
  description:
    "Get in touch with Tonovox Technologies. Request an AI Voice Agent pilot, Chatbot demo, or custom Web Engineering consultation.",
};

export default function ContactPage() {
  return (
    <main className="flex-1 py-12 sm:py-16 bg-[#F7F7F5]">
      <ContactSection />
    </main>
  );
}
