import { SignProductPage } from "@/components/SignProductPage";
import { Layers } from "lucide-react";

export default function RetractableBannersPage() {
  return (
    <SignProductPage cfg={{
      title: "Retractable Banners (Roll Up)",
      subtitle: "Portable aluminum stand and pre-installed banner, rolls up in seconds for professional display.",
      breadcrumb: "Tradeshow",
      breadcrumbHref: "/trade-show",
      promoText: "🚀 25% OFF Retractable Banners + Free Carrying Case included!",
      image: "https://ext.same-assets.com/1114826555/898075086.png",
      ratingScore: "4.9",
      ratingCount: "1,530",
      sizes: [
        { label: "33\" x 81\" Standard", value: "33x81_std", basePrice: 99.99 },
        { label: "33\" x 81\" Deluxe (Heavy Base)", value: "33x81_dlx", basePrice: 139.99 },
        { label: "36\" x 92\" Premium", value: "36x92_prem", basePrice: 189.99 },
        { label: "48\" x 92\" Extra Wide", value: "48x92_wide", basePrice: 249.99 },
      ],
      selects: [
        {
          label: "Banner Material",
          options: [
            { label: "13oz Anti-Curl Blockout Vinyl", value: "vinyl", priceAdder: 0, description: "Smooth anti-curl vinyl that stays flat and blocks light show-through." },
            { label: "Premium Polyester Fabric (+ Greyback)", value: "fabric", priceAdder: 20.00, description: "Elegant dye-sub fabric with grey blockout backing. Non-reflective." },
          ],
        },
        {
          label: "Stand Base Finish",
          options: [
            { label: "Anodized Silver Aluminum", value: "silver", priceAdder: 0 },
            { label: "Sleek Matte Black", value: "black", priceAdder: 10.00 },
          ],
        },
      ],
      toggleGroups: [
        {
          label: "Display Lighting",
          options: [
            { id: "none", label: "No Light", priceAdder: 0 },
            { id: "led", label: "Clamp-On LED Spotlight", priceAdder: 39.99, description: "Attaches to top pole to highlight your design." },
          ],
        },
      ],
      qtyDiscount: "Volume discounts available — save up to 10% on 5+ stands",
      keyFeatures: [
        "Sets up in under 60 seconds",
        "Banner retracts into metal housing for protection during transit",
        "Anti-curl blockout materials prevent light show-through",
        "Sturdy aluminum base with fold-out feet",
        "Padded canvas carrying bag with shoulder strap included",
        "Full-color high-definition print",
      ],
      useCases: ["Trade Shows", "Lobbies & Receptions", "Presentations", "Storefront Displays", "Product Launches", "Conferences", "Recruiting Events"],
      specs: [
        { key: "Graphic Material", value: "13oz Anti-Curl Vinyl or 9oz Greyback Polyester Fabric" },
        { key: "Hardware Material", value: "Anodized Aluminum Cassette Housing" },
        { key: "Print Resolution", value: "1440 dpi High Definition" },
        { key: "Total Weight", value: "Approx. 9–14 lbs including stand and carrying bag" },
        { key: "Safety Rating", value: "Flame retardant materials" },
        { key: "Turnaround Time", value: "Next Business Day" },
      ],
      faqs: [
        { q: "What is the difference between standard and deluxe bases?", a: "Standard stands feature two swiveling fold-out feet for stability. Deluxe stands feature a wider, heavier base with chrome endcaps that sits flat on the floor without fold-out feet, creating a sleeker and more professional appearance." },
        { q: "Can I swap the printed banner graphic in the future?", a: "Yes. The aluminum cassette is spring-loaded and reusable. However, because it requires high tension, we recommend sending it back to our facility for professional graphic replacement." },
        { q: "Does it come with a carrying bag?", a: "Yes! Every retractable banner stand includes a padded canvas carrying bag with zipper closures and a shoulder strap for easy transport." },
      ],
      reviews: [
        { author: "Nathan F.", rating: 5, text: "The anti-curl fabric is fantastic! Sits completely flat and looks very professional under trade show lights. Setup took less than a minute." },
        { author: "Kendra L.", rating: 5, text: "We ordered 6 for our sales team. They travel with them constantly. The padded bags are durable and make shipping them easy." },
        { author: "Marcus S.", rating: 5, text: "Vibrant colors and very crisp text. Outstanding product for the price." },
      ],
      ctaHeading: "Set Up Your Display in Seconds",
      ctaBody: "Roll up and stand out. Order high-definition retractable banners today.",
      ctaLabel: "Configure Retractable Banner",
      uniqueCallout: {
        icon: <Layers className="w-8 h-8 text-orange-500" />,
        heading: "Retractable Defense & Easy Setup",
        body: "The retractable design protects your custom printed banner inside the aluminum casing when not in use. When you arrive at your event, simply extend the telescoping support pole, pull up the banner, and hook it in place.",
        color: "bg-orange-50 border border-orange-200 text-orange-950",
      },
    }} />
  );
}
