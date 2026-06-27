import { RegistryCategory } from "../productsRegistry";

export const tradeshow: RegistryCategory = {
    title: "Tradeshow Displays",
    breadcrumbLabel: "Tradeshow",
    description:
      "Get trade show ready with custom products that make your brand stand out. Table covers, step and repeats, and stands.",
    heroImage: "/images/products/main%20page/tradeshow%20hero%20image.png",
    tabletHeroImage: "/images/products/main%20page/tradeshow%20hero%20image.png",
    mobileHeroImage: "/images/products/main%20page/tradeshow%20hero%20image.png",
    heroSubtitle: "Where First Impressions Get Noticed.",
    reviewRating: "4.9",
    reviewCount: "3,240",
    reviewQuote:
      "The table cover and pop-up backdrop banner printed beautifully! Setup took seconds and our logo colors matched perfectly.",
    categoryDescriptionText:
      "Your tradeshow booth should do more than fill space, it should tell your brand story. With a full range of customizable displays, signage, and print materials, we help you make every event count. From table covers to backdrops, banners to business cards, our products are designed to build cohesion, attract attention, and drive engagement. Whether you're setting up for a local fair or a national expo, we've got everything you need to show up strong and stay top of mind.",
    categorySecondaryImage: "/images/products/main%20page/trade_show_desc.png",
    faqs: [
      {
        q: "Can I customize designs with my logo and brand colors?",
        a: "Yes! All of our tradeshow products are fully customizable with your logo, brand colors, messaging, and graphics. You can upload your own artwork or use our easy online design tools. Need help? Our professional design team is here to assist, whether you need a quick layout fix or a fully custom design, we’ve got you covered. 1-800-330-9622",
      },
      {
        q: "Do you offer portable and easy-to-set-up display options?",
        a: "Yes! Many of our products; like retractable banners, pop up displays, and tabletop signage; are lightweight, portable, and quick to assemble, making setup and teardown fast and stress-free.",
      },
      {
        q: "How long does it take to receive my order?",
        a: "Production and shipping times vary depending on the product and customization, but most orders ship within a few business days. Expedited options are available at checkout.",
      },
      {
        q: "What should I include in my tradeshow booth setup?",
        a: "A well-rounded booth typically includes branded table covers, vertical signage like banners or displays, informational handouts (such as postcards or business cards), and high-impact elements like custom tents or backdrops for visibility.",
      },
      {
        q: "What if I need help choosing the right products for my event?",
        a: "Our team is here to help! If you're not sure which products best suit your booth space, goals, or budget, our event specialists can walk you through options and make personalized recommendations based on your needs. 1-800-330-9622",
      },
    ],
    products: [
      {
        id: "tablecloths",
        name: "Custom Tablecloths",
        description:
          "Transform any standard folding table into a highly professional promotional display with our Custom Tablecloths. Printed using advanced dye-sublimation on premium 300D polyester twill, these covers feature a vibrant, scratch-resistant print that won't crack or peel. They are completely machine washable, flame-retardant (meeting NFPA 701 safety certifications), and designed to stay wrinkle-free throughout long events. Available in standard 6ft and 8ft sizes in both 4-sided (closed back) and 3-sided (open back) configurations for convenient under-table storage access.",
        image: "/images/products/main%20page/tablecloths.png",
        price: "Starting at $89.99",
        badge: "Best Seller",
        config: {
          title: "Custom Tablecloths",
          subtitle:
            "Dye-sublimation printed fabric table cloths that drape perfectly over display tables.",
          breadcrumb: "Tradeshow",
          breadcrumbHref: "/trade-show",
          promoText: "25% OFF CUSTOM TABLECLOTHS - SHIPS NEXT DAY",
          image: "/images/products/main%20page/tablecloths.png",
          images: [
            "/images/products/main%20page/tablecloths.png",
            "/images/products/gallery/tablecloth_use_1.png",
            "/images/products/gallery/tablecloth_use_2.png",
            "/images/products/gallery/tablecloth_use_3.png",
          ],
          ratingCount: "680",
          ratingScore: "4.9",
          sizes: [
            {
              label: "6ft Table Throw (Standard)",
              value: "72x30",
              basePrice: 89.99,
            },
            { label: "8ft Table Throw", value: "96x30", basePrice: 119.99 },
          ],
          selects: [
            {
              label: "Table Cloth Coverage",
              options: [
                {
                  label: "4-Sided Closed Back Throw",
                  value: "4sided",
                  priceAdder: 0,
                  description:
                    "Covers all four sides, perfect for storage underneath.",
                },
                {
                  label: "3-Sided Open Back Throw",
                  value: "3sided",
                  priceAdder: -10.0,
                  description: "Leaves the back open for easy seating access.",
                },
              ],
            },
          ],
          qtyDiscount: "Volume discounts on bulk promotional items",
          keyFeatures: [
            "100% Wrinkle-resistant polyester fabric",
            "Fully hemmed finished edges",
            "Scratch resistant dye-sub print",
            "Machine washable",
          ],
          useCases: [
            "Job fairs",
            "Trade show booths",
            "School orientations",
            "Craft shows & market stalls",
          ],
          specs: [
            { key: "Material", value: "300D Polyester Twill" },
            {
              key: "Flame Retardant",
              value: "Meets NFPA 701 fire safety rating",
            },
            { key: "Care", value: "Machine washable, tumble dry low" },
          ],
          faqs: [
            {
              q: "Is the material flame retardant?",
              a: "Yes, our table fabrics are treated to meet standard trade show safety fire certifications.",
            },
          ],
          reviews: [
            {
              author: "Emily T.",
              rating: 5,
              text: "Excellent washability! Spillages from coffee wiped right off, and it didn't wrinkle.",
            },
          ],
          ctaHeading: "Elevate your booth display",
          ctaBody:
            "Customize a premium table throw with your core branding and logos.",
          ctaLabel: "Customize Cover",
        },
      },
      {
        id: "table-runners",
        name: "Table Runners",
        description:
          "For a versatile, portable, and budget-friendly branding solution, our Custom Table Runners are the perfect choice. Drape one over a plain solid-colored tablecloth to instantly elevate your booth's look without the cost of a full tablecloth. Made from durable 300D polyester twill with optional liquid-repellent coatings, our table runners roll down flat, fit easily in any travel bag, and wash clean in the machine. Choose from multiple standard widths to display your company logo prominently.",
        image: "/images/products/main%20page/table_runner.png",
        price: "Starting at $39.99",
        badge: "Budget-Friendly",
        config: {
          title: "Custom Table Runners",
          subtitle:
            "Add branding to any plain tablecloth with a custom printed twill table runner.",
          breadcrumb: "Tradeshow",
          breadcrumbHref: "/trade-show",
          promoText: "25% OFF TABLE RUNNERS - SHIPS NEXT DAY",
          image: "/images/products/main%20page/table_runner.png",
          ratingCount: "540",
          ratingScore: "4.8",
          sizes: [
            { label: '24" x 84" (Standard)', value: "24x84", basePrice: 39.99 },
            { label: '30" x 84"', value: "30x84", basePrice: 49.99 },
            { label: '36" x 84" (Wide)', value: "36x84", basePrice: 59.99 },
          ],
          selects: [
            {
              label: "Material Twill",
              options: [
                {
                  label: "300D Polyester Twill (Standard)",
                  value: "standard",
                  priceAdder: 0,
                },
                {
                  label: "Liquid-Repellent Twill",
                  value: "repellent",
                  priceAdder: 10.0,
                },
              ],
            },
          ],
          qtyDiscount: "Volume discounts on promotional items",
          keyFeatures: [
            "Adds modular branding to any setup",
            "NFPA 701 certified flame retardant",
            "Machine washable",
          ],
          useCases: ["Job recruiting", "Farmers markets", "Check-in desks"],
          specs: [{ key: "Material", value: "300D Polyester Twill" }],
          faqs: [],
          reviews: [],
          ctaHeading: "Ready to design table runners?",
          ctaBody: "Custom print table runners with corporate logos.",
          ctaLabel: "Customize Table Runner",
        },
      },
      {
        id: "fitted-tablecloths",
        name: "Fitted Tablecloths",
        description:
          "Give your display tables a clean, sharp, box-tailored look with Fitted Tablecloths. Custom-tailored to slip perfectly over standard 6ft and 8ft rectangular tables, these covers stay securely in place without hanging or pooling on the floor, making them excellent for busy outdoor venues or professional recruiting events. Constructed from flame-retardant 300D knit polyester twill, they are machine-washable, wrinkle-resistant, and built to withstand repeated setups.",
        image: "/images/products/main%20page/fitted_tablecloth.png",
        price: "Starting at $109.99",
        config: {
          title: "Fitted Tablecloths",
          subtitle:
            "Box-style custom tablecloths tailored to standard 6ft and 8ft display tables.",
          breadcrumb: "Tradeshow",
          breadcrumbHref: "/trade-show",
          promoText: "25% OFF TAILORED FITTED TABLE COVERS",
          image:
            "/images/products/main%20page/fitted_tablecloth.png",
          ratingCount: "310",
          ratingScore: "4.8",
          sizes: [
            {
              label: '6ft Fitted (72" x 30" x 30")',
              value: "6ft_fitted",
              basePrice: 109.99,
            },
            {
              label: '8ft Fitted (96" x 30" x 30")',
              value: "8ft_fitted",
              basePrice: 139.99,
            },
          ],
          selects: [
            {
              label: "Material",
              options: [
                {
                  label: "300D Polyester Twill (Standard)",
                  value: "standard",
                  priceAdder: 0,
                },
              ],
            },
          ],
          qtyDiscount: "Bulk event pricing applies",
          keyFeatures: [
            "Box-tailored structure stays secure",
            "NFPA 701 fire certified",
            "Machine washable",
          ],
          useCases: ["Conventions", "Summits", "Job fairs"],
          specs: [{ key: "Material", value: "300D Knit Polyester" }],
          faqs: [],
          reviews: [],
          ctaHeading: "Tailor your booth layout",
          ctaBody: "Order fitted box tablecloths with custom printed fronts.",
          ctaLabel: "Customize Fitted Cover",
        },
      },
      {
        id: "round-tablecloths",
        name: "Round Tablecloths",
        description:
          "Elevate your round banquet, registry, or cocktail tables with our Round Custom Tablecloths. Specially hemmed for standard circular table sizes, they drape elegantly to the floor in a seamless design. Using full-spectrum dye-sublimation printing, your custom colors, patterns, and logos will appear bright and clear, providing a premium aesthetic for weddings, evening galas, corporate fundraisers, and hotel lobbies.",
        image: "/images/products/main%20page/round_tablecloth.png",
        price: "Starting at $129.99",
        config: {
          title: "Round Custom Tablecloths",
          subtitle:
            "Full color dye-sublimated tablecloths designed for circular highboy and banquet tables.",
          breadcrumb: "Tradeshow",
          breadcrumbHref: "/trade-show",
          promoText: "25% OFF CUSTOM ROUND TABLECLOTHS",
          image: "/images/products/main%20page/round_tablecloth.png",
          ratingCount: "195",
          ratingScore: "4.7",
          sizes: [
            {
              label: '30" Round Table Throw',
              value: "30_round",
              basePrice: 129.99,
            },
            {
              label: '60" Circular Banquet Cover',
              value: "60_round",
              basePrice: 179.99,
            },
            {
              label: '72" Large Circular Cover',
              value: "72_round",
              basePrice: 219.99,
            },
          ],
          selects: [
            {
              label: "Drape Drop Type",
              options: [
                {
                  label: "Full Floor Length Drop",
                  value: "floor",
                  priceAdder: 0,
                },
              ],
            },
          ],
          qtyDiscount: "Volume discounts for banquet halls and events",
          keyFeatures: [
            "Seamless round draping",
            "Dye-sublimation full spectrum print",
            "Flame certified fabric",
          ],
          useCases: ["Cocktail hours", "Weddings", "Gala banquets"],
          specs: [{ key: "Material", value: "300D Polyester" }],
          faqs: [],
          reviews: [],
          ctaHeading: "Decorate round tables",
          ctaBody: "Brand circular lobby high-boys or food service rounds.",
          ctaLabel: "Customize Round Cover",
        },
      },
      {
        id: "stretch-tablecloths",
        name: "Stretch Tablecloths",
        description:
          "Achieve a sleek, modern, and high-impact look with our contoured Stretch Tablecloths. Made from an elastic polyester-spandex blend, these covers stretch tightly over your table frame and secure into place using reinforced rubber leg pockets, preventing any flapping or shifting in windy outdoor conditions. The tight tension naturally pulls out all folds and wrinkles, ensuring a perfectly smooth, professional surface for tech conferences, outdoor festivals, and modern brand exhibitions.",
        image: "/images/products/main%20page/stretch_tablecloth.png",
        price: "Starting at $129.99",
        config: {
          title: "Stretch Tablecloths (Spandex Style)",
          subtitle:
            "Elastic stretch tablecloths contouring tightly to rectangular event tables. Modern and wrinkle-free.",
          breadcrumb: "Tradeshow",
          breadcrumbHref: "/trade-show",
          promoText: "25% OFF CONTOURED SPANDEX DISPLAYS",
          image:
            "/images/products/main%20page/stretch_tablecloth.png",
          ratingCount: "290",
          ratingScore: "4.9",
          sizes: [
            {
              label: "6ft Stretch Spandex (Standard)",
              value: "6ft_stretch",
              basePrice: 129.99,
            },
            {
              label: "8ft Stretch Spandex",
              value: "8ft_stretch",
              basePrice: 159.99,
            },
          ],
          selects: [
            {
              label: "Table Leg Pockets",
              options: [
                {
                  label: "Reinforced Rubber Leg Pockets",
                  value: "reinforced",
                  priceAdder: 0,
                },
              ],
            },
          ],
          qtyDiscount: "Spandex volume levels apply",
          keyFeatures: [
            "Wrinkle-free stretch spandex material",
            "Hook-under pockets keep cover locked down",
            "Ultra modern contours",
          ],
          useCases: [
            "Outdoor windy venues",
            "Tech trade conventions",
            "Modern product roll-outs",
          ],
          specs: [
            { key: "Material", value: "Polyester-Spandex Elastic Blend" },
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Go modern with stretch spandex",
          ctaBody:
            "Order contoured tablecloth covers that hook securely in place.",
          ctaLabel: "Customize Stretch Cover",
        },
      },
      {
        id: "pop-up-displays",
        name: "Pop-Up Displays",
        description:
          "Make a massive impression on the trade show floor with our premium Pop-Up Backdrop Displays. Featuring a lightweight accordion-style aluminum frame that snaps open in under two minutes, this backdrop utilizes a large, high-definition tension fabric graphic that attaches securely around the perimeter with heavy-duty hook-and-loop velcro. It packs down into a compact trolley bag with rolling wheels for effortless travel and setup.",
        image: "/images/products/main%20page/pop_up_display.png",
        price: "Starting at $299.99",
        config: {
          title: "Pop-Up Backdrop Displays",
          subtitle:
            "Collapsible aluminum accordion frame with custom printed tension fabric screen cover.",
          breadcrumb: "Tradeshow",
          breadcrumbHref: "/trade-show",
          promoText: "25% OFF ALL POP-UP EVENT DISPLAYS",
          image: "/images/products/main%20page/pop_up_display.png",
          ratingCount: "430",
          ratingScore: "4.8",
          sizes: [
            {
              label: "8ft Straight Accordion Frame",
              value: "8ft_straight",
              basePrice: 299.99,
            },
            {
              label: "10ft Straight Accordion Frame",
              value: "10ft_straight",
              basePrice: 399.99,
            },
            {
              label: "8ft Curved Exhibition Frame",
              value: "8ft_curved",
              basePrice: 349.99,
            },
            {
              label: "10ft Curved Exhibition Frame",
              value: "10ft_curved",
              basePrice: 449.99,
            },
          ],
          selects: [
            {
              label: "Frame Kit Option",
              options: [
                {
                  label: "Include Collapsible Frame & Trolley Bag",
                  value: "full_kit",
                  priceAdder: 120.0,
                },
                {
                  label: "Fabric Replacement Print Only",
                  value: "print_only",
                  priceAdder: 0,
                },
              ],
            },
          ],
          qtyDiscount: "Exposition vendor rates apply",
          keyFeatures: [
            "Sets up in 2 minutes",
            "Wrinkle-resistant heavy knit stretch fabric",
            "Travel-friendly transport wheels bag",
          ],
          useCases: [
            "Exhibitions",
            "Major expos",
            "Stage presentations",
            "Press announcements",
          ],
          specs: [
            { key: "Frame Structure", value: "Accordion-style aluminum tubes" },
            { key: "Fabric Attach", value: "Hook-and-loop velcro perimeter" },
          ],
          faqs: [],
          reviews: [],
          ctaHeading: "Dominate the show floor",
          ctaBody: "Order a massive accordion pop-up wall back wall.",
          ctaLabel: "Customize Pop-Up Display",
        },
      },
      {
        id: "step-and-repeat-banner",
        name: "Backdrop Banners",
        description:
          "Create the perfect photo opportunity at red carpets, press conferences, weddings, and corporate summits with our Step & Repeat Banners. Designed to display repeated logos in a clean grid layout, the glare-free matte finish of our heavy-duty blockout vinyl ensures beautiful, flash-friendly photography. The package comes with an optional adjustable backdrop stand and top/bottom pole pockets for fast mounting.",
        image: "/images/products/main%20page/backdrop_banners.png",
        price: "Starting at $145.99",
        config: {
          title: "Backdrop Banners",
          subtitle:
            "Professional background banners for press walls, photo shoots, and red carpets.",
          breadcrumb: "Tradeshow",
          breadcrumbHref: "/trade-show",
          promoText: "25% OFF STEP AND REPEAT PRESS WALLS",
          image:
            "/images/products/main%20page/backdrop_banners.png",
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
            "Anti-glare matte finish ensures clear photography",
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
        id: "retractable-banners",
        name: "Retractable Banner",
        description:
          "Our Retractable Banners (Roll Up Stands) are the ultimate standalone banner display for trade shows, retail checkouts, and office lobbies. The banner graphic pulls up from an anodized aluminum base stand in seconds and secures with a vertical support rod. Each kit includes a padded carrying bag, making transport and setup incredibly simple. Printed on premium curl-resistant polyester film or standard 13oz vinyl to maintain a clean, flat presentation.",
        image: "/images/products/main%20page/retractable_roll_up_banner.png",
        price: "Starting at $89.00",
        config: {
          title: "Retractable Banners (Roll Up)",
          subtitle:
            "Portable stand and pre-installed banner, rolls up in seconds for easy transport.",
          breadcrumb: "Tradeshow",
          breadcrumbHref: "/trade-show",
          promoText: "25% OFF RETRACTABLE ROLL-UP BANNERS",
          image:
            "/images/products/main%20page/retractable_roll_up_banner.png",
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
        id: "x-banner-stand",
        name: "X-Banners",
        description:
          "The X-Frame Banner Stand is a highly cost-effective, portable freestanding banner solution. By utilizing flexible composite fiberglass arms connected to a central hinge, the stand pulls a custom corner-grommeted banner taut, keeping your graphic perfectly flat and readable. Because the banner attaches simply via grommets, you can order replacement prints and swap graphics in seconds without needing to buy new stands.",
        image: "/images/products/main%20page/x_banner_stand.png",
        price: "Starting at $49.99",
        config: {
          title: "X-Frame Banner Stands",
          subtitle:
            "Highly cost-effective standing banners utilizing tension fiberglass arms to pull banner corners taut.",
          breadcrumb: "Tradeshow",
          breadcrumbHref: "/trade-show",
          promoText: "25% OFF BUDGET X-BANNER DISPLAYS",
          image: "/images/products/main%20page/x_banner_stand.png",
          ratingCount: "385",
          ratingScore: "4.7",
          sizes: [
            {
              label: '24" x 63" X-Stand',
              value: "63x24",
              basePrice: 49.99,
            },
            {
              label: '31" x 70" X-Stand',
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
        id: "tabletop-retractable-banners",
        name: "Tabletop Retractable Banners",
        description:
          "Bring high-impact branding to counter-tops, checkout registers, hotel lobbies, and registration desks with Tabletop Retractable Banners. These miniature versions of our full-sized roll-up stands feature a compact aluminum base housing that pulls up and retracts in seconds. Printed on smooth, high-resolution polypropylene film, they ensure small details and text are clear and easy to read from a close distance.",
        image:
          "/images/products/main%20page/tabletop_retractable.jpg",
        price: "Starting at $27.18",
        config: {
          title: "Tabletop Retractable Banners",
          subtitle:
            "Mini roll-up banners designed to sit on tables, point-of-sale registers, and service desks.",
          breadcrumb: "Tradeshow",
          breadcrumbHref: "/trade-show",
          promoText: "25% OFF TABLETOP RETRACTABLE DISPLAYS",
          image:
            "/images/products/main%20page/tabletop_retractable.jpg",
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
              basePrice: 27.18,
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
      {
        id: "custom-canopy-tents",
        name: "Custom Canopies",
        description:
          "Stand out at outdoor events, farmers markets, sporting events, and street fairs with our 10' x 10' Custom Canopy Tents. The canopy top is made from heavy-duty, waterproof, and UV-resistant fabric printed in rich full-color dye-sublimation. The popup frame features a commercial-grade steel or aluminum truss system with adjustable height settings, popping up in minutes for instant shade and high-visibility branding.",
        image: "/images/products/main%20page/event_tents.png",
        price: "Starting at $349.99",
        config: {
          title: "Custom Canopy Tents",
          subtitle:
            "Outdoor 10' x 10' custom canopy tents. Waterproof, UV-resistant fabric over steel popup frames.",
          breadcrumb: "Tradeshow",
          breadcrumbHref: "/trade-show",
          promoText: "25% OFF OUTDOOR EVENT CANOPIES",
          image: "/images/products/main%20page/event_tents.png",
          ratingCount: "110",
          ratingScore: "4.7",
          sizes: [
            {
              label: "10ft x 10ft Canopy Tent",
              value: "10x10",
              basePrice: 349.99,
            },
          ],
          selects: [
            {
              label: "Frame Type",
              options: [
                {
                  label: "Standard Steel Frame",
                  value: "steel",
                  priceAdder: 0,
                },
                {
                  label: "Premium Lightweight Aluminum Frame",
                  value: "aluminum",
                  priceAdder: 120.0,
                },
              ],
            },
          ],
          qtyDiscount: "Volume canopy packaging available",
          keyFeatures: [
            "Waterproof & UV resistant fabric",
            "Durable popup truss system",
            "Dye-sublimation peak printing",
          ],
          useCases: [
            "Outdoor farmers markets",
            "Festivals & concerts",
            "Sports events",
          ],
          specs: [{ key: "Dimensions", value: '120" W x 120" D x 135" H max' }],
          faqs: [],
          reviews: [],
          ctaHeading: "Establish outdoor presence",
          ctaBody: "Print full-color canopy tops today.",
          ctaLabel: "Customize Canopy Tent",
        },
      },
      {
        id: "feather-flags",
        name: "Feather Flags",
        description:
          "Draw customers in from the roadside with our best-selling Custom Feather Flags. Designed to flutter in the wind and turn heads, these tall advertising flags are printed on premium open-weave knit polyester to reduce wind load stress. Supported by composite fiberglass poles and a rotating ground spike or cross stand, they rotate 360 degrees to remain visible from any traffic direction.",
        image: "/images/products/main%20page/feather_flag.png",
        price: "Starting at $80.00",
        config: {
          title: "Custom Feather Flags",
          subtitle:
            "Outdoor advertising flags printed on durable knit polyester, complete with poles and hardware.",
          breadcrumb: "Tradeshow",
          breadcrumbHref: "/trade-show",
          promoText: "25% OFF ALL ADVERTISING FLAGS - SHIPS NEXT DAY",
          image: "/api/assets/0085996_feather-flags_360.png",
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
                  label: "Double-Sided (Show correct on both sides)",
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
          ],
          useCases: [
            "Outdoor storefronts",
            "Grand openings",
            "Car dealerships",
          ],
          specs: [{ key: "Material", value: "110g Knit Polyester" }],
          faqs: [],
          reviews: [],
          ctaHeading: "Get noticed from the road",
          ctaBody: "Order fluttering advertising flags.",
          ctaLabel: "Customize Feather Flag",
        },
      },
      {
        id: "vinyl-banners",
        name: "Vinyl Banners",
        description:
          "Our Custom Vinyl Banners are a versatile, heavy-duty signage solution for outdoor and indoor advertising. Constructed from durable 13oz gloss or 15oz premium matte PVC vinyl with heat-welded hems, they are fully waterproof and UV-resistant to survive the elements. Complete with pre-installed brass grommets or pole pockets for easy hanging, they are perfect for storefront openings, construction fences, and event banners.",
        image: "/images/products/main%20page/vinyl_banner.png",
        price: "Starting at $12.99",
        config: {
          title: "Custom Vinyl Banners",
          subtitle:
            "Durable, waterproof, outdoor-rated vinyl banners complete with grommets.",
          breadcrumb: "Tradeshow",
          breadcrumbHref: "/trade-show",
          promoText: "25% OFF ALL VINYL BANNERS - SHIPS NEXT DAY",
          image: "/images/products/main%20page/vinyl_banner.png",
          ratingCount: "1530",
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
          ],
          qtyDiscount: "Save up to 15% on bulk banner orders",
          keyFeatures: [
            "Waterproof & UV resistant",
            "Heat-welded hems for extra strength",
            "Vibrant full-color digital printing",
          ],
          useCases: ["Event announcements", "Sponsorship banners"],
          specs: [
            { key: "Material", value: "13oz or 15oz flexible PVC vinyl" },
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
        id: "business-cards",
        name: "Business Cards",
        description:
          'Leave a lasting impression with premium Custom Business Cards. Printed on ultra-thick 14pt or 16pt cardstock with offset high-resolution printing, these standard 3.5" x 2" cards represent your business with absolute quality. Customize your finish with professional non-glare matte or high-gloss UV sheen, and choose single or double-sided layouts to distribute to tradeshow attendees, recruits, and new leads.',
        image: "/images/products/main%20page/business_cards.png",
        price: "Starting at $29.98",
        config: {
          title: "Custom Business Cards",
          quantityOptions: [100, 250, 500, 1000, 1500, 2000, 2500, 5000, 10000],
          quantityPrices: {
            100: 29.98,
            250: 39.98,
            500: 49.98,
            1000: 79.98,
            1500: 117.98,
            2000: 145.98,
            2500: 179.98,
            5000: 319.98,
            10000: 559.98,
          },
          subtitle:
            'Standard 3.5" x 2" cards printed on ultra-thick cardstock with multiple finishes.',
          breadcrumb: "Tradeshow",
          breadcrumbHref: "/trade-show",
          promoText: "25% OFF ALL EVENT STATIONERY",
          image: "/images/products/main%20page/business_cards.png",
          ratingCount: "1120",
          ratingScore: "4.9",
          sizes: [
            {
              label: '3.5" x 2" Standard size',
              value: "3.5x2",
              basePrice: 29.98,
            },
          ],
          selects: [
            {
              label: "Paper Stock & Finish",
              options: [
                {
                  label: "14pt semi gloss (profit maximizer)",
                  value: "semi_gloss",
                  priceAdder: 0,
                  description: "Clean, professional look with a smooth semi-gloss finish. Easy to write on.",
                  image: "/images/products/main%20page/business_cards_semigloss.png",
                },
                {
                  label: "Glossy",
                  value: "glossy",
                  priceAdder: 0,
                  description: "High-shine glossy finish that makes colors pop.",
                  image: "/images/products/main%20page/business_cards_glossy.png",
                },
                {
                  label: "Embossed Gloss",
                  value: "embossed_gloss",
                  priceAdder: 0.15,
                  description: "Raised clear gloss accents for a textured, high-end feel.",
                  image: "/images/products/main%20page/business_cards_foil.png",
                },
                {
                  label: "Soft Touch",
                  value: "soft_touch",
                  priceAdder: 0.12,
                  description: "Velvety coating that feels soft and premium in the hand.",
                  image: "/images/products/main%20page/business_cards.png",
                },
                {
                  label: "Painted Edge",
                  value: "painted_edge",
                  priceAdder: 0.25,
                  description: "Thick cards with colored edges for a bold, modern look.",
                  image: "/images/products/main%20page/business_cards_painted_edge.png",
                },
                {
                  label: "Ultra Thick",
                  value: "ultra_thick",
                  priceAdder: 0.23,
                  description: "Double-thick cardstock for a substantial, sturdy feel.",
                  image: "/images/products/main%20page/business_cards_ultra_thick.png",
                },
                {
                  label: "Clear Plastic",
                  value: "clear_plastic",
                  priceAdder: 0.35,
                  description: "See-through modern plastic cards that make a unique statement.",
                  image: "/images/products/main%20page/business_cards_clear_plastic.png",
                },
                {
                  label: "Pearl",
                  value: "pearl",
                  priceAdder: 0.12,
                  description: "Glimmering, light-catching surface with a pearlescent shine.",
                  image: "/images/products/main%20page/business_cards_pearl.png",
                },
                {
                  label: "Gold Raised Foil",
                  value: "gold_raised_foil",
                  priceAdder: 0.20,
                  description: "Elevated, 3D raised gold foil accents for a luxury feel.",
                  image: "/images/products/main%20page/business_cards_gold_raised_foil.png",
                },
                {
                  label: "Silver Raised Foil",
                  value: "silver_raised_foil",
                  priceAdder: 0.20,
                  description: "Elevated, 3D raised silver foil accents for a luxury feel.",
                  image: "/images/products/main%20page/business_cards_silver_raised_foil.png",
                },
              ],
            },
            {
              label: "Sides",
              options: [
                {
                  label: "Single-Sided",
                  value: "single",
                  priceAdder: 0,
                  priceMultiplier: 1.0,
                  description: "Printed on front side only.",
                },
                {
                  label: "Double-Sided",
                  value: "double",
                  priceAdder: 0,
                  priceMultiplier: 1.25,
                  description: "Printed on both front and back sides.",
                },
              ],
            },
            {
              label: "Corners",
              options: [
                {
                  label: "Standard Square Corners",
                  value: "square",
                  priceAdder: 0,
                  description: "Standard square corners.",
                },
                {
                  label: "Rounded Corners",
                  value: "rounded",
                  priceAdder: 0.05,
                  description: "Rounded corners.",
                },
              ],
            },
          ],
          qtyDiscount: "Predefined package quantities selected below",
          keyFeatures: [
            "Vibrant color offset printing",
            "Ultra-thick cardstock options",
            "Easy design templates",
          ],
          useCases: ["Networking events", "Customer takeaways"],
          specs: [
            { key: "Dimensions", value: '3.5" x 2" (Standard size)' },
            { key: "Standard Stock", value: "14pt semi gloss (profit maximizer)" },
            { key: "Premium Finishes", value: "Glossy, Soft Touch, Pearl" },
            { key: "Luxury Finishes", value: "Embossed Gloss, Gold Raised Foil, Silver Raised Foil" },
            { key: "Specialty Stocks", value: "Painted Edge, Ultra Thick, Clear Plastic" },
            { key: "Standard Turnaround", value: "Next Business Day" },
          ],
          faqs: [
            {
              q: "What is the standard size of a business card?",
              a: 'The standard size for standard business cards is 3.5 inches by 2 inches. This fits perfectly into standard wallets, cardholders, and organizer slots.',
            },
            {
              q: "What is the difference between 14 pt and 16 pt cardstock?",
              a: 'The point (pt) unit measures paper thickness. 14 pt cardstock is the industry standard for high-quality business cards. 16 pt cardstock is thicker and sturdier, providing a heavier, more premium feel.',
            },
            {
              q: "Can I write on both matte and glossy business cards?",
              a: 'You can write on matte and uncoated cards using standard ballpoint pens or pencils. Glossy cards have a slick UV coating that resists ink, making them harder to write on.',
            },
            {
              q: "What is the difference between Pearl and Soft Touch finishes?",
              a: 'Pearl cardstock uses a specialized paper embedded with natural shimmering fibers that give the entire card a pearlescent sheen. Soft Touch is a velvet-matte protective coating applied after printing that gives the cards a soft, suede-like texture.',
            },
          ],
          reviews: [
            {
              author: "Marcus K., Event Director",
              rating: 5,
              text: "The metallic foil cards look amazing! They really capture attention when handed out. Exact color registration and excellent premium paper stock.",
            },
            {
              author: "Sarah J., Retail Manager",
              rating: 5,
              text: "I ordered the Pearl business cards and have received so many compliments on the shimmer. The offset print quality is pristine.",
            },
            {
              author: "David T., Startup Founder",
              rating: 5,
              text: "Sturdy 16 pt premium cards. Excellent price point and extremely fast turnaround. Will definitely reorder standard cards here.",
            },
          ],
          ctaHeading: "Design business cards now",
          ctaBody: "Upload your business info and logo to print double-sided cards fast.",
          ctaLabel: "Customize Cards",
        },
      },
      {
        id: "custom-postcards",
        name: "Postcards",
        description:
          "Hand out rich, full-color Custom Postcards at your event table to advertise promotions, catalog your services, or distribute coupons. Printed in high definition on heavy 14pt gloss cover paper, they feel substantial and professional. Choose between matte or high-gloss front finishes and custom sizes to create flyers, handouts, or mailers that prompt action from potential clients.",
        image: "/images/products/main%20page/postcard_glossy.png",
        price: "Starting at $60.00 for 100",
        config: {
          title: "Custom Postcards",
          quantityOptions: [100, 250, 500, 750, 1000, 1500, 2000],
          subtitle:
            "Standard promotional postcards printed in high definition gloss or matte cardstock.",
          breadcrumb: "Tradeshow",
          breadcrumbHref: "/trade-show",
          promoText: "25% OFF ALL POSTCARDS AND HANDOUTS",
          image: "/images/products/main%20page/postcard_glossy.png",
          images: [
            "/images/products/main%20page/postcard_glossy.png",
            "/images/products/main%20page/postcard_matte.png",
            "/images/products/main%20page/postcard_action_1.png",
            "/images/products/main%20page/postcard_action_2.png",
            "/images/products/main%20page/postcard_action_3.png",
          ],
          ratingCount: "280",
          ratingScore: "4.8",
          sizes: [
            {
              label: '4" x 6" Postcard',
              value: "4x6",
              basePrice: 0.60,
              quantityPrices: {
                100: 60.00,
                250: 100.00,
                500: 140.00,
                750: 165.00,
                1000: 180.00,
                1500: 240.00,
                2000: 280.00,
              },
            },
            {
              label: '5" x 7" Postcard',
              value: "5x7",
              basePrice: 0.80,
              quantityPrices: {
                100: 80.00,
                250: 140.00,
                500: 200.00,
                750: 225.00,
                1000: 260.00,
                1500: 330.00,
                2000: 360.00,
              },
            },
            {
              label: '6" x 9" Postcard',
              value: "6x9",
              basePrice: 1.10,
              quantityPrices: {
                100: 110.00,
                250: 210.00,
                500: 290.00,
                750: 330.00,
                1000: 380.00,
                1500: 480.00,
                2000: 560.00,
              },
            },
            {
              label: '6" x 11" Postcard',
              value: "6x11",
              basePrice: 1.20,
              quantityPrices: {
                100: 120.00,
                250: 220.00,
                500: 310.00,
                750: 360.00,
                1000: 400.00,
                1500: 480.00,
                2000: 600.00,
              },
            },
          ],
          selects: [
            {
              label: "Paper Stock",
              options: [
                {
                  label: "Glossy",
                  value: "glossy",
                  priceAdder: 0,
                  description: "High-shine glossy finish that makes colors pop.",
                  image: "/images/products/main%20page/postcard_glossy.png",
                },
                {
                  label: "Matte",
                  value: "matte",
                  priceAdder: 0,
                  description: "Clean, professional look with a smooth non-glare matte finish.",
                  image: "/images/products/main%20page/postcard_matte.png",
                },
              ],
            },
            {
              label: "Orientation",
              options: [
                {
                  label: "Horizontal",
                  value: "horizontal",
                  priceAdder: 0,
                  description: "Landscape orientation layout.",
                },
                {
                  label: "Vertical",
                  value: "vertical",
                  priceAdder: 0,
                  description: "Portrait orientation layout.",
                },
              ],
            },
          ],
          qtyDiscount: "Save more when printing in bulk",
          keyFeatures: [
            "Premium heavyweight 14pt cardstock",
            "Vibrant double-sided printing available",
            "Premium glossy or matte textures",
          ],
          useCases: [
            "Product coupon codes",
            "Information spec sheets",
            "Direct mail advertisements",
          ],
          specs: [
            { key: "Material", value: "14pt Premium Cardstock" },
            { key: "Finish Options", value: "Glossy (front only) or Smooth Matte" },
          ],
          description:
            `<div class="space-y-4">
              <h3 class="text-lg font-bold text-slate-900">Custom Event Postcards & Table Handouts</h3>
              <p class="text-sm text-gray-700 leading-relaxed">
                Nano Signs provides high-quality postcard printing tailored for trade shows, networking events, and corporate displays nationwide. Printed on rigid 14pt cardstock, these postcards make outstanding spec sheets, coupon hand-outs, and direct mail ads. The clean, square-cornered trim ensures a simple, modern look that matches corporate guidelines.
              </p>
              <p class="text-sm text-gray-700 leading-relaxed">
                Choose between high-gloss coating for ultimate vibrance or matte finish for a elegant, non-glare appearance that is easy to write on. Personalize with your logo and messaging in our Design Studio or upload custom layouts to print single-sided or double-sided.
              </p>
            </div>`,
          faqs: [
            {
              q: "What paper stock options do you offer for custom postcards?",
              a: "We print our postcards on premium heavy 14pt glossy cover or matte cardstock, giving them a stiff and substantial feel. Our glossy finish offers a high-shine coating that enhances photographic prints, while our smooth matte finish offers an elegant, writeable surface that resists smudging.",
            },
            {
              q: "Can I print on both the front and back of the postcards?",
              a: "Yes, absolutely! We offer both single-sided and double-sided full-color printing. Double-sided printing is highly recommended for direct mailers so you can place address and postage details on one side and a beautiful visual promotion on the other.",
            },
            {
              q: "Are your postcards compatible with direct mail services like EDDM?",
              a: "Yes! Our postcards are cut with square corners (no round cornering) to comply with Canada Post and USPS direct mail standards. Popular EDDM sizes like 6\" x 9\" and 6\" x 11\" are fully supported.",
            },
            {
              q: "What is the difference between glossy and matte postcard finishes?",
              a: "Glossy paper has a reflective coating that makes images pop with intense color and deep contrasts, perfect for real estate flyers. Matte finish is non-reflective, soft to the touch, and makes text highly legible, ideal for info-dense postcards.",
            },
            {
              q: "Do you offer layout templates for designing postcards?",
              a: "Yes, our online Design Studio provides easy-to-use layouts, shapes, cliparts, and text boxes. You can design your custom postcard from scratch or upload a print-ready PDF/AI file directly to place your order.",
            },
          ],
          reviews: [
            {
              author: "Tina M., Sales Rep",
              rating: 5,
              text: "Used these as handout spec sheets for our trade show in Fort Lauderdale. Colors are bright, and the 14pt stock feels very thick and expensive. Highly recommended local print shop!",
            },
            {
              author: "Robert G., General Contractor",
              rating: 5,
              text: "Durable, thick cards. Square corners look very modern. Handed out to clients and got a great response.",
            },
          ],
          ctaHeading: "Build flyers & postcards",
          ctaBody: "Design promotional cards to hand out at your event tables.",
          ctaLabel: "Customize Postcards",
        },
      },
    ],
};