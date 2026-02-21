import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "";

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(input: string): string {
  return input.replace(/[<>]/g, "").trim();
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();
    const { name, email, message } = body;

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Name must be at least 2 characters." },
        { status: 400 },
      );
    }

    if (!email || !validateEmail(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    if (!message || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters." },
        { status: 400 },
      );
    }

    if (message.length > 1000) {
      return NextResponse.json(
        { error: "Message must be under 1000 characters." },
        { status: 400 },
      );
    }

    const cleanName = sanitize(name);
    const cleanMessage = sanitize(message);

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `Portfolio Contact: ${cleanName}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; background: #0f172a; color: #f1f5f9; padding: 32px; border-radius: 12px;">
          <h2 style="color: #818cf8; margin-bottom: 24px; font-size: 20px;">New Contact Form Submission</h2>
          <div style="background: #1e293b; border-radius: 8px; padding: 20px; margin-bottom: 16px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #334155;">
                <td style="padding: 10px 0; color: #64748b; font-size: 13px; width: 80px;">Name</td>
                <td style="padding: 10px 0; color: #f1f5f9; font-weight: 600;">${cleanName}</td>
              </tr>
              <tr style="border-bottom: 1px solid #334155;">
                <td style="padding: 10px 0; color: #64748b; font-size: 13px;">Email</td>
                <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #818cf8;">${email}</a></td>
              </tr>
            </table>
          </div>
          <div style="background: #1e293b; border-radius: 8px; padding: 20px;">
            <p style="color: #64748b; font-size: 13px; margin-bottom: 12px;">MESSAGE</p>
            <p style="color: #cbd5e1; line-height: 1.7; white-space: pre-wrap; margin: 0;">${cleanMessage}</p>
          </div>
          <p style="color: #475569; font-size: 12px; margin-top: 24px;">Reply directly to this email to respond to ${cleanName}.</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 },
    );
  }
}
