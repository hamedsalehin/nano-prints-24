import { SignProductPage } from "@/components/SignProductPage";
import { Layers } from "lucide-react";

export default function XStyleBannersPage() {
  return (
    <SignProductPage cfg={{
      title: "X-Frame Banner Stands",
      subtitle: "Highly cost-effective freestanding banner stands utilizing tension fiberglass arms to pull banners taut.",
      breadcrumb: "Tradeshow",
      breadcrumbHref: "/trade-show",
      promoText: "❌ Budget-Friendly X-Banner Stands — Lightweight & Collapsible. Ships Tomorrow!",
      image: "https://ext.same-assets.com/1114826555/2401743055.png", // reusing similar asset
      ratingScore: "4.7",
      ratingCount: "385",
      sizes: [
        { label: "24\" x 63\" Small X-Stand Banner", value: "24x63", basePrice: 49.99 },
        { label: "31\" x 70\" Large X-Stand Banner", value: "31x70", basePrice: 69.99 },
      ],
      selects: [
        {
          label: "Banner Material",
          options: [
            { label: "13oz Matte PVC Vinyl (Standard)", value: "vinyl", priceAdder: 0, description: "Smooth matte PVC vinyl — durable and curl-resistant." },
            { label: "Premium Polyester Fabric", value: "fabric", priceAdder: 15.00, description: "Elegant dye-sub fabric with zero glare. Wrinkle-resistant." },
          ],
        },
        {
          label: "Hardware Package",
          options: [
            { label: "Complete Kit (Banner + Stand + Carrying Case)", value: "full_kit", priceAdder: 0, description: "Includes lightweight collapsible fiberglass stand and nylon carry case." },
            { label: "Banner Graphic Print Only (No Stand)", value: "print_only", priceAdder: -20.00, description: "Just the printed banner with brass grommets." },
          ],
        },
      ],
      toggleGroups: [
        {
          label: "Grommet Option",
          options: [
            { id: "corners", label: "Brass Grommets in 4 Corners", priceAdder: 0, description: "Standard required to hang from stand pegs." },
          ],
        },
      ],
      qtyDiscount: "Volume discounts apply — save up to 12%!",
      keyFeatures: [
        "Lightweight collapsible carbon-fiberglass legs",
        "Pulls banner completely flat and taut using tension",
        "Banner graphics can be swapped out in seconds",
        "Extremely affordable freestanding display",
        "Nylon carry case included with complete kits",
        "No tools required for assembly",
      ],
      useCases: ["Retail Storefront Entryways", "Showroom Floors", "Special Event Signs", "Exposition Stands", "Church Welcoming Signs", "Product Showcases"],
      specs: [
        { key: "Graphic Material", value: "13oz Matte PVC Vinyl or 9oz Polyester Fabric" },
        { key: "Frame Structure", value: "Tension fiberglass legs with central locking hinge" },
        { key: "Print Resolution", value: "1440 dpi High Definition" },
        { key: "Assembly Time", value: "Under 60 seconds (no tools)" },
        { key: "Total Weight", value: "Approx. 3.5–5 lbs (very light)" },
        { key: "Turnaround Time", value: "Next Business Day" },
      ],
      faqs: [
        { q: "How does an X-banner stand work?", a: "The stand features five fiberglass rods extending from a central locking hinge like an 'X'. The four outer pegs insert into the four grommeted corners of the printed banner. The tension of the fiberglass arms pulls the banner tautly in place." },
        { q: "Can I swap the banner graphics?", a: "Yes! X-banners are the easiest stands for graphic replacement. You simply unhook the four corners of the old banner from the pegs and attach a new grommeted banner." },
        { q: "Is the stand suitable for outdoor use?", a: "X-banner stands are extremely lightweight and are designed for indoor use. Outdoor drafts can easily blow them over due to their lightweight structure." },
      ],
      reviews: [
        { author: "Jerry H.", rating: 5, text: "Unbelievable value! At this price, we bought 4 for our retail store entryways. They look fantastic, are very light, and took 30 seconds to set up." },
        { author: "Samantha K.", rating: 5, text: "Excellent for quick presentations. The graphic is pulled very flat and doesn't curl at the edges." },
        { author: "Luke W.", rating: 4, text: "Simple, budget-friendly stand. Perfect for trade shows where weight is an issue. Highly recommend." },
      ],
      ctaHeading: "Free-Standing Banners on a Budget",
      ctaBody: "Order a lightweight, collapsible X-frame stand and pull-up your logo in seconds.",
      ctaLabel: "Configure X-Stand Banner",
      uniqueCallout: {
        icon: <Layers className="w-8 h-8 text-yellow-500" />,
        heading: "Instant Graphic Swaps & Compact Travel",
        body: "The X-Banner stand collapses down into a tiny bundle that fits in the included carry bag, weighing under 4 pounds. Since the banner attaches via corner grommets, you can swap graphics instantly without replacing the stand.",
        color: "bg-yellow-50 border border-yellow-200 text-yellow-950",
      },
    }} />
  );
}
