import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, phone, country, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // Create transporter (SMTP2Go)
      const transporter = nodemailer.createTransport({
        host: "mail.smtp2go.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
        logger: true,       // ✅ enables console logging
        debug: true,        // ✅ prints SMTP exchange in console
      });


    // Compose emails
    const adminMail = {
      from: "XIPHIAS IMMIGRATION <donotreply@xiphias.in>",
      to: "immigration@xiphias.in",
      subject: `Website Enquiry – ${name}`,
      html: `
        <h3>New enquiry received</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "—"}</p>
        <p><strong>Country:</strong> ${country || "—"}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    const userMail = {
      from: "XIPHIAS IMMIGRATION <donotreply@xiphias.in>",
      to: email,
      subject: "Thank you for your enquiry – XIPHIAS Immigration",
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for contacting XIPHIAS Immigration. Our team will get back to you shortly.</p>
        <p>Warm regards,<br/>XIPHIAS Immigration Pvt. Ltd</p>
      `,
    };

    await Promise.all([
      transporter.sendMail(adminMail),
      transporter.sendMail(userMail),
    ]);

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Email send error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
