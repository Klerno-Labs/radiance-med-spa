import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Honeypot check (server-side)
    if (body._gotcha) {
      return NextResponse.json({ success: true, message: "Spam detected" }, { status: 200 });
    }

    // Basic validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // Email delivery logic would go here (e.g., using SendGrid, Nodemailer)
    // For now, we simulate a successful delivery
    // console.log(`New Inquiry from ${name} (${email}): ${message}`); // Removed per audit

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}