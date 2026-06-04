import { SignProductPage } from "@/components/SignProductPage";
import { Layers } from "lucide-react";

export default function StepAndRepeatPage() {
  return (
    <SignProductPage cfg={{
      title: "Step & Repeat Banners",
      subtitle: "Large event backdrop walls designed for photo shoots, red carpets, and press conferences.",
      breadcrumb: "Tradeshow",
      breadcrumbHref: "/trade-show",
      promoText: "📸 Red Carpet Step & Repeat Banners — Glare-Free Printing, Next Day Shipping!",
      image: "https://ext.same-assets.com/1114826555/2684103585.png",
      ratingScore: "4.8",
      ratingCount: "680",
      sizes: [
        { label: "8' x 8' Square Backdrop", value: "8x8", basePrice: 149.99 },
        { label: "10' x 8' Wide Backdrop", value: "10x8", basePrice: 189.99 },
      ],
      selects: [
        {
          label: "Material Style",
          options: [
            { label: "15oz Blockout Matte Vinyl (Standard)", value: "vinyl", priceAdder: 0, description: "Heavy-duty waterproof vinyl with a matte finish that limits camera flash glare." },
            { label: "Premium Fabric Backdrop (Polyester)", value: "fabric", priceAdder: 45.00, description: "Wrinkle-free, washable polyester fabric for a premium, zero-glare studio finish." },
          ],
        },
        {
          label: "Stand Hardware",
          options: [
            { label: "Complete Kit (Banner + Telescoping Stand)", value: "full_kit", priceAdder: 95.00, description: "Includes adjustable black metal stand, support poles, and carry bag." },
            { label: "Graphic Print Only (No Stand)", value: "print_only", priceAdder: 0, description: "Just the printed banner with pole pockets or grommets." },
          ],
        },
      ],
      toggleGroups: [
        {
          label: "Finishing Option",
          options: [
            { id: "pole_pockets", label: "3\" Pole Pockets (Top/Bottom)", priceAdder: 0, description: "Standard for slide-on stands." },
            { id: "grommets", label: "Brass Grommets (All Sides)", priceAdder: 0, description: "For hanging from walls or trusses." },
          ],
        },
      ],
      qtyDiscount: "Volume discounts for event planners — save up to 12%!",
      keyFeatures: [
        "Extra-large seamless graphics",
        "Matte and non-reflective finishes ensure crisp photography",
        "Heavy-duty adjustable aluminum stand",
        "Telescoping height and width support poles",
        "Padded canvas carrying bag included with stand",
        "Dye-sublimated fabric prints are machine washable",
      ],
      useCases: ["Red Carpet Arrivals", "Press Conferences", "Media Briefing Rooms", "Wedding Photo Booths", "Event Backdrops", "Sponsor Walls", "Trade Show Booth Backdrops"],
      specs: [
        { key: "Vinyl Material", value: "15oz Blockout Matte Vinyl" },
        { key: "Fabric Material", value: "9oz Wrinkle-Free Tension Polyester" },
        { key: "Stand Frame", value: "Telescoping black steel legs, heavy metal feet" },
        { key: "Adjustable Range", value: "Widths 5'-10', Heights 4'-8'" },
        { key: "Print Method", value: "UV Inkjet Direct or Dye-Sublimation" },
        { key: "Turnaround Time", value: "Next Business Day" },
      ],
      faqs: [
        { q: "What is a step and repeat banner?", a: "It is a large backdrop banner printed with a grid pattern of logos (typically sponsors or company branding) that repeat sequentially. They are designed to serve as a branded background for photo shoots and red carpet arrivals." },
        { q: "Does the stand come with a bag?", a: "Yes. If you select the 'Complete Kit with Stand', you will receive a heavy-duty padded canvas carrying case designed to store the disassembled telescoping frame, poles, and feet." },
        { q: "What finishing should I select?", a: "If you are purchasing our telescoping stand, select '3\" Pole Pockets'. The crossbars slide through the pockets at the top and bottom of the banner to pull it taut. If you are mounting the banner to a wall, fence, or truss, select 'Grommets'." },
        { q: "Can I wash the fabric banner?", a: "Yes. The Premium Fabric Backdrop is printed using dye-sublimation and can be machine washed in cold water and tumble dried on low. Fold creases can be steamed out easily." },
      ],
      reviews: [
        { author: "Tiffany R.", rating: 5, text: "The fabric backdrop was a massive hit at our corporate gala. Colors were deep, and photography looked incredibly clean without any flash reflection. Highly recommend!" },
        { author: "Juan D.", rating: 5, text: "Excellent customer service and incredibly fast turnaround. We uploaded our logos, they checked the layout, and it was delivered the next day." },
        { author: "Gary M.", rating: 4, text: "Sturdy frame, easy to adjust and assemble. The carrying case is highly convenient." },
      ],
      ctaHeading: "Frame Your Event Perfectly",
      ctaBody: "Print your company and sponsor logos on a professional-grade photo backdrop.",
      ctaLabel: "Customize Step & Repeat",
      uniqueCallout: {
        icon: <Layers className="w-8 h-8 text-blue-500" />,
        heading: "Zero-Glare Photo-Optic Finishes",
        body: "Our blockout vinyl and polyester fabrics are selected specifically for camera-flash compatibility. They diffuse light to prevent hot-spot glares, ensuring every guest looks perfect on camera and sponsor logos are fully readable.",
        color: "bg-blue-50 border border-blue-200 text-blue-950",
      },
    }} />
  );
}
