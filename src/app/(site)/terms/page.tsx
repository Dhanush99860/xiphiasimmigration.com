// FILE: src/app/(site)/terms/page.tsx
// Terms & Conditions — black/white theme only, fully responsive, SEO+JSON-LD, with Breadcrumb.
// Uses your Breadcrumb component: import Breadcrumb from "@/components/Common/Breadcrumb";

import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";
import React from "react";

// ───────────────── SEO METADATA ─────────────────
export const metadata: Metadata = {
  title: "Terms & Conditions · XIPHIAS Immigration Private Limited",
  description:
    "The terms that govern your use of our website and services, including consulting scope, fees and refunds, acceptable use, disclaimers, and dispute resolution.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Terms & Conditions · XIPHIAS Immigration Private Limited",
    description:
      "Read the terms that govern your use of our website and consulting services.",
    url: "/terms",
    type: "article",
  },
  twitter: { card: "summary" },
};

// ──────────────── SMALL UI HELPERS (black/white only) ────────────────
const Section = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-28">
    <h2
      id={`${id}-title`}
      className="text-xl md:text-2xl font-semibold tracking-tight mb-3 text-black dark:text-white"
    >
      {title}
    </h2>
    <div className="max-w-none text-black dark:text-white">{children}</div>
  </section>
);

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-black/10 dark:border-white/20 bg-white/80 dark:bg-black/40 p-4 backdrop-blur-sm text-black dark:text-white">
    {children}
  </div>
);

