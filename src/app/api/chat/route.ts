import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const query = (message || "").toLowerCase();

    let reply =
      "Tonovox Technologies specializes in sub-500ms AI Call Agents, customized RAG Chatbots, and high-performance Next.js Web Platforms. Would you like to schedule a 30-minute consultation with our engineering team?";

    if (query.includes("voice") || query.includes("call agent") || query.includes("phone")) {
      reply =
        "Our AI Call Agents operate with sub-500ms response latency, handle natural interruptions, qualify inbound leads, and sync directly with Google Calendar, Cal.com, or HubSpot to book meetings 24/7.";
    } else if (query.includes("chat") || query.includes("bot") || query.includes("support")) {
      reply =
        "Tonovox AI Chatbots ingest your knowledge base, documentation, and pricing sheets using vector embeddings. They eliminate hallucinations, capture lead emails, and seamlessly transfer to human agents when complex needs arise.";
    } else if (query.includes("web") || query.includes("dev") || query.includes("stack") || query.includes("next")) {
      reply =
        "We build websites and web applications with Next.js App Router, TypeScript, and Tailwind CSS engineered for 99+ Core Web Vitals, sub-second load times, and top conversion rates.";
    } else if (query.includes("pricing") || query.includes("cost") || query.includes("rate")) {
      reply =
        "We structure custom scopes based on your system complexity, voice telephony volume, and integration requirements. You can click 'Book a Consultation' above to receive an exact transparent proposal.";
    } else if (query.includes("book") || query.includes("consult") || query.includes("schedule") || query.includes("meeting")) {
      reply =
        "You can schedule a free 30-minute discovery call right now by clicking 'Book a Consultation' in the navbar. We'll review your architecture and demo live agents tailored to your business.";
    } else if (query.includes("integration") || query.includes("crm") || query.includes("api") || query.includes("hubspot")) {
      reply =
        "We integrate with all major platforms: HubSpot, Salesforce, Google Calendar, Outlook, Twilio, WhatsApp, Stripe, Shopify, and custom REST/GraphQL endpoints.";
    }

    return NextResponse.json({ reply }, { status: 200 });
  } catch (error) {
    console.error("[Chat API Error]", error);
    return NextResponse.json(
      {
        reply:
          "Tonovox Technologies builds AI Call Agents, intelligent Chatbots, and Next.js digital platforms for modern businesses. Let's talk about your project!",
      },
      { status: 200 }
    );
  }
}
