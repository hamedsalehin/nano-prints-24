import { Metadata } from "next";
import QuotePageClient from "./QuotePageClient";

export const metadata: Metadata = {
  title: "Get a Custom Printing Quote | 12h Fast Response | Nano Signs",
  description: "Need a custom sign, vehicle wrap, banner, or promotional item printed? Request a fast custom printing quote from Nano Signs. 12-hour response on pricing!",
  alternates: {
    canonical: "https://nanop.vercel.app/get-a-quote",
  },
};

export default function GetQuotePage() {
  return <QuotePageClient />;
}