// ───────────────── PAGE ─────────────────
export default function TermsPage() {
  const effectiveDate = "05 Nov 2025";
  const company = {
    name: "XIPHIAS Immigration Private Limited",
    site: "https://www.xiphiasimmigration.com",
    legalEmail: "support@immigration.in", // keep in sync with your Cookies page until you update
    registeredOffice:
      "8th Floor, BMTC Bus Depot Complex, 80 Feet Main Road, 6th Block, Koramangala, Bengaluru, Karnataka 560095, India",
    jurisdiction: "Bengaluru, Karnataka, India",
  } as const;

  const toc = [
    { id: "acceptance", label: "Acceptance of Terms" },
    { id: "definitions", label: "Definitions" },
    { id: "eligibility", label: "Eligibility & Accounts" },
    { id: "scope", label: "Scope of Services" },
    { id: "noguarantee", label: "No Guarantee / Not Legal Advice" },
    { id: "client-duties", label: "Client Responsibilities" },
    { id: "fees", label: "Fees, Payments & Taxes" },
    { id: "refunds", label: "Cancellations & Refunds" },
    { id: "thirdparty", label: "Govt & Third-Party Fees" },
    { id: "ip", label: "Intellectual Property" },
    { id: "acceptable-use", label: "Acceptable Use" },
    { id: "user-content", label: "User Content & Reviews" },
    { id: "privacy", label: "Privacy" },
    { id: "disclaimers", label: "Disclaimers" },
    { id: "liability", label: "Limitation of Liability" },
    { id: "indemnity", label: "Indemnity" },
    { id: "force-majeure", label: "Force Majeure" },
    { id: "termination", label: "Termination" },
    { id: "law", label: "Governing Law & Disputes" },
    { id: "changes", label: "Changes to these Terms" },
    { id: "contact", label: "Contact" },
  ];

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms & Conditions",
    url: `${company.site}/terms`,
    dateModified: "2025-11-05",
    isPartOf: { "@type": "WebSite", name: company.name, url: company.site },
  };

  const jsonLdBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${company.site}/` },
      { "@type": "ListItem", position: 2, name: "Terms & Conditions", item: `${company.site}/terms` },
    ],
  };

  // Optional: a tiny FAQ for rich results
  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you guarantee visa approval or timelines?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "No. Immigration decisions are made solely by the relevant government authorities. We provide consulting services to prepare and submit applications, but outcomes and timelines are outside our control.",
        },
      },
      {
        "@type": "Question",
        name: "Are service fees refundable?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Our professional fees compensate time and expertise and are generally non-refundable once work begins. Government and third-party fees are controlled by those entities. See the Cancellations & Refunds section for details.",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-neutral-50 dark:from-black dark:to-neutral-900 text-black dark:text-white">
      {/* Skip link for keyboard users */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-black focus:text-white focus:px-3 focus:py-2"
      >
        Skip to content
      </a>

      {/* Breadcrumbs */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-6">
        <Breadcrumb />
      </div>

      {/* Hero */}
      <header className="border-b border-black/10 dark:border-white/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 md:py-14">
          <div className="flex items-start justify-between gap-6">
            <div className="max-w-3xl">
              <h1 className="text-2xl md:text-4xl font-semibold tracking-tight">
                Terms & Conditions
              </h1>
              <p className="mt-2 text-sm/6 opacity-80">Effective: {effectiveDate}</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <Card>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Consulting scope & client responsibilities</li>
                    <li>No guarantee of outcomes or timelines</li>
                    <li>Fees, taxes, refunds & third-party charges</li>
                    <li>Acceptable use, IP, and dispute resolution</li>
                  </ul>
                </Card>
                <Card>
                  <p className="text-sm">
                    See also our{" "}
                    <Link href="/privacy-policy" className="underline">
                      Privacy Policy
                    </Link>
                    ,{" "}
                    <Link href="/cookies" className="underline">
                      Cookies Policy
                    </Link>{" "}
                    and{" "}
                    <Link href="/refund-policy" className="underline">
                      Refund Policy
                    </Link>
                    .
                  </p>
                </Card>
              </div>
            </div>

            {/* Right rail (desktop TOC) */}
            <aside className="hidden lg:block w-64 shrink-0">
              <nav aria-label="On this page" className="sticky top-28">
                <p className="text-xs uppercase tracking-wide opacity-70 mb-2">On this page</p>
                <ul className="space-y-1">
                  {toc.map((n) => (
                    <li key={n.id}>
                      <a
                        href={`#${n.id}`}
                        className="block rounded-md px-2 py-1.5 text-sm hover:bg-black/5 dark:hover:bg-white/10"
                      >
                        {n.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
          </div>
        </div>
      </header>

      {/* Body */}
      <div id="content" className="mx-auto max-w-7xl px-4 sm:px-6 py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-9 space-y-10">
            <Section id="acceptance" title="1. Acceptance of these Terms">
              <p>
                These Terms &amp; Conditions (“<strong>Terms</strong>”) govern your access to and
                use of the website located at{" "}
                <a className="underline" href={company.site}>
                  {company.site}
                </a>{" "}
                and any related pages, tools, and services (collectively, the “<strong>Site</strong>”),
                provided by {company.name} (“<strong>we</strong>”, “<strong>us</strong>”, “<strong>our</strong>”).
                By accessing or using the Site, booking a consultation, or engaging our services,
                you agree to be bound by these Terms. If you are entering into these Terms on behalf
                of a company or other legal entity, you represent that you have authority to bind
                such entity.
              </p>
            </Section>

            <Section id="definitions" title="2. Definitions">
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>“Services”</strong> means our immigration and related consulting, document
                  preparation, application support, appointments scheduling and other advisory
                  offerings as described on the Site or in an engagement/retainer letter.
                </li>
                <li>
                  <strong>“Engagement Letter”</strong> means the written scope, deliverables, fees,
                  and terms agreed with you for specific Services. If there is a conflict, the
                  Engagement Letter prevails for that scope.
                </li>
              </ul>
            </Section>

            <Section id="eligibility" title="3. Eligibility & Accounts">
              <p>
                You must have the legal capacity to contract under the laws that apply to you.
                To use certain features (e.g., client portal), you may need to create an account and
                keep credentials confidential. You are responsible for all activity under your
                account.
              </p>
            </Section>

            <Section id="scope" title="4. Scope of Services">
              <p>
                We provide professional consulting related to immigration pathways, investment or
                study options, and application preparation. We do not issue visas, permits, or
                approvals; all decisions are made by the relevant government authorities. Service
                timelines depend on your timely cooperation and third-party/government processing.
              </p>
            </Section>

            <Section id="noguarantee" title="5. No Guarantee; Not Legal Advice">
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>No outcome guarantee.</strong> We do not guarantee any approval, result,
                  or timeline. Decisions rest solely with government authorities.
                </li>
                <li>
                  <strong>Not a law firm.</strong> Unless expressly stated in writing, we are not a
                  law firm and do not provide legal representation. Our content and consultants’
                  guidance are general information and strategy; they are not legal advice.
                </li>
              </ul>
            </Section>

            <Section id="client-duties" title="6. Client Responsibilities">
              <ul className="list-disc pl-5 space-y-1">
                <li>Provide complete, accurate, and up-to-date information and documents.</li>
                <li>Disclose material facts and promptly notify changes in circumstances.</li>
                <li>
                  Review drafts carefully; you are responsible for the accuracy of applications
                  and statements submitted on your behalf.
                </li>
                <li>
                  Comply with all applicable laws, including anti-bribery and sanctions rules; we
                  will not facilitate improper payments or misrepresentations.
                </li>
              </ul>
            </Section>

            <Section id="fees" title="7. Fees, Payments & Taxes">
              <div className="overflow-x-auto rounded-xl border border-black/10 dark:border-white/20 bg-white/80 dark:bg-black/40 p-4 backdrop-blur-sm">
                <table className="min-w-[720px] w-full text-sm">
                  <thead>
                    <tr>
                      <th className="p-2 text-left font-semibold">Item</th>
                      <th className="p-2 text-left font-semibold">Description</th>
                      <th className="p-2 text-left font-semibold">When Due</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-black/10 dark:border-white/20">
                      <td className="p-2">Professional Fees</td>
                      <td className="p-2">
                        Our consulting charges for the scope in your Engagement Letter; does not
                        include government, translation, courier, or third-party vendor charges.
                      </td>
                      <td className="p-2">As per invoice/Engagement Letter</td>
                    </tr>
                    <tr className="border-t border-black/10 dark:border-white/20">
                      <td className="p-2">Government/Vendor Fees</td>
                      <td className="p-2">
                        Fees charged by authorities (e.g., visa application centers, ECA bodies) or
                        vendors; amounts and policies are set by those third parties.
                      </td>
                      <td className="p-2">Before filing/booking, as applicable</td>
                    </tr>
                    <tr className="border-t border-black/10 dark:border-white/20">
                      <td className="p-2">Taxes</td>
                      <td className="p-2">
                        All fees are exclusive of taxes (e.g., GST) unless expressly stated; you are
                        responsible for applicable taxes.
                      </td>
                      <td className="p-2">As applicable</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm">
                Invoices are payable in the currency stated. Late payments may incur reasonable
                administrative charges and/or suspension of work until cured.
              </p>
            </Section>

            <Section id="refunds" title="8. Cancellations & Refunds">
              <p>
                Our professional fees compensate time, expertise, and allocated resources, and are
                generally non-refundable once work has commenced. Where permitted in your Engagement
                Letter or under our{" "}
                <Link href="/refund-policy" className="underline">
                  Refund Policy
                </Link>
                , we may provide a partial refund for unperformed portions of services that are
                within our control. Government and third-party fees follow their own policies.
              </p>
            </Section>

            <Section id="thirdparty" title="9. Government & Third-Party Services">
              <p>
                We may help you interact with third parties (e.g., medical exams, translations,
                ECAs, courier, payment gateways). You authorize us to share necessary information to
                enable such services. Third-party terms and privacy policies apply; we are not
                responsible for their acts, omissions, or service levels.
              </p>
            </Section>

            <Section id="ip" title="10. Intellectual Property">
              <p>
                The Site, its content, design, logos, and software are owned by or licensed to us
                and protected by IP laws. You receive a limited, revocable, non-transferable license
                to access and use the Site for personal or internal business purposes. You may not
                copy, modify, reverse engineer, or commercially exploit Site content except as
                permitted by law or with our prior written consent.
              </p>
            </Section>

            <Section id="acceptable-use" title="11. Acceptable Use">
              <ul className="list-disc pl-5 space-y-1">
                <li>No unlawful, fraudulent, misleading, or harmful activity.</li>
                <li>No scraping, automated data collection, or load testing without consent.</li>
                <li>No uploading malware or interfering with security or access controls.</li>
                <li>No impersonation or misrepresentation of identity or eligibility.</li>
              </ul>
            </Section>

            <Section id="user-content" title="12. User Content & Reviews">
              <p>
                If you post or submit reviews, testimonials, or materials, you grant us a
                non-exclusive, worldwide, royalty-free license to use, host, reproduce, and display
                such content in connection with the Site and our Services, subject to applicable
                law. Please do not submit content you do not own or that violates others’ rights.
              </p>
            </Section>

            <Section id="privacy" title="13. Privacy">
              <p>
                Our{" "}
                <Link href="/privacy-policy" className="underline">
                  Privacy Policy
                </Link>{" "}
                explains how we collect and process personal data, including compliance with
                applicable laws such as India’s Digital Personal Data Protection Act, 2023, where
                relevant. You agree to that policy and to our{" "}
                <Link href="/cookies" className="underline">
                  Cookies Policy
                </Link>
                .
              </p>
            </Section>

            <Section id="disclaimers" title="14. Disclaimers">
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  The Site is provided on an “as is” and “as available” basis. We disclaim all
                  warranties to the maximum extent permitted by law, including implied warranties of
                  merchantability, fitness for a particular purpose, and non-infringement.
                </li>
                <li>
                  Information on the Site may be general and subject to change without notice;
                  immigration rules and fees are set by governments and may change frequently.
                </li>
              </ul>
            </Section>

            <Section id="liability" title="15. Limitation of Liability">
              <p>
                To the fullest extent permitted by law, we will not be liable for indirect,
                incidental, consequential, special, punitive, or exemplary damages, or for loss of
                profits, data, goodwill, or opportunity, even if advised of the possibility. Our
                aggregate liability arising out of or relating to the Site or Services shall not
                exceed the amount you paid to us for the specific Service giving rise to the claim
                in the 6 months preceding the event.
              </p>
            </Section>

            <Section id="indemnity" title="16. Indemnity">
              <p>
                You agree to defend, indemnify, and hold harmless {company.name}, its directors,
                officers, employees, and agents from and against claims, damages, losses, and
                expenses (including reasonable legal fees) arising from your breach of these Terms,
                your misuse of the Site/Services, or your violation of law or third-party rights.
              </p>
            </Section>

            <Section id="force-majeure" title="17. Force Majeure">
              <p>
                We are not responsible for delays or failures caused by events beyond our reasonable
                control, including governmental actions, changes to immigration rules, strikes,
                epidemics, system failures, or network outages.
              </p>
            </Section>

            <Section id="termination" title="18. Termination">
              <p>
                We may suspend or terminate access to the Site or Services (in whole or part) if you
                breach these Terms, fail to pay, or where required by law. You may stop using the
                Site at any time. Sections intended to survive (e.g., IP, Disclaimers, Liability,
                Indemnity, Law & Disputes) survive termination.
              </p>
            </Section>

            <Section id="law" title="19. Governing Law & Disputes">
              <p>
                These Terms are governed by the laws of India, without regard to conflict of laws
                principles. Subject to any mandatory arbitration clause in your Engagement Letter,
                the courts located in {company.jurisdiction} shall have exclusive jurisdiction.
              </p>
            </Section>

            <Section id="changes" title="20. Changes to these Terms">
              <p>
                We may update these Terms from time to time. If changes are material, we will post a
                prominent notice on this page. The date at the top indicates the last update.
                Continued use after changes means you accept the updated Terms.
              </p>
            </Section>

            <Section id="contact" title="21. Contact">
              <p className="mb-3">
                Questions about these Terms? Email{" "}
                <a className="underline" href={`mailto:${company.legalEmail}`}>
                  {company.legalEmail}
                </a>{" "}
                or write to our registered office:
              </p>
              <Card>
                <p className="text-sm">
                  <strong>{company.name}</strong>
                  <br />
                  {company.registeredOffice}
                </p>
              </Card>
            </Section>
          </div>

          {/* Mobile TOC */}
          <div className="lg:col-span-3">
            <div className="lg:hidden sticky top-24 border rounded-xl border-black/10 dark:border-white/20 bg-white/80 dark:bg-black/40 p-4 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-wide opacity-70 mb-2">On this page</p>
              <div className="flex flex-wrap gap-2">
                {toc.map((n) => (
                  <a
                    key={n.id}
                    href={`#${n.id}`}
                    className="inline-flex items-center rounded-md border px-2 py-1 text-xs border-black/15 dark:border-white/25 hover:bg-black/5 dark:hover:bg-white/10"
                  >
                    {n.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* JSON-LD (SEO) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
    </main>
  );
}