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
      { source: "/:path*/_country",  destination: "/:path*", permanent: true },
      { source: "/:path*/_country/", destination: "/:path*", permanent: true },
      { source: "/newsroom", destination: "/news", permanent: false },
    ];
  },

  async rewrites() {
    return [
      { source: "/insights/news/:slug",     destination: "/news/:slug" },
      { source: "/insights/articles/:slug", destination: "/articles/:slug" },
      { source: "/insights/media/:slug",    destination: "/media/:slug" },
      { source: "/insights/blog/:slug",     destination: "/blog/:slug" },
      { source: "/insights/news",     destination: "/news" },
      { source: "/insights/articles", destination: "/articles" },
      { source: "/insights/media",    destination: "/media" },
      { source: "/insights/blog",     destination: "/blog" },
    ];
  },
};

// IMPORTANT: wrap MDX with bundle analyzer
export default withBundleAnalyzer(withMDX(nextConfig));