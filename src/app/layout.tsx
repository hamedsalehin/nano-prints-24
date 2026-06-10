import type { Metadata, Viewport } from "next";
import { Open_Sans, Poppins } from "next/font/google";
import "./globals.css";
import { ClientBody } from "./ClientBody";
import Script from "next/script";

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
  title: "Nano Signs | Custom Signs, Banners & Flags | Oakland Park, FL",
  description:
    "Nano Signs - Your trusted custom printing expert in Oakland Park, FL. Custom signs, banners, flags, stickers and more. Call 305-967-1005 for a quote!",
  icons: {
    icon: "/images/nano logo O.png",
    apple: "/images/nano logo O.png",
  },
  alternates: {
    canonical: "https://nano-signs.com",
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8N8L6WV8RE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8N8L6WV8RE');
          `}
        </Script>
      </head>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
