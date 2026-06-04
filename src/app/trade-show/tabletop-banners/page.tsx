import { SignProductPage } from "@/components/SignProductPage";
import { Layers } from "lucide-react";

export default function TabletopBannersPage() {
  return (
    <SignProductPage cfg={{
      title: "Tabletop Retractable Banners",
      subtitle: "Miniature counter-top roll up banners for checkout registers, check-in desks, and lobbies.",
      breadcrumb: "Tradeshow",
      breadcrumbHref: "/trade-show",
      promoText: "📈 Tabletop Banners — Compact, Portable, High Impact. Ships Tomorrow!",
      image: "https://ext.same-assets.com/1114826555/898075086.png", // reusing similar asset
      ratingScore: "4.8",
      ratingCount: "420",
      sizes: [
        { label: "8.25\" x 11.5\" (A4 Size Stand)", value: "8.25x11.5", basePrice: 29.99 },
        { label: "11.75\" x 17\" (A3 Size Stand)", value: "11.75x17", basePrice: 39.99 },
      ],
      selects: [
        {
          label: "Banner Material",
          options: [
            { label: "Smooth Polypropylene Film (Standard)", value: "poly_film", priceAdder: 0, description: "Opaque matte polypropylene film that lays completely flat and displays text in extreme detail." },
          ],
        },
        {
          label: "Base Housing",
          options: [
            { label: "Miniature Silver Aluminum Base", value: "silver", priceAdder: 0 },
            { label: "Miniature Matte Black Base", value: "black", priceAdder: 5.00 },
          ],
        },
      ],
      toggleGroups: [
        {
          label: "Carry Case",
          options: [
            { id: "none", label: "No Bag", priceAdder: 0 },
            { id: "pouch", label: "Padded Travel Pouch", priceAdder: 4.99, description: "Protective sleeve case." },
          ],
        },
      ],
      qtyDiscount: "Volume discounts apply — buy 5+ and save up to 10%",
      keyFeatures: [
        "Ultra-lightweight & compact counter design",
        "Banner rolls up into housing base for travel protection",
        "High-definition print on smooth film (anti-glare)",
        "Sets up in under 30 seconds",
        "Includes telescoping support rod",
        "Silver or black housing options",
      ],
      useCases: ["POS Registers", "Hotel Reception Desks", "Restaurant Counter Menus", "Job Fair Table Displays", "Event Sign-In Sheets", "Retail Storefronts"],
      specs: [
        { key: "Graphic Material", value: "8mil Smooth Polypropylene Film" },
        { key: "Base Hardware", value: "Miniature Aluminum Spring-Loaded Housing" },
        { key: "Print Resolution", value: "1440 dpi High Density" },
        { key: "Assemble Time", value: "Under 30 seconds" },
        { key: "Finish Options", value: "Anodized Silver or Matte Black" },
        { key: "Turnaround Time", value: "Next Business Day" },
      ],
      faqs: [
        { q: "What is a tabletop retractable banner?", a: "It is a miniature version of a standard retractable banner stand. It features a small spring-loaded aluminum base that sits on table counters, and a graphic that pulls up and attaches to a rear support pole." },
        { q: "Is the banner exchangeable?", a: "Like our large retractable banners, the graphic is under high spring tension. We do not recommend swapping graphics yourself, but we can replace it for you in our facility if needed." },
        { q: "Is it double-sided?", a: "No, tabletop retractable banners are single-sided by default." },
      ],
      reviews: [
        { author: "Kirsten W.", rating: 5, text: "Perfect for our checkout counters! We printed QR codes on them so customers can scan for our loyalty program. The printing is very sharp." },
        { author: "Devin K.", rating: 5, text: "Excellent little displays. Very lightweight and convenient to carry in a standard laptop bag." },
        { author: "Brian A.", rating: 4, text: "Great quality for the price. The silver base is very clean. Highly recommend." },
      ],
      ctaHeading: "Maximize Countertop Branding",
      ctaBody: "Miniature pull-up banners designed to highlight call-to-actions, QR codes, and menus.",
      ctaLabel: "Configure Tabletop Banner",
      uniqueCallout: {
        icon: <Layers className="w-8 h-8 text-yellow-500" />,
        heading: "Ultra-High Resolution Counter Displays",
        body: "Because customers read tabletop banners at close proximity, we print them using a special high-density ink profile on smooth polypropylene film. This ensures tiny font sizes and complex QR codes are perfectly readable.",
        color: "bg-yellow-50 border border-yellow-200 text-yellow-950",
      },
    }} />
  );
}
