import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  console.log("📨 API /api/enquiry hit");

  try {
    const body = await req.json();
    const { name, phone, email, message, country } = body;

    console.log("✅ Enquiry received from:", name, email);

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // ========== USER TEMPLATE ==========
    const userHtml = `
      <div style="font-family:'Segoe UI',Roboto,Arial,sans-serif;max-width:640px;margin:auto;background:#fff;border:1px solid #eaeaea;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
        <div style="background:linear-gradient(90deg,#002961,#004fa3);color:#fff;text-align:center;padding:20px;">
          <h2 style="margin:0;font-size:20px;">Thank You from XIPHIAS Immigration Pvt. Ltd.</h2>
        </div>
        <div style="padding:24px;color:#333;line-height:1.7;">
          <p style="font-size:16px;">Dear <strong>${name}</strong>,</p>
          <p>Thank you for your enquiry with <strong>XIPHIAS Immigration</strong>. Our team will get back to you soon.</p>

          <div style="background:#f9f9f9;padding:16px 20px;border-left:4px solid #004fa3;margin-top:20px;border-radius:6px;">
            <p style="margin:0 0 8px 0;font-weight:600;">Your Enquiry Details:</p>
            <p style="margin:4px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color:#004fa3;text-decoration:none;">${email}</a></p>
            <p style="margin:4px 0;"><strong>Phone:</strong> ${phone}</p>
            <p style="margin:4px 0;"><strong>Message:</strong> ${message}</p>
          </div>

          <div style="text-align:center;margin-top:30px;">
            <a href="https://www.xiphiasimmigration.com" target="_blank" style="background:#004fa3;color:#fff;padding:12px 28px;text-decoration:none;border-radius:6px;font-weight:600;display:inline-block;">Visit Our Website</a>
          </div>

          <div style="text-align:center;margin:25px 0;">
            <img src="https://www.xiphiasimmigration.com/images/2019-05-02.png" alt="rating" style="width:150px;margin-bottom:8px;">
            <p style="font-size:14px;margin:6px 0;">Please <a href="https://www.xiphiasimmigration.com/xiphias/userratings/Index" style="color:#004fa3;text-decoration:none;font-weight:600;">click here</a> to rate us or click the stars above.</p>
            <p style="font-size:14px;">Refer and Earn vouchers worth Rs. 5,000/-. <a href="https://www.xiphiasimmigration.com/Client-Referrals.html" style="color:#004fa3;text-decoration:none;">Click to Refer</a></p>
          </div>

          <hr style="border:none;border-top:1px solid #eee;margin:30px 0;">

          <div style="text-align:center;font-size:13px;color:#666;">
            <p style="margin:4px 0;"><strong>XIPHIAS Immigration Pvt. Ltd</strong></p>
            <p style="margin:4px 0;">Aurbis Prime, 11, Kaveri Regent Coronet, 80 Feet Road, 3rd Block,<br> Koramangala, Bangalore-560034</p>
            <p style="margin:4px 0;">📞 +91-80-67601000 / 9019400500</p>
            <p style="margin:4px 0;">✉️ <a href="mailto:immigration@xiphias.in" style="color:#004fa3;">immigration@xiphias.in</a> | 🌐 <a href="https://www.xiphiasimmigration.com" style="color:#004fa3;">www.xiphiasimmigration.com</a></p>
            <div style="margin-top:10px;">
              <a href="https://play.google.com/store/apps/details?id=com.xiphiasimmigration.app.android" target="_blank" style="margin-right:10px;">
                <img src="https://www.xiphiasimmigration.com/XIPHIAS/Content/images/android.png" height="28" />
              </a>
              <a href="https://itunes.apple.com/in/app/xiphias-immigration/id1376016286?mt=8" target="_blank">
                <img src="https://www.xiphiasimmigration.com/XIPHIAS/Content/images/ios.png" height="28" />
              </a>
            </div>
          </div>
        </div>
      </div>
    `;

    // ========== ADMIN TEMPLATE ==========
    const adminHtml = `
      <div style="font-family:'Segoe UI',Roboto,Arial,sans-serif;max-width:640px;margin:auto;background:#fff;border:1px solid #eaeaea;border-radius:10px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">
        <div style="background:#004fa3;color:#fff;text-align:center;padding:20px;">
          <h2 style="margin:0;font-size:20px;">📩 New Enquiry from Website</h2>
        </div>
        <div style="padding:24px;color:#333;line-height:1.7;">
          <p>Dear Admin,</p>
          <p>You’ve received a new enquiry from the XIPHIAS website.</p>

          <table style="width:100%;border-collapse:collapse;margin-top:15px;">
            <tr><td style="padding:8px;border-bottom:1px solid #eee;"><strong>Name</strong></td><td style="padding:8px;border-bottom:1px solid #eee;">${name}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;"><strong>Email</strong></td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${email}" style="color:#004fa3;text-decoration:none;">${email}</a></td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;"><strong>Phone</strong></td><td style="padding:8px;border-bottom:1px solid #eee;">${phone}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;"><strong>Country</strong></td><td style="padding:8px;border-bottom:1px solid #eee;">${country || "Not specified"}</td></tr>
            <tr><td style="padding:8px;"><strong>Message</strong></td><td style="padding:8px;">${message}</td></tr>
          </table>

          <div style="text-align:center;margin-top:30px;">
            <a href="https://www.xiphiasimmigration.com/admin" target="_blank" style="background:#004fa3;color:#fff;padding:12px 28px;text-decoration:none;border-radius:6px;font-weight:600;display:inline-block;">Open Admin Portal</a>
          </div>

          <hr style="border:none;border-top:1px solid #eee;margin:30px 0;">
          <p style="font-size:13px;color:#777;text-align:center;">This email was generated automatically by the XIPHIAS Website Enquiry System.</p>
        </div>
      </div>
    `;

    // ========== SEND BOTH EMAILS ==========
    const userMail = {
      from: `"XIPHIAS Immigration" <${process.env.SMTP_USER}>`,
      to: email,
      //cc: "immigration@xiphias.in", // optional CC
      subject: "🙏 Thank You for Your Enquiry",
      html: userHtml,
    };

    const adminMail = {
      from: `"XIPHIAS Website" <${process.env.SMTP_USER}>`,
      to: "immigration@xiphias.in",
      subject: "📩 New Enquiry from Website",
      html: adminHtml,
    };

    await Promise.all([
      transporter.sendMail(adminMail),
      transporter.sendMail(userMail),
    ]);

    console.log("✅ Emails sent to admin and user");
    return NextResponse.json({ ok: true, message: "Emails sent successfully" });
  } catch (err: any) {
    console.error("❌ Error in /api/enquiry:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}