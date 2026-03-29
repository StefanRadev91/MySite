import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // Log the contact form submission
    // Replace with Resend/Nodemailer when email provider is configured
    console.log("=== New Contact Form Submission ===");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", body.phone || "N/A");
    console.log("Business:", body.business || "N/A");
    console.log("Has site:", body.hasSite || "N/A");
    console.log("Message:", message);
    console.log("===================================");

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}
