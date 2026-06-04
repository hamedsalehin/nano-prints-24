import { SignProductPage } from "@/components/SignProductPage";
import { Layers } from "lucide-react";

export default function TableRunnersPage() {
  return (
    <SignProductPage cfg={{
      title: "Custom Table Runners",
      subtitle: "Add branding to any plain tablecloth with a custom printed twill table runner.",
      breadcrumb: "Tradeshow",
      breadcrumbHref: "/trade-show",
      promoText: "🏃‍♂️ Custom Table Runners — The Easy Way to Brand Your Booth. Ships in 2 Days!",
      image: "https://ext.same-assets.com/1114826555/2283645032.png", // reusing similar asset
      ratingScore: "4.8",
      ratingCount: "540",
      sizes: [
        { label: "24\" x 84\" (Standard)", value: "24x84", basePrice: 39.99 },
        { label: "30\" x 84\"", value: "30x84", basePrice: 49.99 },
        { label: "36\" x 84\" (Wide)", value: "36x84", basePrice: 59.99 },
        { label: "60\" x 84\" (Extra Wide)", value: "60x84", basePrice: 89.99 },
      ],
      selects: [
        {
          label: "Material Twill",
          options: [
            { label: "300D Polyester Twill (Standard)", value: "standard", priceAdder: 0, description: "Flame-retardant, wrinkle-resistant twill fabric." },
            { label: "Liquid-Repellent Twill", value: "repellent", priceAdder: 10.00, description: "Waterproof finish — spills bead up and wipe away instantly." },
          ],
        },
      ],
      toggleGroups: [
        {
          label: "Display Style",
          options: [
            { id: "draped", label: "Draped (Standard)", priceAdder: 0, description: "Drapes over the table edges front & back." },
            { id: "grommets", label: "With Corner Grommets", priceAdder: 4.99, description: "Adds brass grommets to hang as a mini-banner." },
          ],
        },
      ],
      qtyDiscount: "Volume pricing — buy more, save up to 12%",
      keyFeatures: [
        "Adds modular branding to any basic table drape",
        "NFPA 701 certified flame-retardant fabric",
        "Machine washable & wrinkle-resistant",
        "Full-color edge-to-edge dye-sublimation print",
        "Lightweight & extremely easy to pack",
        "Available in multiple custom widths",
      ],
      useCases: ["Farmers Markets", "Local Craft Fairs", "Check-In Desks", "Sales Seminars", "Corporate Recruiting", "Product Demonstrations"],
      specs: [
        { key: "Standard Material", value: "300D Polyester Twill" },
        { key: "Safety Rating", value: "NFPA 701 Fire Certified" },
        { key: "Printing Method", value: "Dye-Sublimation Heat Transfer" },
        { key: "Ink Profiles", value: "CMYK Full Spectrum" },
        { key: "Care Instructions", value: "Wash cold, tumble dry low, iron low if needed" },
        { key: "Turnaround Time", value: "2 Business Days" },
      ],
      faqs: [
        { q: "What is a table runner?", a: "A table runner is a long, narrow strip of custom printed fabric designed to drape vertically over the center of your table, typically on top of a solid-colored blank tablecloth. It provides a highly affordable way to display your logo." },
        { q: "Is the material flame retardant?", a: "Yes. All of our table runner fabrics meet the NFPA 701 flame safety standards required by trade show halls and event coordinators." },
        { q: "What length are your table runners?", a: "All standard runners are 84\" long, which allows for a perfect drape over standard 30\" high display tables, covering the front, top, and a portion of the back." },
      ],
      reviews: [
        { author: "Monica G.", rating: 5, text: "Excellent solution for our regional job fairs. We paired a white runner with a black tablecloth and it looks incredibly sharp and professional." },
        { author: "Tim B.", rating: 5, text: "Print quality is beautiful. The colors are very saturated and exactly match our branding logo." },
        { author: "Carl P.", rating: 4, text: "Lightweight and packs down to the size of a t-shirt. Very convenient for travel." },
      ],
      ctaHeading: "Affordable Branding for Any Table",
      ctaBody: "Design a custom table runner to highlight your logo at any networking event.",
      ctaLabel: "Design Your Table Runner",
      uniqueCallout: {
        icon: <Layers className="w-8 h-8 text-teal-500" />,
        heading: "Modular & Ultra-Portable Branding",
        body: "Table runners are the ultimate portable branding solution. They fold down to the size of a t-shirt, making them easy to throw in a suitcase or laptop bag while instantly branding any plain table.",
        color: "bg-teal-50 border border-teal-200 text-teal-950",
      },
    }} />
  );
}
