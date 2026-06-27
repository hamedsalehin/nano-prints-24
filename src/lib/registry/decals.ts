import { RegistryCategory } from "../productsRegistry";

export const customDecals: RegistryCategory = {
    title: "Custom Decals",
    breadcrumbLabel: "Custom Decals",
    description:
      "Discover our full lineup of custom decal solutions, including vinyl decals, static clings, sticker sheets, and roll labels.",
    heroImage: "/images/products/main%20page/stickers%20%26%20decals%20hero%20image.png",
    tabletHeroImage: "/images/products/main%20page/stickers%20%26%20decals%20hero%20image.png",
    mobileHeroImage: "/images/products/main%20page/stickers%20%26%20decals%20hero%20image.png",
    heroSubtitle: "Design It. Stick It. Leave Your Mark.",
    reviewRating: "4.9",
    reviewCount: "1,840",
    reviewQuote:
      "The custom window decals turned out perfectly! Extremely easy to apply without bubbles, and the resolution is incredibly sharp. Will buy again!",
    categoryDescriptionText:
      "Discover our full lineup of custom decal solutions, including vinyl decals, static clings, sticker sheets, and roll labels. Perfect for use indoors or out, our decals are built to last and ideal for everything from storefront displays to vehicle branding and promotional giveaways. Easily personalize your decals with our intuitive design tools by uploading your own artwork or choosing from our ready-made templates to get started today.",
    categorySecondaryImage: "/images/products/main%20page/custom_decals_desc.png",
    faqs: [
      {
        q: "What type of decal material should I choose?",
        a: "It depends on your surface and how you plan to use the decal. Clear decals are great for glass and offer a sleek, see-through look where the background shows through. Opaque decals have a solid white backing, making colors pop and providing full coverage making them ideal for most surfaces and long-term use. Static clings use no adhesive, are easy to reposition, and perfect for short-term use on smooth surfaces like windows. For bulk needs, sticker sheets and roll labels offer flexible, efficient options.",
      },
      {
        q: "Can these decals be used indoors and outdoors?",
        a: "Yes! We offer materials that suit both environments. Opaque vinyl and clear decals are durable enough for outdoor use, while static clings and wall decals are best for indoor or short-term outdoor placement.",
      },
      {
        q: "What surfaces do your decals stick to best?",
        a: "All our decals are made for smooth, non-porous surfaces like glass, metal, painted walls, and plastic. For best results, apply to clean, flat areas free of dust or texture.",
      },
      {
        q: "Are custom decals easy to apply and remove?",
        a: "Yes! Most apply with simple pressure and can be removed without damage. Static clings are especially easy to reposition or remove, while adhesive decals may require heat or adhesive remover for clean removal. Sticker sheets and roll labels are designed for peel-and-stick convenience and are easy to handle in bulk.",
      },
      {
        q: "Can I upload my own design or logo?",
        a: "Absolutely! You can upload your own artwork, logos, or images, or start with one of our pre-designed templates. Our design tool lets you customize text, colors, and layout—no design experience needed.",
      },
      {
        q: "What decal sizes do you offer?",
        a: "We offer a wide range of standard and custom sizes to fit your needs; whether it's a small window graphic or a large wall display. You can select your preferred size on each product page or enter a custom dimension if needed.",
      },
    ],
    products: [
      {
        id: "bumper-stickers",
        name: "Bumper Stickers",
        description:
          "Classic adhesive labels for car bumpers and windows. High visibility branding.",
        image: "/images/products/main%20page/bumper_sticker_product.png",
        price: "Starting at $2.24",
        badge: "Car Favorite",
        config: {
          title: "Custom Bumper Stickers",
          quantityOptions: [100, 250, 500, 1000, 2500, 5000, 10000],
          subtitle:
            "Standard bumper stickers printed on waterproof, UV-proof outdoor vinyl adhesive.",
          breadcrumb: "Decals",
          breadcrumbHref: "/custom-decals",
          promoText: "20% OFF BUMPER STICKERS - SHIPS NEXT DAY",
          image: "/images/products/main%20page/bumper_sticker_product.png",
          ratingCount: "850",
          ratingScore: "4.8",
          sizes: [
            {
              label: '3" x 10" Rectangle Bumper Sticker',
              value: "3x10",
              basePrice: 2.24,
            },
            { label: '4" x 4" Circle Sticker', value: "4x4", basePrice: 3.49 },
          ],
          selects: [
            {
              label: "Finish Options",
              options: [
                {
                  label: "High Gloss Protective UV",
                  value: "gloss",
                  priceAdder: 0,
                },
              ],
            },
          ],
          qtyDiscount: "Bulk packs save up to 80% per sticker",
          keyFeatures: [
            "Premium 4mil vinyl layer",
            "Waterproof and car-wash safe",
            "Easy bubble-free application",
          ],
          useCases: [
            "Business giveaways",
            "School spirit labels",
            "Political campaigns",
          ],
          specs: [
            { key: "Material", value: "4mil calendered white gloss vinyl" },
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Print bumper stickers today",
          ctaBody: "Add custom text, sports numbers, or business graphics.",
          ctaLabel: "Customize Bumper Sticker",
        },
      },
      {
        id: "car-door-decals",
        name: "Car Door Decals",
        description:
          "Adhesive door decals for car bodies. Durable semi-permanent advertising.",
        image: "/images/products/main%20page/car_door_decal_product.png",
        price: "Starting at $23.86",
        config: {
          title: "Custom Car Door Decals",
          subtitle:
            "Professional semi-permanent adhesive branding decals for truck and car door panels.",
          breadcrumb: "Decals",
          breadcrumbHref: "/custom-decals",
          promoText: "20% OFF SEMI-PERMANENT DOOR DECALS",
          image: "/images/products/main%20page/car_door_decal_product.png",
          ratingCount: "320",
          ratingScore: "4.7",
          sizes: [
            {
              label: '12" x 18" Small Door Decal',
              value: "12x18",
              basePrice: 23.86,
            },
            {
              label: '18" x 24" Standard Door Decal',
              value: "18x24",
              basePrice: 34.99,
            },
          ],
          selects: [
            {
              label: "Vinyl Option",
              options: [
                {
                  label: "Opaque Adhesive Gloss Vinyl",
                  value: "opaque",
                  priceAdder: 0,
                },
              ],
            },
          ],
          qtyDiscount: "Volume discounts on door pairs",
          keyFeatures: [
            "High performance calendered vinyl",
            "Waterproof and UV laminated",
            "Semi-permanent solid adhesion",
          ],
          useCases: [
            "Business logos",
            "Regulation USDOT numbers",
            "Contractor branding",
          ],
          specs: [{ key: "Material", value: "4mil High-performance Vinyl" }],
          faqs: [],
          reviews: [],
          ctaHeading: "Brand your fleet vehicles",
          ctaBody: "Design car door branding decals using our templates.",
          ctaLabel: "Customize Door Decal",
        },
      },
      {
        id: "car-window-decals",
        name: "Car Window Decals",
        description:
          "Rear and side window adhesive graphics, available in transparent and opaque materials.",
        image: "/images/products/main%20page/car_window_decal_product.png",
        price: "Starting at $23.86",
        config: {
          title: "Custom Car Window Decals",
          subtitle:
            "Highly visible rear window adhesive decals. Perfect for glass surfaces.",
          breadcrumb: "Decals",
          breadcrumbHref: "/custom-decals",
          promoText: "20% OFF WINDOW ADHESIVE DECALS",
          image: "/images/products/main%20page/car_window_decal_product.png",
          ratingCount: "285",
          ratingScore: "4.8",
          sizes: [
            {
              label: '12" x 18" Small Window Decal',
              value: "12x18",
              basePrice: 23.86,
            },
            {
              label: '18" x 24" Medium Window Decal',
              value: "18x24",
              basePrice: 34.99,
            },
          ],
          selects: [
            {
              label: "Material Style",
              options: [
                {
                  label: "Opaque White Backing Vinyl",
                  value: "opaque",
                  priceAdder: 0,
                },
                {
                  label: "Clear Transparent Window Vinyl",
                  value: "clear",
                  priceAdder: 4.5,
                },
              ],
            },
          ],
          qtyDiscount: "Volume savings apply",
          keyFeatures: [
            "Window safe adhesive backing",
            "Vibrant inks pop on transparent base",
            "Rain and rear-wiper proof",
          ],
          useCases: [
            "Rear window advertisement",
            "Store hours",
            "Reg numbers on windows",
          ],
          specs: [
            { key: "Material", value: "4mil window-form adhesive vinyl" },
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Make your rear window sell",
          ctaBody:
            "Build rear window banners with easy-to-read font and phone info.",
          ctaLabel: "Customize Window Decal",
        },
      },
      {
        id: "window-decals",
        name: "Window Decals",
        description:
          "Adhesive signage for business storefront windows and glass panels.",
        image: "/images/products/main%20page/vinyl_sticker.png",
        price: "Starting at $23.86",
        badge: "Best Seller",
        config: {
          title: "Custom Storefront Window Decals",
          subtitle:
            "Professional adhesive decals for storefront glass, entrances, and office doors.",
          breadcrumb: "Decals",
          breadcrumbHref: "/custom-decals",
          promoText: "20% OFF STOREFRONT WINDOW DECALS",
          image: "/images/products/main%20page/vinyl_sticker.png",
          images: [
            "/images/products/main%20page/vinyl_sticker.png",
            "/images/products/gallery/vinyl_decal_use_1.png",
            "/images/products/gallery/vinyl_decal_use_1.png",
            "/images/products/gallery/vinyl_decal_use_1.png",
          ],
          ratingCount: "940",
          ratingScore: "4.9",
          sizes: [
            {
              label: '12" x 18" Small Window Decal',
              value: "12x18",
              basePrice: 23.86,
            },
            {
              label: '18" x 24" Standard Window Decal',
              value: "18x24",
              basePrice: 34.99,
            },
            {
              label: '24" x 36" Large Window Decal',
              value: "24x36",
              basePrice: 54.99,
            },
          ],
          selects: [
            {
              label: "Material Style",
              options: [
                {
                  label: "Opaque White Adhesive Gloss",
                  value: "opaque",
                  priceAdder: 0,
                  description:
                    "Solid background makes colors extremely vibrant.",
                },
                {
                  label: "Clear Transparent Adhesive Glass",
                  value: "clear",
                  priceAdder: 4.0,
                  description: "Allows see-through glass margins.",
                },
                {
                  label: "Frosted Glass Etched Finish",
                  value: "frosted",
                  priceAdder: 12.0,
                  description:
                    "Offers privacy with a premium sandblasted look.",
                },
              ],
            },
          ],
          qtyDiscount: "Saves up to 15% on commercial building orders",
          keyFeatures: [
            "Weatherproof outdoor vinyl print",
            "Apply on inside or outside of glass",
            "Vibrant UV inks resist fading",
          ],
          useCases: [
            "Business hours lists",
            "Storefront branding logos",
            "Open/Closed door banners",
            "Office partition privacy",
          ],
          specs: [
            { key: "Thickness", value: "4mil self-adhesive PVC" },
            {
              key: "Adhesive Type",
              value: "Low-residue pressure-activated acrylic",
            },
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Brand your glass fronts",
          ctaBody: "Order clean die-cut window layouts or frosted bands.",
          ctaLabel: "Customize Window Decal",
        },
      },
      {
        id: "roll-labels",
        name: "Roll Labels",
        description:
          "Bulk promotional logo stickers printed on paper or plastic rolls, perfect for packaging.",
        image: "/images/products/main%20page/roll_labels_product.png",
        price: "Starting at $0.54 each",
        config: {
          title: "Custom Printed Roll Labels",
          quantityOptions: [100, 250, 500, 1000, 2500, 5000, 10000],
          subtitle:
            "Bulk logo and product label rolls, perfect for quick peeling, boxing, and product jars.",
          breadcrumb: "Decals",
          breadcrumbHref: "/custom-decals",
          promoText: "20% OFF ALL BULK ROLL LABELS",
          image: "/images/products/main%20page/roll_labels_product.png",
          ratingCount: "410",
          ratingScore: "4.8",
          sizes: [
            { label: '2" x 2" Round Label', value: "2x2", basePrice: 0.54 },
            { label: '3" x 3" Square Label', value: "3x3", basePrice: 0.75 },
            { label: '4" x 2" Rectangle Label', value: "4x2", basePrice: 0.85 },
          ],
          selects: [
            {
              label: "Paper Quality",
              options: [
                {
                  label: "Gloss White Paper (BOPP)",
                  value: "gloss_paper",
                  priceAdder: 0,
                },
                {
                  label: "Clear Polypropylene Film",
                  value: "clear_film",
                  priceAdder: 0.1,
                },
              ],
            },
          ],
          qtyDiscount:
            "Pricing drops as low as $0.05 per label in high bulk quantities",
          keyFeatures: [
            'Wound on standard 3" cardboard cores',
            "Easy machine or hand dispensing",
            "Vibrant colors",
          ],
          useCases: [
            "Product jar branding",
            "Takeout bag sealing stickers",
            "Retail box shipping labels",
          ],
          specs: [{ key: "Material", value: "Premium BOPP adhesive stock" }],
          faqs: [],
          reviews: [],
          ctaHeading: "Print product packaging rolls",
          ctaBody:
            "Design labels in bulk for box sealing and retail containers.",
          ctaLabel: "Customize Roll Labels",
        },
      },
      {
        id: "window-clings",
        name: "Static Window Clings",
        description:
          "Glueless static clings that stick to glass using static energy. Easy to reposition.",
        image:
          "/images/products/main%20page/window_clings_product.png",
        price: "Starting at $62.96",
        config: {
          title: "Static Window Clings",
          subtitle:
            "No-adhesive window clings. Slide in place, remove, and reuse with static cling science.",
          breadcrumb: "Decals",
          breadcrumbHref: "/custom-decals",
          promoText: "20% OFF REPOSITIONABLE WINDOW CLINGS",
          image:
            "/images/products/main%20page/window_clings_product.png",
          ratingCount: "220",
          ratingScore: "4.7",
          sizes: [
            {
              label: '12" x 18" Small Window Cling',
              value: "12x18",
              basePrice: 62.96,
            },
            {
              label: '18" x 24" Medium Window Cling',
              value: "18x24",
              basePrice: 79.99,
            },
            {
              label: '24" x 36" Large Window Cling',
              value: "24x36",
              basePrice: 99.99,
            },
          ],
          selects: [
            {
              label: "Cling Attachment side",
              options: [
                {
                  label: "Face Cling (Apply inside glass looking out)",
                  value: "face_cling",
                  priceAdder: 0,
                },
                {
                  label: "Back Cling (Apply outside glass looking in)",
                  value: "back_cling",
                  priceAdder: 0,
                },
              ],
            },
          ],
          qtyDiscount: "Saves with multi-clings packs",
          keyFeatures: [
            "Zero adhesive residue",
            "100% repositionable & reusable",
            "Clings to smooth glass surfaces",
          ],
          useCases: [
            "Temporary retail campaigns",
            "Holiday promotional banners",
            "Car service reminder tags",
          ],
          specs: [
            { key: "Material", value: "7.5mil static-cling gloss PVC film" },
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Get flexible glass branding",
          ctaBody: "Order clings that peel right off without clean-up.",
          ctaLabel: "Customize Window Cling",
        },
      },
      {
        id: "sheet-stickers",
        name: "Sheet Stickers",
        description:
          "Multiple custom stickers printed on a flat sheet, perfect for retail labelling.",
        image: "/images/products/main%20page/sticker_and_labels.png",
        price: "Starting at $11.16",
        config: {
          title: "Custom Sheet Stickers",
          quantityOptions: [100, 250, 500, 1000, 2500, 5000, 10000],
          subtitle:
            "Sticker sheets featuring multiple peel-off sticker cut contours on a single page.",
          breadcrumb: "Decals",
          breadcrumbHref: "/custom-decals",
          promoText: "20% OFF PRINTED STICKER SHEETS",
          image: "/images/products/main%20page/sticker_and_labels.png",
          images: [
            "/images/products/main%20page/sticker_and_labels.png",
            "/images/products/gallery/sticker_use_1.png",
            "/images/products/gallery/sticker_use_1.png",
            "/images/products/gallery/sticker_use_1.png",
          ],
          ratingCount: "340",
          ratingScore: "4.8",
          sizes: [
            {
              label: '8.5" x 11" Standard Sheet Size',
              value: "8.5x11",
              basePrice: 11.16,
            },
          ],
          selects: [
            {
              label: "Sticker Sheet material",
              options: [
                {
                  label: "Glossy White Sticker Paper",
                  value: "gloss_sheet",
                  priceAdder: 0,
                },
                {
                  label: "Matte White Sticker Paper",
                  value: "matte_sheet",
                  priceAdder: 0,
                },
              ],
            },
          ],
          qtyDiscount: "Saves up to 40% on bulk sheets",
          keyFeatures: [
            "Multiple stickers per sheet",
            "Durable peel-and-stick backings",
            "Contour kiss-cut contours",
          ],
          useCases: [
            "Product labeling",
            "Fun office handouts",
            "Packaging decorations",
          ],
          specs: [{ key: "Sheet Count", value: "Custom layouts per sheet" }],
          faqs: [],
          reviews: [],
          ctaHeading: "Design multi-sticker layouts",
          ctaBody: "Order flat sheets containing multiple business stickers.",
          ctaLabel: "Customize Sticker Sheet",
        },
      },
      {
        id: "return-address-labels",
        name: "Return Address Labels",
        description:
          "Mini address stickers for envelope branding, packaging returns, and office logs.",
        image:
          "/images/products/main%20page/return_address_labels_product.png",
        price: "Starting at $0.14 each",
        config: {
          title: "Return Address Labels",
          quantityOptions: [100, 250, 500, 1000, 2500, 5000, 10000],
          subtitle:
            "Convenient return address labels printed on premium sticky sheets.",
          breadcrumb: "Decals",
          breadcrumbHref: "/custom-decals",
          promoText: "20% OFF RETURN ADDRESS LABELS",
          image:
            "/images/products/main%20page/return_address_labels_product.png",
          ratingCount: "480",
          ratingScore: "4.9",
          sizes: [
            {
              label: '0.75" x 2.25" Mini Label size',
              value: "0.75x2.25",
              basePrice: 0.14,
            },
          ],
          selects: [
            {
              label: "Label Color Style",
              options: [
                {
                  label: "Standard White paper backing",
                  value: "white_back",
                  priceAdder: 0,
                },
                {
                  label: "Clear transparent window film",
                  value: "clear_back",
                  priceAdder: 0.05,
                },
              ],
            },
          ],
          qtyDiscount: "Pack options of 100, 250, 500",
          keyFeatures: [
            "Peel & stick quickly",
            "Vibrant black text layout",
            "Durable cardstock box container",
          ],
          useCases: [
            "Business correspondence envelopes",
            "Wedding invitations",
            "Product labels",
          ],
          specs: [
            { key: "Dimensions", value: "0.75 inches tall x 2.25 inches wide" },
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Design return labels",
          ctaBody: "Input your name and corporate address details.",
          ctaLabel: "Customize Address Labels",
        },
      },
    ],
  };