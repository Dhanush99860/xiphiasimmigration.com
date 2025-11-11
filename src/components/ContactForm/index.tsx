"use client";

import React, { useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Loader from "@/components/Common/Loader";
import { FiMail, FiUser, FiPhone, FiMessageSquare } from "react-icons/fi";

type Props = {
  variant?: "full" | "quick";
  className?: string;
  heading?: string;
  subheading?: string;
  defaults?: Partial<Record<"name" | "phone" | "email" | "message", string>>;
  apiEndpoint?: string;          // UI only — backend unchanged
  onSuccessRedirect?: string;
  idPrefix?: string;
};

export default function ContactForm({
  variant = "full",
  className = "",
  heading,
  subheading,
  defaults,
  apiEndpoint = "/api/enquiry",
  onSuccessRedirect,
  idPrefix = "contact",
}: Props) {
  const isFull = variant === "full";
  const [loading, setLoading] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [msgLen, setMsgLen] = useState(defaults?.message?.length ?? 0);
  const formRef = useRef<HTMLFormElement | null>(null);
  const router = useRouter();

  const titleId = `${idPrefix}-title`;

  const get = (name: string) =>
    (
      formRef.current?.elements.namedItem(name) as
        | HTMLInputElement
        | HTMLTextAreaElement
        | null
    )?.value || "";

  // validators (unchanged)
  const vName = (s: string) => s.trim().length >= 2;
  const vPhone = (s: string) => /^[0-9+()\-\s]{7,}$/.test(s.trim());
  const vEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(s.trim());
  const vMsg = (s: string) => (isFull ? s.trim().length >= 10 : true);

  const errors = useMemo(() => {
    const e: Record<string, string> = {};
    const name = get("name");
    const phone = get("phone");
    const email = get("email");
    const message = get("message");

    if (touched.name && !vName(name)) e.name = "Please enter at least 2 characters.";
    if (touched.phone && !vPhone(phone))
      e.phone = "Enter a valid phone number (digits, +, -, () allowed).";
    if (isFull && touched.email && !vEmail(email)) e.email = "Enter a valid email.";
    if (isFull && touched.message && !vMsg(message))
      e.message = "Please add at least 10 characters.";
    return e;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [touched, isFull]);

  const markTouched = (name: string) =>
    setTouched((t) => ({ ...t, [name]: true }));

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;

    // Honeypot
    if ((f.elements.namedItem("company") as HTMLInputElement)?.value) return;

    const payload = Object.fromEntries(new FormData(f).entries());
    const n = String(payload.name || "");
    const p = String(payload.phone || "");
    const em = String(payload.email || "");
    const m = String(payload.message || "");

    if (!vName(n) || !vPhone(p) || (isFull && !vEmail(em)) || !vMsg(m)) {
      setTouched({ name: true, phone: true, email: true, message: true });
      toast.error("Please fix the highlighted fields.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          country:
            (formRef.current?.elements.namedItem("country") as HTMLInputElement)
              ?.value || "",
          variant,
          page: typeof window !== "undefined" ? window.location.pathname : "",
          referrer:
            typeof document !== "undefined" ? document.referrer || "" : "",
        }),
      });

      if (!res.ok) {
        let message = "Failed to send message.";
        try {
          const data = await res.json();
          if (data?.error) message = String(data.error);
        } catch {}
        throw new Error(message);
      }

      toast.success(
        isFull
          ? "Your message has been sent. We'll be in touch soon."
          : "Callback request received. We'll call you shortly."
      );

      f.reset();
      setTouched({});
      setMsgLen(0);
      if (onSuccessRedirect) router.push(onSuccessRedirect);
    } catch (err: any) {
      toast.error(err?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const title =
    heading ?? (isFull ? "Book a FREE consultation" : "Request a quick callback");
  const desc =
    subheading ??
    (isFull
      ? "Tell us a bit about your case. An advisor will respond within 24 hours."
      : "Share your name and phone — we’ll call you back soon.");

  return (
    <section
      className={[
        "relative w-full max-w-xl mx-auto",
        "rounded-2xl bg-white dark:bg-neutral-950",
        "ring-1 ring-neutral-200 dark:ring-neutral-800 shadow-sm",
        "p-4 sm:p-6",
        className,
      ].join(" ")}
      aria-labelledby={titleId}
    >
      <CardBG />

      {/* header */}
      <header className="relative">
        <div className="inline-flex items-center gap-2 text-[12px] text-primary">
          <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="font-semibold">Get in touch</span>
        </div>
        <h2
          id={titleId}
          className="mt-1.5 text-lg sm:text-xl font-semibold text-neutral-900 dark:text-neutral-50"
        >
          {title}
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
          {desc}
        </p>
      </header>

      {/* form */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        noValidate
        className="relative mt-3 grid grid-cols-1 gap-3 md:grid-cols-2"
      >
        {/* Honeypot */}
        <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

        <Field
          id={`${idPrefix}-name`}
          name="name"
          label="Full name"
          icon={<FiUser />}
          placeholder="Jane Doe"
          defaultValue={defaults?.name}
          onBlur={() => markTouched("name")}
          invalid={!!errors.name}
          help={errors.name}
          required
          autoComplete="name"
        />

        <Field
          id={`${idPrefix}-phone`}
          name="phone"
          label="Phone number"
          icon={<FiPhone />}
          placeholder="+91 99860 72700"
          defaultValue={defaults?.phone}
          onBlur={() => markTouched("phone")}
          invalid={!!errors.phone}
          help={errors.phone || "Digits, +, -, () are ok."}
          required
          inputMode="tel"
          pattern="[0-9+\-\(\)\s]{7,}"
          autoComplete="tel"
        />

        {isFull && (
          <Field
            id={`${idPrefix}-email`}
            name="email"
            label="Email address"
            icon={<FiMail />}
            placeholder="you@example.com"
            defaultValue={defaults?.email}
            onBlur={() => markTouched("email")}
            invalid={!!errors.email}
            help={errors.email}
            required
            type="email"
            className="md:col-span-2"
            autoComplete="email"
          />
        )}

        {isFull && (
          <Textarea
            id={`${idPrefix}-message`}
            name="message"
            label="Your message"
            icon={<FiMessageSquare />}
            placeholder="Share a few details about your situation…"
            defaultValue={defaults?.message}
            onBlur={() => markTouched("message")}
            onInput={(n) => setMsgLen(n)}
            invalid={!!errors.message}
            help={errors.message || `${msgLen}/1000`}
            rows={4}
            maxLength={1000}
            required
            className="md:col-span-2"
          />
        )}

        {isFull && (
          <label className="md:col-span-2 flex items-start gap-2 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
            <input
              type="checkbox"
              name="consent"
              value="yes"
              className="mt-0.5 h-4 w-4 rounded border-neutral-300 dark:border-neutral-700 text-primary focus:ring-2 focus:ring-primary"
            />
            I agree to be contacted about my inquiry. We never sell your data.
          </label>
        )}

        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={loading}
            aria-busy={loading}
            className={[
              "inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-[15px] font-semibold",
              "bg-primary text-white hover:brightness-110",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
              "disabled:opacity-60 disabled:cursor-not-allowed",
              "transition-all",
            ].join(" ")}
          >
            {loading ? (
              <>
                <Loader />
                <span>Sending…</span>
              </>
            ) : isFull ? (
              "Send message"
            ) : (
              "Request callback"
            )}
          </button>
          <p className="mt-2 text-[11px] sm:text-[12px] text-neutral-600 dark:text-neutral-400">
            We respond within one business day. By submitting, you accept our{" "}
            <a href="/privacy-policy" className="underline text-primary">
              privacy policy
            </a>
            .
          </p>
        </div>
      </form>

      {/* SEO JSON-LD */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact / Consultation",
            description: "Get in touch for an immigration consultation or request a callback.",
          }),
        }}
      />
    </section>
  );
}

