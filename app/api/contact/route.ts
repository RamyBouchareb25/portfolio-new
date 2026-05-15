import { NextResponse } from "next/server";
import { getAbout } from "@/lib/db";

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  website?: string;
};

const SUBJECT_LABELS: Record<string, string> = {
  consulting: "Infrastructure Consulting",
  job: "Job Opportunity",
  collaboration: "Collaboration / OSS",
  speaking: "Speaking Invitation",
  other: "Other",
};

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;

    if (payload.website) {
      return NextResponse.json({ success: true });
    }

    const name = payload.name?.trim();
    const email = payload.email?.trim();
    const subjectKey = payload.subject?.trim();
    const message = payload.message?.trim();

    if (!name || !email || !subjectKey || !message) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields." },
        { status: 400 },
      );
    }

    const about = await getAbout();
    const recipientEmail =
      process.env.CONTACT_TO_EMAIL || about?.email || undefined;

    if (!recipientEmail) {
      return NextResponse.json(
        {
          success: false,
          error:
            "No recipient email is configured. Set CONTACT_TO_EMAIL or About.email.",
        },
        { status: 500 },
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const resendFromEmail = process.env.RESEND_FROM_EMAIL;
    const resendFromName = process.env.RESEND_FROM_NAME || "Portfolio Contact";

    if (!resendApiKey || !resendFromEmail) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Missing Resend configuration. Set RESEND_API_KEY and RESEND_FROM_EMAIL.",
        },
        { status: 500 },
      );
    }

    const readableSubject =
      SUBJECT_LABELS[subjectKey] || subjectKey.replace(/_/g, " ");
    const emailSubject = `Portfolio contact: ${readableSubject}`;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `${resendFromName} <${resendFromEmail}>`,
        to: [recipientEmail],
        reply_to: email,
        subject: emailSubject,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          `Subject: ${readableSubject}`,
          "",
          message,
        ].join("\n"),
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
            <h2>New contact form submission</h2>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Subject:</strong> ${escapeHtml(readableSubject)}</p>
            <p><strong>Message:</strong></p>
            <pre style="white-space: pre-wrap; font-family: inherit;">${escapeHtml(message)}</pre>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      return NextResponse.json(
        {
          success: false,
          error: `Resend request failed: ${errorBody}`,
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error ? error.message : "Failed to send message",
      },
      { status: 500 },
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
