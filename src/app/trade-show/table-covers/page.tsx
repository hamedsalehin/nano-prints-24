import { SignProductPage } from "@/components/SignProductPage";
import { Layers } from "lucide-react";

export default function TableCoversPage() {
  return (
    <SignProductPage cfg={{
      title: "Custom Table Covers",
      subtitle: "Professional dye-sublimated tablecloths fitted to standard 6ft and 8ft trade show tables.",
      breadcrumb: "Tradeshow",
      breadcrumbHref: "/trade-show",
      promoText: "🎪 25% OFF Table Covers — Flame-Retardant & Machine Washable!",
      image: "https://ext.same-assets.com/1114826555/2283645032.png",
      ratingScore: "4.9",
      ratingCount: "1,240",
      sizes: [
        { label: "6ft Table Throw (72\" x 30\" x 30\")", value: "6ft_throw", basePrice: 89.99 },
        { label: "8ft Table Throw (96\" x 30\" x 30\")", value: "8ft_throw", basePrice: 119.99 },
        { label: "6ft Fitted Table Cover", value: "6ft_fitted", basePrice: 109.99 },
        { label: "8ft Fitted Table Cover", value: "8ft_fitted", basePrice: 139.99 },
        { label: "6ft Stretch Table Cover", value: "6ft_stretch", basePrice: 129.99 },
        { label: "8ft Stretch Table Cover", value: "8ft_stretch", basePrice: 159.99 },
      ],
      selects: [
        {
          label: "Table Cloth Coverage",
          options: [
            { label: "4-Sided Closed Back (Full Coverage)", value: "4sided", priceAdder: 0, description: "Covers all four sides — perfect for hiding storage under the table." },
            { label: "3-Sided Open Back", value: "3sided", priceAdder: -10.00, description: "Leaves the back open for easy seating and access beneath." },
          ],
        },
        {
          label: "Material Twill",
          options: [
            { label: "300D Polyester Twill (Standard)", value: "standard", priceAdder: 0, description: "Flame-retardant, wrinkle-resistant twill fabric." },
            { label: "Liquid-Repellent Twill", value: "repellent", priceAdder: 15.00, description: "Waterproof finish — spills bead up and wipe away instantly." },
          ],
        },
      ],
      toggleGroups: [
        {
          label: "Carry Bag",
          options: [
            { id: "none", label: "No Bag", priceAdder: 0 },
            { id: "drawstring", label: "Nonglare Drawstring Bag", priceAdder: 9.99 },
            { id: "zippered", label: "Deluxe Zippered Tote", priceAdder: 19.99, description: "Padded case for travel." },
          ],
        },
      ],
      qtyDiscount: "Volume discounts apply — save up to 13%!",
      keyFeatures: [
        "100% wrinkle-resistant polyester twill",
        "NFPA 701 certified flame retardant",
        "Machine washable & dryable",
        "Edge-to-edge full-color dye sublimation",
        "Hot-knife cut finished edges",
        "Available in throw, fitted, or stretch options",
      ],
      useCases: ["Conventions", "Job Fairs", "Expositions", "Registration Desks", "Farmers Markets", "Event Check-Ins", "School Orientations"],
      specs: [
        { key: "Standard Material", value: "300D Polyester Twill" },
        { key: "Safety Rating", value: "NFPA 701 Fire Certified" },
        { key: "Printing Method", value: "Dye-Sublimation Heat Transfer" },
        { key: "Ink Profiles", value: "CMYK Full Spectrum" },
        { key: "Care Instructions", value: "Wash cold, tumble dry low, iron low if needed" },
        { key: "Turnaround Time", value: "2 Business Days" },
      ],
      faqs: [
        { q: "Is the material flame retardant?", a: "Yes. All of our table cover fabrics are treated and certified to meet the NFPA 701 flame safety standards, which is required by almost all convention centers and exhibition halls nationwide." },
        { q: "What is the difference between a throw, fitted, and stretch cover?", a: "A Table Throw drapes loosely over the edges. A Fitted Cover is sewn to the exact rectangular dimensions of the table for a boxy, clean look. A Stretch Cover is made from elastic polyester that hooks under the table legs for a sleek, modern, contoured look." },
        { q: "Can I wash and iron these tablecloths?", a: "Yes. The dye-sublimation process infuses the ink directly into the fabric fibers, meaning you can machine wash them in cold water and tumble dry on low. You can iron them on low heat to release fold lines." },
        { q: "Can I choose 3-sided for stretch covers?", a: "No, stretch covers are only available in 4-sided full-coverage styles because they require tension on all sides to hold their form." },
      ],
      reviews: [
        { author: "Erica W.", rating: 5, text: "Excellent print quality! Our logo stands out beautifully, and the fitted style looks extremely clean. Plus, it passed the local fire inspector check immediately." },
        { author: "Derrick J.", rating: 5, text: "Washable, durable, and lightweight. We have used it for 10 separate trade shows and it still looks brand new." },
        { author: "Sarah K.", rating: 4, text: "Great fabric thickness. The liquid-repellent option saved us when someone spilled coffee. Cleaned right up." },
      ],
      ctaHeading: "Elevate Your Trade Show Booth",
      ctaBody: "Customize a premium tablecloth that drapes perfectly and showcases your brand.",
      ctaLabel: "Design Your Table Cover",
      uniqueCallout: {
        icon: <Layers className="w-8 h-8 text-indigo-500" />,
        heading: "Convention-Ready Fire Certification",
        body: "Don't get shut down by trade show fire marshals. Every tablecloth we print is certified NFPA 701 flame-retardant, providing the peace of mind you need at busy expositions.",
        color: "bg-indigo-50 border border-indigo-200 text-indigo-900",
      },
    }} />
  );
}
