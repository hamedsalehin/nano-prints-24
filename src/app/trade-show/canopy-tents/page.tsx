import { SignProductPage } from "@/components/SignProductPage";
import { Layers } from "lucide-react";

export default function CanopyTentsPage() {
  return (
    <SignProductPage cfg={{
      title: "Custom Canopy Tents (10' x 10')",
      subtitle: "Waterproof, UV-resistant custom popup event tents for outdoor trade shows and promotions.",
      breadcrumb: "Tradeshow",
      breadcrumbHref: "/trade-show",
      promoText: "🎪 Custom Event Tents — Heavy-Duty popup frame, full sublimation print. Ships in 3 Days!",
      image: "https://ext.same-assets.com/1114826555/2283645032.png", // reusing similar asset
      ratingScore: "4.9",
      ratingCount: "210",
      sizes: [
        { label: "10' x 10' Standard Canopy Tent", value: "10x10", basePrice: 349.99 },
      ],
      selects: [
        {
          label: "Frame Material",
          options: [
            { label: "Steel Frame (Heavy Duty Powder-Coated)", value: "steel", priceAdder: 0, description: "Heavy-duty steel legs — very durable and cost-effective." },
            { label: "Aluminum Frame (Lightweight Hexagonal)", value: "aluminum", priceAdder: 100.00, description: "Thick 40mm hexagonal aluminum legs — lightweight and rust-proof." },
          ],
        },
        {
          label: "Printed Area",
          options: [
            { label: "Full Custom Print (All Peaks & Valances)", value: "full", priceAdder: 0, description: "Your custom artwork printed on all 4 peaks and 4 hanging valances." },
            { label: "Valances Only Print (Solid Color Canopy)", value: "valance_only", priceAdder: -80.00, description: "Custom print on the hanging overhangs only, with solid black or white peaks." },
          ],
        },
      ],
      toggleGroups: [
        {
          label: "Wall Enhancements",
          options: [
            { id: "none", label: "Canopy Only", priceAdder: 0 },
            { id: "back_wall", label: "With 10ft Full Back Wall", priceAdder: 129.99, description: "Adds a full-height printed fabric back wall." },
            { id: "side_walls", label: "With Two 10ft Side Walls", priceAdder: 199.99, description: "Adds two printed fabric side walls (half-height or full)." },
          ],
        },
      ],
      qtyDiscount: "Volume discounts for event setups — save up to 8% on 2+ tents",
      keyFeatures: [
        "600D polyurethane-coated waterproof polyester canopy",
        "UV-resistant fade-proof sublimation printing",
        "Collapsible popup scissor frame sets up in under 5 minutes",
        "Three height-adjustable leg settings",
        "Includes ground stakes, tie-down ropes, and a wheeled carrying bag",
        "Flame retardant (meets NFPA 701 fire code standards)",
      ],
      useCases: ["Outdoor Expositions", "Farmers Markets", "Sports Tournaments", "Festival Booths", "Corporate Outdoor Events", "Fundraisers", "Product Promotions"],
      specs: [
        { key: "Canopy Material", value: "600D Polyurethane-Coated Polyester" },
        { key: "Safety Rating", value: "Waterproof, UV-Resistant, NFPA 701 Fire Certified" },
        { key: "Steel Frame Weight", value: "Approx. 48 lbs (very robust)" },
        { key: "Aluminum Frame Weight", value: "Approx. 34 lbs (hexagonal legs)" },
        { key: "Adjustable Peak Height", value: "Up to 10.5 ft tall" },
        { key: "Turnaround Time", value: "3 Business Days" },
      ],
      faqs: [
        { q: "Is the canopy waterproof and fire retardant?", a: "Yes. Our event canopy is manufactured from premium 600D polyester with a heavy-duty polyurethane coating. It is 100% waterproof, blocks UV rays, and is treated to meet NFPA 701 flame safety standards (required for indoor convention use as well)." },
        { q: "Does the tent come with weights or sandbags?", a: "The standard package includes ground stakes and tie-down ropes for grassy surfaces. For hard concrete setups, we recommend purchasing weight plates or heavy sandbag wraps separately to secure the legs in wind." },
        { q: "How easy is setup?", a: "Extremely easy. The frame features a collapsible popup structure. Two people can pull the frame open, place the canopy over the top, expand the frame legs until they click, and raise it to the desired height setting. No tools are required." },
      ],
      reviews: [
        { author: "Gordon D.", rating: 5, text: "Excellent quality tent! The colors are incredibly vibrant, and it held up beautifully in a sudden downpour at our farmers market. Not a single leak. Setup was simple." },
        { author: "Katarina S.", rating: 5, text: "We upgraded to the aluminum hexagonal frame and it's fantastic. Very light to lift but incredibly sturdy. The wheeled bag fits everything perfectly." },
        { author: "Alvin T.", rating: 5, text: "The printed back wall is a great add-on. It blocks the wind and gives us private space to store our products behind the table." },
      ],
      ctaHeading: "Shelter Your Brand and Stand Out",
      ctaBody: "Custom-printed popup canopy tents designed to handle wind, rain, and sun while showcasing your logo.",
      ctaLabel: "Design Your Canopy Tent",
      uniqueCallout: {
        icon: <Layers className="w-8 h-8 text-orange-500" />,
        heading: "Weather-Resistant 600D Sublimated Shield",
        body: "Our canopies are printed using premium dye-sublimation on 600D high-density polyester. They are fully waterproof, UV-blocking, and certified fire-retardant, making them safe and legal for both outdoor fairs and indoor exhibition halls.",
        color: "bg-orange-50 border border-orange-200 text-orange-950",
      },
    }} />
  );
}
