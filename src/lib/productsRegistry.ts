import { ProductPageConfig } from "@/components/SignProductPage";

export interface RegistryProduct {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  badge?: string;
  config: ProductPageConfig;
}

export interface RegistryCategory {
  title: string;
  description: string;
  heroImage: string;
  tabletHeroImage?: string;
  mobileHeroImage?: string;
  heroSubtitle?: string;
  products: RegistryProduct[];
  categoryDescriptionText?: string;
  categorySecondaryImage?: string;
  faqs?: { q: string; a: string }[];
}

export const PRODUCTS_REGISTRY: Record<string, RegistryCategory> = {
  "custom-banners": {
    title: "Custom Banners",
    heroSubtitle: "Big Impact. Quick Production. Durable.",
    description: "High-quality custom banners for any occasion. From outdoor vinyl to professional retractable displays, we have the perfect solution for your business or event.",
    heroImage: "https://www.buildasign.com/images/uploaded/Banner/BAS_WEB_01292025_Nav_Megamenu_Banner_V5.jpg",
    categoryDescriptionText: "Discover high-impact custom banners designed to capture attention in any setting. Whether you need heavy-duty outdoor vinyl banners to weather the elements, mesh banners for high-wind fences, premium fabric banners for trade shows, or retractable roll-up displays for quick events, we have you covered. All banners are printed using state-of-the-art printers with vibrant, fade-resistant UV inks.",
    categorySecondaryImage: "https://ext.same-assets.com/1114826555/3799598245.png",
    faqs: [
      { q: "What is the difference between vinyl and fabric banners?", a: "Vinyl banners are highly durable and water-resistant, making them ideal for outdoor advertising. Fabric banners offer a premium, non-glare matte finish which is excellent for indoor displays, photo backdrops, and trade shows. Fabric banners are also machine washable." },
      { q: "Do the banners come with grommets for hanging?", a: "Yes, our vinyl and fabric banners come with optional metal brass grommets pre-installed around the perimeter at no extra charge, allowing for easy hanging with ropes, bungee cords, or zip ties." },
      { q: "Are retractable banners suitable for outdoor use?", a: "Retractable banners are primarily designed for indoor use. They can be used outdoors in calm, dry weather, but wind can easily blow them over due to their lightweight standing structure." }
    ],
    products: [
      {
        id: "vinyl-banners",
        name: "Vinyl Banners",
        description: "Durable and weather-resistant for indoor or outdoor use.",
        image: "https://ext.same-assets.com/1114826555/3799598245.png",
        price: "Starting at $12.99",
        badge: "Most Popular",
        config: {
          title: "Custom Vinyl Banners",
          subtitle: "Durable, waterproof, outdoor-rated vinyl banners complete with grommets or pole pockets.",
          breadcrumb: "Banners",
          breadcrumbHref: "/custom-banners",
          promoText: "20% OFF ALL VINYL BANNERS - SHIPS NEXT DAY",
          image: "https://ext.same-assets.com/1114826555/3799598245.png",
          ratingCount: "1,530",
          ratingScore: "4.8",
          sizes: [
            { label: '2\' x 4\' Small Banner', value: '24x48', basePrice: 12.99 },
            { label: '3\' x 6\' Standard Banner', value: '36x72', basePrice: 24.99 },
            { label: '4\' x 8\' Large Banner', value: '48x96', basePrice: 45.99 }
          ],
          selects: [
            {
              label: "Material Style",
              options: [
                { label: "13oz Standard Gloss Vinyl", value: "13oz_gloss", priceAdder: 0 },
                { label: "15oz Premium Matte Vinyl", value: "15oz_matte", priceAdder: 5.00 }
              ]
            },
            {
              label: "Finishing Option",
              options: [
                { label: "Brass Grommets (Every 2ft)", value: "grommets", priceAdder: 0 },
                { label: "3-inch Pole Pockets", value: "pockets", priceAdder: 6.00 }
              ]
            }
          ],
          qtyDiscount: "Save up to 15% on bulk banner orders",
          keyFeatures: ["Waterproof & UV resistant", "Heat-welded hems for extra strength", "Vibrant full-color digital printing"],
          useCases: ["Storefront advertising", "Outdoor events", "Grand openings", "Sponsorship banners"],
          specs: [
            { key: "Material", value: "13oz or 15oz flexible PVC vinyl" },
            { key: "Print Resolution", value: "1440 DPI High Definition" },
            { key: "Outdoor Lifespan", value: "3-5 years in standard conditions" }
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Ready to design your banner?",
          ctaBody: "Start designing online in minutes or upload your print-ready files.",
          ctaLabel: "Customize Vinyl Banner"
        }
      },
      {
        id: "fabric-banners",
        name: "Fabric Banners",
        description: "Dye-sub polyester with a premium, wrinkle-free matte finish.",
        image: "https://ext.same-assets.com/1114826555/1835265645.png",
        price: "Starting at $45.99",
        badge: "Premium",
        config: {
          title: "Custom Fabric Banners",
          subtitle: "Dye-sublimation printed on premium wrinkle-free knit polyester fabric.",
          breadcrumb: "Banners",
          breadcrumbHref: "/custom-banners",
          promoText: "20% OFF PREMIUM FABRIC BANNERS",
          image: "https://ext.same-assets.com/1114826555/1835265645.png",
          ratingCount: "980",
          ratingScore: "4.9",
          sizes: [
            { label: '2\' x 6\' Small Banner', value: '24x72', basePrice: 45.99 },
            { label: '3\' x 8\' Standard Banner', value: '36x96', basePrice: 74.99 },
            { label: '4\' x 8\' Large Banner', value: '48x96', basePrice: 94.99 }
          ],
          selects: [
            {
              label: "Fabric Material",
              options: [
                { label: "Premium Dye-Sub Polyester", value: "polyester", priceAdder: 0, description: "Vibrant dye-sublimation on wrinkle-resistant, washable polyester." },
                { label: "Satin Fabric", value: "satin", priceAdder: 12.00, description: "Luxurious sheen with rich, deep colors. Ideal for upscale events." },
                { label: "Velvet Fabric", value: "velvet", priceAdder: 20.00, description: "Premium velvet texture for an elegant, high-end look." }
              ]
            },
            {
              label: "Banner Stand Hardware",
              options: [
                { label: "No Stand", value: "none", priceAdder: 0 },
                { label: "X-Banner Stand", value: "x_stand", priceAdder: 35.00 },
                { label: "L-Banner Stand", value: "l_stand", priceAdder: 55.00 }
              ]
            }
          ],
          qtyDiscount: "Bulk savings apply",
          keyFeatures: ["Wrinkle-resistant knit polyester", "Dye-sub infused ink (never cracks or peels)", "Machine washable and reusable"],
          useCases: ["Lobbies & offices", "Trade show backdrops", "Press releases", "Upscale retail window displays"],
          specs: [
            { key: "Material", value: "100% Knit Polyester Fabric" },
            { key: "Printing Type", value: "Dye-Sublimation Heat Transfer" }
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Elevate your indoor displays",
          ctaBody: "Order a luxury fabric banner today for your business or corporate lobby.",
          ctaLabel: "Customize Fabric Banner"
        }
      },
      {
        id: "mesh-banners",
        name: "Mesh Banners",
        description: "Perforated vinyl that allows wind to pass through, ideal for fences.",
        image: "https://ext.same-assets.com/1114826555/1445363370.png",
        price: "Starting at $42.99",
        badge: "Wind-Resistant",
        config: {
          title: "Custom Mesh Banners",
          subtitle: "Perforated vinyl mesh allows wind to blow right through, perfect for fence lines.",
          breadcrumb: "Banners",
          breadcrumbHref: "/custom-banners",
          promoText: "20% OFF ALL MESH FENCE BANNERS",
          image: "https://ext.same-assets.com/1114826555/1445363370.png",
          ratingCount: "680",
          ratingScore: "4.8",
          sizes: [
            { label: '2\' x 6\' Small Fence Banner', value: '24x72', basePrice: 42.99 },
            { label: '3\' x 8\' Standard Fence Banner', value: '36x96', basePrice: 64.99 },
            { label: '4\' x 8\' Large Fence Banner', value: '48x96', basePrice: 84.99 }
          ],
          selects: [
            {
              label: "Material Style",
              options: [
                { label: "8oz Perforated Wind Mesh Vinyl", value: "8oz_mesh", priceAdder: 0 }
              ]
            }
          ],
          qtyDiscount: "Volume discounts for construction zones & boundaries",
          keyFeatures: ["70/30 air flow pass-through design", "Reduces wind load stress on fences", "Metal brass grommets included"],
          useCases: ["Construction sites", "Sports field fences", "Scaffolding signs", "High-wind zones"],
          specs: [
            { key: "Material", value: "8oz PVC Mesh Vinyl" }
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Secure your mesh fence banner",
          ctaBody: "Print logos and renderings to fence lines.",
          ctaLabel: "Customize Mesh Banner"
        }
      },
      {
        id: "pole-banners",
        name: "Pole Banners",
        description: "Street-pole double sided banners with pockets for outdoor municipal displays.",
        image: "https://ext.same-assets.com/1114826555/2684103585.png",
        price: "Starting at $29.99",
        config: {
          title: "Custom Pole Banners",
          subtitle: "Double-sided heavy duty pole banners finished with pole pockets for light posts and boulevard mounts.",
          breadcrumb: "Banners",
          breadcrumbHref: "/custom-banners",
          promoText: "20% OFF STREET & BOULEVARD POLE BANNERS",
          image: "https://ext.same-assets.com/1114826555/2684103585.png",
          ratingCount: "210",
          ratingScore: "4.7",
          sizes: [
            { label: '18" x 36" Small Pole Banner', value: '36x18', basePrice: 29.99 },
            { label: '24" x 48" Standard Pole Banner', value: '48x24', basePrice: 49.99 },
            { label: '30" x 60" Large Pole Banner', value: '60x30', basePrice: 79.99 }
          ],
          selects: [
            {
              label: "Material Strength",
              options: [
                { label: "18oz Double-Sided Blockout Vinyl", value: "18oz_blockout", priceAdder: 0 }
              ]
            }
          ],
          qtyDiscount: "Save up to 12% on municipal boulevard orders",
          keyFeatures: ["Heavy 18oz blockout vinyl prevents light show-through", "Double-sided prints", "Reinforced pole pocket sleeves"],
          useCases: ["Main street lamppost decorations", "University campus wayfinding", "Seasonal city events"],
          specs: [
            { key: "Material", value: "18oz Blockout Vinyl" },
            { key: "Finishing", value: "3\" flat pole pockets on top & bottom" }
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Decorate your boulevard poles",
          ctaBody: "Print double-sided advertising layouts today.",
          ctaLabel: "Customize Pole Banner"
        }
      },
      {
        id: "breakaway-banners",
        name: "Breakaway Banners",
        description: "Run-through spirit banners for sports games with center Velcro seam.",
        image: "https://ext.same-assets.com/1114826555/898075086.png",
        price: "Starting at $34.99",
        config: {
          title: "Custom Breakaway Banners",
          subtitle: "Reusable sports run-through banners with Velcro center seams, perfect for team entrances.",
          breadcrumb: "Banners",
          breadcrumbHref: "/custom-banners",
          promoText: "20% OFF SCHOOL SPIRIT BREAKAWAYS",
          image: "https://ext.same-assets.com/1114826555/898075086.png",
          ratingCount: "135",
          ratingScore: "4.8",
          sizes: [
            { label: '8\' x 10\' Run-Through Banner', value: '96x120', basePrice: 99.99 },
            { label: '10\' x 12\' Giant Team Banner', value: '120x144', basePrice: 149.99 }
          ],
          selects: [
            {
              label: "Pole Handles Finishing",
              options: [
                { label: "Top/Bottom and Side Pole Pockets", value: "sleeves", priceAdder: 0 }
              ]
            }
          ],
          qtyDiscount: "Saves with booster club codes",
          keyFeatures: ["Reusable hook-and-loop center seam", "Vibrant school prints", "Heavy-duty matte blockout vinyl fabric"],
          useCases: ["Football team stadium entry", "Pep rallies", "High school sports events"],
          specs: [
            { key: "Velcro Seams", value: "Double stitched hook-and-loop strip center" }
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Ignite team spirit",
          ctaBody: "Design a reusable sports breakaway banner.",
          ctaLabel: "Customize Breakaway"
        }
      },
      {
        id: "vertical-banners",
        name: "Vertical Banners",
        description: "Hanging vertical banners for slim storefront pillars or corridor walls.",
        image: "https://ext.same-assets.com/1114826555/1286398033.png",
        price: "Starting at $19.99",
        config: {
          title: "Custom Vertical Banners",
          subtitle: "Stately vertical hanging banners for column displays, storefront pillars, and lobby announcements.",
          breadcrumb: "Banners",
          breadcrumbHref: "/custom-banners",
          promoText: "20% OFF VERTICAL SIGNS & BANNERS",
          image: "https://ext.same-assets.com/1114826555/1286398033.png",
          ratingCount: "290",
          ratingScore: "4.7",
          sizes: [
            { label: '2\' x 6\' Vertical Banner', value: '72x24', basePrice: 19.99 },
            { label: '3\' x 8\' Large Vertical Banner', value: '96x36', basePrice: 34.99 }
          ],
          selects: [
            {
              label: "Lamination",
              options: [
                { label: "High Gloss Lamination", value: "gloss", priceAdder: 0 },
                { label: "Velvet Matte Finish", value: "matte", priceAdder: 3.50 }
              ]
            }
          ],
          qtyDiscount: "Volume tiers starting at 5+ banners",
          keyFeatures: ["Space-efficient design", "Reinforced corner grommets included", "Indoor and outdoor weather-safe"],
          useCases: ["Storefront entrance pillars", "Indoor corridor directions", "Trade show stand fillers"],
          specs: [
            { key: "Orientation", value: "Strict vertical layout" }
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Design vertical banner displays",
          ctaBody: "Fill vertical pillar assets with clean logos and phone markers.",
          ctaLabel: "Customize Vertical Banner"
        }
      },
      {
        id: "roll-up-banners",
        name: "Retractable Banners",
        description: "Portable and easy to set up for trade shows and events.",
        image: "https://ext.same-assets.com/1114826555/898075086.png",
        price: "Starting at $93.27",
        badge: "Best Seller",
        config: {
          title: "Retractable Banners (Roll Up)",
          subtitle: "Portable stand and pre-installed banner, rolls up in seconds for easy transport.",
          breadcrumb: "Banners",
          breadcrumbHref: "/custom-banners",
          promoText: "20% OFF RETRACTABLE ROLL-UP BANNERS",
          image: "https://ext.same-assets.com/1114826555/898075086.png",
          ratingCount: "1240",
          ratingScore: "4.9",
          sizes: [
            { label: '79" x 33" Standard Stand Size', value: '79x33', basePrice: 93.27 }
          ],
          selects: [
            {
              label: "Material Style",
              options: [
                { label: "Standard (13oz Vinyl)", value: "standard", priceAdder: 0, description: "Classic, durable, and fade-resistant." },
                { label: "Polyester Greyback", value: "polyester", priceAdder: 15.00, description: "Smooth, wrinkle-resistant with lightblock backing." },
                { label: "Eco-Wise PVC Free", value: "eco", priceAdder: 10.00, description: "Environmentally friendly 13oz material." }
              ]
            },
            {
              label: "Stand Option",
              options: [
                { label: "Standard Silver Cassette Stand", value: "standard_stand", priceAdder: 0 },
                { label: "Black Standard Plus Stand", value: "black_plus", priceAdder: 13.50 },
                { label: "Professional Luxury Stand", value: "professional", priceAdder: 19.50 }
              ]
            }
          ],
          qtyDiscount: "Saves up to 10% on bulk displays",
          keyFeatures: ["Sturdy aluminum base container", "Padded carrying case included", "Setup in under 60 seconds", "Anti-curl materials"],
          useCases: ["Trade show booths", "Corporate lobbies", "Retail announcements", "Presentations"],
          specs: [
            { key: "Weight", value: "Approximately 7-10 lbs including stand" },
            { key: "Display Size", value: "79\" High x 33\" Wide" },
            { key: "Hardware", value: "Anodized aluminum body with fold-out feet" }
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Ready to make an impression?",
          ctaBody: "Order a retractable banner stand and roll out your messages quickly.",
          ctaLabel: "Customize Retractable Banner"
        }
      },
      {
        id: "x-banner-stands",
        name: "X-Banner Stands",
        description: "Collapsible lightweight cross stands with custom printed corner-grommet banners.",
        image: "https://ext.same-assets.com/1114826555/2401743055.png",
        price: "Starting at $49.99",
        config: {
          title: "X-Frame Banner Stands",
          subtitle: "Highly cost-effective standing banners utilizing tension fiberglass arms to pull banner corners taut.",
          breadcrumb: "Banners",
          breadcrumbHref: "/custom-banners",
          promoText: "20% OFF BUDGET X-BANNER DISPLAYS",
          image: "https://ext.same-assets.com/1114826555/2401743055.png",
          ratingCount: "385",
          ratingScore: "4.7",
          sizes: [
            { label: '24" x 63" Small X-Stand', value: '63x24', basePrice: 49.99 },
            { label: '31" x 70" Large X-Stand', value: '70x31', basePrice: 69.99 }
          ],
          selects: [
            {
              label: "Frame Assembly",
              options: [
                { label: "Include Fiberglass X-Stand & Carrying Bag", value: "full_kit", priceAdder: 0 }
              ]
            }
          ],
          qtyDiscount: "Saves up to 15% on bulk packages",
          keyFeatures: ["Lightweight carbon-fiberglass frame legs", "Super easy backdrop replacements", "4 grommeted corners attach to pegs"],
          useCases: ["Product marketing roll-outs", "Retail storefronts", "Special church events", "Expositions"],
          specs: [
            { key: "Material", value: "13oz Matte PVC Vinyl" }
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Promote on a budget",
          ctaBody: "Order lightweight X-stands that fold down flat in seconds.",
          ctaLabel: "Customize X-Stand Banner"
        }
      },
      {
        id: "step-and-repeat-banners",
        name: "Step & Repeat Banners",
        description: "Ideal for red carpet events, photo backdrops and press conferences.",
        image: "https://ext.same-assets.com/1114826555/2684103585.png",
        price: "Starting at $145.99",
        badge: "Event Ready",
        config: {
          title: "Step & Repeat Banners",
          subtitle: "Professional background banners for press walls, photo shoots, and red carpets.",
          breadcrumb: "Banners",
          breadcrumbHref: "/custom-banners",
          promoText: "20% OFF STEP AND REPEAT PRESS WALLS",
          image: "https://ext.same-assets.com/1114826555/2684103585.png",
          ratingCount: "430",
          ratingScore: "4.8",
          sizes: [
            { label: '8\' x 8\' Square Backdrop', value: '96x96', basePrice: 145.99 },
            { label: '10\' x 8\' Large Backdrop', value: '120x96', basePrice: 179.99 }
          ],
          selects: [
            {
              label: "Adjustable Backdrop Stand Hardware",
              options: [
                { label: "Include Adjustable Backdrop Stand", value: "with_stand", priceAdder: 95.00 },
                { label: "Banner Print Only (No Stand)", value: "banner_only", priceAdder: 0 }
              ]
            }
          ],
          qtyDiscount: "Event planner package discounts available",
          keyFeatures: ["Large seamless backdrops", "Pole pockets on top & bottom for mounting", "Glariess matte finish ensures clear photography"],
          useCases: ["Press conferences", "Red carpet arrivals", "Wedding photo booths", "Corporate events"],
          specs: [
            { key: "Material", value: "15oz Blockout Matte Vinyl" }
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Create your logo background backdrop",
          ctaBody: "Upload your sponsor logos and create repeated patterns instantly.",
          ctaLabel: "Customize Backdrop"
        }
      },
      {
        id: "tension-fabric-displays",
        name: "Tension Fabric Displays",
        description: "Premium pillowcase stretch fabric displays sliding over aluminum tube frames.",
        image: "https://ext.same-assets.com/1114826555/2283645032.png",
        price: "Starting at $189.99",
        config: {
          title: "Tension Fabric Displays",
          subtitle: "Pillowcase-style tension fabric graphics stretching over locking aluminum tubing. The ultimate tradeshow back wall.",
          breadcrumb: "Banners",
          breadcrumbHref: "/custom-banners",
          promoText: "20% OFF PREMIUM FABRIC DISPLAYS",
          image: "https://ext.same-assets.com/1114826555/2283645032.png",
          ratingCount: "165",
          ratingScore: "4.9",
          sizes: [
            { label: '8\' x 8\' Flat Tension Frame', value: '96x96', basePrice: 189.99 },
            { label: '10\' x 8\' Deluxe Exhibition Frame', value: '120x96', basePrice: 249.99 }
          ],
          selects: [
            {
              label: "Structure Hardware Kit",
              options: [
                { label: "Include Aluminum Tube Frame & Canvas Bag", value: "full_kit", priceAdder: 110.00 },
                { label: "Fabric Cover Graphic Print Only", value: "print_only", priceAdder: 0 }
              ]
            }
          ],
          qtyDiscount: "Volume exhibition rates apply",
          keyFeatures: ["Wrinkle-free stretch polyester", "Interlocking click-together aluminum frame", "Zippered bottom secures graphic tautly"],
          useCases: ["Trade show back walls", "Media walls", "Exhibition booths"],
          specs: [
            { key: "Fabric Weight", value: "240g Stretch Polyester knit" }
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Build a premium booth back wall",
          ctaBody: "Design zippered stretch fabric covers.",
          ctaLabel: "Customize Tension Display"
        }
      },
      {
        id: "tabletop-retractable-banners",
        name: "Tabletop Retractables",
        description: "Miniature counter-top roll up banners for checkout registries and lobbies.",
        image: "https://ext.same-assets.com/1114826555/898075086.png",
        price: "Starting at $29.99",
        config: {
          title: "Tabletop Retractable Banners",
          subtitle: "Mini roll-up banners designed to sit on tables, point-of-sale registers, and service desks.",
          breadcrumb: "Banners",
          breadcrumbHref: "/custom-banners",
          promoText: "20% OFF TABLETOP RETRACTABLE DISPLAYS",
          image: "https://ext.same-assets.com/1114826555/898075086.png",
          ratingCount: "420",
          ratingScore: "4.8",
          sizes: [
            { label: '11.75" x 17" A3 Size Mini Stand', value: '17x11.75', basePrice: 39.99 },
            { label: '8.25" x 11.5" A4 Size Micro Stand', value: '11.5x8.25', basePrice: 29.99 }
          ],
          selects: [
            {
              label: "Base Housing",
              options: [
                { label: "Miniature Silver Aluminum Base", value: "mini_silver", priceAdder: 0 }
              ]
            }
          ],
          qtyDiscount: "Volume counter-top rates starting at 10+",
          keyFeatures: ["Fits compact desk spaces", "Retracts into a tiny housing for travel", "Smooth banner film ensures high detail readability"],
          useCases: ["Counter checkout promotions", "Hotel registration desks", "Restaurant menus", "Job fair table displays"],
          specs: [
            { key: "Print Film", value: "8mil thick smooth polypropylene film" }
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Maximize register branding",
          ctaBody: "Order mini tabletop roll-up stands today.",
          ctaLabel: "Customize Mini Roll-Up"
        }
      },
      {
        id: "backdrop-banners",
        name: "Backdrop Banners",
        description: "Large format hanging backdrop banner sheets, ideal for photo booths.",
        image: "https://ext.same-assets.com/1114826555/2684103585.png",
        price: "Starting at $139.99",
        config: {
          title: "Custom Backdrop Banners",
          subtitle: "Large format hanging sheets, perfect for photography, theater backgrounds, and event photo booths.",
          breadcrumb: "Banners",
          breadcrumbHref: "/custom-banners",
          promoText: "20% OFF LARGE FORMAT BACKDROP PRINTS",
          image: "https://ext.same-assets.com/1114826555/2684103585.png",
          ratingCount: "270",
          ratingScore: "4.8",
          sizes: [
            { label: '8\' x 8\' Backdrop Banner', value: '96x96', basePrice: 139.99 },
            { label: '10\' x 8\' Backdrop Banner', value: '120x96', basePrice: 169.99 }
          ],
          selects: [
            {
              label: "Backdrop Lamination",
              options: [
                { label: "Matte Anti-Glare Finish", value: "matte", priceAdder: 0 }
              ]
            }
          ],
          qtyDiscount: "Volume discounts on large photo backdrops",
          keyFeatures: ["Anti-glare lamination prevents flash reflections", "Heavy duty matte blockout vinyl", "Grommets or pockets included"],
          useCases: ["Photography studio walls", "Theater backdrops", "Corporate press backdrops"],
          specs: [
            { key: "Material", value: "15oz Blockout Vinyl" }
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Print your custom backdrops",
          ctaBody: "Design seamless backdrops online.",
          ctaLabel: "Customize Backdrop Print"
        }
      }
    ]
  },
  "custom-flags": {
    title: "Custom Flags",
    heroSubtitle: "All-Weather. Quick Production. Affordable.",
    description: "Catch the attention of passing traffic with high-impact outdoor flags. Perfect for grand openings, store front promotions, and events.",
    heroImage: "https://www.buildasign.com/0083264_Flags_Desktop.jpeg",
    tabletHeroImage: "https://www.buildasign.com/0083259_Flags_Tablet.jpeg",
    mobileHeroImage: "https://www.buildasign.com/0083260_Flags_Mobile.jpeg",
    categoryDescriptionText: "Discover custom flags that make your message stand tall or fly high. From feather, teardrop, and garden flags to standard hanging flags and pennants, we offer styles for every setting. Each flag is fully customizable and built for durability, whether displayed indoors or out. Enhance your display with our selection of bases and mounting accessories, including drive-over stands, handheld flagpoles, and adjustable brackets. With simple design tools and fast production, it’s easy to create flags that get noticed.",
    categorySecondaryImage: "https://www.buildasign.com/images/uploaded/BAS_WEB_071125_Category_Flags_Secondary.jpg",
    faqs: [
      { q: "What types of custom flags do you offer?", a: "We offer a wide range of custom flags to suit any need, including standing styles like feather flags, teardrop flags, straight flags, garden flags, and stick flags, as well as hanging options like standard flags, nylon flags, and pennant flags." },
      { q: "Can I customize both the design and size of my flag?", a: "Yes! Our online design tools let you fully customize your flag’s artwork, and we offer a variety of sizes to match your intended use whether it’s for outdoor promotions, indoor displays, or handheld use." },
      { q: "What accessories are available for displaying custom flags?", a: "We carry a full line of accessories, including outdoor base kits, auger and drive-over bases, indoor flag stands, telescopic handheld poles, spinner poles, and adjustable aluminum brackets to suit any display environment." },
      { q: "Are your custom flags suitable for both indoor and outdoor use?", a: "Yes! Our custom flags are made with high-quality, durable materials that perform well outdoors in various weather conditions. They're also great for indoor settings like trade shows, storefronts, lobbies, and events. With a wide selection of bases and mounting options, you can easily display your flag wherever you need it." },
      { q: "Do your flags come with hardware or do I need to purchase that separately?", a: "Many of our flags have optional hardware bundles, but accessories like bases and poles are typically sold separately so you can mix and match based on your needs. Be sure to check the product description for bundling options." },
      { q: "Do you offer design assistance for custom flags?", a: "Yes! You can start from scratch, use one of our templates, or upload your own artwork. If you need help, our customer support team is happy to assist with setup and design tips." }
    ],
    products: [
      {
        id: "feather-flags",
        name: "Feather Flags",
        description: "Eye-catching fluttering flags designed to draw crowds from the roadside.",
        image: "https://www.buildasign.com/0085996_feather-flags_360.png",
        price: "Starting at $54.37",
        badge: "Best Seller",
        config: {
          title: "Custom Feather Flags",
          subtitle: "Outdoor advertising flags printed on durable knit polyester, complete with poles and hardware.",
          breadcrumb: "Flags",
          breadcrumbHref: "/custom-flags",
          promoText: "20% OFF ALL ADVERTISING FLAGS - SHIPS NEXT DAY",
          image: "https://www.buildasign.com/0085996_feather-flags_360.png",
          ratingCount: "820",
          ratingScore: "4.8",
          sizes: [
            { label: '8ft Small Feather Flag', value: '96x24', basePrice: 54.37 },
            { label: '10.5ft Medium Feather Flag', value: '126x28', basePrice: 79.99 },
            { label: '14ft Large Feather Flag', value: '168x30', basePrice: 119.99 }
          ],
          selects: [
            {
              label: "Hardware / Base Type",
              options: [
                { label: "Ground Spike (For Lawn/Soil)", value: "spike", priceAdder: 0, description: "Classic metal stake for inserting into soil." },
                { label: "Cross Stand & Water Bag", value: "cross", priceAdder: 15.00, description: "Folds flat, ideal for indoor or hard concrete ground." }
              ]
            },
            {
              label: "Flag Material & Build",
              options: [
                { label: "Premium Polyester Knit", value: "standard", priceAdder: 0, description: "Lightweight mesh fabric designed for wind flow." }
              ]
            }
          ],
          toggleGroups: [
            {
              label: "Print Direction",
              options: [
                { id: "single", label: "Single-Sided (Show through)", priceAdder: 0, description: "Design printed on one side, mirrored on back." },
                { id: "double", label: "Double-Sided (Three layers)", priceAdder: 25.00, description: "Two separate prints with blocker liner in between." }
              ]
            }
          ],
          qtyDiscount: "Save up to 10% on bulk quantities",
          keyFeatures: ["Fluttering wind-resistant design", "Dye-sublimation high-contrast printing", "Flexible fiberglass poles", "Carrying bag included"],
          useCases: ["Business storefronts", "Grand openings", "Car dealerships", "Outdoor sporting events"],
          specs: [
            { key: "Material", value: "110g Knit Polyester" },
            { key: "Pole Material", value: "Premium carbon-fiberglass telescoping poles" },
            { key: "DPI", value: "720 DPI High density print" },
            { key: "Wind Rating", value: "Up to 30 MPH wind gusts" }
          ],
          faqs: [
            { q: "Do these flags rotate in the wind?", a: "Yes, our flagpole hardware includes a rotating spindle that allows the flag to pivot 360 degrees to face the oncoming breeze." },
            { q: "How long do feather flags last outdoors?", a: "With normal day-to-day weather, outdoor flag fabrics last about 6 to 12 months. We recommend taking them inside during severe storms." }
          ],
          reviews: [
            { author: "Marcus G.", rating: 5, text: "Excellent height and print resolution. Brought people in for our bakery open house immediately!" }
          ],
          ctaHeading: "Ready to capture passing traffic?",
          ctaBody: "Design your custom feather flag now and start turning drivers into customers.",
          ctaLabel: "Customize Flag"
        }
      },
      {
        id: "teardrop-flags",
        name: "Teardrop Flags",
        description: "Elegant teardrop shape that remains taut and visible even in low wind conditions.",
        image: "https://www.buildasign.com/0086040_teardrop-flags_360.png",
        price: "Starting at $49.68",
        config: {
          title: "Custom Teardrop Flags",
          subtitle: "Beautiful drop-shaped flags designed to stay open and display your logo clearly.",
          breadcrumb: "Flags",
          breadcrumbHref: "/custom-flags",
          promoText: "20% OFF ALL TEARDROP FLAGS",
          image: "https://www.buildasign.com/0086040_teardrop-flags_360.png",
          ratingCount: "432",
          ratingScore: "4.7",
          sizes: [
            { label: '7ft Small Teardrop Flag', value: '84x30', basePrice: 49.68 },
            { label: '9ft Medium Teardrop Flag', value: '108x35', basePrice: 74.99 },
            { label: '11ft Large Teardrop Flag', value: '132x40', basePrice: 109.99 }
          ],
          selects: [
            {
              label: "Base Mount Option",
              options: [
                { label: "Ground Stake", value: "stake", priceAdder: 0 },
                { label: "Cross Base", value: "cross", priceAdder: 15.00 }
              ]
            }
          ],
          qtyDiscount: "Bulk discounts available",
          keyFeatures: ["Stiff teardrop loop structure", "Resists flapping noises", "Great for indoor trade shows", "Durable outdoor knit polyester"],
          useCases: ["Corporate events", "Store entrances", "Sports tournaments", "Lobbies"],
          specs: [
            { key: "Material", value: "110g Knit Polyester" },
            { key: "Pole Structure", value: "Flexible composite fiber poles" }
          ],
          faqs: [
            { q: "Why choose a teardrop flag?", a: "Teardrop flags remain fully tensioned, meaning your branding doesn't wrinkle or fold away even when there is no wind." }
          ],
          reviews: [
            { author: "Samantha L.", rating: 5, text: "The print colors are very rich. Easy to assemble, and looks extremely professional." }
          ],
          ctaHeading: "Get noticed with a teardrop flag",
          ctaBody: "Start designing online in minutes and make a bold statement.",
          ctaLabel: "Customize Teardrop Flag"
        }
      },
      {
        id: "straight-flags",
        name: "Straight Flags",
        description: "Classic rectangular standing flags that offer a large design canvas.",
        image: "https://www.buildasign.com/0086067_straight-flags_360.png",
        price: "Starting at $54.37",
        config: {
          title: "Custom Straight Flags",
          subtitle: "Stately rectangular standing flags perfect for business branding and signage.",
          breadcrumb: "Flags",
          breadcrumbHref: "/custom-flags",
          promoText: "20% OFF STRAIGHT ADVERTISING FLAGS",
          image: "https://www.buildasign.com/0086067_straight-flags_360.png",
          ratingCount: "295",
          ratingScore: "4.7",
          sizes: [
            { label: '8ft Small Straight Flag', value: '96x24', basePrice: 54.37 },
            { label: '10.5ft Medium Straight Flag', value: '126x28', basePrice: 79.99 },
            { label: '14ft Large Straight Flag', value: '168x30', basePrice: 119.99 }
          ],
          selects: [
            {
              label: "Hardware Base",
              options: [
                { label: "Ground Spike", value: "spike", priceAdder: 0 },
                { label: "Cross Base", value: "cross", priceAdder: 15.00 }
              ]
            }
          ],
          qtyDiscount: "Volume discounts apply",
          keyFeatures: ["Max advertising real estate", "Strong steel frames", "Double stitched hems"],
          useCases: ["Auto dealerships", "Real estate sites", "Festivals"],
          specs: [
            { key: "Material", value: "110g Knit Polyester" }
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Design your straight flag",
          ctaBody: "Build your custom flag using our online template catalog.",
          ctaLabel: "Customize Straight Flag"
        }
      },
      {
        id: "flags",
        name: "Standard Flags",
        description: "Classic horizontal flags with brass grommets, perfect for flagpoles or hanging.",
        image: "https://www.buildasign.com/0085940_standard-flags_360.png",
        price: "Starting at $38.43",
        config: {
          title: "Standard Custom Flags",
          subtitle: "Fly your colors proud on standard flagpoles, indoor walls, or events.",
          breadcrumb: "Flags",
          breadcrumbHref: "/custom-flags",
          promoText: "20% OFF CUSTOM HANGING FLAGS",
          image: "https://www.buildasign.com/0085940_standard-flags_360.png",
          ratingCount: "612",
          ratingScore: "4.8",
          sizes: [
            { label: '3\' x 5\' Standard Flag', value: '36x60', basePrice: 38.43 },
            { label: '2\' x 3\' Small Flag', value: '24x36', basePrice: 24.99 },
            { label: '4\' x 6\' Large Flag', value: '48x72', basePrice: 59.99 }
          ],
          selects: [
            {
              label: "Finishing Option",
              options: [
                { label: "Metal Brass Grommets on Left", value: "grommets", priceAdder: 0 },
                { label: "3-inch Pole Sleeve", value: "sleeve", priceAdder: 5.00 }
              ]
            }
          ],
          qtyDiscount: "Buy in bulk and save",
          keyFeatures: ["Heavy duty canvas header", "Rust-proof brass grommets", "Lightweight polyester mesh flys easily"],
          useCases: ["Business flags", "Schools and clubs", "Personal/residential poles"],
          specs: [
            { key: "Material", value: "115g Polyester Mesh" }
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Design your custom flagpole flag",
          ctaBody: "Upload your crest, company emblem, or art to start printing today.",
          ctaLabel: "Customize Flag"
        }
      },
      {
        id: "nylon-flags",
        name: "Nylon Flags",
        description: "Premium heavy-duty nylon flags built for long-term outdoor display on poles.",
        image: "https://www.buildasign.com/0086506_nylon-flags_360.png",
        price: "Starting at $94.00",
        config: {
          title: "Custom Nylon Flags",
          subtitle: "Extra durable, weather-resistant nylon flags with reinforced stitching.",
          breadcrumb: "Flags",
          breadcrumbHref: "/custom-flags",
          promoText: "20% OFF HEAVY DUTY NYLON FLAGS",
          image: "https://www.buildasign.com/0086506_nylon-flags_360.png",
          ratingCount: "188",
          ratingScore: "4.9",
          sizes: [
            { label: '3\' x 5\' Nylon Flag', value: '36x60', basePrice: 94.00 },
            { label: '4\' x 6\' Large Nylon Flag', value: '48x72', basePrice: 139.99 }
          ],
          selects: [
            {
              label: "Header / Grommets",
              options: [
                { label: "Canvas Header & Brass Grommets", value: "header", priceAdder: 0 }
              ]
            }
          ],
          qtyDiscount: "Save on bulk orders",
          keyFeatures: ["200 Denier premium nylon fabric", "Reinforced 4-row fly hem stitching", "High resistance to UV fading"],
          useCases: ["Outdoor commercial flagpoles", "Government institutions", "Premium corporate flags"],
          specs: [
            { key: "Material", value: "200 Denier Nylon" }
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Build a premium nylon flag",
          ctaBody: "Order top-grade flags built to withstand the elements.",
          ctaLabel: "Customize Nylon Flag"
        }
      },
      {
        id: "pennant-flags",
        name: "Pennant Flags",
        description: "Triangular pennant flags for sports teams, schools, and festive string lines.",
        image: "https://www.buildasign.com/0086533_pennant-flags_360.png",
        price: "Starting at $51.11",
        config: {
          title: "Custom Pennant Flags",
          subtitle: "Triangle flag pennants for schools, spirit events, and custom promotions.",
          breadcrumb: "Flags",
          breadcrumbHref: "/custom-flags",
          promoText: "20% OFF SPIRIT PENNANTS",
          image: "https://www.buildasign.com/0086533_pennant-flags_360.png",
          ratingCount: "140",
          ratingScore: "4.7",
          sizes: [
            { label: '3\' x 5\' Triangle Pennant', value: '36x60', basePrice: 51.11 }
          ],
          selects: [
            {
              label: "Finishing",
              options: [
                { label: "Grommets", value: "grommets", priceAdder: 0 },
                { label: "Pole Sleeve", value: "sleeve", priceAdder: 5.00 }
              ]
            }
          ],
          qtyDiscount: "Bulk school discounts available",
          keyFeatures: ["Unique triangular shape", "Vibrant dye-sub printing", "Indoor/outdoor versatile"],
          useCases: ["School gymnasiums", "Sports team tailgates", "Promotional strings"],
          specs: [
            { key: "Material", value: "Knit Polyester" }
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Create your team pennant",
          ctaBody: "Customize your sports pennant with team logos and colors.",
          ctaLabel: "Customize Pennant"
        }
      },
      {
        id: "garden-flags",
        name: "Garden Flags",
        description: "Small vertical flags to add a personalized touch to lawns, pathways, and gardens.",
        image: "https://www.buildasign.com/0086497_garden-flags_360.png",
        price: "Starting at $50.82",
        config: {
          title: "Custom Garden Flags",
          subtitle: "Mini yard flags with optional metal stakes to welcome guests and advertise.",
          breadcrumb: "Flags",
          breadcrumbHref: "/custom-flags",
          promoText: "20% OFF PERSONALIZED GARDEN FLAGS",
          image: "https://www.buildasign.com/0086497_garden-flags_360.png",
          ratingCount: "350",
          ratingScore: "4.8",
          sizes: [
            { label: '12" x 18" Small Garden Flag', value: '18x12', basePrice: 50.82 }
          ],
          selects: [
            {
              label: "Metal Stand Hardware",
              options: [
                { label: "Stand Included", value: "with_stand", priceAdder: 10.00 },
                { label: "Flag Only (No Stand)", value: "flag_only", priceAdder: 0 }
              ]
            }
          ],
          qtyDiscount: "Save on multiple lawn designs",
          keyFeatures: ["Double-sided display option", "Slides onto standard wire holders", "Heavy outdoor blockout fabric"],
          useCases: ["Pathway decorations", "Real estate open house pointers", "Home gardens"],
          specs: [
            { key: "Material", value: "Heavy 300D Blockout Polyester" }
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Welcome guests to your garden",
          ctaBody: "Design a mini garden flag to line your pathway or garden beds.",
          ctaLabel: "Customize Garden Flag"
        }
      }
    ]
  },
  "vehicle-signs": {
    title: "Custom Vehicle Signs",
    heroSubtitle: "Every Mile is an Opportunity.",
    description: "Turn any vehicle into a mobile billboard. Promote your business on the go with custom car magnets, decals, and truck lettering.",
    heroImage: "https://www.buildasign.com/0084325_Desktop.jpeg",
    tabletHeroImage: "https://www.buildasign.com/0084326_Tablet.jpeg",
    mobileHeroImage: "https://www.buildasign.com/0084327_Mobile.jpeg",
    categoryDescriptionText: "Make every commute count with durable vehicle signs custom-built to stand out. BuildASign provides the options you need, from removable vehicle magnets and regulation door decals to bumper stickers and license plates. All vehicle products are constructed from high-grade vinyl and magnetic sheeting designed to hold tight at highway speeds and resist sun damage.",
    categorySecondaryImage: "https://www.buildasign.com/images/uploaded/BAS_WEB_071125_Category_Vehicle_Secondary.jpg",
    faqs: [
      { q: "Will car magnets stick to aluminum vehicle panels?", a: "No, magnets only attract steel doors. Make sure to test your door with a kitchen magnet before purchasing." },
      { q: "Are vehicle decals easy to remove?", a: "Yes. They can be removed by applying gentle heat from a hairdryer and peeling back, without damaging factory car paint." }
    ],
    products: [
      {
        id: "bumper-stickers",
        name: "Bumper Stickers",
        description: "Classic adhesive labels for car bumpers and windows. High visibility branding.",
        image: "https://www.buildasign.com/0085810_bumper-stickers_360.png",
        price: "Starting at $2.24",
        config: {
          title: "Custom Bumper Stickers",
          subtitle: "Standard bumper stickers printed on waterproof, UV-proof outdoor vinyl adhesive.",
          breadcrumb: "Vehicle Signs",
          breadcrumbHref: "/vehicle-signs",
          promoText: "25% OFF BUMPER STICKERS",
          image: "https://www.buildasign.com/0085810_bumper-stickers_360.png",
          ratingCount: "850",
          ratingScore: "4.8",
          sizes: [
            { label: '3" x 10" Rectangle Bumper Sticker', value: '3x10', basePrice: 2.24 },
            { label: '4" x 4" Circle Sticker', value: '4x4', basePrice: 3.49 }
          ],
          selects: [
            {
              label: "Finish Options",
              options: [
                { label: "High Gloss Protective UV", value: "gloss", priceAdder: 0 }
              ]
            }
          ],
          qtyDiscount: "Bulk packs save up to 80% per sticker",
          keyFeatures: ["Premium 4mil vinyl layer", "Waterproof and car-wash safe", "Easy bubble-free application"],
          useCases: ["Business giveaways", "School spirit labels", "Political campaigns"],
          specs: [
            { key: "Material", value: "4mil calendered white gloss vinyl" }
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Print bumper stickers today",
          ctaBody: "Add custom text, sports numbers, or business graphics.",
          ctaLabel: "Customize Bumper Sticker"
        }
      },
      {
        id: "license-plates",
        name: "License Plates",
        description: "Custom front license plates made from heavy duty aluminum.",
        image: "https://www.buildasign.com/0086545_license-plates_360.png",
        price: "Starting at $13.72",
        config: {
          title: "Custom License Plates",
          subtitle: "Heavy duty rust-proof aluminum plate inserts, pre-drilled for easy mounting.",
          breadcrumb: "Vehicle Signs",
          breadcrumbHref: "/vehicle-signs",
          promoText: "25% OFF ALUMINUM AUTO PLATES",
          image: "https://www.buildasign.com/0086545_license-plates_360.png",
          ratingCount: "192",
          ratingScore: "4.7",
          sizes: [
            { label: '6" x 12" Standard Vehicle Size', value: '6x12', basePrice: 13.72 }
          ],
          selects: [
            {
              label: "Plate Mounting Hole Layout",
              options: [
                { label: "Standard 4 Mounting Slots", value: "slots", priceAdder: 0 }
              ]
            }
          ],
          qtyDiscount: "Save on fleet auto plaques",
          keyFeatures: ["Rust-free aluminum sheeting", "Vibrant colors baked onto metal", "Pre-drilled mounting holes"],
          useCases: ["Front vanity plates", "Company branding", "Novelty gifts"],
          specs: [
            { key: "Material", value: "0.040\" thick Aluminum" }
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Design front vanity plates",
          ctaBody: "Customize auto plates with corporate colors, logos, and phone lines.",
          ctaLabel: "Customize License Plate"
        }
      },
      {
        id: "magnetic-signs",
        name: "Magnetic Car Signs",
        description: "Durable magnetic signs that attach to car doors and can be removed easily.",
        image: "https://www.buildasign.com/0086082_magnetic-car-signs_360.png",
        price: "Starting at $4.99",
        badge: "Most Popular",
        config: {
          title: "Custom Car Magnets",
          subtitle: "Heavy duty 30mil vehicle magnets that stay secure at highway speeds.",
          breadcrumb: "Vehicle Signs",
          breadcrumbHref: "/vehicle-signs",
          promoText: "25% OFF VEHICLE ADVERTISING - AUTO SHIPPED",
          image: "https://www.buildasign.com/0086082_magnetic-car-signs_360.png",
          ratingCount: "1530",
          ratingScore: "4.9",
          sizes: [
            { label: '12" x 24" Standard Door Size', value: '12x24', basePrice: 19.99 },
            { label: '12" x 18" Small Magnet', value: '12x18', basePrice: 14.99 },
            { label: '18" x 24" Large Door Size', value: '18x24', basePrice: 27.99 },
            { label: '6" x 12" Mini Magnet', value: '6x12', basePrice: 4.99 }
          ],
          selects: [
            {
              label: "Corner Style",
              options: [
                { label: "Rounded Corners (Aerodynamic)", value: "rounded", priceAdder: 0, description: "Prevents wind drag lifting on highway speeds." },
                { label: "Square Corners", value: "square", priceAdder: -1.00, description: "Classic sharp-cut rectangular magnet." }
              ]
            }
          ],
          qtyDiscount: "Bulk discounts starting at 2 or more magnets",
          keyFeatures: ["Premium 30mil thick magnetic sheeting", "Rounded corners prevent highway peel", "UV resistant inks", "Glossy protective laminations"],
          useCases: ["Delivery vans", "Real estate agent vehicles", "Contractors and technicians", "Personal cars used for business"],
          specs: [
            { key: "Thickness", value: "30mil Magnetic material" },
            { key: "Coating", value: "Gloss UV Protective Finish" },
            { key: "Max Speed Rating", value: "Tested up to 80 MPH" }
          ],
          faqs: [
            { q: "Will this magnet stick to aluminum doors?", a: "No, magnets only stick to steel doors. Please verify your vehicle door panels with a kitchen magnet before purchasing." },
            { q: "How often should I clean the magnet?", a: "We recommend removing and wiping down the magnet and car panel weekly to prevent moisture buildup." }
          ],
          reviews: [
            { author: "Steve H.", rating: 5, text: "These magnets are thick and do not slide off even in highway storms. Printing is crisp." }
          ],
          ctaHeading: "Start advertising on the go",
          ctaBody: "Design a clean car magnet with your logo, services, and phone number.",
          ctaLabel: "Customize Magnet"
        }
      },
      {
        id: "car-door-decals",
        name: "Car Door Decals",
        description: "Adhesive door decals for car bodies. Durable semi-permanent advertising.",
        image: "https://www.buildasign.com/0085984_car-door-decals_360.png",
        price: "Starting at $23.86",
        config: {
          title: "Custom Car Door Decals",
          subtitle: "Professional semi-permanent adhesive branding decals for truck and car door panels.",
          breadcrumb: "Vehicle Signs",
          breadcrumbHref: "/vehicle-signs",
          promoText: "25% OFF SEMI-PERMANENT DOOR DECALS",
          image: "https://www.buildasign.com/0085984_car-door-decals_360.png",
          ratingCount: "320",
          ratingScore: "4.7",
          sizes: [
            { label: '12" x 18" Small Door Decal', value: '12x18', basePrice: 23.86 },
            { label: '18" x 24" Standard Door Decal', value: '18x24', basePrice: 34.99 }
          ],
          selects: [
            {
              label: "Vinyl Option",
              options: [
                { label: "Opaque Adhesive Gloss Vinyl", value: "opaque", priceAdder: 0 }
              ]
            }
          ],
          qtyDiscount: "Volume discounts on door pairs",
          keyFeatures: ["High performance calendered vinyl", "Waterproof and UV laminated", "Semi-permanent solid adhesion"],
          useCases: ["Business logos", "Regulation USDOT numbers", "Contractor branding"],
          specs: [
            { key: "Material", value: "4mil High-performance Vinyl" }
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Brand your fleet vehicles",
          ctaBody: "Design car door branding decals using our templates.",
          ctaLabel: "Customize Door Decal"
        }
      },
      {
        id: "car-window-decals",
        name: "Car Window Decals",
        description: "Rear and side window adhesive graphics, available in transparent and opaque materials.",
        image: "https://www.buildasign.com/0085990_car-window-decals_360.png",
        price: "Starting at $23.86",
        config: {
          title: "Custom Car Window Decals",
          subtitle: "Highly visible rear window adhesive decals. Perfect for glass surfaces.",
          breadcrumb: "Vehicle Signs",
          breadcrumbHref: "/vehicle-signs",
          promoText: "25% OFF WINDOW ADHESIVE DECALS",
          image: "https://www.buildasign.com/0085990_car-window-decals_360.png",
          ratingCount: "285",
          ratingScore: "4.8",
          sizes: [
            { label: '12" x 18" Small Window Decal', value: '12x18', basePrice: 23.86 },
            { label: '18" x 24" Medium Window Decal', value: '18x24', basePrice: 34.99 }
          ],
          selects: [
            {
              label: "Material Style",
              options: [
                { label: "Opaque White Backing Vinyl", value: "opaque", priceAdder: 0 },
                { label: "Clear Transparent Window Vinyl", value: "clear", priceAdder: 4.50 }
              ]
            }
          ],
          qtyDiscount: "Volume savings apply",
          keyFeatures: ["Window safe adhesive backing", "Vibrant inks pop on transparent base", "Rain and rear-wiper proof"],
          useCases: ["Rear window advertisement", "Store hours", "Reg numbers on windows"],
          specs: [
            { key: "Material", value: "4mil window-form adhesive vinyl" }
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Make your rear window sell",
          ctaBody: "Build rear window banners with easy-to-read font and phone info.",
          ctaLabel: "Customize Window Decal"
        }
      },
      {
        id: "magnetic-bumper-stickers",
        name: "Bumper Magnets",
        description: "Removable magnetic bumper stickers that slide on and off metal trunks easily.",
        image: "https://www.buildasign.com/0086539_bumper-magnets_360.png",
        price: "Starting at $5.49",
        config: {
          title: "Custom Bumper Magnets",
          subtitle: "Removable magnetic bumper strips that won't leave adhesive residue behind.",
          breadcrumb: "Vehicle Signs",
          breadcrumbHref: "/vehicle-signs",
          promoText: "25% OFF REMOVABLE BUMPER MAGNETS",
          image: "https://www.buildasign.com/0086539_bumper-magnets_360.png",
          ratingCount: "172",
          ratingScore: "4.7",
          sizes: [
            { label: '3" x 10" Bumper Magnet Strip', value: '3x10', basePrice: 5.49 }
          ],
          selects: [
            {
              label: "Magnetic Type",
              options: [
                { label: "30mil Vehicle Magnet Quality", value: "30mil", priceAdder: 0 }
              ]
            }
          ],
          qtyDiscount: "Volume discounts apply",
          keyFeatures: ["Removable without clean-up", "Attaches to any steel tailgate/bumper", "Thick 30mil grade"],
          useCases: ["Temporary advertising", "School spirit support", "Easy switchable messages"],
          specs: [
            { key: "Material", value: "30mil flexible vehicle magnet" }
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Get flexible bumper branding",
          ctaBody: "Order magnets that pull right off before car washes.",
          ctaLabel: "Customize Bumper Magnet"
        }
      }
    ]
  },
  "trade-show": {
    title: "Tradeshow Displays",
    description: "Get trade show ready with custom products that make your brand stand out. Table covers, step and repeats, and stands.",
    heroImage: "https://ext.same-assets.com/1114826555/2283645032.png",
    products: [
      {
        id: "table-covers",
        name: "Custom Table Covers",
        description: "Professional table throws fitted to standard 6ft and 8ft trade show tables.",
        image: "https://ext.same-assets.com/1114826555/2283645032.png",
        price: "Starting at $89.99",
        badge: "Best Seller",
        config: {
          title: "Custom Table Covers",
          subtitle: "Dye-sublimation printed fabric table cloths that drape perfectly over display tables.",
          breadcrumb: "Tradeshow",
          breadcrumbHref: "/trade-show",
          promoText: "25% OFF TRADESHOW DISPLAYS",
          image: "https://ext.same-assets.com/1114826555/2283645032.png",
          ratingCount: "680",
          ratingScore: "4.9",
          sizes: [
            { label: '6ft Table Throw (Standard)', value: '72x30', basePrice: 89.99 },
            { label: '8ft Table Throw', value: '96x30', basePrice: 119.99 }
          ],
          selects: [
            {
              label: "Table Cloth Coverage",
              options: [
                { label: "4-Sided Closed Back Throw", value: "4sided", priceAdder: 0, description: "Covers all four sides, perfect for storage underneath." },
                { label: "3-Sided Open Back Throw", value: "3sided", priceAdder: -10.00, description: "Leaves the back open for easy seating access." }
              ]
            }
          ],
          qtyDiscount: "Volume discounts on bulk promotional items",
          keyFeatures: ["100% Wrinkle-resistant polyester fabric", "Fully hemmed finished edges", "Scratch resistant dye-sub print", "Machine washable"],
          useCases: ["Job fairs", "Trade show booths", "School orientations", "Craft shows & market stalls"],
          specs: [
            { key: "Material", value: "300D Polyester Twill" },
            { key: "Flame Retardant", value: "Meets NFPA 701 fire safety rating" },
            { key: "Care", value: "Machine washable, tumble dry low" }
          ],
          faqs: [
            { q: "Is the material flame retardant?", a: "Yes, our table fabrics are treated to meet standard trade show safety fire certifications." }
          ],
          reviews: [
            { author: "Emily T.", rating: 5, text: "Excellent washability! Spillages from coffee wiped right off, and it didn't wrinkle." }
          ],
          ctaHeading: "Elevate your booth display",
          ctaBody: "Customize a premium table throw with your core branding and logos.",
          ctaLabel: "Customize Cover"
        }
      }
    ]
  },
  "custom-decals": {
    title: "Custom Stickers & Decals",
    description: "Branded stickers, decals and vinyl tags for product packaging, storefront windows, and giveaways.",
    heroImage: "https://ext.same-assets.com/1114826555/2442714004.png",
    products: [
      {
        id: "custom-stickers",
        name: "Custom Logo Stickers",
        description: "Premium die-cut vinyl stickers for giveaways, brand marketing, or labeling.",
        image: "https://ext.same-assets.com/1114826555/2401743055.png",
        price: "Starting at $0.15 each",
        badge: "Bulk Pricing",
        config: {
          title: "Custom Vinyl Stickers",
          subtitle: "High-grade vinyl stickers cut to custom shapes for handouts, laptops, and packaging.",
          breadcrumb: "Stickers",
          breadcrumbHref: "/custom-decals",
          promoText: "25% OFF CUSTOM LOGO STICKERS",
          image: "https://ext.same-assets.com/1114826555/2401743055.png",
          ratingCount: "2490",
          ratingScore: "4.9",
          sizes: [
            { label: '3" x 3" Die-Cut Sticker', value: '3x3', basePrice: 0.85 },
            { label: '2" x 2" Small Sticker', value: '2x2', basePrice: 0.65 },
            { label: '4" x 4" Large Sticker', value: '4x4', basePrice: 1.15 }
          ],
          selects: [
            {
              label: "Sticker Finish",
              options: [
                { label: "High Gloss Protective", value: "gloss", priceAdder: 0, description: "Shiny finish with colors that pop." },
                { label: "Modern Velvet Matte", value: "matte", priceAdder: 0.05, description: "Sophisticated smooth finish, anti-glare." }
              ]
            }
          ],
          qtyDiscount: "Massive savings on quantities of 50, 100, 500+",
          keyFeatures: ["Thick durable vinyl layers", "Sunlight & scratch resistant laminates", "Dishwasher and weatherproof", "No-residue adhesive"],
          useCases: ["Laptop and water bottle sticker giveaways", "Product packaging labels", "Store merch", "Event schwag"],
          specs: [
            { key: "Material", value: "6mil Vinyl with laminate" },
            { key: "Adhesive", value: "Medium-tack removable acrylic" },
            { key: "Outdoor Life", value: "Up to 5 years print rating" }
          ],
          faqs: [
            { q: "Can I get a custom die-cut shape?", a: "Yes! Our printers automatically trace the outline of your logo for custom contour cutting." }
          ],
          reviews: [
            { author: "Danny P.", rating: 5, text: "Fast shipping and the quality is amazing. Customers love putting them on their laptops." }
          ],
          ctaHeading: "Print custom stickers today",
          ctaBody: "Upload your design or business emblem to create premium stickers.",
          ctaLabel: "Customize Stickers"
        }
      }
    ]
  },
  "sign-accessories": {
    title: "Stands & Sign Holders",
    description: "Premium stakes, frames and heavy duty steel mounts to hold your yard signs, outdoor notices, and trade show displays.",
    heroImage: "https://ext.same-assets.com/1114826555/1286398033.png",
    products: [
      {
        id: "h-frames",
        name: "Metal H-Frame Stakes",
        description: "Heavy duty metal wire stakes to hold corrugated plastic signs in lawns.",
        image: "https://ext.same-assets.com/1114826555/1286398033.png",
        price: "Starting at $1.49",
        config: {
          title: "Metal Yard Stakes (H-Frames)",
          subtitle: "Heavy duty galvanized steel wire stakes designed to hold 4mm coroplast yard signs.",
          breadcrumb: "Sign Holders",
          breadcrumbHref: "/sign-accessories",
          promoText: "25% OFF WIRE STAKES & HOLDERS",
          image: "https://ext.same-assets.com/1114826555/1286398033.png",
          ratingCount: "940",
          ratingScore: "4.8",
          sizes: [
            { label: '30" x 10" Standard Wire Stake', value: '30x10', basePrice: 1.99 },
            { label: '15" x 10" Half Size Stake', value: '15x10', basePrice: 1.49 }
          ],
          selects: [
            {
              label: "Wire Thickness Quality",
              options: [
                { label: "Standard 9-Gauge Steel", value: "9gauge", priceAdder: 0, description: "Classic sturdy wire, fits standard lawns." },
                { label: "Heavy Duty Galvanized Steel", value: "heavy", priceAdder: 1.25, description: "Reinforced structure for clay or hard soils." }
              ]
            }
          ],
          qtyDiscount: "Volume pricing drops under $0.99 for quantities over 100",
          keyFeatures: ["Corrosion-resistant steel", "Slides easily into yard sign flutes", "Steps directly into lawn", "Reusable seasonal hardware"],
          useCases: ["Political campaigns", "Real estate open houses", "Contractor lawn advertising", "Community event notices"],
          specs: [
            { key: "Material", value: "Galvanized Steel Wire" },
            { key: "Height", value: "30 inches standard" },
            { key: "Compatibility", value: "Fits standard 4mm corrugated yard signs" }
          ],
          faqs: [
            { q: "How do I install these stakes?", a: "Simply push the top prongs into the bottom center of the yard sign, then step the bottom crossbar into the soil." }
          ],
          reviews: [
            { author: "Arthur L.", rating: 5, text: "Sturdy stakes. Did not bend even in dry Florida lawn dirt." }
          ],
          ctaHeading: "Order stakes for your yard signs",
          ctaBody: "Pair stakes with your yard signs for a complete campaign ready to deploy.",
          ctaLabel: "Configure Stakes"
        }
      }
    ]
  },
  "marketing-materials": {
    title: "Marketing Materials",
    description: "Grow your business and look professional with customized business cards, flyers, and brochures.",
    heroImage: "https://ext.same-assets.com/1114826555/3799598245.png",
    products: [
      {
        id: "business-cards",
        name: "Custom Business Cards",
        description: "Make a great first impression with premium custom business cards.",
        image: "https://ext.same-assets.com/1114826555/3799598245.png",
        price: "Starting at $19.99 for 250",
        badge: "Corporate Choice",
        config: {
          title: "Custom Business Cards",
          subtitle: "Standard 3.5\" x 2\" cards printed on ultra-thick cardstock with multiple finishes.",
          breadcrumb: "Marketing",
          breadcrumbHref: "/marketing-materials",
          promoText: "25% OFF ALL CORPORATE STATIONERY",
          image: "https://ext.same-assets.com/1114826555/3799598245.png",
          ratingCount: "1120",
          ratingScore: "4.9",
          sizes: [
            { label: '3.5" x 2" Standard size', value: '3.5x2', basePrice: 19.99 }
          ],
          selects: [
            {
              label: "Paper Thickness & Texture",
              options: [
                { label: "Premium 14pt Cardstock", value: "14pt", priceAdder: 0, description: "Classic professional card thickness." },
                { label: "Ultra-Premium 16pt Cardstock", value: "16pt", priceAdder: 5.00, description: "Extra sturdy, high end feel." }
              ]
            },
            {
              label: "Card Finish",
              options: [
                { label: "Premium Matte (Non-glare)", value: "matte", priceAdder: 0, description: "Elegant, easy to write notes on." },
                { label: "High-Gloss UV Shine", value: "gloss", priceAdder: 2.50, description: "Coated front protection with a premium reflection." }
              ]
            }
          ],
          qtyDiscount: "Bulk boxes of 250, 500, 1000 available",
          keyFeatures: ["Vibrant color offset printing", "Ultra-thick cardstock options", "Spot UV and rounded corner finishes", "Easy design templates"],
          useCases: ["Networking events", "Customer takeaways", "Loyalty stamp cards", "Appointment reminders"],
          specs: [
            { key: "Material", value: "14pt or 16pt Cardstock" },
            { key: "Finish Options", value: "Matte, UV Gloss, Rounded corners" },
            { key: "DPI", value: "Offset litho press 300 Line Screen" }
          ],
          faqs: [
            { q: "Can I write on these cards?", a: "Yes! Our premium matte finish cards can be written on with standard pens or pencils." }
          ],
          reviews: [
            { author: "Jessica M.", rating: 5, text: "Excellent matte finish. The colors matched my website colors exactly." }
          ],
          ctaHeading: "Design business cards now",
          ctaBody: "Upload your business info and logo to print double-sided cards fast.",
          ctaLabel: "Customize Cards"
        }
      }
    ]
  },
  "promotional-products": {
    title: "Promotional Swag & Merch",
    description: "Customize apparel, mugs, and trade show giveaways with your business branding.",
    heroImage: "https://ext.same-assets.com/1114826555/1445363370.png",
    products: [
      {
        id: "t-shirts",
        name: "Custom T-Shirts",
        description: "Screen printed cotton shirts featuring your company logo or message.",
        image: "https://ext.same-assets.com/1114826555/1445363370.png",
        price: "Starting at $14.99",
        badge: "Staff Wear",
        config: {
          title: "Custom Printed T-Shirts",
          subtitle: "Comfortable cotton tees customized with full-color heat-press or screen prints.",
          breadcrumb: "Promo",
          breadcrumbHref: "/promotional-products",
          promoText: "25% OFF PROMOTIONAL MERCHANDISE",
          image: "https://ext.same-assets.com/1114826555/1445363370.png",
          ratingCount: "740",
          ratingScore: "4.8",
          sizes: [
            { label: 'Medium Unisex Tee', value: 'medium_tee', basePrice: 14.99 },
            { label: 'Large Unisex Tee', value: 'large_tee', basePrice: 14.99 },
            { label: 'Extra Large Unisex Tee', value: 'xl_tee', basePrice: 16.99 }
          ],
          selects: [
            {
              label: "Shirt Fabric Style",
              options: [
                { label: "100% Premium Cotton", value: "cotton", priceAdder: 0, description: "Soft, breathable, preshrunk ringspun cotton." }
              ]
            }
          ],
          qtyDiscount: "Volume discounts for outfitting your entire team",
          keyFeatures: ["Comfortable cotton knit fabric", "High durability dye-sub print", "Available in white and dark slate", "Wash-proof print bond"],
          useCases: ["Staff uniforms", "Brand promotional giveaways", "Family reunions", "Corporate retreats"],
          specs: [
            { key: "Material", value: "4.5oz Ringspun Cotton" },
            { key: "Wash Care", value: "Machine wash cold inside-out, tumble dry low" }
          ],
          faqs: [
            { q: "Will the graphic peel in the wash?", a: "No, our prints utilize high-temp industrial heat fusion that bonds print ink fibers directly to fabrics." }
          ],
          reviews: [
            { author: "Nate W.", rating: 5, text: "Sizing is spot on and the print did not crack after multiple wash cycles." }
          ],
          ctaHeading: "Design shirts for your team",
          ctaBody: "Add logo prints to front or back positions on premium shirts.",
          ctaLabel: "Customize Shirt"
        }
      }
    ]
  },
  "gifts": {
    title: "Custom Canvas Prints & Photo Gifts",
    description: "Premium poly-cotton canvas wraps stretched on sturdy wooden frames. Perfect gifts for homes, lobbies, and workspaces.",
    heroImage: "https://ext.same-assets.com/1114826555/898075086.png",
    products: [
      {
        id: "canvas-prints",
        name: "Stretched Canvas Prints",
        description: "Turn your favorite pictures or designs into premium home canvas wraps.",
        image: "https://ext.same-assets.com/1114826555/898075086.png",
        price: "Starting at $24.99",
        config: {
          title: "Stretched Canvas Prints",
          subtitle: "Premium photo gallery canvas stretched on thick wooden frames, ready to hang.",
          breadcrumb: "Gifts",
          breadcrumbHref: "/gifts",
          promoText: "25% OFF HOLIDAY CANVAS PHOTO GIFTS",
          image: "https://ext.same-assets.com/1114826555/898075086.png",
          ratingCount: "1820",
          ratingScore: "4.9",
          sizes: [
            { label: '16" x 20" Gallery Standard', value: '16x20', basePrice: 34.99 },
            { label: '8" x 10" Small Frame', value: '8x10', basePrice: 24.99 },
            { label: '24" x 36" Large Centerpiece', value: '24x36', basePrice: 59.99 }
          ],
          selects: [
            {
              label: "Frame Wrap Style",
              options: [
                { label: "1.5-inch Deep Stretched Frame", value: "thick", priceAdder: 0, description: "Classic thick gallery presentation wrapper." },
                { label: "0.75-inch Standard Wrap", value: "thin", priceAdder: -5.00, description: "Perfect if you plan to mount it in custom frames." }
              ]
            }
          ],
          qtyDiscount: "Save 10% on multi-canvas packs",
          keyFeatures: ["Sturdy hand-stretched pine wood frames", "High quality poly-cotton canvas weave", "Fade resistant museum pigment inks", "Built-in saw-tooth hanger"],
          useCases: ["Family photo displays", "Art galleries", "Office lobbies and boardroom art", "Unique wedding gifts"],
          specs: [
            { key: "Canvas Grade", value: "400gsm Archival Grade" },
            { key: "Wood Frame", value: "Sustainably-sourced kiln-dried pine wood" },
            { key: "Inks", value: "HP latex eco-friendly prints" }
          ],
          faqs: [
            { q: "Is the hanging hardware included?", a: "Yes, every canvas wrap arrives with a pre-installed saw-tooth hanger on the back frame." }
          ],
          reviews: [
            { author: "Kathy R.", rating: 5, text: "Simply gorgeous. The photo of our wedding came out incredibly sharp and fits perfectly on the wall." }
          ],
          ctaHeading: "Turn memories into art",
          ctaBody: "Stitch together high resolution digital assets to print stunning frames.",
          ctaLabel: "Customize Canvas"
        }
      }
    ]
  }
};
