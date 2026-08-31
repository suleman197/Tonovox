import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CallAgentFeature } from "@/components/sections/CallAgentFeature";
import { ChatbotFeature } from "@/components/sections/ChatbotFeature";
import { WebDevFeature } from "@/components/sections/WebDevFeature";
import { WhyTonovox } from "@/components/sections/WhyTonovox";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { UseCasesSection } from "@/components/sections/UseCasesSection";
import { IntegrationsSection } from "@/components/sections/IntegrationsSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { LiveAIDemo } from "@/components/sections/LiveAIDemo";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata = {
  title: "Tonovox Technologies | AI Solutions For Smarter Business",
  description:
    "Tonovox Technologies provides modern AI technology solutions: AI Call Agents, AI Chatbots, Web Development, and AI Automation for high-growth businesses.",
  keywords: [
    "AI Call Agent",
    "AI Voice Agent",
    "AI Chatbot",
    "AI Chatbot Development",
    "AI Automation",
    "AI Automation Services",
    "Web Development",
    "AI Solutions",
    "Business Automation",
    "Tonovox Technologies",
  ],
};

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* 1. HERO */}
      <HeroSection />

      {/* 2. TRUST / CAPABILITIES */}
      <TrustBar />

      {/* 3. SERVICES */}
      <ServicesSection />

      {/* 4. AI CALL AGENT */}
      <CallAgentFeature />

      {/* 5. AI CHATBOT */}
      <ChatbotFeature />

      {/* 6. WEB DEVELOPMENT */}
      <WebDevFeature />

      {/* 7. WHY TONOVOX */}
      <WhyTonovox />

      {/* 8. PROCESS */}
      <ProcessSection />

      {/* 9. INDUSTRIES */}
      <IndustriesSection />

      {/* 10. USE CASES */}
      <UseCasesSection />

      {/* 11. INTEGRATIONS */}
      <IntegrationsSection />

      {/* 12. CASE STUDIES */}
      <CaseStudiesSection />

      {/* 13. TECHNOLOGY */}
      <TechStackSection />

      {/* 14. ABOUT */}
      <AboutSection />

      {/* 15. LIVE AI DEMO */}
      <LiveAIDemo />

      {/* 16. FAQ */}
      <FAQSection />

      {/* 17. FINAL CTA */}
      <FinalCTASection />

      {/* 18. CONTACT */}
      <ContactSection />
    </main>
  );
}
