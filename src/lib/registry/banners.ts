import { RegistryCategory } from "../productsRegistry";

export const customBanners: RegistryCategory = {
    title: "Custom Banners",
    breadcrumbLabel: "Custom Banners",
    heroSubtitle: "Big Impact. Quick Production. Durable.",
    description:
      "High-quality custom banners for any occasion. From outdoor vinyl to professional retractable displays, we have the perfect solution for your business or event.",
    heroImage: "/images/products/main%20page/banners%20hero%20image.png",
    tabletHeroImage: "/images/products/main%20page/banners%20hero%20image.png",
    mobileHeroImage: "/images/products/main%20page/banners%20hero%20image.png",
    reviewRating: "4.9",
    reviewCount: "2,680",
    reviewQuote:
      "The vinyl banner quality blew us away — vivid colors, sturdy grommets, and it arrived the next day. Already reordering for our next event!",
    categoryDescriptionText:
      "Discover high-impact custom banners designed to capture attention in any setting. Whether you need heavy-duty outdoor vinyl banners to weather the elements, mesh banners for high-wind fences, premium fabric banners for trade shows, or retractable roll-up displays for quick events, we have you covered. All banners are printed using state-of-the-art printers with vibrant, fade-resistant UV inks.",
    categorySecondaryImage:
      "/images/products/main%20page/banners_desc.png",
    faqs: [
      {
        q: "What is the difference between vinyl and fabric banners?",
        a: "Vinyl banners are highly durable and water-resistant, making them ideal for outdoor advertising. Fabric banners offer a premium, non-glare matte finish which is excellent for indoor displays, photo backdrops, and trade shows. Fabric banners are also machine washable.",
      },
      {
        q: "Do the banners come with grommets for hanging?",
        a: "Yes, our vinyl and fabric banners come with optional metal brass grommets pre-installed around the perimeter at no extra charge, allowing for easy hanging with ropes, bungee cords, or zip ties.",
      },
      {
        q: "Are retractable banners suitable for outdoor use?",
        a: "Retractable banners are primarily designed for indoor use. They can be used outdoors in calm, dry weather, but wind can easily blow them over due to their lightweight standing structure.",
      },
    ],
    products: [
      {
        id: "vinyl-banners",
        name: "Vinyl Banners",
        description: "Durable and weather-resistant for indoor or outdoor use.",
        image: "/images/products/main%20page/vinyl_banner.png",
        price: "Starting at $12.99",
        badge: "Most Popular",
        config: {
          title: "Custom Vinyl Banners",
          subtitle:
            "Durable, waterproof, outdoor-rated vinyl banners complete with grommets or pole pockets.",
          breadcrumb: "Banners",
          breadcrumbHref: "/custom-banners",
          promoText: "20% OFF ALL VINYL BANNERS - SHIPS NEXT DAY",
          image: "/images/products/main%20page/vinyl_banner.png",
          ratingCount: "1,530",
          ratingScore: "4.8",
          sizes: [
            { label: "2' x 4' Small Banner", value: "24x48", basePrice: 12.99 },
            {
              label: "3' x 6' Standard Banner",
              value: "36x72",
              basePrice: 24.99,
            },
            { label: "4' x 8' Large Banner", value: "48x96", basePrice: 45.99 },
          ],
          selects: [
            {
              label: "Material Style",
              options: [
                {
                  label: "13oz Standard Gloss Vinyl",
                  value: "13oz_gloss",
                  priceAdder: 0,
                },
                {
                  label: "15oz Premium Matte Vinyl",
                  value: "15oz_matte",
                  priceAdder: 5.0,
                },
              ],
            },
            {
              label: "Finishing Option",
              options: [
                {
                  label: "Brass Grommets (Every 2ft)",
                  value: "grommets",
                  priceAdder: 0,
                },
                {
                  label: "3-inch Pole Pockets",
                  value: "pockets",
                  priceAdder: 6.0,
                },
              ],
            },
          ],
          qtyDiscount: "Save up to 15% on bulk banner orders",
          keyFeatures: [
            "Waterproof & UV resistant",
            "Heat-welded hems for extra strength",
            "Vibrant full-color digital printing",
          ],
          useCases: [
            "Storefront advertising",
            "Outdoor events",
            "Grand openings",
            "Sponsorship banners",
          ],
          specs: [
            { key: "Material", value: "13oz or 15oz flexible PVC vinyl" },
            { key: "Print Resolution", value: "1440 DPI High Definition" },
            {
              key: "Outdoor Lifespan",
              value: "3-5 years in standard conditions",
            },
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Ready to design your banner?",
          ctaBody:
            "Start designing online in minutes or upload your print-ready files.",
          ctaLabel: "Customize Vinyl Banner",
        },
      },
      {
        id: "fabric-banners",
        name: "Fabric Banners",
        description:
          "Dye-sub polyester with a premium, wrinkle-free matte finish.",
        image: "/images/products/main%20page/fabric_banner.png",
        price: "Starting at $45.99",
        badge: "Premium",
        config: {
          title: "Custom Fabric Banners",
          subtitle:
            "Dye-sublimation printed on premium wrinkle-free knit polyester fabric.",
          breadcrumb: "Banners",
          breadcrumbHref: "/custom-banners",
          promoText: "20% OFF PREMIUM FABRIC BANNERS",
          image: "/images/products/main%20page/fabric_banner.png",
          images: [
            "/images/products/main%20page/fabric_banner.png",
            "/images/products/gallery/fabric_banner_use_1.png",
            "/images/products/gallery/fabric_banner_use_1.png",
            "/images/products/gallery/fabric_banner_use_1.png",
          ],
          ratingCount: "980",
          ratingScore: "4.9",
          sizes: [
            { label: "2' x 6' Small Banner", value: "24x72", basePrice: 45.99 },
            {
              label: "3' x 8' Standard Banner",
              value: "36x96",
              basePrice: 74.99,
            },
            { label: "4' x 8' Large Banner", value: "48x96", basePrice: 94.99 },
          ],
          selects: [
            {
              label: "Fabric Material",
              options: [
                {
                  label: "Premium Dye-Sub Polyester",
                  value: "polyester",
                  priceAdder: 0,
                  description:
                    "Vibrant dye-sublimation on wrinkle-resistant, washable polyester.",
                },
                {
                  label: "Satin Fabric",
                  value: "satin",
                  priceAdder: 12.0,
                  description:
                    "Luxurious sheen with rich, deep colors. Ideal for upscale events.",
                },
                {
                  label: "Velvet Fabric",
                  value: "velvet",
                  priceAdder: 20.0,
                  description:
                    "Premium velvet texture for an elegant, high-end look.",
                },
              ],
            },
            {
              label: "Banner Stand Hardware",
              options: [
                { label: "No Stand", value: "none", priceAdder: 0 },
                { label: "X-Banner Stand", value: "x_stand", priceAdder: 35.0 },
                { label: "L-Banner Stand", value: "l_stand", priceAdder: 55.0 },
              ],
            },
          ],
          qtyDiscount: "Bulk savings apply",
          keyFeatures: [
            "Wrinkle-resistant knit polyester",
            "Dye-sub infused ink (never cracks or peels)",
            "Machine washable and reusable",
          ],
          useCases: [
            "Lobbies & offices",
            "Trade show backdrops",
            "Press releases",
            "Upscale retail window displays",
          ],
          specs: [
            { key: "Material", value: "100% Knit Polyester Fabric" },
            { key: "Printing Type", value: "Dye-Sublimation Heat Transfer" },
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Elevate your indoor displays",
          ctaBody:
            "Order a luxury fabric banner today for your business or corporate lobby.",
          ctaLabel: "Customize Fabric Banner",
        },
      },
      {
        id: "mesh-banners",
        name: "Mesh Banners",
        description:
          "Perforated vinyl that allows wind to pass through, ideal for fences.",
        image: "/images/products/main%20page/mesh_banner.png",
        price: "Starting at $42.99",
        badge: "Wind-Resistant",
        config: {
          title: "Custom Mesh Banners",
          subtitle:
            "Perforated vinyl mesh allows wind to blow right through, perfect for fence lines.",
          breadcrumb: "Banners",
          breadcrumbHref: "/custom-banners",
          promoText: "20% OFF ALL MESH FENCE BANNERS",
          image: "/images/products/main%20page/mesh_banner.png",
          ratingCount: "680",
          ratingScore: "4.8",
          sizes: [
            {
              label: "2' x 6' Small Fence Banner",
              value: "24x72",
              basePrice: 42.99,
            },
            {
              label: "3' x 8' Standard Fence Banner",
              value: "36x96",
              basePrice: 64.99,
            },
            {
              label: "4' x 8' Large Fence Banner",
              value: "48x96",
              basePrice: 84.99,
            },
          ],
          selects: [
            {
              label: "Material Style",
              options: [
                {
                  label: "8oz Perforated Wind Mesh Vinyl",
                  value: "8oz_mesh",
                  priceAdder: 0,
                },
              ],
            },
          ],
          qtyDiscount: "Volume discounts for construction zones & boundaries",
          keyFeatures: [
            "70/30 air flow pass-through design",
            "Reduces wind load stress on fences",
            "Metal brass grommets included",
          ],
          useCases: [
            "Construction sites",
            "Sports field fences",
            "Scaffolding signs",
            "High-wind zones",
          ],
          specs: [{ key: "Material", value: "8oz PVC Mesh Vinyl" }],
          faqs: [],
          reviews: [],
          ctaHeading: "Secure your mesh fence banner",
          ctaBody: "Print logos and renderings to fence lines.",
          ctaLabel: "Customize Mesh Banner",
        },
      },
      {
        id: "pole-banners",
        name: "Pole Banners",
        description:
          "Street-pole double sided banners with pockets for outdoor municipal displays.",
        image: "/images/products/main%20page/pole_banner.png",
        price: "Starting at $29.99",
        config: {
          title: "Custom Pole Banners",
          subtitle:
            "Double-sided heavy duty pole banners finished with pole pockets for light posts and boulevard mounts.",
          breadcrumb: "Banners",
          breadcrumbHref: "/custom-banners",
          promoText: "20% OFF STREET & BOULEVARD POLE BANNERS",
          image: "/images/products/main%20page/pole_banner.png",
          ratingCount: "210",
          ratingScore: "4.7",
          sizes: [
            {
              label: '18" x 36" Small Pole Banner',
              value: "36x18",
              basePrice: 29.99,
            },
            {
              label: '24" x 48" Standard Pole Banner',
              value: "48x24",
              basePrice: 49.99,
            },
            {
              label: '30" x 60" Large Pole Banner',
              value: "60x30",
              basePrice: 79.99,
            },
          ],
          selects: [
            {
              label: "Material Strength",
              options: [
                {
                  label: "18oz Double-Sided Blockout Vinyl",
                  value: "18oz_blockout",
                  priceAdder: 0,
                },
              ],
            },
          ],
          qtyDiscount: "Save up to 12% on municipal boulevard orders",
          keyFeatures: [
            "Heavy 18oz blockout vinyl prevents light show-through",
            "Double-sided prints",
            "Reinforced pole pocket sleeves",
          ],
          useCases: [
            "Main street lamppost decorations",
            "University campus wayfinding",
            "Seasonal city events",
          ],
          specs: [
            { key: "Material", value: "18oz Blockout Vinyl" },
            { key: "Finishing", value: '3" flat pole pockets on top & bottom' },
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Decorate your boulevard poles",
          ctaBody: "Print double-sided advertising layouts today.",
          ctaLabel: "Customize Pole Banner",
        },
      },
      {
        id: "breakaway-banners",
        name: "Breakaway Banners",
        description:
          "Run-through spirit banners for sports games with center Velcro seam.",
        image: "/images/products/main%20page/breakaway_banner.png",
        price: "Starting at $34.99",
        config: {
          title: "Custom Breakaway Banners",
          subtitle:
            "Reusable sports run-through banners with Velcro center seams, perfect for team entrances.",
          breadcrumb: "Banners",
          breadcrumbHref: "/custom-banners",
          promoText: "20% OFF SCHOOL SPIRIT BREAKAWAYS",
          image: "/images/products/main%20page/breakaway_banner.png",
          ratingCount: "135",
          ratingScore: "4.8",
          sizes: [
            {
              label: "8' x 10' Run-Through Banner",
              value: "96x120",
              basePrice: 99.99,
            },
            {
              label: "10' x 12' Giant Team Banner",
              value: "120x144",
              basePrice: 149.99,
            },
          ],
          selects: [
            {
              label: "Pole Handles Finishing",
              options: [
                {
                  label: "Top/Bottom and Side Pole Pockets",
                  value: "sleeves",
                  priceAdder: 0,
                },
              ],
            },
          ],
          qtyDiscount: "Saves with booster club codes",
          keyFeatures: [
            "Reusable hook-and-loop center seam",
            "Vibrant school prints",
            "Heavy-duty matte blockout vinyl fabric",
          ],
          useCases: [
            "Football team stadium entry",
            "Pep rallies",
            "High school sports events",
          ],
          specs: [
            {
              key: "Velcro Seams",
              value: "Double stitched hook-and-loop strip center",
            },
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Ignite team spirit",
          ctaBody: "Design a reusable sports breakaway banner.",
          ctaLabel: "Customize Breakaway",
        },
      },
      {
        id: "vertical-banners",
        name: "Vertical Banners",
        description:
          "Hanging vertical banners for slim storefront pillars or corridor walls.",
        image: "/images/products/main%20page/vertical_banner.png",
        price: "Starting at $19.99",
        config: {
          title: "Custom Vertical Banners",
          subtitle:
            "Stately vertical hanging banners for column displays, storefront pillars, and lobby announcements.",
          breadcrumb: "Banners",
          breadcrumbHref: "/custom-banners",
          promoText: "20% OFF VERTICAL SIGNS & BANNERS",
          image: "/images/products/main%20page/vertical_banner.png",
          ratingCount: "290",
          ratingScore: "4.7",
          sizes: [
            {
              label: "2' x 6' Vertical Banner",
              value: "72x24",
              basePrice: 19.99,
            },
            {
              label: "3' x 8' Large Vertical Banner",
              value: "96x36",
              basePrice: 34.99,
            },
          ],
          selects: [
            {
              label: "Lamination",
              options: [
                {
                  label: "High Gloss Lamination",
                  value: "gloss",
                  priceAdder: 0,
                },
                {
                  label: "Velvet Matte Finish",
                  value: "matte",
                  priceAdder: 3.5,
                },
              ],
            },
          ],
          qtyDiscount: "Volume tiers starting at 5+ banners",
          keyFeatures: [
            "Space-efficient design",
            "Reinforced corner grommets included",
            "Indoor and outdoor weather-safe",
          ],
          useCases: [
            "Storefront entrance pillars",
            "Indoor corridor directions",
            "Trade show stand fillers",
          ],
          specs: [{ key: "Orientation", value: "Strict vertical layout" }],
          faqs: [],
          reviews: [],
          ctaHeading: "Design vertical banner displays",
          ctaBody:
            "Fill vertical pillar assets with clean logos and phone markers.",
          ctaLabel: "Customize Vertical Banner",
        },
      },
      {
        id: "roll-up-banners",
        name: "Retractable Banners",
        description: "Portable and easy to set up for trade shows and events.",
        image: "/images/products/main%20page/retractable_roll_up_banner.png",
        price: "Starting at $89.00",
        badge: "Best Seller",
        config: {
          title: "Retractable Banners (Roll Up)",
          subtitle:
            "Portable stand and pre-installed banner, rolls up in seconds for easy transport.",
          breadcrumb: "Banners",
          breadcrumbHref: "/custom-banners",
          promoText: "20% OFF RETRACTABLE ROLL-UP BANNERS",
          image: "/images/products/main%20page/retractable_roll_up_banner.png",
          images: [
            "/images/products/main%20page/retractable_roll_up_banner.png",
            "/images/products/gallery/retractable_use_1.png",
            "/images/products/gallery/retractable_use_2.png",
            "/images/products/gallery/retractable_use_3.png",
          ],
          ratingCount: "1240",
          ratingScore: "4.9",
          sizes: [
            {
              label: '33" x 80" Standard Stand Size',
              value: "33x80",
              basePrice: 89.00,
            },
            {
              label: '46" x 80" Vertical Size',
              value: "46x80",
              basePrice: 220.00,
            },
          ],
          selects: [
            {
              label: "Stand Option",
              options: [
                {
                  label: "Standard Silver Cassette Stand",
                  value: "standard_stand",
                  priceAdder: 0,
                },
                {
                  label: "Black Standard Plus Stand",
                  value: "black_plus",
                  priceAdder: 13.5,
                },
                {
                  label: "Professional Luxury Stand",
                  value: "professional",
                  priceAdder: 19.5,
                },
              ],
            },
          ],
          qtyDiscount: "Bulk discounts starting at 2 or more banners",
          bulkDiscounts: [
            { minQty: 2, discountPercent: 5 },
            { minQty: 5, discountPercent: 10 },
            { minQty: 10, discountPercent: 15 },
            { minQty: 25, discountPercent: 20 },
          ],
          keyFeatures: [
            "Sturdy aluminum base container",
            "Padded carrying case included",
            "Setup in under 60 seconds",
            "Anti-curl curl-free polyester film",
          ],
          useCases: [
            "Trade show booths",
            "Corporate lobbies",
            "Retail announcements",
            "Presentations",
          ],
          specs: [
            { key: "Weight", value: "Approximately 7-10 lbs including stand" },
            { key: "Display Size", value: '79" x 33" (Standard) or 80" x 46" (Large)' },
            {
              key: "Hardware",
              value: "Anodized aluminum body with fold-out feet",
            },
          ],
          description: `Maximize your brand visibility at trade shows, retail storefronts, conferences, and exhibitions with our premium Custom Retractable Roll Up Banners. These portable banner displays are the gold standard for high-impact offline marketing, offering a seamless blend of durability, convenience, and visual appeal. 

Every retractable banner stand comes pre-assembled with your custom-printed graphic rolled inside a sturdy, lightweight aluminum cassette. Setup takes under 60 seconds—simply extend the vertical support pole, pull up the banner graphic, and lock it into place. Whether you need custom trade show signage or a permanent retail display, our roll up stands are built to last.

Our banners are printed on curl-free, light-blocking polyester grayback film. This prevents the edges of the banner from curling over time and ensures that light does not shine through from behind, keeping your message fully legible under bright exhibition lights. With next-day banner printing options, we help you get event-ready at a moment's notice.

Why Choose Our Professional Rollup Banners?
- Premium Anti-Curl Material: Printed on smooth, opaque blockout film for a clean, flat presentation.
- Heavy-Duty Cassette: Anodized aluminum base with fold-out stabilizing feet for reliable outdoor and indoor standee stability.
- Effortless Portability: A padded travel carrying case is included with every order, making transportation a breeze.
- Dynamic Visual Impact: High-resolution UV printing at 1440 DPI delivers vivid, fade-resistant colors that stand out across crowded halls.`,
          faqs: [
            {
              q: "How do I set up a retractable roll up banner?",
              a: "Setting up your pull up banner is incredibly simple. Unpack the aluminum base, turn out the stabilizing feet, insert the support pole into the base slot, and then pull the banner up gently and attach it to the top hook of the pole. The entire process takes less than a minute.",
            },
            {
              q: "What material is used for the rollup banner graphic?",
              a: "We use a premium curl-free polyester film with a blockout greyback coating. This professional material ensures your graphics remain completely flat and prevents rear light show-through, ensuring maximum legibility under bright trade show lighting.",
            },
            {
              q: "Can I replace the banner graphic in my existing retractable stand?",
              a: "Yes, the graphic can be replaced, but it requires tensioning the internal spring mechanism of the aluminum cassette. We recommend sending it to our print facility or purchasing a new stand bundle for the best results.",
            },
            {
              q: "What is the difference between standard and professional stands?",
              a: "Standard stands feature swing-out stabilizing feet that extend from the front and back of the aluminum base. Professional luxury stands have a wider, heavier teardrop-shaped base that stands stable on its own without visible swing-out feet, offering a cleaner look.",
            },
            {
              q: "Is the roll up banner suitable for outdoor use?",
              a: "Retractable banners are designed primarily for indoor applications. They can be used outdoors in calm, dry conditions, but because of their tall profile, wind can act as a sail and tip the stand. For outdoor promotions, we recommend our heavy-duty feather flags or mesh banners.",
            },
          ],
          reviews: [
            {
              author: "Marcus K., Event Director",
              rating: 5,
              text: "The custom rollup banner exceeded our expectations. The greyback film is completely blockout and doesn't curl at all. Set up was a breeze at our conference booth.",
            },
            {
              author: "Sarah J., Retail Manager",
              rating: 5,
              text: "Absolute lifesaver! Ordered with next day banner printing and it arrived right on time for our store opening. The print colors are stunningly bright.",
            },
            {
              author: "David T., Startup Founder",
              rating: 5,
              text: "Excellent quality trade show banner stand. We've used it at three separate events now and the aluminum retracting mechanism still works perfectly.",
            },
          ],
          ctaHeading: "Ready to make an impression?",
          ctaBody:
            "Order a retractable banner stand and roll out your messages quickly.",
          ctaLabel: "Customize Retractable Banner",
        },
      },
      {
        id: "x-banner-stands",
        name: "X-Banner Stands",
        description:
          "Collapsible lightweight cross stands with custom printed corner-grommet banners.",
        image: "/images/products/main%20page/x_banner_stand.png",
        price: "Starting at $49.99",
        config: {
          title: "X-Frame Banner Stands",
          subtitle:
            "Highly cost-effective standing banners utilizing tension fiberglass arms to pull banner corners taut.",
          breadcrumb: "Banners",
          breadcrumbHref: "/custom-banners",
          promoText: "20% OFF BUDGET X-BANNER DISPLAYS",
          image: "/images/products/main%20page/x_banner_stand.png",
          ratingCount: "385",
          ratingScore: "4.7",
          sizes: [
            {
              label: '24" x 63" Small X-Stand',
              value: "63x24",
              basePrice: 49.99,
            },
            {
              label: '31" h- 70" Large X-Stand',
              value: "70x31",
              basePrice: 69.99,
            },
          ],
          selects: [
            {
              label: "Frame Assembly",
              options: [
                {
                  label: "Include Fiberglass X-Stand & Carrying Bag",
                  value: "full_kit",
                  priceAdder: 0,
                },
              ],
            },
          ],
          qtyDiscount: "Saves up to 15% on bulk packages",
          keyFeatures: [
            "Lightweight carbon-fiberglass frame legs",
            "Super easy backdrop replacements",
            "4 grommeted corners attach to pegs",
          ],
          useCases: [
            "Product marketing roll-outs",
            "Retail storefronts",
            "Special church events",
            "Expositions",
          ],
          specs: [{ key: "Material", value: "13oz Matte PVC Vinyl" }],
          faqs: [],
          reviews: [],
          ctaHeading: "Promote on a budget",
          ctaBody: "Order lightweight X-stands that fold down flat in seconds.",
          ctaLabel: "Customize X-Stand Banner",
        },
      },
      {
        id: "step-and-repeat-banners",
        name: "Backdrop Banners",
        description:
          "Ideal for red carpet events, photo backdrops and press conferences.",
        image: "/images/products/main%20page/backdrop_banners.png",
        price: "Starting at $145.99",
        badge: "Event Ready",
        config: {
          title: "Backdrop Banners",
          subtitle:
            "Professional background banners for press walls, photo shoots, and red carpets.",
          breadcrumb: "Banners",
          breadcrumbHref: "/custom-banners",
          promoText: "20% OFF STEP AND REPEAT PRESS WALLS",
          image: "/images/products/main%20page/backdrop_banners.png",
          images: [
            "/images/products/main%20page/backdrop_banners.png",
            "/images/products/gallery/step_repeat_use_1.png",
            "/images/products/gallery/step_repeat_use_2.png",
            "/images/products/gallery/step_repeat_use_3.png",
          ],
          ratingCount: "430",
          ratingScore: "4.8",
          sizes: [
            {
              label: "8' x 8' Square Backdrop",
              value: "96x96",
              basePrice: 145.99,
            },
            {
              label: "10' x 8' Large Backdrop",
              value: "120x96",
              basePrice: 179.99,
            },
          ],
          selects: [
            {
              label: "Adjustable Backdrop Stand Hardware",
              options: [
                {
                  label: "Include Adjustable Backdrop Stand",
                  value: "with_stand",
                  priceAdder: 95.0,
                },
                {
                  label: "Banner Print Only (No Stand)",
                  value: "banner_only",
                  priceAdder: 0,
                },
              ],
            },
          ],
          qtyDiscount: "Event planner package discounts available",
          keyFeatures: [
            "Large seamless backdrops",
            "Pole pockets on top & bottom for mounting",
            "Glariess matte finish ensures clear photography",
          ],
          useCases: [
            "Press conferences",
            "Red carpet arrivals",
            "Wedding photo booths",
            "Corporate events",
          ],
          specs: [{ key: "Material", value: "15oz Blockout Matte Vinyl" }],
          faqs: [],
          reviews: [],
          ctaHeading: "Create your logo background backdrop",
          ctaBody:
            "Upload your sponsor logos and create repeated patterns instantly.",
          ctaLabel: "Customize Backdrop",
        },
      },
      {
        id: "tabletop-retractable-banners",
        name: "Tabletop Retractables",
        description:
          "Miniature counter-top roll up banners for checkout registries and lobbies.",
        image: "/images/products/main%20page/tabletop_retractable.jpg",
        price: "Starting at $29.99",
        config: {
          title: "Tabletop Retractable Banners",
          subtitle:
            "Mini roll-up banners designed to sit on tables, point-of-sale registers, and service desks.",
          breadcrumb: "Banners",
          breadcrumbHref: "/custom-banners",
          promoText: "20% OFF TABLETOP RETRACTABLE DISPLAYS",
          image: "/images/products/main%20page/tabletop_retractable.jpg",
          ratingCount: "420",
          ratingScore: "4.8",
          sizes: [
            {
              label: '11.75" x 17" A3 Size Mini Stand',
              value: "17x11.75",
              basePrice: 39.99,
            },
            {
              label: '8.25" x 11.5" A4 Size Micro Stand',
              value: "11.5x8.25",
              basePrice: 29.99,
            },
          ],
          selects: [
            {
              label: "Base Housing",
              options: [
                {
                  label: "Miniature Silver Aluminum Base",
                  value: "mini_silver",
                  priceAdder: 0,
                },
              ],
            },
          ],
          qtyDiscount: "Volume counter-top rates starting at 10+",
          keyFeatures: [
            "Fits compact desk spaces",
            "Retracts into a tiny housing for travel",
            "Smooth banner film ensures high detail readability",
          ],
          useCases: [
            "Counter checkout promotions",
            "Hotel registration desks",
            "Restaurant menus",
            "Job fair table displays",
          ],
          specs: [
            {
              key: "Print Film",
              value: "8mil thick smooth polypropylene film",
            },
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Maximize register branding",
          ctaBody: "Order mini tabletop roll-up stands today.",
          ctaLabel: "Customize Mini Roll-Up",
        },
      },
    ],
  };
