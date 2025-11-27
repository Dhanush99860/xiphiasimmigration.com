// src/app/(site)/about/page.tsx
import type { Metadata } from "next";
import dynamic from "next/dynamic";

// Above-the-fold hero (can be client or server)
import HeroAbout from "@/components/about/HeroAbout";

// Below-the-fold sections loaded lazily to keep the initial JS bundle small.
const Credibility = dynamic(() => import("@/components/about/Credibility"));
const Services = dynamic(() => import("@/components/about/Services"));
const WhyUs = dynamic(() => import("@/components/about/WhyUs"));
const OutcomesHNIs = dynamic(
  () => import("@/components/about/OutcomesHNIs")
);
const ProgramsSpotlight = dynamic(
  () => import("@/components/about/ProgramsSpotlight")
);
const PrivateClientDesk = dynamic(
  () => import("@/components/about/PrivateClientDesk")
);
const CaseStudies = dynamic(() => import("@/components/about/CaseStudies"));
const Leadership = dynamic(() => import("@/components/about/Leadership"));
const Timeline = dynamic(() => import("@/components/about/Timeline"));
const Compliance = dynamic(() => import("@/components/about/Compliance"));
const FAQ = dynamic(() => import("@/components/about/FAQ"));

export const metadata: Metadata = {
  title:
    "About XIPHIAS Immigration – Residency, Citizenship, Corporate & Skilled Migration",
  description:
    "Trusted by HNIs, investors and enterprises. Licensed, transparent and results-focused immigration advisory with concierge handling and strict privacy.",
  alternates: { canonical: "https://www.xiphiasimmigration.com/about" },
  openGraph: {
    title:
      "About XIPHIAS Immigration – Trusted Partner for HNIs & Corporates",
    description:
      "Discover our mission, outcomes, flagship programs, leadership and why global clients choose us.",
    url: "https://www.xiphiasimmigration.com/about",
    siteName: "XIPHIAS Immigration",
    locale: "en_US",
    images: [
      {
        url: "/og/about.jpg",
        width: 1200,
        height: 630,
        alt: "XIPHIAS Immigration",
      },
    ],
    type: "website",
  },
  robots: { index: true, follow: true },
  twitter: {
    card: "summary_large_image",
    title:
      "About XIPHIAS Immigration – Trusted Partner for HNIs & Corporates",
    description:
      "Licensed. Transparent. Concierge-level advisory for residency, citizenship & enterprise mobility.",
    images: ["/og/about.jpg"],
  },
};

// Route-specific JSON-LD (kept static so it’s safe for SSR)
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "XIPHIAS Immigration",
  url: "https://www.xiphiasimmigration.com",
  logo: "https://www.xiphiasimmigration.com/logo.png",
  sameAs: [
    "https://www.linkedin.com/company/xiphias-immigration/",
    "https://twitter.com/xiphiasimmig",
  ],
  description:
    "Global immigration consultancy for Residency, Citizenship, Corporate Mobility and Skilled Migration.",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-XXXXXXXXXX",
      contactType: "sales",
      areaServed: "Worldwide",
      availableLanguage: ["en"],
    },
  ],
} as const;

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you guarantee visa approvals?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "No. We never guarantee outcomes. We provide regulation-aligned advice, meticulous documentation and transparent eligibility so risks are minimized.",
      },
    },
    {
      "@type": "Question",
      name: "Is my information confidential?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. We operate with strict confidentiality, access controls and encrypted storage to protect HNI data and corporate information.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer paid expert consultations?",
      acceptedAnswer: {
        "@type": "Answer",
        text:
          "Yes. You can book a priority, fee-based session with a senior expert for in-depth strategy and program selection.",
      },
    },
  ],
} as const;

export default function AboutPage() {
  return (
    <>
      {/* JSON-LD for SEO (in-body scripts are fine for schema) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* RootLayout already renders the <main> element, so we just use a div here */}
      <div className="min-h-screen bg-white text-zinc-900 dark:bg-[#0A0B0F] dark:text-white">
        <HeroAbout />
        <Credibility />
        <Services />
        <WhyUs />
        <OutcomesHNIs />
        <ProgramsSpotlight />
        <PrivateClientDesk />
        <CaseStudies />
        <Leadership />
        <Timeline />
        <Compliance />
        <FAQ />
      </div>
    </>
  );
}