import { RegistryCategory } from "../productsRegistry";

export const customSigns: RegistryCategory = {
    title: "Custom Signs",
    breadcrumbLabel: "Signs",
    heroSubtitle: "Built to Stand Out. Built to Last.",
    description:
      "From yard signs to premium acrylic, we print stunning custom signs fast. Choose your product, upload your design, and we ship next day.",
    heroImage: "/images/products/main%20page/nano%20hero%20signs%20section.png",
    tabletHeroImage: "/images/products/main%20page/nano%20hero%20signs%20section.png",
    mobileHeroImage: "/images/products/main%20page/nano%20hero%20signs%20section.png",
    reviewRating: "4.9",
    reviewCount: "8,420",
    reviewQuote:
      "Ordered 200 yard signs for a local election campaign. They arrived the next day and looked exactly like the proof!",
    categoryDescriptionText:
      "Discover our complete lineup of custom sign solutions. From lightweight corrugated plastic yard signs that withstand any weather to premium acrylic and aluminum signs built for permanent installations. Whether you need a single sign for your business or thousands for a nationwide campaign, we deliver vibrant, full-color prints with next-day shipping.",
    categorySecondaryImage:
      "/images/products/main%20page/custom_signs_desc.png",
    faqs: [
      {
        q: "What sign materials do you offer?",
        a: "We offer a variety of materials including corrugated plastic (Coroplast), aluminum, foam board, acrylic, and PVC. Each material has unique benefits suited for different indoor and outdoor applications.",
      },
      {
        q: "How long will signs last outdoors?",
        a: "Corrugated plastic signs typically last 6–12 months outdoors. Aluminum signs can last 5+ years. All signs feature UV-resistant inks that resist fading in direct sunlight.",
      },
      {
        q: "Do you offer sign stakes and mounting hardware?",
        a: "Yes! We offer H-frame wire stakes, step stakes, grommets, and various mounting accessories. You can add these during the product configuration process.",
      },
      {
        q: "Can I order just one sign?",
        a: "Absolutely! We have no minimum order quantity. Whether you need 1 sign or 10,000, we print and ship with the same speed and quality.",
      },
      {
        q: "What file formats do you accept for sign artwork?",
        a: 'We accept PDF, AI, EPS, PNG, JPG, and TIFF files. For best results, upload vector files at 300 DPI with 0.125" bleed on all sides.',
      },
    ],
    products: [
      {
        id: "yard-signs",
        name: "Real Estate Signs (For Sale Signs)",
        description:
          "Hanging signs suspended from premium L-shaped stands, perfect for real estate listings, campaigns, and commercial space advertising.",
        image: "/images/products/main%20page/yard_sign.jpeg",
        price: "Starting at $45.00",
        badge: "Best Seller",
        config: {
          title: "Real Estate Signs (For Sale Signs)",
          subtitle: "Hanging lawn and commercial signs suspended from black L-stands. All double sided.",
          breadcrumb: "Signs",
          breadcrumbHref: "/custom-signs",
          promoText: "🏡 Real Estate Signs — Most Popular Sign in America!",
          image: "/images/products/main%20page/yard_sign.jpeg",
          images: [
            "/images/products/main%20page/yard_sign.jpeg",
            "/images/products/gallery/yard_sign_in_action_1.png",
            "/images/products/gallery/yard_sign_in_action_2.png",
          ],
          ratingScore: "4.9",
          ratingCount: "8,420",
          sizes: [
            { label: '24" x 32"', value: "24x32", basePrice: 45 },
            { label: '24" x 36"', value: "24x36", basePrice: 65 },
            { label: '32" x 48"', value: "32x48", basePrice: 70 },
            { label: '36" x 48"', value: "36x48", basePrice: 80 },
          ],
          selects: [
            {
              label: "Material",
              options: [
                {
                  label: "4mm Coroplast (Standard)",
                  value: "4mm",
                  priceAdder: 0,
                  description: "Lightweight, weatherproof corrugated plastic.",
                },
                {
                  label: "10mm Heavy Duty",
                  value: "10mm",
                  priceAdder: 10,
                  sizePriceAdders: { "24x32": 10, "24x36": 10, "32x48": 12, "36x48": 10 },
                  description: "Extra rigid and thick corrugated plastic board.",
                },
                {
                  label: "Aluminum (ACM)",
                  value: "acm",
                  priceAdder: 15,
                  sizePriceAdders: { "24x32": 15, "24x36": 30, "32x48": 35, "36x48": 40 },
                  description: "Rigid aluminum composite material for permanent setups.",
                },
              ],
            },
            {
              label: "Grommets",
              options: [
                {
                  label: "3 Standard Grommets Included",
                  value: "3_grommets",
                  priceAdder: 0,
                  description: "Grommets pre-installed for easy hanging.",
                },
              ],
            },
          ],
          toggleGroups: [
            {
              label: "Frame/Stand Option",
              options: [
                { id: "no_stand", label: "Sign Panel Only", priceAdder: 0 },
                {
                  id: "l_stand",
                  label: "Black L-Shaped Post Stand",
                  priceAdder: 95,
                  description: "Heavy-duty steel hanging sign post (+$95)",
                },
              ],
            },
            {
              label: "UV Coating",
              options: [
                { id: "no_coat", label: "None", priceAdder: 0 },
                {
                  id: "uv",
                  label: "UV Gloss Coating",
                  priceAdder: 5.33,
                  sizePriceAdders: { "24x32": 5.33, "24x36": 6.00, "32x48": 10.67, "36x48": 12.00 },
                  description: "Adds scratch & fade protection (+$1/sqft).",
                },
              ],
            },
          ],
          qtyDiscount: "",
          keyFeatures: [
            "Weather-resistant corrugated plastic",
            "Full-color edge-to-edge printing",
            "Ships in as fast as 1 business day",
            "Optional L-shaped wood or metal stands available",
            "Recyclable & eco-friendly material",
            "Single or double-sided printing",
          ],
          useCases: [
            "Political Campaigns",
            "Real Estate",
            "Open Houses",
            "Elections",
            "Business Promotions",
            "Events",
          ],
          specs: [
            {
              key: "Standard Material",
              value: "4mm Corrugated Plastic (Coroplast)",
            },
            { key: "Heavy Duty Option", value: "6mm Coroplast" },
            { key: "Print Resolution", value: "720 x 1440 dpi Full Color" },
            { key: "Color Profile", value: "CMYK" },
            { key: "Bleed Required", value: '0.125" on all sides' },
            { key: "File Formats", value: "PDF, AI, EPS, PNG, TIFF" },
            { key: "Turnaround", value: "Next Business Day" },
          ],
          faqs: [
            {
              q: "How long will yard signs last outdoors?",
              a: "Standard 4mm coroplast yard signs typically last 6–12 months outdoors. The 6mm heavy-duty option can last 1–2+ years depending on conditions.",
            },
            {
              q: "Do your yard signs come with stands?",
              a: "Stands are optional. You can select either a White L-Shaped Wood Yard Arm Stand or a Black L-Shaped Metal Yard Arm Stand in the configurator. We can pre-drill top hanging holes to make hanging simple.",
            },
            {
              q: "Can I order just 1 yard sign?",
              a: "Yes! We have no minimum order quantity. Single signs ship just as fast as bulk orders.",
            },
            {
              q: "Are the signs waterproof?",
              a: "Yes. Corrugated plastic is inherently waterproof. Our inks are UV-resistant and won't run or fade in rain.",
            },
          ],
          reviews: [
            {
              author: "Mike D.",
              rating: 5,
              text: "Ordered 200 yard signs for a local election campaign. They arrived the next day and looked exactly like the proof!",
            },
            {
              author: "Sandra R.",
              rating: 5,
              text: "Used for our open house. Very professional look, easy to hang on the L-stand. Will definitely order again.",
            },
            {
              author: "Tom B.",
              rating: 4,
              text: "Great quality for the price. Colors were vibrant and matched perfectly.",
            },
          ],
          ctaHeading: "Get Your Signs Out There",
          ctaBody: "Order by 5 PM and your custom yard signs ship tomorrow.",
          ctaLabel: "Order Yard Signs Now",
        },
      },
      {
        id: "real-estate-panels",
        name: "Lawn Signs",
        description:
          "Double-sided lawn signs including stand wires. Minimum order quantity of 100 pcs.",
        image: "/images/products/main%20page/Real_estate_panels.png",
        price: "Starting at $3.30 / pc",
        badge: "Bulk Value",
        config: {
          title: "Lawn Signs (Real Estate Panels)",
          subtitle: "All double sided. Stand wires are included.",
          breadcrumb: "Signs",
          breadcrumbHref: "/custom-signs",
          promoText: "🏡 Lawn Signs — Includes Stand Wires!",
          image: "/images/products/main%20page/Real_estate_panels.png",
          images: [
            "/images/products/main%20page/Real_estate_panels.png",
            "/images/products/gallery/real_estate_panels_in_action_1.png",
            "/images/products/gallery/real_estate_panels_in_action_2.png",
          ],
          ratingScore: "4.9",
          ratingCount: "3,150",
          minQuantity: 100,
          quantityOptions: [100, 200, 300],
          quantityPrices: { 100: 330, 200: 650, 300: 970 },
          sizes: [
            { 
              label: '20" x 24"', 
              value: "20x24", 
              basePrice: 3.30,
              quantityPrices: { 100: 330, 200: 650, 300: 970 }
            },
          ],
          selects: [],
          toggleGroups: [],
          qtyDiscount: "",
          keyFeatures: [
            "Professional real estate layouts",
            "Durable outdoor materials",
            "Rider slot compatible",
            "UV-resistant fade-proof printing",
            "Compatible with standard real estate frames",
            "Next-day turnaround available",
          ],
          useCases: ["For Sale", "Open House", "For Rent", "Sold"],
          specs: [
            { key: "Standard Material", value: "4mm Corrugated Plastic (Coroplast)" },
            { key: "Metal Option", value: ".040 Aluminum" },
            { key: "Print Resolution", value: "720 x 1440 dpi" },
            { key: "Color Profile", value: "CMYK" },
            { key: "Bleed Required", value: '0.125" all sides' },
            { key: "Frame Compatibility", value: 'Standard 30" wide RE frames' },
            { key: "Turnaround", value: "Next Business Day" },
          ],
          faqs: [
            {
              q: "Are your panels compatible with standard real estate frames?",
              a: 'Yes! Our 18"x24" and 24"x24" panels are designed to fit standard real estate wire frames and yard arm posts.',
            },
            {
              q: "Can I order rider panels to match my main panel?",
              a: "Absolutely. Select the rider size in the dropdown and we'll match the design style for a cohesive, professional look.",
            },
            {
              q: "Can I include my brokerage logo and headshot?",
              a: "Yes. Upload any artwork file and we'll print it exactly as provided. Our free artwork check ensures everything looks perfect.",
            },
            {
              q: "What is the minimum order?",
              a: "We have no minimum! Order as few as 1 panel or as many as 1,000.",
            },
          ],
          reviews: [
            {
              author: "Jessica A.",
              rating: 5,
              text: "I've been ordering from here for 2 years. Best quality real estate panels I've found, and delivery is always on time.",
            },
            {
              author: "Carlos M.",
              rating: 5,
              text: "Ordered riders for my open house last minute — they arrived the next morning. Saved my weekend!",
            },
            {
              author: "Patricia W.",
              rating: 5,
              text: "The aluminum panels look incredibly professional. My clients always comment on them.",
            },
          ],
          ctaHeading: "List More. Sell Faster.",
          ctaBody: "Professional real estate panels shipped next day.",
          ctaLabel: "Order Real Estate Panels",
        },
      },
      {
        id: "aluminum-signs",
        name: "Aluminum Signs",
        description:
          "Durable rust-proof aluminum signs for permanent indoor and outdoor branding, safety, and parking installations.",
        image: "/images/products/main%20page/aluminum_sign.png",
        price: "Starting at $19.84",
        badge: "Heavy Duty",
        config: {
          title: "Custom Aluminum Signs",
          subtitle:
            "Heavy-duty, rust-proof .040 aluminum signs. Single sided only. No double sided option.",
          breadcrumb: "Signs",
          breadcrumbHref: "/custom-signs",
          promoText: "⚙️ Aluminum Signs — Rust-Proof, Fade-Proof, Weatherproof.",
          image: "/images/products/main%20page/aluminum_sign.png",
          images: [
            "/images/products/main%20page/aluminum_sign.png",
            "/images/products/alum_sign_hover.png",
          ],
          ratingScore: "4.9",
          ratingCount: "2,840",
          quantityOptions: [1, 10, 20],
          sizes: [
            { 
              label: '8" x 12"', 
              value: "8x12", 
              basePrice: 19.84, 
              quantityPrices: { 1: 19.84, 10: 85.50, 20: 135.25 }
            },
            { 
              label: '12" x 18"', 
              value: "12x18", 
              basePrice: 35.84, 
              quantityPrices: { 1: 35.84, 10: 105.50, 20: 250.25 }
            },
            { 
              label: '18" x 24"', 
              value: "18x24", 
              basePrice: 55.84, 
              quantityPrices: { 1: 55.84, 10: 250.50, 20: 470.35 }
            },
            { 
              label: '24" x 32"', 
              value: "24x32", 
              basePrice: 60.84, 
              quantityPrices: { 1: 60.84, 10: 410.50, 20: 850.35 }
            },
          ],
          selects: [
            {
              label: "Aluminum Grade",
              options: [
                {
                  label: ".040 Aluminum (Standard)",
                  value: "040",
                  priceAdder: 0,
                  description: "Standard gauge — great for most applications.",
                },
              ],
            },
            {
              label: "Corners",
              options: [
                {
                  label: "Square Corners",
                  value: "square",
                  priceAdder: 0,
                  description: "Classic sharp-cut rectangular panels.",
                },
                {
                  label: "Rounded Corners",
                  value: "rounded",
                  priceAdder: 2.00,
                  description: "Smooth edges to prevent sharp corners (+$2.00).",
                },
              ],
            },
          ],
          toggleGroups: [],
          qtyDiscount: "",
          keyFeatures: [
            "Rust-proof, corrosion-resistant aluminum",
            "UV-resistant inks — won't fade for years",
            "Available in .040 and .080 gauge",
            "Reflective finish option for regulatory use",
            "Pre-drilled mounting holes available",
            "Square or rounded corner options",
          ],
          useCases: [
            "Business Signs",
            "Parking Signs",
            "Street Signs",
            "Safety Signs",
            "Property Signs",
            "Regulatory Signs",
            "Directional Signs",
          ],
          specs: [
            { key: "Standard Grade", value: '.040" Aluminum' },
            { key: "Heavy Duty Grade", value: '.080" Aluminum' },
            { key: "Print Method", value: "Direct UV Digital Print" },
            { key: "Color Profile", value: "CMYK" },
            { key: "Finish Options", value: "Matte, Gloss, Reflective" },
            { key: "Hole Diameter", value: '5/16" standard' },
            { key: "Turnaround", value: "Next Business Day" },
          ],
          faqs: [
            {
              q: "How long do aluminum signs last?",
              a: "Our aluminum signs are rated for 7–10+ years outdoors. The UV-resistant inks won't fade, and aluminum won't rust or corrode.",
            },
            {
              q: "Can I get reflective aluminum signs?",
              a: "Yes! Select the 'Reflective' finish option. Our reflective signs meet ASTM D4956 standards and are great for regulatory, safety, and parking applications.",
            },
            {
              q: "Are mounting holes included?",
              a: 'Mounting holes are optional. Choose corner holes (standard 5/16") or custom placement in the configurator — always free to add.',
            },
            {
              q: "Do you offer custom shapes?",
              a: "Standard shapes (square/rectangle with optional rounded corners) are available online. Contact us for completely custom cut shapes.",
            },
          ],
          reviews: [
            {
              author: "Frank L.",
              rating: 5,
              text: "We've had these parking signs up for 3 years and they still look brand new. Incredible durability.",
            },
            {
              author: "Donna S.",
              rating: 5,
              text: "Ordered 50 directional signs for our campus. Fast turnaround, perfect print quality.",
            },
            {
              author: "Brian T.",
              rating: 5,
              text: "The reflective signs are exactly what we needed for night visibility. Very professional.",
            },
          ],
          ctaHeading: "Signs That Last a Decade",
          ctaBody:
            "Rust-proof aluminum signs printed with UV inks that resist fading for years.",
          ctaLabel: "Order Aluminum Signs Now",
        },
      },
      {
        id: "a-frame-signs",
        name: "A-Frame Signs",
        description:
          "Portable double-sided sandwich board sidewalk signs. Only double side option available.",
        image: "/images/products/main%20page/A-frame_sign.jpeg",
        price: "Starting at $105.00",
        badge: "Eye-Catching",
        config: {
          title: "A-Frame Signs",
          subtitle:
            "Sidewalk signs that drive foot traffic. All double sided. Minimum order quantity: 1 pcs.",
          breadcrumb: "Signs",
          breadcrumbHref: "/custom-signs",
          promoText: "🪧 A-Frame Signs — Double-Sided, Portable!",
          image: "/images/products/main%20page/A-frame_sign.jpeg",
          images: [
            "/images/products/main%20page/A-frame_sign.jpeg",
            "/images/products/aframe_sign_hover.png",
          ],
          ratingScore: "4.8",
          ratingCount: "1,640",
          sizes: [
            {
              label: '18" x 24"',
              value: "18x24",
              basePrice: 105,
            },
            { 
              label: '36" x 24"', 
              value: "36x24", 
              basePrice: 130 
            },
          ],
          selects: [
            {
              label: "Frame Material",
              options: [
                {
                  label: "Metal Frame (Standard)",
                  value: "metal",
                  priceAdder: 0,
                  description: "Standard metal A-frame stand.",
                },
                {
                  label: "Plastic A-Frame",
                  value: "plastic",
                  priceAdder: 30,
                  description: "Heavy-duty plastic frame (+$30).",
                },
              ],
            },
            {
              label: "Insert Material",
              options: [
                {
                  label: "Coroplast Insert (Standard)",
                  value: "coro",
                  priceAdder: 0,
                  description: "Waterproof, lightweight corrugated plastic.",
                },
                {
                  label: "ACM (Aluminum) Insert",
                  value: "acm",
                  priceAdder: 25,
                  description: "Rigid aluminum composite material inserts (+$25).",
                },
              ],
            },
          ],
          toggleGroups: [],
          qtyDiscount: "",
          keyFeatures: [
            "Double-sided by default",
            "Portable — set up in seconds",
            "Weather-resistant frame & inserts",
            "Interchangeable insert panels",
            "Multiple frame material options",
            "Compact for storage",
          ],
          useCases: [
            "Restaurants & Cafes",
            "Retail Stores",
            "Salons",
            "Sidewalk Promotions",
            "Event Venues",
            "Hotels",
            "Markets",
            "Pop-Up Shops",
          ],
          specs: [
            {
              key: "Standard Frame",
              value: "Plastic A-Frame with coroplast insert",
            },
            { key: "Insert Fits", value: '18"x24", 22"x28", or 24"x36"' },
            { key: "Print Method", value: "Full-Color Digital UV Print" },
            { key: "Fold Height", value: 'Approximately 48" tall when open' },
            { key: "Color Profile", value: "CMYK" },
            { key: "Bleed Required", value: '0.125" all sides' },
            { key: "Turnaround", value: "Next Business Day" },
          ],
          faqs: [
            {
              q: "Is printing included on both sides?",
              a: "Yes! A-frame signs are inherently double-sided. Both panels are printed by default.",
            },
            {
              q: "Can I swap out the inserts?",
              a: "Yes. The coroplast and PVC foam board inserts slide out easily so you can swap promotions or update messaging without buying a new frame.",
            },
            {
              q: "Are they stable in wind?",
              a: "Plastic A-frames can tip in strong wind. We recommend the connecting chain or sandbag weight add-on for windy locations.",
            },
            {
              q: "Can I store them inside at night?",
              a: "Absolutely. A-frames fold flat for easy interior storage. This also extends the life of the printed inserts.",
            },
          ],
          reviews: [
            {
              author: "Rachel H.",
              rating: 5,
              text: "Our restaurant's daily specials board. Customers stop to read it every single day. Best investment we've made!",
            },
            {
              author: "Aaron P.",
              rating: 5,
              text: "Ordered 5 for our chain of yoga studios. Fast delivery and great print quality on both sides.",
            },
            {
              author: "Maria C.",
              rating: 4,
              text: "Sturdy and looks professional on the sidewalk. The chain accessory was a great add-on.",
            },
          ],
          ctaHeading: "Bring Customers Through the Door",
          ctaBody:
            "A-frame signs are proven to increase foot traffic. Order yours today.",
          ctaLabel: "Design Your A-Frame Sign",
        },
      },
      {
        id: "foam-board-signs",
        name: "Foam Board Signs",
        description:
          "Lightweight, professional indoor display signs for presentations, events, and lobbies. Double-sided printing available.",
        image: "/images/products/main%20page/foam_board.jpeg",
        price: "Starting at $20.00",
        badge: "Indoor Favorite",
        config: {
          title: "Foam Board Signs",
          subtitle:
            "Lightweight and professional indoor display signs. Double side printing option available for 1.5x the price.",
          breadcrumb: "Signs",
          breadcrumbHref: "/custom-signs",
          promoText:
            "✨ Foam Board Signs — Ultra-Light, Ultra-Crisp. Perfect for Presentations!",
          image: "/images/products/main%20page/foam_board.jpeg",
          images: [
            "/images/products/main%20page/foam_board.jpeg",
            "/images/products/foam_sign_hover.png",
          ],
          ratingScore: "4.8",
          ratingCount: "1,280",
          sizes: [
            { label: '12" x 18"', value: "12x18", basePrice: 20 },
            { label: '18" x 24"', value: "18x24", basePrice: 38 },
            { label: '24" x 36"', value: "24x36", basePrice: 58 },
            { label: '36" x 48"', value: "36x48", basePrice: 72 },
          ],
          selects: [
            {
              label: "Printing",
              options: [
                {
                  label: "Single Sided",
                  value: "single",
                  priceAdder: 0,
                  priceMultiplier: 1.0,
                  description: "Printed on one side only.",
                },
                {
                  label: "Double Sided",
                  value: "double",
                  priceAdder: 0,
                  priceMultiplier: 1.5,
                  description: "Printed on both sides (1.5x the base price).",
                },
              ],
            },
          ],
          toggleGroups: [],
          qtyDiscount: "",
          keyFeatures: [
            "Crisp, vivid full-color printing",
            "Ultra-lightweight for easy transport",
            "Smooth white surface for premium look",
            "Multiple thickness options",
            "Matte, Gloss or Satin finish",
            "Self-adhesive or easel-back options",
          ],
          useCases: [
            "Trade Show Displays",
            "Lobbies",
            "Presentations",
            "Real Estate Open Houses",
            "Photo Backdrops",
            "Wedding Signs",
            "School Projects",
            "Retail Displays",
          ],
          specs: [
            { key: "Core Material", value: "Polystyrene foam with paper face" },
            { key: "Standard Thickness", value: '3/16" (5mm)' },
            { key: "Print Method", value: "Direct UV Digital Inkjet" },
            { key: "Print Resolution", value: "1440 dpi" },
            { key: "Color Profile", value: "CMYK" },
            { key: "Bleed Required", value: '0.125" all sides' },
            { key: "Turnaround", value: "Next Business Day" },
          ],
          faqs: [
            {
              q: "Are foam board signs suitable for outdoor use?",
              a: "Foam board is designed for indoor use. It can be used outdoors briefly, but prolonged sun and moisture exposure will damage the board. For outdoor use, consider our coroplast or aluminum signs.",
            },
            {
              q: "Can foam board signs stand on their own?",
              a: "Yes, with the easel-back option selected. The easel attaches to the back and allows the sign to stand freestanding on any flat surface.",
            },
            {
              q: "How do I hang a foam board sign?",
              a: "Use push pins, foam tape, or command strips. With the self-adhesive backing option, simply peel and stick directly to any wall or surface.",
            },
            {
              q: 'Can I get large format foam boards over 36"?',
              a: "Yes, contact us for larger custom sizes. We can print foam boards up to 4' x 8' with seams jointed for larger displays.",
            },
          ],
          reviews: [
            {
              author: "Linda K.",
              rating: 5,
              text: "Perfect for our trade show booth. They were lightweight and the print quality was stunning!",
            },
            {
              author: "Jason R.",
              rating: 5,
              text: "Used these for an open house. Very professional looking and easy to carry around the property.",
            },
            {
              author: "Amanda T.",
              rating: 4,
              text: "Great for indoor use. Colors were accurate to my file. The easel back is a nice touch.",
            },
          ],
          ctaHeading: "Make Your Presentation Pop",
          ctaBody:
            "Vivid foam board signs that command attention at any indoor event.",
          ctaLabel: "Order Foam Board Signs",
        },
      },
      {
        id: "acrylic-signs",
        name: "Acrylic Signs",
        description:
          "Premium clear or colored acrylic for a polished, modern look.",
        image: "/images/products/main%20page/acrylic_sign.png",
        price: "Starting at $24.99",
        badge: "Premium",
        config: {
          title: "Custom Acrylic Signs",
          subtitle:
            "Premium clear and colored acrylic signs for a sleek, modern, upscale look.",
          breadcrumb: "Signs",
          breadcrumbHref: "/custom-signs",
          promoText:
            "💎 Premium Acrylic Signs — Crystal-Clear Quality, Ships Next Day!",
          image: "/images/products/main%20page/acrylic_sign.png",
          images: [
            "/images/products/main%20page/acrylic_sign.png",
            "/images/products/acryl_sign_hover.png",
          ],
          ratingScore: "4.9",
          ratingCount: "980",
          sizes: [
            { label: '5" x 7"', value: "5x7", basePrice: 24.99 },
            { label: '8" x 10"', value: "8x10", basePrice: 34.99 },
            { label: '12" x 12"', value: "12x12", basePrice: 49.99 },
            { label: '12" x 18"', value: "12x18", basePrice: 59.99 },
            { label: '18" x 24"', value: "18x24", basePrice: 89.99 },
            { label: '24" x 36"', value: "24x36", basePrice: 139.99 },
            { label: "Custom Size", value: "custom", basePrice: 0 },
          ],
          selects: [
            {
              label: "Acrylic Type",
              options: [
                {
                  label: "Clear Acrylic (Standard)",
                  value: "clear",
                  priceAdder: 0,
                  description: "Crystal clear — print shows through beautifully.",
                },
                {
                  label: "White Acrylic",
                  value: "white",
                  priceAdder: 5,
                  description: "Bright white base for maximum color vibrancy.",
                },
                {
                  label: "Frosted Acrylic",
                  value: "frosted",
                  priceAdder: 8,
                  description:
                    "Elegant translucent appearance, ideal for office reception.",
                },
                {
                  label: "Black Acrylic",
                  value: "black",
                  priceAdder: 10,
                  description:
                    "Dramatic and modern — great for gold/silver text.",
                },
              ],
            },
            {
              label: "Thickness",
              options: [
                { label: '1/8" (3mm) Standard', value: "3mm", priceAdder: 0 },
                {
                  label: '1/4" (6mm) Heavy',
                  value: "6mm",
                  priceAdder: 15,
                  description: "Premium weight that commands respect.",
                },
                {
                  label: '3/8" (9mm) Ultra-Thick',
                  value: "9mm",
                  priceAdder: 30,
                  description: "The heaviest, most substantial option.",
                },
              ],
            },
            {
              label: "Print Method",
              options: [
                {
                  label: "UV Printed (Front)",
                  value: "uv_front",
                  priceAdder: 0,
                  description: "Direct printed on the front surface.",
                },
                {
                  label: "Second-Surface Print (Back)",
                  value: "second_surface",
                  priceAdder: 10,
                  description:
                    "Image printed on the back for a glass-effect look.",
                },
              ],
            },
          ],
          toggleGroups: [
            {
              label: "Corners",
              options: [
                { id: "square", label: "Square Corners", priceAdder: 0 },
                { id: "rounded", label: "Rounded Corners", priceAdder: 3 },
                { id: "custom_shape", label: "Custom Shape", priceAdder: 15 },
              ],
            },
            {
              label: "Mounting Hardware",
              options: [
                { id: "none", label: "No Mounting", priceAdder: 0 },
                {
                  id: "standoffs",
                  label: "Standoff Mounts (x4)",
                  priceAdder: 12.99,
                  description:
                    "Polished metal standoffs for wall floating effect.",
                },
                { id: "adhesive", label: "3M Adhesive Tape", priceAdder: 2.99 },
                { id: "holes", label: "Pre-Drilled Holes", priceAdder: 0 },
              ],
            },
          ],
          qtyDiscount: "Volume pricing — perfect for office signage packages",
          keyFeatures: [
            "Premium cast acrylic material",
            "Laser-cut edges for a perfect finish",
            "Multiple color and thickness options",
            "Second-surface printing for glass effect",
            "Standoff mounting hardware available",
            "Custom shapes and sizes supported",
          ],
          useCases: [
            "Office Reception",
            "Lobby Signage",
            "Awards & Recognition",
            "Retail Branding",
            "Wayfinding Signs",
            "Restaurant Menus",
            "Hotel Signage",
          ],
          specs: [
            { key: "Material", value: "Cast Acrylic (PMMA)" },
            { key: "Standard Thickness", value: '1/8" (3mm)' },
            { key: "Print Method", value: "UV Direct Print or Second-Surface" },
            {
              key: "Edge Finish",
              value: "Laser-polished, flame-polished, or matte",
            },
            { key: "Color Profile", value: "CMYK + White Ink Base" },
            { key: "Bleed Required", value: '0.125" all sides' },
            { key: "Turnaround", value: "2-3 Business Days" },
          ],
          faqs: [
            {
              q: "What is second-surface printing?",
              a: "The design is printed on the back of clear acrylic. You view it through the clear surface, creating a premium glass-like appearance that protects the ink from scratches.",
            },
            {
              q: "What standoff mounts do you recommend?",
              a: 'We offer 3/4" polished chrome standoffs for a sleek corporate look, or brushed nickel for a warmer finish. Both create a floating effect on the wall.',
            },
            {
              q: "Can acrylic signs be used outdoors?",
              a: "Cast acrylic is UV-stable and can be used outdoors. However, we recommend UV-printed finishes and avoiding direct harsh weather exposure for longest life.",
            },
            {
              q: "How do I clean acrylic signs?",
              a: "Use a soft cloth and mild soap or specialized acrylic cleaner. Never use ammonia-based cleaners (like Windex) as they may cloud the surface.",
            },
          ],
          reviews: [
            {
              author: "Gabriel M.",
              rating: 5,
              text: "Ordered acrylic signs for our new office. They look stunning — clients always ask about them.",
            },
            {
              author: "Sophia K.",
              rating: 5,
              text: "The second-surface printing is absolutely beautiful. Totally worth the extra cost.",
            },
            {
              author: "David N.",
              rating: 5,
              text: "The standoff mounts are a great touch. The floating effect on the wall looks very high-end.",
            },
          ],
          ctaHeading: "Upgrade to Premium Acrylic",
          ctaBody:
            "Crystal-clear signs that make your brand look like a million dollars.",
          ctaLabel: "Design Your Acrylic Sign",
        },
      },
      {
        id: "coroplast-signs",
        name: "Coroplast Signs",
        description:
          "Waterproof corrugated plastic signs — the most versatile, lightweight, and affordable outdoor advertising signs.",
        image: "/images/products/main%20page/coroplast_sign.png",
        price: "Starting at $4.99",
        badge: "Waterproof",
        config: {
          title: "Custom Coroplast Signs",
          subtitle:
            "The most versatile waterproof outdoor sign — durable, colorful, and incredibly affordable.",
          breadcrumb: "Signs",
          breadcrumbHref: "/custom-signs",
          promoText: "💧 Waterproof Coroplast Signs — Weatherproof & Budget-Friendly. Ships Tomorrow!",
          image: "/images/products/main%20page/coroplast_sign.png",
          images: [
            "/images/products/main%20page/coroplast_sign.png",
            "/images/products/coro_sign_hover.png",
            "/images/products/yard_sign_hover.png",
          ],
          ratingScore: "4.8",
          ratingCount: "5,620",
          sizes: [
            { label: '12" x 18"', value: "12x18", basePrice: 4.99 },
            {
              label: '18" x 24" (Most Popular)',
              value: "18x24",
              basePrice: 7.99,
            },
            { label: '24" x 24"', value: "24x24", basePrice: 10.99 },
            { label: '24" x 36"', value: "24x36", basePrice: 14.99 },
            { label: '24" x 48"', value: "24x48", basePrice: 19.99 },
            { label: '48" x 96"', value: "48x96", basePrice: 64.99 },
            { label: "Custom Size", value: "custom", basePrice: 0 },
          ],
          selects: [
            {
              label: "Thickness",
              options: [
                {
                  label: "4mm (Standard — Most Popular)",
                  value: "4mm",
                  priceAdder: 0,
                  description:
                    "Best for general outdoor signage up to 12 months.",
                },
                {
                  label: "6mm Heavy Duty",
                  value: "6mm",
                  priceAdder: 1.75,
                  description:
                    "50% thicker — ideal for long-term and reusable signs.",
                },
                {
                  label: "8mm Ultra Heavy Duty",
                  value: "8mm",
                  priceAdder: 4,
                  description: "The thickest option for maximum rigidity.",
                },
              ],
            },
            {
              label: "Printing",
              options: [
                { label: "Single Sided", value: "single", priceAdder: 0 },
                {
                  label: "Double Sided",
                  value: "double",
                  priceAdder: 2.5,
                  description: "Both faces printed for maximum visibility.",
                },
              ],
            },
            {
              label: "Color",
              options: [
                {
                  label: "White Background (Standard)",
                  value: "white",
                  priceAdder: 0,
                },
                { label: "Yellow Background", value: "yellow", priceAdder: 0 },
                { label: "Red Background", value: "red", priceAdder: 0 },
                { label: "Blue Background", value: "blue", priceAdder: 0 },
              ],
            },
          ],
          toggleGroups: [
            {
              label: "Stakes",
              options: [
                { id: "none", label: "No Stakes", priceAdder: 0 },
                { id: "9in", label: '9" Wire H-Stakes', priceAdder: 0.99 },
                { id: "15in", label: '15" Wire H-Stakes', priceAdder: 1.49 },
                {
                  id: "step",
                  label: "Step Stakes",
                  priceAdder: 1.99,
                  description: "Easy push-in with foot",
                },
              ],
            },
            {
              label: "Grommets",
              options: [
                { id: "no_grommets", label: "No Grommets", priceAdder: 0 },
                {
                  id: "corner_grommets",
                  label: "Corner Grommets",
                  priceAdder: 0.5,
                },
                {
                  id: "perimeter_grommets",
                  label: 'Perimeter Grommets (every 24")',
                  priceAdder: 1.5,
                },
              ],
            },
          ],
          qtyDiscount: "Buy more, save more — up to 13% off on large orders",
          keyFeatures: [
            "100% waterproof corrugated plastic",
            "UV-resistant full-color printing",
            "Available in 4mm, 6mm, and 8mm",
            "Lightweight and easy to transport",
            "Double-sided printing available",
            "Custom sizes available",
          ],
          useCases: [
            "Yard Signs",
            "Construction Sites",
            "Fence Signs",
            "Event Signage",
            "Political Signs",
            "For Sale Signs",
            "Business Promotions",
            "Directional Signs",
          ],
          specs: [
            { key: "Material", value: "Corrugated Polypropylene (Coroplast)" },
            { key: "Standard Thickness", value: "4mm" },
            {
              key: "Weatherproof Rating",
              value: "Fully waterproof, UV-resistant inks",
            },
            { key: "Print Resolution", value: "720 x 1440 dpi" },
            { key: "Color Profile", value: "CMYK" },
            { key: "Bleed Required", value: '0.125" all sides' },
            {
              key: "Expected Lifespan",
              value: "6–18 months outdoors (4mm); 2+ years (6mm+)",
            },
            { key: "Turnaround", value: "Next Business Day" },
          ],
          faqs: [
            {
              q: "What is the difference between coroplast and regular cardboard?",
              a: "Coroplast is corrugated polypropylene plastic — it is 100% waterproof, flexible, and far more durable than cardboard. It won't absorb moisture or warp in the rain.",
            },
            {
              q: "Can I use coroplast signs indoors?",
              a: "Absolutely. Coroplast is a great indoor sign material too — it's lightweight, rigid, and easy to display with stakes, grommets, or adhesive.",
            },
            {
              q: "How do I attach coroplast signs to a fence?",
              a: "Use zip ties through grommets, or bungee cords. We can add pre-punched grommets to any side of the sign for easy attachment.",
            },
            {
              q: "Are they recyclable?",
              a: "Yes! Coroplast signs are made from polypropylene (PP #5) and are fully recyclable at facilities that accept rigid plastics.",
            },
          ],
          reviews: [
            {
              author: "Derek F.",
              rating: 5,
              text: "We ordered 500 signs for our campaign and they were perfect. Fast delivery and great price per sign.",
            },
            {
              author: "Tina R.",
              rating: 5,
              text: "The 6mm signs are incredibly sturdy. Held up through a whole hurricane season on our construction site.",
            },
            {
              author: "Bobby M.",
              rating: 5,
              text: "Best price I found anywhere for coroplast signs. Will definitely order again.",
            },
          ],
          ctaHeading: "Sign Big, Spend Small",
          ctaBody: "Coroplast signs deliver maximum impact at the lowest possible price per sign.",
          ctaLabel: "Order Coroplast Signs Now",
        },
      },
      {
        id: "window-signs",
        name: "Window Signs",
        description:
          "Custom window graphics, clings, perforated vinyl, and decals for storefronts and offices.",
        image: "/images/products/main%20page/window_sign.png",
        price: "Starting at $9.99",
        badge: "Storefront",
        config: {
          title: "Window Signs & Clings",
          subtitle:
            "Custom window graphics, clings, perforated vinyl, and decals for storefronts and offices.",
          breadcrumb: "Signs",
          breadcrumbHref: "/custom-signs",
          promoText:
            "🪟 Window Signs That Turn Passersby Into Customers — Ships Next Day!",
          image: "/images/products/main%20page/window_sign.png",
          images: [
            "/images/products/main%20page/window_sign.png",
            "/images/products/wind_sign_hover.png",
          ],
          ratingScore: "4.8",
          ratingCount: "1,940",
          sizes: [
            { label: '12" x 12"', value: "12x12", basePrice: 9.99 },
            { label: '12" x 24"', value: "12x24", basePrice: 14.99 },
            { label: '24" x 24"', value: "24x24", basePrice: 22.99 },
            { label: '24" x 36"', value: "24x36", basePrice: 32.99 },
            { label: '36" x 48"', value: "36x48", basePrice: 49.99 },
            { label: '48" x 72"', value: "48x72", basePrice: 79.99 },
            { label: "Custom Size", value: "custom", basePrice: 0 },
          ],
          selects: [
            {
              label: "Window Graphic Type",
              options: [
                {
                  label: "Static Cling (Removable)",
                  value: "static_cling",
                  priceAdder: 0,
                  description:
                    "No adhesive — clings electrostatically. Fully removable & reusable.",
                },
                {
                  label: "Clear Vinyl Decal",
                  value: "clear_vinyl",
                  priceAdder: 2,
                  description:
                    "Permanent adhesive on clear film. Very professional look.",
                },
                {
                  label: "White Vinyl Decal",
                  value: "white_vinyl",
                  priceAdder: 2,
                  description: "Opaque white background — bold, vivid colors.",
                },
                {
                  label: "Perforated Vinyl (One-Way Vision)",
                  value: "perforated",
                  priceAdder: 6,
                  description:
                    "See-through from inside, solid image from outside. 60/40 blockout.",
                },
                {
                  label: "Frosted Vinyl",
                  value: "frosted",
                  priceAdder: 5,
                  description:
                    "Privacy glass effect. Great for offices & conference rooms.",
                },
              ],
            },
            {
              label: "Adhesive",
              options: [
                {
                  label: "Removable (Standard)",
                  value: "removable",
                  priceAdder: 0,
                  description: "Peels off cleanly without residue.",
                },
                {
                  label: "Permanent",
                  value: "permanent",
                  priceAdder: 0,
                  description: "Long-term adhesion for extended display.",
                },
              ],
            },
          ],
          toggleGroups: [
            {
              label: "Application Surface",
              options: [
                {
                  id: "inside",
                  label: "Apply Inside (Facing Out)",
                  priceAdder: 0,
                  description: "Protected from weather — most durable.",
                },
                {
                  id: "outside",
                  label: "Apply Outside (Facing Out)",
                  priceAdder: 0,
                  description: "Maximum visibility from street.",
                },
                {
                  id: "second_surface",
                  label: "Second-Surface Reverse Print",
                  priceAdder: 2,
                  description:
                    "Image reversed so it reads correctly applied inside.",
                },
              ],
            },
            {
              label: "Lamination",
              options: [
                { id: "no_lam", label: "No Lamination", priceAdder: 0 },
                {
                  id: "matte_lam",
                  label: "Matte Laminate",
                  priceAdder: 2,
                  description: "UV protection, scratch-resistant.",
                },
                {
                  id: "gloss_lam",
                  label: "Gloss Laminate",
                  priceAdder: 2,
                  description: "Vibrant colors, scratch-resistant.",
                },
              ],
            },
          ],
          qtyDiscount: "Buy 3+ and save up to 10%",
          keyFeatures: [
            "Multiple window graphic types available",
            "One-way vision perforated vinyl available",
            "Removable or permanent adhesive options",
            "Inside or outside application",
            "UV-resistant inks",
            "Easy DIY installation",
          ],
          useCases: [
            "Retail Storefronts",
            "Restaurant Windows",
            "Office Branding",
            "Sales & Promotions",
            "Privacy Screens",
            "Vehicle Windows",
            "Real Estate Listings",
            "Event Promotion",
          ],
          specs: [
            { key: "Cling Material", value: "Electrostatic PVC (no adhesive)" },
            {
              key: "Vinyl Material",
              value: "Calendered PVC with acrylic adhesive",
            },
            {
              key: "Perforated Vinyl",
              value: "60% ink coverage / 40% hole (one-way vision)",
            },
            { key: "Print Resolution", value: "1440 dpi" },
            { key: "Color Profile", value: "CMYK" },
            { key: "Bleed Required", value: '0.25" all sides' },
            {
              key: "Max Width",
              value: '54" (custom widths for larger installs)',
            },
            { key: "Turnaround", value: "Next Business Day" },
          ],
          faqs: [
            {
              q: "What is the difference between a window cling and a decal?",
              a: "A static cling uses no adhesive — it clings to glass via static electricity and can be removed and reused. A decal uses adhesive to create a more permanent bond.",
            },
            {
              q: "Can I see through perforated vinyl?",
              a: "Yes! Perforated vinyl (one-way vision) blocks 60% of light from outside, forming your printed image. From the inside, you can see through the small holes clearly.",
            },
            {
              q: "How do I apply a window decal without bubbles?",
              a: "Clean the glass thoroughly, wet the surface with soapy water, apply with a squeegee, and work from center to edges. We include installation instructions with every order.",
            },
            {
              q: "Will window graphics damage my glass?",
              a: "Removable adhesive window graphics peel off cleanly without damage or residue when removed within the recommended display period (typically 2 years).",
            },
          ],
          reviews: [
            {
              author: "Naomi S.",
              rating: 5,
              text: "The perforated vinyl looks incredible on our storefront. We get compliments on it every day.",
            },
            {
              author: "Kyle R.",
              rating: 5,
              text: "Ordered frosted vinyl for our conference room for privacy. Looks extremely professional and high-end.",
            },
            {
              author: "Isabella T.",
              rating: 4,
              text: "Great quality static clings for a seasonal sale promotion. Easy to put up and remove — will reorder.",
            },
          ],
          ctaHeading: "Your Window Is Your Best Billboard",
          ctaBody:
            "Window signs turn every passerby into a potential customer. Start designing yours.",
          ctaLabel: "Design Your Window Sign",
        },
      },
      {
        id: "parking-signs",
        name: "Parking Signs",
        description:
          "Regulatory, reserved, and custom parking signs — aluminum or coroplast, ships next day.",
        image: "/images/products/main%20page/Parking_sign.jpeg",
        price: "Starting at $6.99",
        badge: "Ready to Ship",
        config: {
          title: "Custom Parking Signs",
          subtitle:
            "Regulatory, reserved, and custom parking signs — aluminum or coroplast, ships next day.",
          breadcrumb: "Signs",
          breadcrumbHref: "/custom-signs",
          promoText:
            "🅿️ Custom Parking Signs — MUTCD-Compliant Reflective Available. Ships Tomorrow!",
          image: "/images/products/main%20page/Parking_sign.jpeg",
          images: [
            "/images/products/main%20page/Parking_sign.jpeg",
            "/images/products/park_sign_hover.png",
          ],
          ratingScore: "4.9",
          ratingCount: "2,310",
          sizes: [
            { label: '6" x 12" (Small)', value: "6x12", basePrice: 6.99 },
            { label: '9" x 12"', value: "9x12", basePrice: 8.99 },
            { label: '12" x 18" (Standard)', value: "12x18", basePrice: 11.99 },
            { label: '18" x 24" (Large)', value: "18x24", basePrice: 17.99 },
            { label: '24" x 24"', value: "24x24", basePrice: 24.99 },
            { label: "Custom Size", value: "custom", basePrice: 0 },
          ],
          selects: [
            {
              label: "Material",
              options: [
                {
                  label: ".040 Aluminum (Most Popular)",
                  value: "040_alum",
                  priceAdder: 0,
                  description:
                    "Industry standard for parking signs. Rigid and durable.",
                },
                {
                  label: ".080 Aluminum Heavy Duty",
                  value: "080_alum",
                  priceAdder: 5,
                  description: "Double thickness — ideal for high-traffic lots.",
                },
                {
                  label: "4mm Coroplast (Budget)",
                  value: "coro",
                  priceAdder: -3,
                  description:
                    "Lightweight and waterproof — best for temporary use.",
                },
              ],
            },
            {
              label: "Finish",
              options: [
                { label: "Matte (Standard)", value: "matte", priceAdder: 0 },
                { label: "High Gloss", value: "gloss", priceAdder: 1.5 },
                {
                  label: "Engineer-Grade Reflective",
                  value: "reflective_eng",
                  priceAdder: 7,
                  description:
                    "ASTM D4956 Type I — visible at night with headlights.",
                },
                {
                  label: "High-Intensity Reflective",
                  value: "reflective_hi",
                  priceAdder: 14,
                  description: "ASTM D4956 Type III — maximum night visibility.",
                },
              ],
            },
            {
              label: "Sign Template",
              options: [
                {
                  label: "Custom Design (Upload Artwork)",
                  value: "custom",
                  priceAdder: 0,
                },
                {
                  label: "No Parking (Standard Red/White)",
                  value: "no_parking",
                  priceAdder: 0,
                },
                { label: "Reserved Parking", value: "reserved", priceAdder: 0 },
                {
                  label: "Handicap Accessible",
                  value: "handicap",
                  priceAdder: 0,
                },
                { label: "Tow Away Zone", value: "tow_away", priceAdder: 0 },
                {
                  label: "Customer Parking Only",
                  value: "customer_only",
                  priceAdder: 0,
                },
              ],
            },
          ],
          toggleGroups: [
            {
              label: "Mounting Holes",
              options: [
                { id: "no_holes", label: "No Holes", priceAdder: 0 },
                { id: "two_top", label: "2 Holes at Top", priceAdder: 0 },
                { id: "four_corner", label: "4 Corner Holes", priceAdder: 0 },
                {
                  id: "center_holes",
                  label: "2 Center-Side Holes",
                  priceAdder: 0,
                },
              ],
            },
            {
              label: "Post / Mounting Bracket",
              options: [
                { id: "sign_only", label: "Sign Only", priceAdder: 0 },
                {
                  id: "u_channel",
                  label: "U-Channel Post (included)",
                  priceAdder: 18.99,
                  description: "Standard street-sign post",
                },
                {
                  id: "square_post",
                  label: "Square Tubing Post",
                  priceAdder: 22.99,
                  description: "Heavy-duty square post for permanent installs",
                },
              ],
            },
          ],
          qtyDiscount: "Bulk parking sign orders — save up to 13%",
          keyFeatures: [
            "Industry-standard .040 aluminum",
            "Reflective finish available (ASTM D4956 Type I & III)",
            "Standard templates or fully custom designs",
            "Pre-drilled mounting holes included free",
            "MUTCD-compliant options available",
            "U-channel and square post add-ons",
          ],
          useCases: [
            "Private Parking Lots",
            "Business Parking",
            "HOA Communities",
            "Hotels & Motels",
            "Hospitals & Clinics",
            "Churches",
            "Schools",
            "Apartment Complexes",
          ],
          specs: [
            { key: "Standard Material", value: '.040" Aluminum' },
            { key: "Heavy Duty", value: '.080" Aluminum' },
            {
              key: "Reflective Standard",
              value: "ASTM D4956 Type I (Engineer Grade)",
            },
            {
              key: "Reflective Premium",
              value: "ASTM D4956 Type III (High Intensity)",
            },
            { key: "Hole Diameter", value: '5/16" standard' },
            { key: "Print Resolution", value: "1440 dpi" },
            { key: "Color Profile", value: "CMYK + Spot colors available" },
            { key: "Turnaround", value: "Next Business Day" },
          ],
          faqs: [
            {
              q: "Are your parking signs MUTCD compliant?",
              a: "Yes! Our reflective aluminum signs can be produced to MUTCD (Manual on Uniform Traffic Control Devices) specifications. Select the Engineer-Grade or High-Intensity Reflective finish.",
            },
            {
              q: "Do you have standard parking sign templates?",
              a: "Yes — we offer standard pre-designed templates (No Parking, Reserved, Handicap, Tow Away Zone, etc.) that follow regulatory color standards. You can also fully customize any sign.",
            },
            {
              q: "How do I mount a parking sign to a post?",
              a: 'We offer U-Channel and square tubing post add-ons. Alternatively, pre-drilled holes allow you to mount to any standard 2" U-channel post with sign-mounting hardware.',
            },
            {
              q: "Can I include time restrictions on my parking sign?",
              a: "Absolutely. Our custom design upload lets you include any specific text, time ranges, or language. We also have templates with 'Hours of Enforcement' sections.",
            },
          ],
          reviews: [
            {
              author: "Steve P.",
              rating: 5,
              text: "Ordered 30 parking signs for our apartment complex. All look great and the reflective finish is very visible at night.",
            },
            {
              author: "Rebecca O.",
              rating: 5,
              text: "Fast, high quality, and exactly the right regulatory look. Our HOA board approved them immediately.",
            },
            {
              author: "Marcus J.",
              rating: 5,
              text: "The U-channel posts were a perfect add-on. Everything arrived together and install was straightforward.",
            },
          ],
          ctaHeading: "Control Your Parking. Protect Your Space.",
          ctaBody:
            "Professional-grade parking signs that are clear, visible, and regulation-ready.",
          ctaLabel: "Order Parking Signs Now",
        },
      },
      {
        id: "channel-letter-signs",
        name: "Channel Letter Signs",
        description:
          "Premium 3D backlit and front-lit channel letters to make your business storefront stand out.",
        image: "/images/products/main%20page/channel_letter_signs.png",
        price: "Starting at $149.99",
        badge: "Premium",
        config: {
          title: "Custom Channel Letter Signs",
          subtitle:
            "Professional dimensional signage with brilliant LED illumination options.",
          breadcrumb: "Signs",
          breadcrumbHref: "/custom-signs",
          promoText: "✨ Modern LED Channel Letters — Professional Storefront Impact. Shipped Fast!",
          image: "/images/products/main%20page/channel_letter_signs.png",
          images: [
            "/images/products/main%20page/channel_letter_signs.png",
            "/images/products/gallery/channel_letter_storefront_1.png",
            "/images/products/gallery/channel_letter_storefront_2.png",
          ],
          ratingScore: "4.9",
          ratingCount: "820",
          sizes: [
            { label: '12" High Letters', value: "12in", basePrice: 149.99 },
            { label: '18" High Letters', value: "18in", basePrice: 224.99 },
            { label: '24" High Letters', value: "24in", basePrice: 299.99 },
            { label: '36" High Letters', value: "36in", basePrice: 449.99 },
          ],
          selects: [
            {
              label: "Illumination Type",
              options: [
                {
                  label: "Front-Lit (LED Face Glowing)",
                  value: "front_lit",
                  priceAdder: 0,
                  description: "Standard bright acrylic faces with internal LED illumination.",
                },
                {
                  label: "Halo-Lit / Reverse-Lit (Rear Glowing)",
                  value: "halo_lit",
                  priceAdder: 50.0,
                  description: "Light projects onto the wall behind, creating a halo effect.",
                },
                {
                  label: "Dual-Lit (Front & Rear Glowing)",
                  value: "dual_lit",
                  priceAdder: 90.0,
                  description: "Combines glowing faces and halo backlighting for maximum impact.",
                },
                {
                  label: "Non-Illuminated Dimensional Letters",
                  value: "non_illuminated",
                  priceAdder: -40.0,
                  description: "High-end 3D metal or acrylic letters without lights.",
                },
              ],
            },
            {
              label: "Mounting Style",
              options: [
                {
                  label: "Raceway Mount (Standard)",
                  value: "raceway",
                  priceAdder: 0,
                  description: "Letters pre-installed on a metal box/bar container for easier wiring.",
                },
                {
                  label: "Flush / Direct Wall Mount",
                  value: "flush",
                  priceAdder: 35.0,
                  description: "Letters mounted directly to the wall surface with individual wiring.",
                },
              ],
            },
          ],
          toggleGroups: [
            {
              label: "Face Acrylic Color",
              options: [
                { id: "white_face", label: "Brilliant White", priceAdder: 0 },
                { id: "red_face", label: "Vibrant Red", priceAdder: 0 },
                { id: "blue_face", label: "Royal Blue", priceAdder: 0 },
                { id: "black_face", label: "Black (Glows White)", priceAdder: 15.0 },
              ],
            },
            {
              label: "Return / Trim Color (Sides)",
              options: [
                { id: "black_return", label: "Sleek Black", priceAdder: 0 },
                { id: "silver_return", label: "Brushed Aluminum", priceAdder: 0 },
                { id: "bronze_return", label: "Classic Bronze", priceAdder: 0 },
              ],
            },
          ],
          qtyDiscount: "Volume discounts on complex multi-letter signs",
          keyFeatures: [
            "Heavy-duty aluminum returns (side walls) will not rust",
            "Energy-efficient and long-lasting UL-listed LEDs",
            "Custom fonts, colors, and logos supported",
            "Front-lit and halo-lit options for stunning looks",
            "Raceway mount option for simplified building installation",
          ],
          useCases: [
            "Retail Storefronts",
            "Corporate Offices",
            "Restaurants & Cafes",
            "Shopping Centers",
            "Building Exterior Signage",
          ],
          specs: [
            { key: "Letter Thickness (Depth)", value: "3\" to 5\" deep returns" },
            { key: "Illumination source", value: "UL-certified Low-voltage 12V LEDs" },
            { key: "Face Material", value: "3/16\" Cast Acrylic" },
            { key: "Return Material", value: "0.040\" Pre-painted Aluminum" },
            { key: "Wiring Type", value: "Single-source connection (with Raceway)" },
            { key: "Outdoor Lifespan", value: "10+ years maintenance-free" },
          ],
          faqs: [
            {
              q: "What is the difference between front-lit and halo-lit letters?",
              a: "Front-lit letters have acrylic faces that glow in the chosen color, throwing light forward. Halo-lit (or reverse-lit) letters have aluminum faces but open backs, allowing light to reflect off the wall behind the letter to create a soft, upscale halo glow.",
            },
            {
              q: "What is a raceway mount?",
              a: "A raceway is a metal box structure that the channel letters are mounted to. It holds the power supplies and wiring. Mounting via a raceway only requires a few holes in the building's facade, whereas flush mounting requires drilling individual mounting and wiring holes for every single letter.",
            },
            {
              q: "Do you supply the mounting templates and hardware?",
              a: "Yes! Every channel letter sign comes with a full-size paper mounting template, studs, silicone spacers, and clear instructions to make installation straightforward for any handyman or signage installer.",
            },
          ],
          reviews: [
            {
              author: "Gordon K.",
              rating: 5,
              text: "The halo-lit letters transformed our cafe facade. Absolute showstopper at night. Highly recommend!",
            },
            {
              author: "Samantha V.",
              rating: 5,
              text: "Fantastic customer support in setting up our custom vector logo. The letters arrived securely crated and installation templates were exact.",
            },
          ],
          ctaHeading: "Brighten Your Business Facade",
          ctaBody:
            "Custom 3D LED channel letters manufactured with commercial-grade components.",
          ctaLabel: "Order Channel Letter Signs Now",
        },
      },
    ],
  };