/* ====================== Sub-components ====================== */
/* FIX: labels are shown ONLY when empty. As soon as there is a value,
   the label is fully hidden (no overlay while typing). Inputs keep
   symmetric vertical padding so text is visually centered. */

function Field({
  id,
  name,
  label,
  icon,
  placeholder,
  help,
  invalid,
  required,
  defaultValue,
  type = "text",
  className = "",
  inputMode,
  pattern,
  autoComplete,
  onBlur,
}: {
  id: string;
  name: string;
  label: string;
  icon?: React.ReactNode;
  placeholder?: string;
  help?: string;
  invalid?: boolean;
  required?: boolean;
  defaultValue?: string;
  type?: React.HTMLInputTypeAttribute;
  className?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  pattern?: string;
  autoComplete?: string;
  onBlur?: () => void;
}) {
  return (
    <div className={["relative", className].join(" ")}>
      <div className="relative">
        {icon ? (
          <span
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500"
            aria-hidden
          >
            {icon}
          </span>
        ) : null}

        <input
          id={id}
          name={name}
          type={type}
          placeholder=" "
          aria-invalid={invalid || undefined}
          required={required}
          defaultValue={defaultValue}
          inputMode={inputMode}
          pattern={pattern}
          autoComplete={autoComplete}
          onBlur={onBlur}
          className={[
            "peer w-full rounded-xl bg-white dark:bg-neutral-950",
            "ring-1 ring-neutral-300 dark:ring-neutral-700",
            "px-10 py-3 text-sm text-neutral-900 dark:text-neutral-50",
            "focus:outline-none focus:ring-2 focus:ring-primary",
            "placeholder-transparent",
            invalid ? "ring-red-400 focus:ring-red-500" : "",
          ].join(" ")}
        />

        {/* SHOW ONLY WHEN EMPTY (placeholder-shown). Remove the old peer-focus rule. */}
        <label
          htmlFor={id}
          className={[
            "pointer-events-none absolute left-10 bg-white dark:bg-neutral-950 px-1 rounded",
            "text-neutral-500 dark:text-neutral-400 transition-all z-10",
            // hidden by default (when there is a value)
            "opacity-0 top-2 translate-y-0 text-[12px]",
            // when empty: center & show
            "peer-placeholder-shown:opacity-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm",
          ].join(" ")}
        >
          {label}
          {required ? <span className="ml-1 text-red-600">*</span> : null}
        </label>
      </div>

      {help ? (
        <p
          className={[
            "mt-1 text-[11px] sm:text-[12px]",
            invalid ? "text-red-600 dark:text-red-400" : "text-neutral-500 dark:text-neutral-400",
          ].join(" ")}
          role={invalid ? "alert" : undefined}
        >
          {help}
        </p>
      ) : null}
    </div>
  );
}

