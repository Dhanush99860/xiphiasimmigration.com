// next.config.mjs
import createMDX from "@next/mdx";
import bundleAnalyzer from "@next/bundle-analyzer";

const withMDX = createMDX({ extension: /\.mdx?$/ });

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  outputFileTracingIncludes: { "*": ["./content/**/*"] },

  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 80],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "img.youtube.com" },
      { protocol: "https", hostname: "www.xiphiasimmigration.com" },
      { protocol: "https", hostname: "xiphiasimmigration.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "drive.google.com" },
      { protocol: "https", hostname: "dl.dropboxusercontent.com" },
    ],
  },

  eslint: { ignoreDuringBuilds: true },

  async redirects() {
    return [
      // ✅ Force non-www → www (helps canonical + sitemap consistency)
      {
        source: "/:path*",
        has: [{ type: "host", value: "(?:www\\.)?xiphiasimmigration\\.com" }],
        destination: "https://www.xiphiasimmigration.com/:path*",
        permanent: true,
      },

      // Existing cleanup (keep)
      { source: "/:path*/_country", destination: "/:path*", permanent: true },
      { source: "/:path*/_country/", destination: "/:path*", permanent: true },

      // ✅ Old site URLs (fix 404/5xx noise)
      { source: "/RealEstate/:path*", destination: "/residency", permanent: true },
      { source: "/realestate/:path*", destination: "/residency", permanent: true },

      { source: "/blogs/:path*", destination: "/blog/:path*", permanent: true },
      { source: "/blogs", destination: "/blog", permanent: true },

      // ✅ Consolidate old /insights paths to canonical routes (prevents duplicate indexing)
      { source: "/insights/blog/:slug*", destination: "/blog/:slug*", permanent: true },
      { source: "/insights/news/:slug*", destination: "/news/:slug*", permanent: true },
      { source: "/insights/articles/:slug*", destination: "/articles/:slug*", permanent: true },
      { source: "/insights/media/:slug*", destination: "/media/:slug*", permanent: true },

      { source: "/insights/blog", destination: "/blog", permanent: true },
      { source: "/insights/news", destination: "/news", permanent: true },
      { source: "/insights/articles", destination: "/articles", permanent: true },
      { source: "/insights/media", destination: "/media", permanent: true },

      // ✅ newsroom is old path → make it 301
      { source: "/newsroom", destination: "/news", permanent: true },
    ];
  },

  // ✅ Remove rewrites: redirects are better for SEO (no duplicate URLs)
  async rewrites() {
    return [];
  },
};

export default withBundleAnalyzer(withMDX(nextConfig));