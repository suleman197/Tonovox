import { NextResponse } from "next/server";

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

    const { email } = body || {};

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

    const cleanEmail = email.trim().toLowerCase().replace(/[<>]/g, "");

    console.log("[Tonovox Newsletter Subscribed]", {
      email: cleanEmail,
      subscribedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Successfully subscribed to Tonovox AI insights." },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Newsletter API Error]", error);
    return NextResponse.json(
      { error: "Failed to process newsletter subscription." },
      { status: 500 }
    );
  }
}
