import { RegistryCategory } from "../productsRegistry";

export const customFlags: RegistryCategory = {
    title: "Custom Flags",
    breadcrumbLabel: "Custom Flags",
    heroSubtitle: "All-Weather. Quick Production. Affordable.",
    description:
      "Catch the attention of passing traffic with high-impact outdoor flags. Perfect for grand openings, store front promotions, and events.",
    heroImage: "/images/products/main%20page/nano hero flag section.png",
    tabletHeroImage: "/images/products/main%20page/nano hero flag section.png",
    mobileHeroImage: "/images/products/main%20page/nano hero flag section.png",
    reviewRating: "4.8",
    reviewCount: "1,920",
    reviewQuote:
      "The feather flags are so vibrant and eye-catching! Setup was effortless and they've survived multiple rainstorms without any fading.",
    categoryDescriptionText:
      "Draw crowds and increase outdoor visibility with premium custom flags printed to last. Designed to withstand wind, rain, and intense sun, our custom advertising flags are constructed from lightweight, high-density knit polyester that ensures rich colors and single or double-sided visibility. Complete with heavy-duty composite fiberglass poles and ground stakes or solid steel cross stands.",
    categorySecondaryImage: "/images/products/main%20page/flags_desc.png",
    faqs: [
      {
        q: "What types of custom flags do you offer?",
        a: "We offer a wide range of custom flags to suit any need, including standing styles like feather flags, teardrop flags, straight flags, and stick flags, as well as hanging options like standard flags and pennant flags.",
      },
      {
        q: "Can I customize both the design and size of my flag?",
        a: "Yes! Our online design tools let you fully customize your flag’s artwork, and we offer a variety of sizes to match your intended use whether it’s for outdoor promotions, indoor displays, or handheld use.",
      },
      {
        q: "What accessories are available for displaying custom flags?",
        a: "We carry a full line of accessories, including outdoor base kits, auger and drive-over bases, indoor flag stands, telescopic handheld poles, spinner poles, and adjustable aluminum brackets to suit any display environment.",
      },
      {
        q: "Are your custom flags suitable for both indoor and outdoor use?",
        a: "Yes! Our custom flags are made with high-quality, durable materials that perform well outdoors in various weather conditions. They're also great for indoor settings like trade shows, storefronts, lobbies, and events. With a wide selection of bases and mounting options, you can easily display your flag wherever you need it.",
      },
      {
        q: "Do your flags come with hardware or do I need to purchase that separately?",
        a: "Many of our flags have optional hardware bundles, but accessories like bases and poles are typically sold separately so you can mix and match based on your needs. Be sure to check the product description for bundling options.",
      },
      {
        q: "Do you offer design assistance for custom flags?",
        a: "Yes! You can start from scratch, use one of our templates, or upload your own artwork. If you need help, our customer support team is happy to assist with setup and design tips.",
      },
    ],
    products: [
      {
        id: "feather-flags",
        name: "Feather Flags",
        description:
          "Eye-catching fluttering flags designed to draw crowds from the roadside.",
        image: "/images/products/main%20page/feather_flag.png",
        price: "Starting at $80.00",
        badge: "Best Seller",
        config: {
          title: "Custom Feather Flags",
          subtitle:
            "Outdoor advertising flags printed on durable knit polyester, complete with poles and hardware.",
          breadcrumb: "Flags",
          breadcrumbHref: "/custom-flags",
          promoText: "20% OFF ALL ADVERTISING FLAGS - SHIPS NEXT DAY",
          image: "/images/products/main%20page/feather_flag.png",
          ratingCount: "820",
          ratingScore: "4.8",
          sizes: [
            {
              label: "9ft Feather Flag",
              value: "9ft",
              basePrice: 80.00,
            },
            {
              label: "10ft Feather Flag",
              value: "10ft",
              basePrice: 100.00,
            },
            {
              label: "13ft Feather Flag",
              value: "13ft",
              basePrice: 110.00,
            },
            {
              label: "16ft Feather Flag",
              value: "16ft",
              basePrice: 130.00,
            },
          ],
          selects: [
            {
              label: "Pole Option",
              options: [
                {
                  label: "No Pole (Flag Fabric Only)",
                  value: "no_pole",
                  priceAdder: 0,
                  description: "Select if you already have a pole.",
                },
                {
                  label: "Include Pole (+$35.00)",
                  value: "pole",
                  priceAdder: 35.00,
                  description: "Premium carbon-fiberglass pole.",
                },
              ],
            },
            {
              label: "Base Option",
              options: [
                {
                  label: "No Base",
                  value: "no_base",
                  priceAdder: 0,
                },
                {
                  label: "Ground Stake (+$40.00)",
                  value: "stake",
                  priceAdder: 40.00,
                  description: "Classic stake for soil or grass.",
                },
                {
                  label: "Cross Base (+$55.00)",
                  value: "cross",
                  priceAdder: 55.00,
                  description: "Standard folding cross base.",
                },
                {
                  label: "CS-01 Metal Cross Base (+$65.00)",
                  value: "cs01",
                  priceAdder: 65.00,
                  description: "Heavy duty metal cross base.",
                },
                {
                  label: "CS-02 Cross Base (+$45.00)",
                  value: "cs02",
                  priceAdder: 45.00,
                  description: "Standard economy cross base.",
                },
                {
                  label: "GS-01 Ground Spike (+$45.00)",
                  value: "gs01",
                  priceAdder: 45.00,
                  description: "Heavy duty ground spike.",
                },
              ],
            },
            {
              label: "Water Bag Option",
              options: [
                {
                  label: "No Water Bag",
                  value: "no_water_bag",
                  priceAdder: 0,
                },
                {
                  label: "Water Bag (+$10.00)",
                  value: "water_bag_10",
                  priceAdder: 10.00,
                  description: "Adds stability for cross bases.",
                },
                {
                  label: "WF-08 Water Bag (+$14.00)",
                  value: "wf08",
                  priceAdder: 14.00,
                  description: "Premium donut water weight bag.",
                },
              ],
            },
            {
              label: "Carry Bag Option",
              options: [
                {
                  label: "No Carry Bag",
                  value: "no_carry_bag",
                  priceAdder: 0,
                },
                {
                  label: "Flag Carry Bag (+$45.00)",
                  value: "carry_bag",
                  priceAdder: 45.00,
                  description: "Convenient travel bag for hardware.",
                },
              ],
            },
            {
              label: "Flag Material & Build",
              options: [
                {
                  label: "Premium Polyester Knit",
                  value: "standard",
                  priceAdder: 0,
                  description:
                    "Lightweight mesh fabric designed for wind flow.",
                },
              ],
            },
          ],
          toggleGroups: [
            {
              label: "Print Direction",
              options: [
                {
                  id: "single",
                  label: "Single-Sided (Show through)",
                  priceAdder: 0,
                  description: "Design printed on one side, mirrored on back.",
                },
                {
                  id: "double",
                  label: "Double-Sided (Three layers)",
                  priceAdder: 150.00,
                  sizePriceAdders: {
                    "9ft": 150.00,
                    "10ft": 150.00,
                    "13ft": 160.00,
                    "16ft": 160.00,
                  },
                  description:
                    "Two separate prints with blocker liner in between.",
                },
              ],
            },
          ],
          qtyDiscount: "Save up to 10% on bulk quantities",
          keyFeatures: [
            "Fluttering wind-resistant design",
            "Dye-sublimation high-contrast printing",
            "Flexible fiberglass poles",
            "Carrying bag included",
          ],
          useCases: [
            "Business storefronts",
            "Grand openings",
            "Car dealerships",
            "Outdoor sporting events",
          ],
          specs: [
            { key: "Material", value: "110g Knit Polyester" },
            {
              key: "Pole Material",
              value: "Premium carbon-fiberglass telescoping poles",
            },
            { key: "DPI", value: "720 DPI High density print" },
            { key: "Wind Rating", value: "Up to 30 MPH wind gusts" },
          ],
          faqs: [
            {
              q: "Do these flags rotate in the wind?",
              a: "Yes, our flagpole hardware includes a rotating spindle that allows the flag to pivot 360 degrees to face the oncoming breeze.",
            },
            {
              q: "How long do feather flags last outdoors?",
              a: "With normal day-to-day weather, outdoor flag fabrics last about 6 to 12 months. We recommend taking them inside during severe storms.",
            },
          ],
          reviews: [
            {
              author: "Marcus G.",
              rating: 5,
              text: "Excellent height and print resolution. Brought people in for our bakery open house immediately!",
            },
          ],
          ctaHeading: "Ready to capture passing traffic?",
          ctaBody:
            "Design your custom feather flag now and start turning drivers into customers.",
          ctaLabel: "Customize Flag",
        },
      },
      {
        id: "teardrop-flags",
        name: "Teardrop Flags",
        description:
          "Elegant teardrop shape that remains taut and visible even in low wind conditions.",
        image: "/images/products/main%20page/teardrop_flag.png",
        price: "Starting at $49.68",
        config: {
          title: "Custom Teardrop Flags",
          subtitle:
            "Beautiful drop-shaped flags designed to stay open and display your logo clearly.",
          breadcrumb: "Flags",
          breadcrumbHref: "/custom-flags",
          promoText: "20% OFF ALL TEARDROP FLAGS",
          image: "/images/products/main%20page/teardrop_flag.png",
          ratingCount: "432",
          ratingScore: "4.7",
          sizes: [
            {
              label: "7ft Small Teardrop Flag",
              value: "84x30",
              basePrice: 49.68,
            },
            {
              label: "9ft Medium Teardrop Flag",
              value: "108x35",
              basePrice: 74.99,
            },
            {
              label: "11ft Large Teardrop Flag",
              value: "132x40",
              basePrice: 109.99,
            },
          ],
          selects: [
            {
              label: "Base Mount Option",
              options: [
                { label: "Ground Stake", value: "stake", priceAdder: 0 },
                { label: "Cross Base", value: "cross", priceAdder: 15.0 },
              ],
            },
          ],
          qtyDiscount: "Bulk discounts available",
          keyFeatures: [
            "Stiff teardrop loop structure",
            "Resists flapping noises",
            "Great for indoor trade shows",
            "Durable outdoor knit polyester",
          ],
          useCases: [
            "Corporate events",
            "Store entrances",
            "Sports tournaments",
            "Lobbies",
          ],
          specs: [
            { key: "Material", value: "110g Knit Polyester" },
            { key: "Pole Structure", value: "Flexible composite fiber poles" },
          ],
          faqs: [
            {
              q: "Why choose a teardrop flag?",
              a: "Teardrop flags remain fully tensioned, meaning your branding doesn't wrinkle or fold away even when there is no wind.",
            },
          ],
          reviews: [
            {
              author: "Samantha L.",
              rating: 5,
              text: "The print colors are very rich. Easy to assemble, and looks extremely professional.",
            },
          ],
          ctaHeading: "Get noticed with a teardrop flag",
          ctaBody:
            "Start designing online in minutes and make a bold statement.",
          ctaLabel: "Customize Teardrop Flag",
        },
      },
      {
        id: "straight-flags",
        name: "Straight Flags",
        description:
          "Classic rectangular standing flags that offer a large design canvas.",
        image: "/images/products/main%20page/straight_flag.png",
        price: "Starting at $54.37",
        config: {
          title: "Custom Straight Flags",
          subtitle:
            "Stately rectangular standing flags perfect for business branding and signage.",
          breadcrumb: "Flags",
          breadcrumbHref: "/custom-flags",
          promoText: "20% OFF STRAIGHT ADVERTISING FLAGS",
          image: "/images/products/main%20page/straight_flag.png",
          ratingCount: "295",
          ratingScore: "4.7",
          sizes: [
            {
              label: "8ft Small Straight Flag",
              value: "96x24",
              basePrice: 54.37,
            },
            {
              label: "10.5ft Medium Straight Flag",
              value: "126x28",
              basePrice: 79.99,
            },
            {
              label: "14ft Large Straight Flag",
              value: "168x30",
              basePrice: 119.99,
            },
          ],
          selects: [
            {
              label: "Hardware Base",
              options: [
                { label: "Ground Spike", value: "spike", priceAdder: 0 },
                { label: "Cross Base", value: "cross", priceAdder: 15.0 },
              ],
            },
          ],
          qtyDiscount: "Volume discounts apply",
          keyFeatures: [
            "Max advertising real estate",
            "Strong steel frames",
            "Double stitched hems",
          ],
          useCases: ["Auto dealerships", "Real estate sites", "Festivals"],
          specs: [{ key: "Material", value: "110g Knit Polyester" }],
          faqs: [],
          reviews: [],
          ctaHeading: "Design your straight flag",
          ctaBody: "Build your custom flag using our online template catalog.",
          ctaLabel: "Customize Straight Flag",
        },
      },
      {
        id: "flags",
        name: "Standard Flags",
        description:
          "Classic horizontal flags with brass grommets, perfect for flagpoles or hanging.",
        image: "/images/products/main%20page/flags.png",
        price: "Starting at $38.43",
        config: {
          title: "Standard Custom Flags",
          subtitle:
            "Fly your colors proud on standard flagpoles, indoor walls, or events.",
          breadcrumb: "Flags",
          breadcrumbHref: "/custom-flags",
          promoText: "20% OFF CUSTOM HANGING FLAGS",
          image: "/images/products/main%20page/flags.png",
          images: [
            "/images/products/main%20page/flags.png",
            "/images/products/gallery/flag_use_1.png",
            "/images/products/gallery/flag_use_1.png",
            "/images/products/gallery/flag_use_1.png",
          ],
          ratingCount: "612",
          ratingScore: "4.8",
          sizes: [
            {
              label: "3' x 5' Standard Flag",
              value: "36x60",
              basePrice: 38.43,
            },
            { label: "2' x 3' Small Flag", value: "24x36", basePrice: 24.99 },
            { label: "4' x 6' Large Flag", value: "48x72", basePrice: 59.99 },
          ],
          selects: [
            {
              label: "Finishing Option",
              options: [
                {
                  label: "Metal Brass Grommets on Left",
                  value: "grommets",
                  priceAdder: 0,
                },
                {
                  label: "3-inch Pole Sleeve",
                  value: "sleeve",
                  priceAdder: 5.0,
                },
              ],
            },
          ],
          qtyDiscount: "Buy in bulk and save",
          keyFeatures: [
            "Heavy duty canvas header",
            "Rust-proof brass grommets",
            "Lightweight polyester mesh flys easily",
          ],
          useCases: [
            "Business flags",
            "Schools and clubs",
            "Personal/residential poles",
          ],
          specs: [{ key: "Material", value: "115g Polyester Mesh" }],
          faqs: [],
          reviews: [],
          ctaHeading: "Design your custom flagpole flag",
          ctaBody:
            "Upload your crest, company emblem, or art to start printing today.",
          ctaLabel: "Customize Flag",
        },
      },
      {
        id: "pennant-flags",
        name: "Pennant Flags",
        description:
          "Triangular pennant flags for sports teams, schools, and festive string lines.",
        image: "/images/products/main%20page/pennant_flag.png",
        price: "Starting at $51.11",
        config: {
          title: "Custom Pennant Flags",
          subtitle:
            "Triangle flag pennants for schools, spirit events, and custom promotions.",
          breadcrumb: "Flags",
          breadcrumbHref: "/custom-flags",
          promoText: "20% OFF SPIRIT PENNANTS",
          image: "/images/products/main%20page/pennant_flag.png",
          ratingCount: "140",
          ratingScore: "4.7",
          sizes: [
            {
              label: "3' x 5' Triangle Pennant",
              value: "36x60",
              basePrice: 51.11,
            },
          ],
          selects: [
            {
              label: "Finishing",
              options: [
                { label: "Grommets", value: "grommets", priceAdder: 0 },
                { label: "Pole Sleeve", value: "sleeve", priceAdder: 5.0 },
              ],
            },
          ],
          qtyDiscount: "Bulk school discounts available",
          keyFeatures: [
            "Unique triangular shape",
            "Vibrant dye-sub printing",
            "Indoor/outdoor versatile",
          ],
          useCases: [
            "School gymnasiums",
            "Sports team tailgates",
            "Promotional strings",
          ],
          specs: [{ key: "Material", value: "Knit Polyester" }],
          faqs: [],
          reviews: [],
          ctaHeading: "Create your team pennant",
          ctaBody: "Customize your sports pennant with team logos and colors.",
          ctaLabel: "Customize Pennant",
        },
      },
    ],
  };
