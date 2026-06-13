import type { Metadata, Viewport } from "next";
import { Open_Sans, Poppins } from "next/font/google";
import "./globals.css";
import { ClientBody } from "./ClientBody";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ff2d78",
};

export const metadata: Metadata = {
  title: "Custom Signs, Banners & Flags Oakland Park FL | Nano Signs",
  description:
    "Looking for custom signs, vinyl banners, vehicle wraps, or stickers in Fort Lauderdale & Oakland Park FL? Call Nano Signs at 305-967-1005 for fast 24h printing!",
  icons: {
    icon: "/images/nano logo O.png",
    apple: "/images/nano logo O.png",
  },
  alternates: {
    canonical: "https://nanop.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} ${poppins.variable}`}>
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8N8L6WV8RE"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8N8L6WV8RE');
          `
        }} />
        {/* Local Business Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Nano Signs",
              "image": "https://nanop.vercel.app/images/nano%20logo%20complete.png",
              "@id": "https://nanop.vercel.app/#localbusiness",
              "url": "https://nanop.vercel.app",
              "telephone": "305-967-1005",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "4567 Powerline Rd",
                "addressLocality": "Oakland Park",
                "addressRegion": "FL",
                "postalCode": "33309",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 26.1835062,
                "longitude": -80.1554943
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              }
            })
          }}
        />
      </head>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
