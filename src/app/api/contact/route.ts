import { NextResponse } from "next/server";

// Simple HTML sanitizer to remove script tags or injection attempts
function sanitizeText(str: string): string {
  return str.replace(/[<>]/g, "").trim();
}

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export async function POST(req: Request) {
  try {
    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON payload in request." },
        { status: 400 }
      );
    }

    const { fullName, email, company, phone, serviceNeeded, projectDetails } = body || {};

    // 1. Full Name validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length === 0) {
      return NextResponse.json(
        { error: "Full Name is required." },
        { status: 400 }
      );
    }
    if (fullName.trim().length > 100) {
      return NextResponse.json(
        { error: "Full Name must be under 100 characters." },
        { status: 400 }
      );
    }

    // 2. Email validation
    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { error: "A valid email address is required (e.g. name@company.com)." },
        { status: 400 }
      );
    }
    if (email.trim().length > 150) {
      return NextResponse.json(
        { error: "Email address is too long." },
        { status: 400 }
      );
    }

    // 3. Project details validation
    if (!projectDetails || typeof projectDetails !== "string" || projectDetails.trim().length === 0) {
      return NextResponse.json(
        { error: "Project details are required." },
        { status: 400 }
      );
    }
    if (projectDetails.trim().length > 3000) {
      return NextResponse.json(
        { error: "Project details must be under 3000 characters." },
        { status: 400 }
      );
    }

    // 4. Sanitize and structure lead payload
    const sanitizedName = sanitizeText(fullName);
    const sanitizedEmail = sanitizeText(email).toLowerCase();
    const sanitizedCompany = sanitizeText(company || "Not provided").slice(0, 100);
    const sanitizedPhone = sanitizeText(phone || "Not provided").slice(0, 50);
    const sanitizedService = sanitizeText(serviceNeeded || "General Inquiry").slice(0, 80);
    const sanitizedDetails = sanitizeText(projectDetails);

    const leadRecord = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      fullName: sanitizedName,
      email: sanitizedEmail,
      company: sanitizedCompany,
      phone: sanitizedPhone,
      serviceNeeded: sanitizedService,
      projectDetails: sanitizedDetails,
      createdAt: new Date().toISOString(),
      source: "Tonovox Website Contact Form",
    };

    console.log("[Tonovox Lead Captured]", {
      id: leadRecord.id,
      name: leadRecord.fullName,
      email: leadRecord.email,
      service: leadRecord.serviceNeeded,
      timestamp: leadRecord.createdAt,
    });

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
      { error: "Failed to process request. Please try again or email us directly at tonovoxtechnologies@gmail.com." },
      { status: 500 }
    );
  }
}
