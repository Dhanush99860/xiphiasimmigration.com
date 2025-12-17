// src/lib/seo.tsx

import React from "react";

// Safer JSON stringify for embedding inside <script> tags.
// Escapes "<" to avoid any chance of closing the script tag via string content.
function safeJsonStringify(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

// Inline JSON-LD helper
export function JsonLd({
  data,
  id,
}: {
  data: unknown;
  id?: string;
}) {
  if (!data) return null;

  return (
    <script
      type="application/ld+json"
      {...(id ? { id } : {})}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: safeJsonStringify(data) }}
    />
  );
}

// Breadcrumb JSON-LD
export function breadcrumbLd(items: { name: string; url: string }[]) {
  const clean = (items ?? []).filter((it) => it?.name && it?.url);

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: clean.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

// FAQ JSON-LD
export function faqLd(faqs: { q: string; a: string }[] | undefined) {
  const clean = (faqs ?? []).filter((f) => f?.q && f?.a);
  if (!clean.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: clean.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}