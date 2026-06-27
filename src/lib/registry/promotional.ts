import { RegistryCategory } from "../productsRegistry";

export const promotionalProducts: RegistryCategory = {
    title: "Promotional Swag & Merch",
    breadcrumbLabel: "Promotional Products",
    heroSubtitle: "Brand It. Share It. Grow It.",
    description:
      "Customize apparel, mugs, and trade show giveaways with your business branding.",
    heroImage: "/images/products/main%20page/promotional_products_hero_image.png",
    reviewRating: "4.9",
    reviewCount: "1,480",
    reviewQuote:
      "We ordered 500 custom logo pens and a couple dozen ceramic mugs for our annual summit giveaway bags. The logo resolution is incredibly sharp and the mugs look amazing.",
    categoryDescriptionText:
      "Promote your business and look professional with customized promo swag. From screen-printed cotton t-shirts and ceramic coffee mugs to canvas tote bags, retractable logo pens, executive journals, keychains, and fridge magnets, we have everything you need to leave a lasting impression. All items are constructed with high-grade, durable materials designed to proudly showcase your brand.",
    categorySecondaryImage: "/images/products/main%20page/promotional_products_desc.png",
    faqs: [
      {
        q: "Is there a minimum order quantity (MOQ) for promotional products?",
        a: "Many of our promotional products, including custom t-shirts, mugs, and journals, have no minimum order quantity—you can order just a single item! For items like custom pens or fridge magnets, we sell them in convenient pack sizes (e.g., packs of 50 or 100) to ensure you get the absolute best bulk rates.",
      },
      {
        q: "What print file formats do you recommend for logos?",
        a: "For the absolute sharpest print results, we recommend uploading vector files such as PDF, EPS, or AI. High-resolution PNG and JPG files are also supported. Our design check process automatically verifies that your files have sufficient resolution before printing begins.",
      },
      {
        q: "Are ceramic mugs and tumblers dishwasher safe?",
        a: "Yes! Our custom ceramic mugs are printed using industrial dye-sublimation wraps that are fully microwave and dishwasher safe, meaning your design won't fade or peel over time.",
      },
    ],
    products: [
      {
        id: "t-shirts",
        name: "Custom T-Shirts",
        description:
          "Screen printed cotton shirts featuring your company logo or message.",
        image: "/images/products/main%20page/custom_t_shirts.png",
        price: "Starting at $14.99",
        badge: "Staff Wear",
        config: {
          title: "Custom Printed T-Shirts",
          minQuantity: 12,
          subtitle:
            "Comfortable cotton tees customized with full-color heat-press or screen prints.",
          breadcrumb: "Promotional",
          breadcrumbHref: "/promotional-products",
          promoText: "25% OFF PROMOTIONAL MERCHANDISE",
          image: "/images/products/main%20page/custom_t_shirts.png",
          ratingCount: "740",
          ratingScore: "4.8",
          sizes: [
            {
              label: "Medium Unisex Tee",
              value: "medium_tee",
              basePrice: 14.99,
            },
            { label: "Large Unisex Tee", value: "large_tee", basePrice: 14.99 },
            {
              label: "Extra Large Unisex Tee",
              value: "xl_tee",
              basePrice: 16.99,
            },
          ],
          selects: [
            {
              label: "Shirt Fabric Style",
              options: [
                {
                  label: "100% Premium Cotton",
                  value: "cotton",
                  priceAdder: 0,
                  description: "Soft, breathable, preshrunk ringspun cotton.",
                },
              ],
            },
          ],
          qtyDiscount: "Volume discounts for outfitting your entire team",
          keyFeatures: [
            "Comfortable cotton knit fabric",
            "High durability dye-sub print",
            "Available in white and dark slate",
            "Wash-proof print bond",
          ],
          useCases: [
            "Staff uniforms",
            "Brand promotional giveaways",
            "Family reunions",
            "Corporate retreats",
          ],
          specs: [
            { key: "Material", value: "4.5oz Ringspun Cotton" },
            {
              key: "Wash Care",
              value: "Machine wash cold inside-out, tumble dry low",
            },
          ],
          faqs: [
            {
              q: "Will the graphic peel in the wash?",
              a: "No, our prints utilize high-temp industrial heat fusion that bonds print ink fibers directly to fabrics.",
            },
          ],
          reviews: [
            {
              author: "Nate W.",
              rating: 5,
              text: "Sizing is spot on and the print did not crack after multiple wash cycles.",
            },
          ],
          ctaHeading: "Design shirts for your team",
          ctaBody:
            "Add logo prints to front or back positions on premium shirts.",
          ctaLabel: "Customize Shirt",
        },
      },
      {
        id: "mugs",
        name: "Coffee Mugs & Tumblers",
        description:
          "Vibrant ceramic coffee mugs and travel tumblers with your company logo.",
        image: "/images/products/main%20page/coffee_mugs.png",
        price: "Starting at $4.99 each",
        badge: "Office Best-Seller",
        config: {
          title: "Custom Coffee Mugs",
          minQuantity: 12,
          subtitle:
            "Full-color sublimation print ceramic mugs, perfect for corporate swag and office desks.",
          breadcrumb: "Promotional",
          breadcrumbHref: "/promotional-products",
          promoText: "25% OFF CUSTOM LOGO DRINKWARE",
          image: "/images/products/main%20page/coffee_mugs.png",
          ratingCount: "840",
          ratingScore: "4.9",
          sizes: [
            {
              label: "11oz Classic Ceramic Mug",
              value: "11oz",
              basePrice: 4.99,
            },
            {
              label: "15oz Deluxe Ceramic Mug",
              value: "15oz",
              basePrice: 6.99,
            },
          ],
          selects: [
            {
              label: "Ceramic Color",
              options: [
                { label: "Bright White", value: "white", priceAdder: 0 },
                { label: "Midnight Black", value: "black", priceAdder: 1.5 },
              ],
            },
          ],
          qtyDiscount: "Save up to 55% in bulk orders",
          keyFeatures: [
            "Microwave and dishwasher safe",
            "Sublimated print wraps edge-to-edge",
            "Lead-free high-grade ceramic",
          ],
          useCases: [
            "Corporate gifts",
            "Office mugs",
            "Exhibition giveaways",
            "Client appreciation packages",
          ],
          specs: [
            { key: "Material", value: "High-quality Ceramic" },
            { key: "Printing", value: "Dye-Sublimation Wrap" },
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Brand your office drinkware",
          ctaBody: "Upload your logo to design custom coffee mugs today.",
          ctaLabel: "Customize Coffee Mugs",
        },
      },
      {
        id: "tote-bags",
        name: "Canvas Tote Bags",
        description:
          "Durable cotton canvas tote bags custom printed with your logo.",
        image: "/images/products/main%20page/canvas_tote_bags.png",
        price: "Starting at $5.99 each",
        config: {
          title: "Custom Canvas Tote Bags",
          minQuantity: 12,
          subtitle:
            "Eco-friendly, reusable cotton canvas totes printed with vibrant logo colors.",
          breadcrumb: "Promotional",
          breadcrumbHref: "/promotional-products",
          promoText: "25% OFF ECO-FRIENDLY PROM BAGS",
          image: "/images/products/main%20page/canvas_tote_bags.png",
          ratingCount: "490",
          ratingScore: "4.8",
          sizes: [
            {
              label: 'Standard 15" x 16" Tote',
              value: "15x16",
              basePrice: 5.99,
            },
          ],
          selects: [
            {
              label: "Cotton Weight",
              options: [
                {
                  label: "6oz Lightweight Cotton",
                  value: "6oz",
                  priceAdder: 0,
                },
                {
                  label: "12oz Heavyweight Canvas",
                  value: "12oz",
                  priceAdder: 2.5,
                },
              ],
            },
          ],
          qtyDiscount: "Save on bulk event tote packs",
          keyFeatures: [
            "Reinforced shoulder handles",
            "Eco-friendly reusable design",
            "Full color heat transfer printing",
          ],
          useCases: [
            "Grocery shoppers",
            "Event giveaway bags",
            "Staff welcome packages",
            "Library book bags",
          ],
          specs: [
            { key: "Material", value: "100% Cotton Canvas" },
            { key: "Handles", value: "21-inch fabric handles" },
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Design reusable event bags",
          ctaBody:
            "Custom print canvas tote bags with your graphics and emblems.",
          ctaLabel: "Customize Tote Bags",
        },
      },
      {
        id: "pens",
        name: "Custom Logo Pens",
        description:
          "Retractable ballpoint writing guidelines, perfect for trade shows and lobbies.",
        image: "/images/products/main%20page/custom_pens.png",
        price: "Starting at $0.89 each",
        badge: "Trade Show Choice",
        config: {
          title: "Custom Logo Pens",
          quantityOptions: [100, 250, 500, 1000, 2500, 5000, 10000],
          subtitle:
            "Sleek retractable clicker pens printed with your business website or phone number.",
          breadcrumb: "Promotional",
          breadcrumbHref: "/promotional-products",
          promoText: "25% OFF BULK LOGO WRITING PENS",
          image: "/images/products/main%20page/custom_pens.png",
          ratingCount: "1250",
          ratingScore: "4.8",
          sizes: [
            {
              label: "Standard Fine Point Pen",
              value: "fine_pen",
              basePrice: 0.89,
            },
          ],
          selects: [
            {
              label: "Ink Color",
              options: [
                {
                  label: "Classic Black Ink",
                  value: "black_ink",
                  priceAdder: 0,
                },
                { label: "Deep Blue Ink", value: "blue_ink", priceAdder: 0 },
              ],
            },
            {
              label: "Pen Barrel Color",
              options: [
                {
                  label: "White/Yellow Trim",
                  value: "yellow_trim",
                  priceAdder: 0,
                },
                {
                  label: "White/Black Trim",
                  value: "black_trim",
                  priceAdder: 0,
                },
                {
                  label: "Solid Silver Barrel",
                  value: "silver_barrel",
                  priceAdder: 0.25,
                },
              ],
            },
          ],
          qtyDiscount: "Super bulk prices drop to $0.29 each",
          keyFeatures: [
            "Smooth ink flow prevents smudges",
            "Soft rubber grip for comfort",
            "Durable pocket clip attachment",
          ],
          useCases: [
            "Lobby counter registers",
            "Trade show swag baskets",
            "Office stationery chests",
            "Direct mail package fillers",
          ],
          specs: [
            { key: "Ink Style", value: "Ballpoint medium ink" },
            { key: "Body", value: "ABS plastic housing" },
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Order bulk giveaway pens",
          ctaBody: "Custom print barrels with logo text and web address.",
          ctaLabel: "Customize Pens",
        },
      },
      {
        id: "notebooks",
        name: "Custom Journals & Notebooks",
        description:
          "Pre-ruled journals and notebooks, perfect for client meetings and logs.",
        image: "/images/products/main%20page/custom_notebooks.png",
        price: "Starting at $3.99 each",
        config: {
          title: "Custom Notebooks & Journals",
          minQuantity: 10,
          subtitle:
            "Lined paper journals with premium custom covers to organize meetings and ideas.",
          breadcrumb: "Promotional",
          breadcrumbHref: "/promotional-products",
          promoText: "25% OFF CUSTOM EXECUTIVE NOTEBOOKS",
          image: "/images/products/main%20page/custom_notebooks.png",
          ratingCount: "380",
          ratingScore: "4.8",
          sizes: [
            {
              label: '5.5" x 8.5" Classic Journal',
              value: "5.5x8.5",
              basePrice: 3.99,
            },
          ],
          selects: [
            {
              label: "Cover Style",
              options: [
                { label: "Flexible Softcover", value: "soft", priceAdder: 0 },
                {
                  label: "Rigid Leatherette Hardcover",
                  value: "hard",
                  priceAdder: 3.0,
                },
              ],
            },
          ],
          qtyDiscount: "Save on office packs starting at 10+ journals",
          keyFeatures: [
            "80 ruled pages (acid-free paper)",
            "Elastic band closure strip",
            "Color-matching ribbon bookmark",
          ],
          useCases: [
            "Client meeting diaries",
            "Employee onboarding logs",
            "Gift-away packages",
            "Educational seminars",
          ],
          specs: [
            { key: "Page Count", value: "80 lined sheets (160 pages)" },
            { key: "Binding", value: "Stitched lay-flat binding" },
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Create custom corporate journals",
          ctaBody:
            "Custom print journal covers with debossed logos or full color prints.",
          ctaLabel: "Customize Notebooks",
        },
      },
      {
        id: "keychains",
        name: "Custom Logo Keychains",
        description:
          "Acrylic and metallic keyring tags customized with your company logo.",
        image: "/images/products/main%20page/custom_keychains.png",
        price: "Starting at $1.29 each",
        config: {
          title: "Custom Logo Keychains",
          minQuantity: 25,
          subtitle:
            "Sturdy custom key rings featuring printed acrylic shapes or laser engraved metal.",
          breadcrumb: "Promotional",
          breadcrumbHref: "/promotional-products",
          promoText: "25% OFF CUSTOM ENGRAVED KEYCHAINS",
          image: "/images/products/main%20page/custom_keychains.png",
          ratingCount: "290",
          ratingScore: "4.7",
          sizes: [
            {
              label: '2" x 2" Acrylic Keychain',
              value: "2x2_acrylic",
              basePrice: 1.29,
            },
          ],
          selects: [
            {
              label: "Keychain Material",
              options: [
                { label: "Clear Acrylic", value: "acrylic", priceAdder: 0 },
                {
                  label: "Laser-Engraved Stainless Steel",
                  value: "steel",
                  priceAdder: 2.0,
                },
              ],
            },
          ],
          qtyDiscount: "Save on corporate key ring packs",
          keyFeatures: [
            "Stainless steel split ring holds keys safely",
            "Double sided full color print under acrylic",
            "Scratch-resistant shield coatings",
          ],
          useCases: [
            "Car dealership client handovers",
            "Real estate open house promotions",
            "Gym member tags",
            "Corporate swag keyrings",
          ],
          specs: [
            { key: "Ring", value: "1-inch split key ring" },
            { key: "Materials", value: "Acrylic or Stainless steel" },
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Design key ring promos",
          ctaBody: "Engrave steel tags or print acrylic shapes with logos.",
          ctaLabel: "Customize Keychains",
        },
      },
      {
        id: "fridge-magnets",
        name: "Custom Fridge Magnets",
        description:
          "Flexible promo magnets, perfect for household fridges and direct mail.",
        image: "/images/products/main%20page/custom_fridge_magnets.png",
        price: "Starting at $0.49 each",
        badge: "Household Favorite",
        config: {
          title: "Custom Fridge Magnets",
          quantityOptions: [100, 250, 500, 1000, 2500, 5000, 10000],
          subtitle:
            "Lightweight flexible promo magnets, perfect for direct mail and fridge doors.",
          breadcrumb: "Promotional",
          breadcrumbHref: "/promotional-products",
          promoText: "25% OFF CUSTOM HOUSEHOLD MAGNETS",
          image: "/images/products/main%20page/custom_fridge_magnets.png",
          ratingCount: "710",
          ratingScore: "4.9",
          sizes: [
            { label: '2" x 2" Square Magnet', value: "2x2", basePrice: 0.49 },
            {
              label: '3.5" x 2" Business Card Magnet',
              value: "3.5x2",
              basePrice: 0.79,
            },
          ],
          selects: [
            {
              label: "Lamination Finish",
              options: [
                { label: "Gloss UV Coat", value: "gloss_lam", priceAdder: 0 },
                { label: "Matte Finish", value: "matte_lam", priceAdder: 0 },
              ],
            },
          ],
          qtyDiscount: "Volume packs drop price under $0.15 each",
          keyFeatures: [
            "Flexible 20mil magnetic backings",
            "Sticks tight to fridges & whiteboards",
            "Full-bleed color printing",
          ],
          useCases: [
            "Plumbers & repair hotlines",
            "Pizza takeout phone lists",
            "Save the Date reminders",
            "Calendar fridge cards",
          ],
          specs: [
            { key: "Material", value: "20mil flexible magnet" },
            { key: "Sizing", value: "2x2 inches or 3.5x2 inches" },
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Print fridge promo magnets",
          ctaBody:
            "Design business card magnets for household services and dispatch centers.",
          ctaLabel: "Customize Fridge Magnets",
        },
      },
    ],
};