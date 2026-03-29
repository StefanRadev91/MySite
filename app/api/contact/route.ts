import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, business, hasSite, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone are required." },
        { status: 400 }
      );
    }

    const hasSiteMap: Record<string, string> = {
      no: "Нямам сайт",
      yes: "Имам сайт",
      outdated: "Имам, но е остарял",
    };

    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "stefan.radev91@gmail.com",
      replyTo: email,
      subject: `Ново запитване от ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9fafb; border-radius: 12px;">
          <h2 style="color: #1a6fd4; margin-bottom: 24px;">Ново запитване от сайта</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #64748b; width: 140px; vertical-align: top;">Име:</td>
              <td style="padding: 10px 0; color: #1a2744; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #64748b; vertical-align: top;">Имейл:</td>
              <td style="padding: 10px 0; color: #1a2744;"><a href="mailto:${email}" style="color: #1a6fd4;">${email}</a></td>
            </tr>
            ${phone ? `<tr>
              <td style="padding: 10px 0; color: #64748b; vertical-align: top;">Телефон:</td>
              <td style="padding: 10px 0; color: #1a2744;">${phone}</td>
            </tr>` : ""}
            ${business ? `<tr>
              <td style="padding: 10px 0; color: #64748b; vertical-align: top;">Бизнес:</td>
              <td style="padding: 10px 0; color: #1a2744;">${business}</td>
            </tr>` : ""}
            ${hasSite ? `<tr>
              <td style="padding: 10px 0; color: #64748b; vertical-align: top;">Сайт:</td>
              <td style="padding: 10px 0; color: #1a2744;">${hasSiteMap[hasSite] ?? hasSite}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 10px 0; color: #64748b; vertical-align: top;">Съобщение:</td>
              <td style="padding: 10px 0; color: #1a2744; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #e8f5ee; border-radius: 8px; border-left: 4px solid #00c853;">
            <p style="margin: 0; color: #1a2744; font-size: 14px;">Можеш да отговориш директно на този имейл — ще отиде при ${name}.</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}
