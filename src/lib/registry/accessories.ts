import { RegistryCategory } from "../productsRegistry";

export const signAccessories: RegistryCategory = {
    title: "Stands & Sign Holders",
    breadcrumbLabel: "Sign Accessories",
    description:
      "Premium stakes, frames and heavy duty steel mounts to hold your yard signs, outdoor notices, and trade show displays.",
    heroImage: "https://ext.same-assets.com/1114826555/1286398033.png",
    reviewRating: "4.8",
    reviewCount: "980",
    reviewQuote:
      "The H-frame stakes are rock solid. Held our yard signs through a nasty storm without budging an inch.",
    products: [
      {
        id: "h-frames",
        name: "Metal H-Frame Stakes",
        description:
          "Heavy duty metal wire stakes to hold corrugated plastic signs in lawns.",
        image: "https://ext.same-assets.com/1114826555/1286398033.png",
        price: "Starting at $1.49",
        config: {
          title: "Metal Yard Stakes (H-Frames)",
          subtitle:
            "Heavy duty galvanized steel wire stakes designed to hold 4mm coroplast yard signs.",
          breadcrumb: "Sign Holders",
          breadcrumbHref: "/sign-accessories",
          promoText: "25% OFF WIRE STAKES & HOLDERS",
          image: "https://ext.same-assets.com/1114826555/1286398033.png",
          ratingCount: "940",
          ratingScore: "4.8",
          sizes: [
            {
              label: '30" x 10" Standard Wire Stake',
              value: "30x10",
              basePrice: 1.99,
            },
            {
              label: '15" x 10" Half Size Stake',
              value: "15x10",
              basePrice: 1.49,
            },
          ],
          selects: [
            {
              label: "Wire Thickness Quality",
              options: [
                {
                  label: "Standard 9-Gauge Steel",
                  value: "9gauge",
                  priceAdder: 0,
                  description: "Classic sturdy wire, fits standard lawns.",
                },
                {
                  label: "Heavy Duty Galvanized Steel",
                  value: "heavy",
                  priceAdder: 1.25,
                  description: "Reinforced structure for clay or hard soils.",
                },
              ],
            },
          ],
          qtyDiscount:
            "Volume pricing drops under $0.99 for quantities over 100",
          keyFeatures: [
            "Corrosion-resistant steel",
            "Slides easily into yard sign flutes",
            "Steps directly into lawn",
            "Reusable seasonal hardware",
          ],
          useCases: [
            "Political campaigns",
            "Real estate open houses",
            "Contractor lawn advertising",
            "Community event notices",
          ],
          specs: [
            { key: "Material", value: "Galvanized Steel Wire" },
            { key: "Height", value: "30 inches standard" },
            {
              key: "Compatibility",
              value: "Fits standard 4mm corrugated yard signs",
            },
          ],
          faqs: [
            {
              q: "How do I install these stakes?",
              a: "Simply push the top prongs into the bottom center of the yard sign, then step the bottom crossbar into the soil.",
            },
          ],
          reviews: [
            {
              author: "Arthur L.",
              rating: 5,
              text: "Sturdy stakes. Did not bend even in dry Florida lawn dirt.",
            },
          ],
          ctaHeading: "Order stakes for your yard signs",
          ctaBody:
            "Pair stakes with your yard signs for a complete campaign ready to deploy.",
          ctaLabel: "Configure Stakes",
        },
      },
    ],
  };