function Textarea({
  id,
  name,
  label,
  icon,
  placeholder,
  help,
  invalid,
  required,
  defaultValue,
  rows = 4,
  className = "",
  onBlur,
  onInput,
  maxLength,
}: {
  id: string;
  name: string;
  label: string;
  icon?: React.ReactNode;
  placeholder?: string;
  help?: string;
  invalid?: boolean;
  required?: boolean;
  defaultValue?: string;
  rows?: number;
  className?: string;
  onBlur?: () => void;
  onInput?: (length: number) => void;
  maxLength?: number;
}) {
  return (
    <div className={["relative", className].join(" ")}>
      <div className="relative">
        {icon ? (
          <span
            className="pointer-events-none absolute left-3 top-3 text-neutral-400 dark:text-neutral-500"
            aria-hidden
          >
            {icon}
          </span>
        ) : null}

        <textarea
          id={id}
          name={name}
          placeholder=" "
          aria-invalid={invalid || undefined}
          required={required}
          defaultValue={defaultValue}
          rows={rows}
          maxLength={maxLength}
          onBlur={onBlur}
          onInput={(e) => onInput?.((e.target as HTMLTextAreaElement).value.length)}
          className={[
            "peer w-full rounded-xl bg-white dark:bg-neutral-950",
            "ring-1 ring-neutral-300 dark:ring-neutral-700",
            "px-10 py-3 text-sm text-neutral-900 dark:text-neutral-50",
            "focus:outline-none focus:ring-2 focus:ring-primary",
            "resize-y placeholder-transparent",
            invalid ? "ring-red-400 focus:ring-red-500" : "",
          ].join(" ")}
        />

        {/* SHOW ONLY WHEN EMPTY */}
        <label
          htmlFor={id}
          className={[
            "pointer-events-none absolute left-10 bg-white dark:bg-neutral-950 px-1 rounded",
            "text-neutral-500 dark:text-neutral-400 transition-all z-10",
            "opacity-0 top-2 translate-y-0 text-[12px]",
            "peer-placeholder-shown:opacity-100 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm",
          ].join(" ")}
        >
          {label}
          {required ? <span className="ml-1 text-red-600">*</span> : null}
        </label>
      </div>

      {help ? (
        <p
          className={[
            "mt-1 text-[11px] sm:text-[12px]",
            invalid ? "text-red-600 dark:text-red-400" : "text-neutral-500 dark:text-neutral-400",
          ].join(" ")}
          role={invalid ? "alert" : undefined}
        >
          {help}
        </p>
      ) : null}
    </div>
  );
}

/* subtle decorative background */
function CardBG() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute -top-10 -left-10 h-28 w-28 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
      <svg className="absolute inset-0 h-full w-full opacity-[0.04] dark:opacity-[0.07]">
        <defs>
          <pattern id="grid-cf" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M24 0H0V24" fill="none" stroke="currentColor" strokeWidth="0.75" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-cf)" className="text-primary" />
      </svg>
    </div>
  );
}