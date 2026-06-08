/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["*.preview.same-app.com"],
  images: {
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "ext.same-assets.com",
      "ugc.same-assets.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/signs",
        destination: "/custom-signs",
        permanent: true,
      },
      {
        source: "/banners",
        destination: "/custom-banners",
        permanent: true,
      },
      {
        source: "/flags",
        destination: "/custom-flags",
        permanent: true,
      },
      {
        source: "/tradeshow",
        destination: "/trade-show",
        permanent: true,
      },
      {
        source: "/stickers-decals",
        destination: "/custom-decals",
        permanent: true,
      },
      {
        source: "/sign-holders",
        destination: "/sign-accessories",
        permanent: true,
      },
      {
        source: "/signs/:path*",
        destination: "/custom-signs/:path*",
        permanent: true,
      },
      {
        source: "/banners/:path*",
        destination: "/custom-banners/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
