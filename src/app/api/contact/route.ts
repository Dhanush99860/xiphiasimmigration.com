// Always run in Node (required if/when you later enable Nodemailer)
export const runtime = "nodejs";

import { NextResponse, type NextRequest } from "next/server";

/* -------------------- Optional: Cloudflare Turnstile -------------------- */
async function verifyTurnstile(token?: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY; // set to enable verification
  if (!secret) return { ok: true }; // CAPTCHA disabled
  if (!token) return { ok: false, error: "Captcha missing." };

  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    });
    const data = (await res.json()) as { success?: boolean; ["error-codes"]?: string[] };
    if (!data.success) {
      return {
        ok: false,
        error: `Captcha failed${data["error-codes"] ? `: ${data["error-codes"].join(", ")}` : ""}`,
      };
    }
    return { ok: true };
  } catch (e: any) {
    return { ok: false, error: e?.message || "Captcha verify failed." };
  }
}

/* ------------------------------ Route: POST ----------------------------- */
export async function POST(req: NextRequest) {
  const t0 = Date.now();

  try {
    const body = await req.json().catch(() => ({} as any));

    const name = String(body?.name ?? "").trim();
    const phone = String(body?.phone ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const message = String(body?.message ?? "").trim();
    const variant = String(body?.variant ?? "contact"); // "full" or "quick" from UI
    const page = String(body?.page ?? "");
    const referrer = String(body?.referrer ?? "");
    const consent = String(body?.consent ?? "");
    const company = String(body?.company ?? ""); // honeypot
    const captchaToken = String(body?.captchaToken ?? "");

    // Honeypot: treat as success but ignore the submission
    if (company) {
      return NextResponse.json(
        { ok: true, email: "skipped", whatsapp: "skipped", tookMs: Date.now() - t0 },
        { status: 200 }
      );
    }

    // Soft guard (you preferred "200 + skipped" for UX)
    if (!name || !phone) {
      return NextResponse.json(
        {
          ok: true,
          warning: "missing required fields (name/phone) – accepted and skipped",
          email: "skipped",
          whatsapp: "skipped",
          tookMs: Date.now() - t0,
        },
        { status: 200 }
      );
    }

    // Optional CAPTCHA (only enforced if TURNSTILE_SECRET_KEY is set)
    const cap = await verifyTurnstile(captchaToken);
    if (!cap.ok) {
      // For a strict block you could return 400; keeping it 400 so UI shows an error
      return NextResponse.json({ error: cap.error || "Captcha failed." }, { status: 400 });
    }

    /* ----------------------------- EMAIL (optional) ----------------------------- */
    let emailStatus: "sent" | "skipped" | "failed" = "skipped";
    const hasEmailCfg =
      !!process.env.SMTP_HOST && !!process.env.EMAIL_FROM && !!process.env.EMAIL_TO;

    if (hasEmailCfg) {
      try {
        // dynamic import so the build doesn't error when nodemailer isn't installed
        const pkgName: string = "nodemailer";
        const nodemailerMod: any = await import(pkgName);
        const nodemailer = nodemailerMod.default ?? nodemailerMod;

        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: Number(process.env.SMTP_PORT || 587),
          secure: Number(process.env.SMTP_PORT || 587) === 465, // implicit TLS on 465
          auth: process.env.SMTP_USER
            ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
            : undefined,
        });

        const subject = `New enquiry (${variant}) — ${name}`;
        const html = `
          <h2>New enquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          ${email ? `<p><strong>Email:</strong> ${escapeHtml(email)}</p>` : ""}
          ${message ? `<p><strong>Message:</strong><br/>${escapeHtml(message)}</p>` : ""}
          <hr/>
          <p><strong>Consent:</strong> ${consent ? "Yes" : "No"}</p>
          ${page ? `<p><strong>Page:</strong> ${escapeHtml(page)}</p>` : ""}
          ${referrer ? `<p><strong>Referrer:</strong> ${escapeHtml(referrer)}</p>` : ""}
        `;

        await transporter.sendMail({
          from: process.env.EMAIL_FROM!,
          to: process.env.EMAIL_TO!,
          subject,
          html,
        });

        emailStatus = "sent";
      } catch {
        emailStatus = "failed"; // nodemailer not installed or SMTP error
      }
    }

    /* ---------------------- WHATSAPP (Meta Cloud API, optional) ---------------------- */
    let whatsappStatus: "sent" | "skipped" | "failed" = "skipped";
    const hasWaCfg =
      !!process.env.META_WABA_TOKEN &&
      !!process.env.META_WABA_PHONE_NUMBER_ID &&
      !!process.env.WHATSAPP_TO;

    if (hasWaCfg) {
      try {
        const url = `https://graph.facebook.com/v20.0/${process.env.META_WABA_PHONE_NUMBER_ID}/messages`;

        const bodyJson = {
          messaging_product: "whatsapp",
          to: normalizePhone(process.env.WHATSAPP_TO!),
          type: "text",
          text: {
            body:
              `New enquiry (${variant})\n` +
              `Name: ${name}\n` +
              `Phone: ${phone}${email ? `\nEmail: ${email}` : ""}${
                message ? `\nMessage: ${message}` : ""
              }` +
              (page ? `\nPage: ${page}` : "") +
              (referrer ? `\nRef: ${referrer}` : ""),
          },
        };

        const r = await fetch(url, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.META_WABA_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bodyJson),
        });

        whatsappStatus = r.ok ? "sent" : "failed";
      } catch {
        whatsappStatus = "failed";
      }
    }

    return NextResponse.json(
      { ok: true, email: emailStatus, whatsapp: whatsappStatus, tookMs: Date.now() - t0 },
      { status: 200 }
    );
  } catch {
    // Final safety net: never fail the client
    return NextResponse.json(
      { ok: true, email: "skipped", whatsapp: "skipped" },
      { status: 200 }
    );
  }
}

/* ------------------------------- helpers ------------------------------- */
function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function normalizePhone(s: string) {
  // WhatsApp Cloud API expects MSISDN digits only
  return s.replace(/[^\d]/g, "");
}