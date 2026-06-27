import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Custom Signage Quote | Nano Signs",
  description: "Get a free custom print quote from Nano Signs. Submit your dimensions, material choices, and artwork for custom banners, yard signs, and decals.",
  alternates: {
    canonical: "https://nano-signs.com/get-a-quote",
  },
  openGraph: {
    title: "Request a Custom Signage Quote | Nano Signs",
    description: "Get a free custom print quote from Nano Signs. Submit your dimensions, material choices, and artwork for custom banners, yard signs, and decals.",
    url: "https://nano-signs.com/get-a-quote",
  },
};

export default function GetAQuoteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
