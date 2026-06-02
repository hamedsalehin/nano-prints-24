import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  title: "Nano Signs | Custom Signs, Banners & Flags | Oakland Park, FL",
  description: "Nano Signs - Your trusted custom signs expert in Oakland Park, FL. Custom signs, banners, flags and more. Call 305-967-1005 for a quote!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
