import { RegistryCategory } from "../productsRegistry";

export const vehicleSigns: RegistryCategory = {
    title: "Custom Vehicle Signs",
    breadcrumbLabel: "Vehicle Signs",
    heroSubtitle: "Every Mile is an Opportunity.",
    description:
      "Turn any vehicle into a mobile billboard. Promote your business on the go with custom car magnets, decals, and truck lettering.",
    heroImage: "/images/products/main%20page/magnet_hero_image.jpeg",
    tabletHeroImage: "/images/products/main%20page/magnet_hero_image.jpeg",
    mobileHeroImage: "/images/products/main%20page/magnet_hero_image.jpeg",
    reviewRating: "4.9",
    reviewCount: "2,150",
    reviewQuote:
      "Our fleet car magnets look incredibly professional. They stick perfectly at highway speeds and the print quality is showroom-grade.",
    categoryDescriptionText:
      "Make every commute count with durable vehicle signs custom-built to stand out. Nano Signs provides the options you need, from removable vehicle magnets and regulation door decals to bumper stickers and license plates. All vehicle products are constructed from high-grade vinyl and magnetic sheeting designed to hold tight at highway speeds and resist sun damage.",
    categorySecondaryImage: "/images/products/main%20page/vehicle_signs_desc.png",
    faqs: [
      {
        q: "Will car magnets stick to aluminum vehicle panels?",
        a: "No, magnets only attract steel doors. Make sure to test your door with a kitchen magnet before purchasing.",
      },
      {
        q: "Are vehicle decals easy to remove?",
        a: "Yes. They can be removed by applying gentle heat from a hairdryer and peeling back, without damaging factory car paint.",
      },
    ],
    products: [
      {
        id: "bumper-stickers",
        name: "Bumper Stickers",
        description:
          "Classic adhesive labels for car bumpers and windows. High visibility branding.",
        image: "/images/products/main%20page/bumper_sticker.png",
        price: "Starting at $2.24",
        config: {
          title: "Custom Bumper Stickers",
          quantityOptions: [100, 250, 500, 1000, 2500, 5000, 10000],
          subtitle:
            "Standard bumper stickers printed on waterproof, UV-proof outdoor vinyl adhesive.",
          breadcrumb: "Vehicle Signs",
          breadcrumbHref: "/vehicle-signs",
          promoText: "25% OFF BUMPER STICKERS",
          image: "/images/products/main%20page/bumper_sticker.png",
          ratingCount: "850",
          ratingScore: "4.8",
          sizes: [
            {
              label: '3" x 10" Rectangle Bumper Sticker',
              value: "3x10",
              basePrice: 2.24,
            },
            { label: '4" h- 4" Circle Sticker', value: "4x4", basePrice: 3.49 },
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
        id: "license-plates",
        name: "License Plates",
        description:
          "Custom front license plates made from heavy duty aluminum.",
        image: "/images/products/main%20page/license_plate.png",
        price: "Starting at $13.72",
        config: {
          title: "Custom License Plates",
          subtitle:
            "Heavy duty rust-proof aluminum plate inserts, pre-drilled for easy mounting.",
          breadcrumb: "Vehicle Signs",
          breadcrumbHref: "/vehicle-signs",
          promoText: "25% OFF ALUMINUM AUTO PLATES",
          image: "/images/products/main%20page/license_plate.png",
          ratingCount: "192",
          ratingScore: "4.7",
          sizes: [
            {
              label: '6" x 12" Standard Vehicle Size',
              value: "6x12",
              basePrice: 13.72,
            },
          ],
          selects: [
            {
              label: "Plate Mounting Hole Layout",
              options: [
                {
                  label: "Standard 4 Mounting Slots",
                  value: "slots",
                  priceAdder: 0,
                },
              ],
            },
          ],
          qtyDiscount: "Save on fleet auto plaques",
          keyFeatures: [
            "Rust-free aluminum sheeting",
            "Vibrant colors baked onto metal",
            "Pre-drilled mounting holes",
          ],
          useCases: [
            "Front vanity plates",
            "Company branding",
            "Novelty gifts",
          ],
          specs: [{ key: "Material", value: '0.040" thick Aluminum' }],
          faqs: [],
          reviews: [],
          ctaHeading: "Design front vanity plates",
          ctaBody:
            "Customize auto plates with corporate colors, logos, and phone lines.",
          ctaLabel: "Customize License Plate",
        },
      },
      {
        id: "magnetic-signs",
        name: "Car Magnet",
        description:
          "Minimum order quantity: 1 pcs and goes as many as they want. Removable vehicle magnets designed to hold tight at highway speeds.",
        image: "/images/products/main%20page/vehicle_magnets.png",
        price: "Starting at $18.99",
        badge: "Most Popular",
        config: {
          title: "Car Magnet",
          subtitle:
            "Heavy duty 30mil vehicle magnets that stay secure at highway speeds. Single sided only.",
          breadcrumb: "Vehicle Signs",
          breadcrumbHref: "/vehicle-signs",
          promoText: "🚗 Car Magnets — Turn any vehicle into a mobile billboard!",
          image: "/images/products/main%20page/vehicle_magnets.png",
          images: [
            "/images/products/main%20page/vehicle_magnets.png",
            "/images/products/gallery/magnet_use_1.png",
            "/images/products/gallery/magnet_use_2.png",
            "/images/products/gallery/magnet_use_3.png",
          ],
          ratingCount: "1530",
          ratingScore: "4.9",
          sizes: [
            {
              label: '12" x 24"',
              value: "12x24",
              basePrice: 25.99,
            },
            {
              label: '12" x 18"',
              value: "12x18",
              basePrice: 20.99,
            },
            {
              label: '18" x 24"',
              value: "18x24",
              basePrice: 28.99,
            },
            { 
              label: '6" x 12"', 
              value: "6x12", 
              basePrice: 18.99 
            },
          ],
          selects: [
            {
              label: "Corner Style",
              options: [
                {
                  label: "Rounded Corners (Aerodynamic)",
                  value: "rounded",
                  priceAdder: 0,
                  description: "Prevents wind drag lifting on highway speeds.",
                },
                {
                  label: "Square Corners",
                  value: "square",
                  priceAdder: -1.0,
                  description: "Classic sharp-cut rectangular magnet.",
                },
              ],
            },
          ],
          qtyDiscount: "Bulk discounts starting at 2 or more magnets",
          keyFeatures: [
            "Premium 30mil thick magnetic sheeting",
            "Rounded corners prevent highway peel",
            "UV resistant inks",
            "Glossy protective laminations",
          ],
          useCases: [
            "Delivery vans",
            "Real estate agent vehicles",
            "Contractors and technicians",
            "Personal cars used for business",
          ],
          specs: [
            { key: "Thickness", value: "30mil Magnetic material" },
            { key: "Coating", value: "Gloss UV Protective Finish" },
            { key: "Max Speed Rating", value: "Tested up to 80 MPH" },
          ],
          faqs: [
            {
              q: "Will this magnet stick to aluminum doors?",
              a: "No, magnets only stick to steel doors. Please verify your vehicle door panels with a kitchen magnet before purchasing.",
            },
            {
              q: "How often should I clean the magnet?",
              a: "We recommend removing and wiping down the magnet and car panel weekly to prevent moisture buildup.",
            },
          ],
          reviews: [
            {
              author: "Steve H.",
              rating: 5,
              text: "These magnets are thick and do not slide off even in highway storms. Printing is crisp.",
            },
          ],
          ctaHeading: "Start advertising on the go",
          ctaBody:
            "Design a clean car magnet with your logo, services, and phone number.",
          ctaLabel: "Customize Magnet",
        },
      },
      {
        id: "car-door-decals",
        name: "Car Door Decals",
        description:
          "Adhesive door decals for car bodies. Durable semi-permanent advertising.",
        image: "/images/products/main%20page/car_door_decal.png",
        price: "Starting at $23.86",
        config: {
          title: "Custom Car Door Decals",
          subtitle:
            "Professional semi-permanent adhesive branding decals for truck and car door panels.",
          breadcrumb: "Vehicle Signs",
          breadcrumbHref: "/vehicle-signs",
          promoText: "25% OFF SEMI-PERMANENT DOOR DECALS",
          image: "/images/products/main%20page/car_door_decal.png",
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
        image: "/images/products/main%20page/car_window_decal.png",
        price: "Starting at $23.86",
        config: {
          title: "Custom Car Window Decals",
          subtitle:
            "Highly visible rear window adhesive decals. Perfect for glass surfaces.",
          breadcrumb: "Vehicle Signs",
          breadcrumbHref: "/vehicle-signs",
          promoText: "25% OFF WINDOW ADHESIVE DECALS",
          image: "/images/products/main%20page/car_window_decal.png",
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
    ],
  };
