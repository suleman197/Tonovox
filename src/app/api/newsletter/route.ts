import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required." },
        { status: 400 }
      );
    }

    console.log("[Tonovox Newsletter Subscribed]", {
      email: email.trim().toLowerCase(),
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
