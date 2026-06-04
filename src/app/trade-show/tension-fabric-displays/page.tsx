import { SignProductPage } from "@/components/SignProductPage";
import { Layers } from "lucide-react";

export default function TensionFabricDisplaysPage() {
  return (
    <SignProductPage cfg={{
      title: "Tension Fabric Displays",
      subtitle: "Pillowcase-style stretch fabric graphics stretching over locking aluminum tubing. The ultimate tradeshow back wall.",
      breadcrumb: "Tradeshow",
      breadcrumbHref: "/trade-show",
      promoText: "🎭 Premium Tension Fabric Displays — Click-Assemble Frame, Zero Wrinkles. Ships in 2 Days!",
      image: "https://ext.same-assets.com/1114826555/2283645032.png", // reusing similar asset
      ratingScore: "4.9",
      ratingCount: "380",
      sizes: [
        { label: "8ft Straight Wall (96\" x 89\")", value: "8ft_straight", basePrice: 229.99 },
        { label: "10ft Straight Wall (120\" x 89\")", value: "10ft_straight", basePrice: 289.99 },
        { label: "8ft Curved Wall (96\" x 89\")", value: "8ft_curved", basePrice: 249.99 },
        { label: "10ft Curved Wall (120\" x 89\")", value: "10ft_curved", basePrice: 309.99 },
      ],
      selects: [
        {
          label: "Display Package",
          options: [
            { label: "Complete Kit (Frame + Fabric Graphic)", value: "full_kit", priceAdder: 110.00, description: "Includes snap-locking aluminum tube frame, printed fabric, and travel bag." },
            { label: "Fabric Cover Graphic Only (Replacement)", value: "graphic_only", priceAdder: 0, description: "Just the printed stretch fabric cover (requires existing frame)." },
          ],
        },
      ],
      toggleGroups: [
        {
          label: "Display LED Spotlights (x2)",
          options: [
            { id: "none", label: "No Spotlights", priceAdder: 0 },
            { id: "lights", label: "Two LED Spotlights", priceAdder: 79.99, description: "Mount to top frame rail to illuminate your booth backdrop." },
          ],
        },
      ],
      qtyDiscount: "Volume discounts for display configurations — save up to 10% on 3+ walls",
      keyFeatures: [
        "Wrinkle-free stretch knit polyester cover",
        "Industrial zipper bottom pulls fabric completely taut",
        "Interlocking, numbered aluminum tubes snap assemble in minutes",
        "Heavy metal base plates for superior standing stability",
        "Travel canvas bag included with frame kits",
        "Dye-sublimation print never cracks or peels",
      ],
      useCases: ["Exhibitions", "Booth Back Walls", "Media Presentations", "Corporate Lobbies", "VIP Press Conferences", "Photo Booth Backgrounds"],
      specs: [
        { key: "Fabric Weight", value: "240g Stretch Polyester knit" },
        { key: "Frame Construction", value: "1.25\" clear anodized locking aluminum tubing" },
        { key: "Print Process", value: "Dye-Sublimation Transfer" },
        { key: "Assemble Time", value: "Approximately 10 minutes (no tools required)" },
        { key: "Flame Safety", value: "NFPA 701 Fire Certified" },
        { key: "Turnaround Time", value: "2 Business Days" },
      ],
      faqs: [
        { q: "How does a tension fabric display assemble?", a: "The frame consists of locking aluminum tubes that are numbered. You snap them together sequentially (e.g. 1 connects to 1, 2 to 2) without any tools. Once the frame is assembled, you slide the pillowcase-style stretch fabric cover over the frame and zip it closed at the bottom to pull it completely flat." },
        { q: "Is the fabric washable?", a: "Yes. The stretch polyester is machine washable in cold water on a gentle cycle. Lay flat or hang dry. Do not dry clean or bleach." },
        { q: "What is the difference between straight and curved walls?", a: "Straight walls sit flat and act as a standard backdrop wall. Curved walls feature a gentle concave curve that curls slightly forward on the sides, providing a more enclosed, immersive look for your trade show booth." },
      ],
      reviews: [
        { author: "Brenda T.", rating: 5, text: "Absolutely stunning! This is the most premium trade show display we have ever owned. The frame snaps together easily and the fabric has zero wrinkles when zipped. Simply beautiful." },
        { author: "Steve V.", rating: 5, text: "Excellent customer service. They noticed our background logo was slightly pixelated and reached out to get the vector file before printing. Saved our show!" },
        { author: "Rachel H.", rating: 5, text: "Very sturdy and high quality. The LED spotlights are a must-have — they made our booth the brightest in the aisle." },
      ],
      ctaHeading: "Upgrade to a Seamless Back Wall",
      ctaBody: "Snap together a lightweight aluminum frame and slide on a stretch fabric cover for a modern finish.",
      ctaLabel: "Configure Fabric Display",
      uniqueCallout: {
        icon: <Layers className="w-8 h-8 text-indigo-500" />,
        heading: "Pillowcase-Style Stretch Poly Structure",
        body: "Tension fabric displays slide over the aluminum frame like a pillowcase. When zipped at the bottom, the stretch fabric pulls completely taut, removing all wrinkles and creating a perfectly flat, seamless corporate back wall.",
        color: "bg-indigo-50 border border-indigo-200 text-indigo-900",
      },
    }} />
  );
}
