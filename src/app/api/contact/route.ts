import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, company, phone, serviceNeeded, projectDetails } = body;

    // Server-side validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length === 0) {
      return NextResponse.json(
        { error: "Full Name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!projectDetails || typeof projectDetails !== "string" || projectDetails.trim().length === 0) {
      return NextResponse.json(
        { error: "Project details are required." },
        { status: 400 }
      );
    }

    // Structured lead payload (can be connected to MongoDB, CRM, Slack or Resend/SendGrid)
    const leadRecord = {
      id: `lead_${Date.now()}`,
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      company: (company || "Not provided").trim(),
      phone: (phone || "Not provided").trim(),
      serviceNeeded: serviceNeeded || "General Inquiry",
      projectDetails: projectDetails.trim(),
      createdAt: new Date().toISOString(),
      source: "Tonovox Website Contact Form",
    };

    console.log("[Tonovox Lead Captured]", leadRecord);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out. We will respond within 24 hours.",
        leadId: leadRecord.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API Error]", error);
    return NextResponse.json(
      { error: "Failed to process request. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
