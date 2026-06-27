import { RegistryCategory } from "../productsRegistry";

export const marketingMaterials: RegistryCategory = {
    title: "Marketing Materials",
    breadcrumbLabel: "Marketing Materials",
    heroSubtitle: "Professional Print. Promoted Brand.",
    description:
      "Grow your business and look professional with customized business cards, flyers, and brochures.",
    heroImage: "/images/products/main%20page/marketing%20_materials_hero_image.png",
    reviewRating: "4.9",
    reviewCount: "1,150",
    reviewQuote:
      "The flyers and folded menus turned out absolutely gorgeous! Perfect color alignment with our corporate branding guidelines and the paper quality is very thick.",
    categoryDescriptionText:
      `<div class="space-y-4">
        <h3 class="text-xl font-bold text-slate-900">Elevate Your Brand in Broward County with Premium Marketing Materials</h3>
        <p class="text-sm text-gray-700 leading-relaxed">
          At <strong>Nano Signs</strong>, we deliver industry-leading commercial printing and sign services designed to grab attention and convert leads. Serving <strong>Fort Lauderdale</strong>, <strong>Oakland Park</strong>, and the wider <strong>Broward County</strong> area, we specialize in high-definition print collateral that represents your business with distinction. Whether you need standard business cards for networking events, door hangers for targeted local neighborhood mailings, or folded brochures to pitch complex services, our state-of-the-art print production facilities ensure crisp details, harmonious colors, and premium paper weights.
        </p>
        <p class="text-sm text-gray-700 leading-relaxed">
          Our complete suite of custom marketing collateral includes premium business cards (including our 14pt semi-gloss profit maximizer), custom postcards and direct mailers, vibrant flyers and folded brochures, and pre-cut door hangers. We print on heavy cardstock and high-density text papers using advanced offset lithography. Plus, with our local facility advantages, we support next-day shipping throughout South Florida, ensuring you never show up empty-handed to your next client pitch or local tradeshow event.
        </p>
      </div>`,
    categorySecondaryImage: "/images/products/main%20page/marketing_materials_desc.png",
    faqs: [
      {
        q: "What cardstock and paper options do you offer?",
        a: "We offer a variety of professional materials tailored to each product. Our cards, door hangers, rack cards, and table tents are printed on thick 14pt or 16pt cardstock with gloss or matte finishes. Our flyers and brochures are printed on high-density 100lb glossy or matte text paper for high foldability.",
      },
      {
        q: "Can I write on the glossy printed materials?",
        a: "Glossy UV-coated materials have a slick finish that is resistant to standard ballpoint ink. If you need to write notes, dates, or prices on your handouts, we highly recommend choosing our Smooth Matte finish, which works perfectly with pens and pencils.",
      },
      {
        q: "Do you offer folding services for brochures?",
        a: "Yes! When configuring our 8.5\" x 11\" flyers, you can select 'Tri-Fold' or 'Half-Fold' finishes. Your brochures will arrive pre-folded and event-ready at no extra hassle.",
      },
    ],
    products: [
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
          breadcrumb: "Marketing",
          breadcrumbHref: "/marketing-materials",
          promoText: "25% OFF ALL CORPORATE STATIONERY",
          image: "/images/products/main%20page/business_cards.png",
          ratingCount: "1120",
          ratingScore: "4.9",
          sizes: [
            {
              label: "3.5\" x 2\" Standard size",
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
                },
                {
                  label: "Rounded Corners",
                  value: "rounded",
                  priceAdder: 0.05,
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
          useCases: ["Networking events", "Customer takeaways", "Loyalty stamp cards", "Appointment reminders"],
          specs: [
            { key: "Dimensions", value: '3.5" x 2" (Standard size)' },
            { key: "Standard Stock", value: "14pt semi gloss (profit maximizer)" },
            { key: "Premium Finishes", value: "Glossy, Soft Touch, Pearl" },
            { key: "Luxury Finishes", value: "Embossed Gloss, Gold Raised Foil, Silver Raised Foil" },
            { key: "Specialty Stocks", value: "Painted Edge, Ultra Thick, Clear Plastic" },
            { key: "Standard Turnaround", value: "Next Business Day" },
          ],
          description:
            `<div class="space-y-4">
              <h3 class="text-lg font-bold text-slate-900">Premium Business Cards Printed in Fort Lauderdale</h3>
              <p class="text-sm text-gray-700 leading-relaxed">
                Make a striking professional statement with custom business cards from Nano Signs. Serving Fort Lauderdale, Oakland Park, and Broward County, we specialize in high-definition offset business card printing that sets your brand apart. Our cards are printed on ultra-sturdy 14pt semi-gloss cardstock (our profit maximizer option) or heavy-weight 16pt stock, ensuring they never feel flimsy or cheap. Choose between a glossy UV protective coating for high vibrant contrast, or a smooth matte coating for a sophisticated, writable surface.
              </p>
              <p class="text-sm text-gray-700 leading-relaxed">
                Whether you are an independent contractor in Broward County, a startup founder in Oakland Park, or a real estate agent in Fort Lauderdale, having a pocket full of pristine, double-sided business cards ensures you are always ready to network. Customize yours with raised foil accents, custom shapes, or painted edges to leave a memorable physical impression.
              </p>
            </div>`,
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
            {
              q: "What is the minimum order quantity for custom business cards?",
              a: "Our minimum quantity starts at just 100 cards. We provide significant bulk printing discounts for quantities of 250, 500, 1000, and up to 10,000 cards per order, giving you maximum value.",
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
        id: "postcards",
        name: "Custom Postcards",
        description:
          "High-quality postcards for direct mail, handouts, and promotional inserts.",
        image: "/images/products/main%20page/postcard_glossy.png",
        price: "Starting at $60.00 for 100",
        badge: "Event Choice",
        config: {
          title: "Custom Postcards",
          quantityOptions: [100, 250, 500, 750, 1000, 1500, 2000],
          subtitle:
            "Full-color promotional postcards printed on premium thick cardstock.",
          breadcrumb: "Marketing",
          breadcrumbHref: "/marketing-materials",
          promoText: "25% OFF ALL EVENT MARKETING PRINTS",
          image: "/images/products/main%20page/postcard_glossy.png",
          images: [
            "/images/products/main%20page/postcard_glossy.png",
            "/images/products/main%20page/postcard_matte.png",
            "/images/products/main%20page/postcard_action_1.png",
            "/images/products/main%20page/postcard_action_2.png",
            "/images/products/main%20page/postcard_action_3.png",
          ],
          ratingCount: "580",
          ratingScore: "4.8",
          sizes: [
            {
              label: "4\" x 6\" Standard Postcard",
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
              label: "5\" x 7\" Medium Postcard",
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
              label: "6\" x 9\" Large Postcard",
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
              label: "6\" x 11\" Jumbo Postcard",
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
            "Archival grade cardstock",
            "Stunning gloss or writeable matte finish",
            "Double sided color printing available",
          ],
          useCases: [
            "Direct mail advertising",
            "Coupons & promotional hand-outs",
            "Event invitations",
            "Product package inserts",
          ],
          specs: [
            { key: "Material", value: "14pt Premium Cardstock" },
            { key: "Finish Options", value: "Glossy (front only) or Smooth Matte" },
          ],
          description:
            `<div class="space-y-4">
              <h3 class="text-lg font-bold text-slate-900">Custom Printed Postcards in Fort Lauderdale & Oakland Park</h3>
              <p class="text-sm text-gray-700 leading-relaxed">
                Take your local direct mail marketing or client handouts to the next level with premium custom postcards from Nano Signs. Serving Broward County, Fort Lauderdale, and Oakland Park, FL, we offer crisp, full-color postcard printing that is perfect for neighborhood outreach, retail promotions, coupons, and corporate invitations. Our postcards are cut with square corners to comply with standard USPS and Canada Post specifications, guaranteeing a clean and simple product-focused aesthetic.
              </p>
              <p class="text-sm text-gray-700 leading-relaxed">
                Choose between high-shine glossy finish that accentuates photographic imagery and makes colors pop, or smooth matte cardstock for a non-glare, writeable finish. With single-sided or double-sided printing options, you can design your postcard layout to showcase eye-catching graphics on the front while keeping the back clear for address, postage, and local business details.
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
              author: "Elena R., Boutique Owner",
              rating: 5,
              text: "The matte postcards were perfect for our summer collection mailer! They feel very high-quality and the printing is incredibly sharp. Excellent Broward local service.",
            },
            {
              author: "Jason L., Realtor",
              rating: 5,
              text: "Exactly what I was looking for. No rounded corners, very simple and professional. Will buy all my listing postcards here.",
            },
          ],
          ctaHeading: "Ready to design postcards?",
          ctaBody:
            "Custom print postcards using our online template catalog or upload artwork.",
          ctaLabel: "Customize Postcards",
        },
      },
      {
        id: "flyers",
        name: "Custom Flyers",
        description:
          "Vibrant single or double sided flyers to promote events, menus, and packages.",
        image: "/images/products/main%20page/flyer_glossy.png",
        price: "Starting at $74.00 for 100",
        badge: "Best Value",
        config: {
          title: "Custom Flyers",
          quantityOptions: [100, 250, 500, 750, 1000, 1500, 2000, 2500],
          subtitle:
            "Premium full color flyers printed on professional paper stock.",
          breadcrumb: "Marketing",
          breadcrumbHref: "/marketing-materials",
          promoText: "25% OFF BULK EVENT FLYERS",
          image: "/images/products/main%20page/flyer_glossy.png",
          images: [
            "/images/products/main%20page/flyer_glossy.png",
            "/images/products/main%20page/flyer_matte.png",
          ],
          ratingCount: "430",
          ratingScore: "4.7",
          sizes: [
            {
              label: "5.5\" x 8.5\" Small Flyer",
              value: "5.5x8.5",
              basePrice: 0.74,
              quantityPrices: {
                100: 74.00,
                250: 120.00,
                500: 160.00,
                750: 195.00,
                1000: 240.00,
                1500: 330.00,
                2000: 400.00,
                2500: 480.00,
              },
            },
            {
              label: "8.5\" x 14\" Medium Flyer",
              value: "8.5x14",
              basePrice: 1.08,
              quantityPrices: {
                100: 108.00,
                250: 220.00,
                500: 330.00,
                750: 390.00,
                1000: 460.00,
                1500: 570.00,
                2000: 680.00,
                2500: 768.00,
              },
            },
            {
              label: "11\" x 17\" Large Flyer",
              value: "11x17",
              basePrice: 1.48,
              quantityPrices: {
                100: 148.00,
                250: 285.00,
                500: 440.00,
                750: 525.00,
                1000: 700.00,
                1500: 1050.00,
                2000: 1400.00,
                2500: 1698.00,
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
                  image: "/images/products/main%20page/flyer_glossy.png",
                },
                {
                  label: "Matte",
                  value: "matte",
                  priceAdder: 0,
                  description: "Clean, professional look with a smooth non-glare matte finish.",
                  image: "/images/products/main%20page/flyer_matte.png",
                },
              ],
            },
            {
              label: "Orientation",
              options: [
                {
                  label: "Vertical",
                  value: "vertical",
                  priceAdder: 0,
                  description: "Portrait orientation layout.",
                },
                {
                  label: "Horizontal",
                  value: "horizontal",
                  priceAdder: 0,
                  description: "Landscape orientation layout.",
                },
              ],
            },
          ],
          qtyDiscount: "Save more when printing in bulk",
          keyFeatures: [
            "High definition color reproduction",
            "Vibrant double-sided printing available",
            "Premium glossy or matte textures",
          ],
          useCases: [
            "Event handouts",
            "Restaurant menus",
            "Real estate listing sheets",
            "Corporate handouts",
          ],
          specs: [
            { key: "Material", value: "Premium Glossy or Matte paper stock" },
            { key: "Printing", value: "High definition offset printing" },
          ],
          description:
            `<div class="space-y-4">
              <h3 class="text-lg font-bold text-slate-900">Custom Flyer Printing in Fort Lauderdale</h3>
              <p class="text-sm text-gray-700 leading-relaxed">
                Promote your next corporate event, local restaurant menu, or real estate open house with custom flyers from Nano Signs. Serving Oakland Park, Fort Lauderdale, and all of Broward County, we specialize in high-definition offset flyer printing with fast turnarounds. Printed on premium 100lb glossy text paper (which makes colors pop with photographic vibrance) or smooth matte text paper (ideal for a sophisticated, glare-free readable finish), our flyers offer a thick, substantial feel.
              </p>
              <p class="text-sm text-gray-700 leading-relaxed">
                Choose single or double-sided layouts and orientation options (horizontal or vertical) to match your campaign goals. Hand them out at local South Florida events, display them at front desks, or mail them directly to neighborhood prospects.
              </p>
            </div>`,
          faqs: [
            {
              q: "What sizes are available for custom flyers?",
              a: "Our flyers are available in three versatile sizes: 5.5\"x8.5\" (compact handouts), 8.5\"x14\" (legal-size sheets), and 11\"x17\" (large display posters).",
            },
            {
              q: "What paper stocks are used for printing flyers?",
              a: "We use high-density 100lb glossy text paper and smooth matte text paper, ensuring a thick, premium feel without compromising on flexibility.",
            },
            {
              q: "Are flyers printed on both sides?",
              a: "Yes! You can choose between single-sided and double-sided printing. Double-sided flyers are excellent for menus, pamphlets, and product sheets.",
            },
            {
              q: "Can I fold these flyers to make brochures?",
              a: "While we offer folded brochures separately, our flyers are shipped flat. If you want pre-folded handouts, we recommend ordering from our Brochures section.",
            },
            {
              q: "Is there a bulk discount for large flyer orders?",
              a: "Yes! We offer bulk tier discounts starting at 250 flyers. The unit price decreases significantly as you print higher quantities (up to 2,500 units).",
            },
          ],
          reviews: [
            {
              author: "Kevin M., Event Coordinator",
              rating: 5,
              text: "The glossy 100lb text flyers looked stunning under the venue lighting. Very fast local pickup in Broward County.",
            },
            {
              author: "Maria S., Restaurant Owner",
              rating: 5,
              text: "Printed our double-sided takeout menus on the matte stock. Beautifully clean, easy to read, and very thick. Excellent value!",
            },
          ],
          ctaHeading: "Design flyers online",
          ctaBody:
            "Input your logo, menus, and corporate text using templates.",
          ctaLabel: "Customize Flyers",
        },
      },
      {
        id: "brochures",
        name: "Folded Brochures",
        description:
          "Professional tri-fold or half-fold brochures to showcase your services, menus, and business details.",
        image: "/images/products/main%20page/custom_brochures.png",
        price: "Starting at $29.99 for 50",
        badge: "Corporate Choice",
        config: {
          title: "Folded Brochures",
          quantityOptions: [100, 250, 500, 1000, 2500, 5000, 10000],
          subtitle:
            "Premium full color folded brochures printed on professional paper stock.",
          breadcrumb: "Marketing",
          breadcrumbHref: "/marketing-materials",
          promoText: "25% OFF FOLDED BUSINESS BROCHURES",
          image: "/images/products/main%20page/custom_brochures.png",
          ratingCount: "320",
          ratingScore: "4.8",
          sizes: [
            {
              label: "8.5\" x 11\" Standard Brochure",
              value: "8.5x11",
              basePrice: 29.99,
            },
          ],
          selects: [
            {
              label: "Paper Quality",
              options: [
                {
                  label: "100lb Glossy Text",
                  value: "100lb_gloss",
                  priceAdder: 0,
                },
                {
                  label: "100lb Matte Text",
                  value: "100lb_matte",
                  priceAdder: 0,
                },
                {
                  label: "80lb Recycled Text",
                  value: "80lb_recycled",
                  priceAdder: 3.0,
                },
              ],
            },
            {
              label: "Fold Style",
              options: [
                { label: "Tri-Fold", value: "tri_fold", priceAdder: 8.0 },
                { label: "Half-Fold", value: "half_fold", priceAdder: 5.0 },
              ],
            },
          ],
          qtyDiscount: "Save more when printing in packs of 100+",
          keyFeatures: [
            "High definition color reproduction",
            "Pre-folded and ready to display",
            "Tri-fold & half-fold options",
          ],
          useCases: [
            "Business guides & service lists",
            "Restaurant take-out menus",
            "Marketing handouts",
            "Product display pamphlets",
          ],
          specs: [
            { key: "Material", value: "100lb Text Paper" },
            { key: "Printing", value: "Offset lithography" },
          ],
          description:
            `<div class="space-y-4">
              <h3 class="text-lg font-bold text-slate-900">Custom Folded Brochures in Broward County</h3>
              <p class="text-sm text-gray-700 leading-relaxed">
                Present your products, services, or menu items in an elegant, structured format with custom folded brochures from Nano Signs. Serving businesses in Fort Lauderdale, Oakland Park, and neighboring South Florida cities, we provide high-definition brochure printing with clean scoring and machine-folding. Our standard 8.5" x 11" brochures are available in standard Tri-Fold or Half-Fold configurations, ensuring your layouts line up perfectly.
              </p>
              <p class="text-sm text-gray-700 leading-relaxed">
                Customize your print run with premium 100lb glossy text paper (vibrant and eye-catching), 100lb matte text paper (sophisticated, smudge-resistant), or 80lb recycled text paper for green-focused branding. Organize complex business information, portfolios, or restaurant menu items into readable panels that encourage prospective customers to learn more.
              </p>
            </div>`,
          faqs: [
            {
              q: "What fold styles do you offer for custom brochures?",
              a: "We offer pre-folded brochures in two styles: Tri-Fold (divided into 3 panels per side) and Half-Fold (folded down the middle into 4 pages).",
            },
            {
              q: "What paper qualities are available for brochures?",
              a: "You can select 100lb Glossy Text (ideal for vivid brochures), 100lb Matte Text (classy, readable), or 80lb Recycled Text for eco-friendly branding.",
            },
            {
              q: "What are the dimensions of the brochures?",
              a: "Our standard brochures start with flat sheets of 8.5\" x 11\" and are pre-folded to compact sizes (approx. 3.7\" x 8.5\" for tri-folds).",
            },
            {
              q: "Do the brochures arrive pre-folded?",
              a: "Yes, absolutely! We score and fold your brochures in-house, so they arrive fully assembled and ready to hand out.",
            },
            {
              q: "Can I design a brochure with custom layouts?",
              a: "Yes! Our online customizer lets you place images, logos, and descriptions in dedicated text panels matching the folding guidelines.",
            },
          ],
          reviews: [
            {
              author: "Clarissa W., Medical Clinic Manager",
              rating: 5,
              text: "The matte 100lb tri-fold brochures looked highly professional. Text is very sharp and the folds are perfectly aligned. Excellent South Florida printer.",
            },
            {
              author: "Daniel H., HVAC Owner",
              rating: 5,
              text: "Tri-fold brochures were perfect for listing our residential seasonal maintenance packages. Very sturdy paper weight.",
            },
          ],
          ctaHeading: "Design brochures online",
          ctaBody:
            "Create beautiful brochures with professional folding styles.",
          ctaLabel: "Customize Brochures",
        },
      },
      {
        id: "door-hangers",
        name: "Door Hangers",
        description:
          "Targeted local advertising hangers that slip easily onto front door handles.",
        image: "/images/products/main%20page/door_hangers.png",
        price: "Starting at $39.99 for 100",
        config: {
          title: "Custom Door Hangers",
          quantityOptions: [100, 250, 500, 1000, 2500, 5000, 10000],
          subtitle:
            "Vibrant door hangers pre-cut with handle holes, perfect for local business advertising.",
          breadcrumb: "Marketing",
          breadcrumbHref: "/marketing-materials",
          promoText: "25% OFF BUSINESS DOOR HANGERS",
          image: "/images/products/main%20page/door_hangers.png",
          ratingCount: "310",
          ratingScore: "4.8",
          sizes: [
            {
              label: "3.5\" x 8.5\" Compact Hanger",
              value: "3.5x8.5",
              basePrice: 39.99,
            },
            {
              label: "4.25\" x 11\" Standard Large Hanger",
              value: "4.25x11",
              basePrice: 54.99,
            },
          ],
          selects: [
            {
              label: "Card Material",
              options: [
                {
                  label: "14pt Gloss Cardstock",
                  value: "14pt_gloss",
                  priceAdder: 0,
                },
                {
                  label: "14pt Matte Cardstock",
                  value: "14pt_matte",
                  priceAdder: 0,
                },
              ],
            },
            {
              label: "Handle Cutout Style",
              options: [
                {
                  label: "Standard 1.25\" Circle Hole with Slit",
                  value: "circle_slit",
                  priceAdder: 0,
                },
                {
                  label: "Curved Arch Hook Cut",
                  value: "arch_hook",
                  priceAdder: 4.0,
                },
              ],
            },
          ],
          qtyDiscount: "Bulk local campaigns save up to 70%",
          keyFeatures: [
            "Pre-cut hole and slit fits all door handles",
            "Durable 14pt thick cover stock",
            "Double-sided full color printing",
          ],
          useCases: [
            "Home services (lawn, roofing, cleaning)",
            "Political campaigning",
            "Local restaurant menu advertising",
            "Do Not Disturb door signs",
          ],
          specs: [
            { key: "Material", value: "14pt cardstock" },
            { key: "Hole Diameter", value: "1.25 inches standard" },
          ],
          description:
            `<div class="space-y-4">
              <h3 class="text-lg font-bold text-slate-900">Custom Door Hanger Printing in Fort Lauderdale & Oakland Park</h3>
              <p class="text-sm text-gray-700 leading-relaxed">
                Connect directly with local neighborhoods using custom door hangers from Nano Signs. Highly popular for landscaping, pressure washing, pest control, roofing, plumbing, and local restaurant delivery campaigns, door hangers provide a guaranteed physical touchpoint on the front doors of Fort Lauderdale, Oakland Park, and Broward County homes. Printed on heavy 14pt cardstock, these hangers hold up against South Florida's outdoor humidity without curling.
              </p>
              <p class="text-sm text-gray-700 leading-relaxed">
                Our door hangers are pre-cut with a circular hole and a slit (or curved arch hook) at the top, sliding effortlessly onto any standard handle. Design your custom door hangers with double-sided printing: use the front for bold, high-gloss promos and contact details, and the back for detailed service pricing or client reviews.
              </p>
            </div>`,
          faqs: [
            {
              q: "What sizes do you offer for door hangers?",
              a: "We provide two standard sizes: 3.5\" x 8.5\" (compact) and 4.25\" x 11\" (large and highly visible).",
            },
            {
              q: "Do the door hangers come with pre-cut holes?",
              a: "Yes! All door hangers are pre-cut with a circular hole and a slit at the top, allowing them to hang easily on any standard door knob.",
            },
            {
              q: "What cardstock weight do you use for door hangers?",
              a: "We print on thick, durable 14pt cardstock. This ensures they resist bending and withstand outdoor humidity while hanging on front doors.",
            },
            {
              q: "Are door hangers weather-resistant?",
              a: "Our 14pt Gloss Cardstock has a light protective sheen that helps resist light South Florida moisture, but they are designed for temporary outdoor hangings.",
            },
            {
              q: "What businesses benefit most from door hangers?",
              a: "Local home services (landscaping, pressure washing, pest control, roofing, plumbing) and restaurants benefit massively from direct neighborhood canvassing.",
            },
          ],
          reviews: [
            {
              author: "Dwayne K., Lawn Care Owner",
              rating: 5,
              text: "Our response rate was excellent! We distributed 500 hangers in Oakland Park and gained 12 new monthly accounts. Very clean cut, thick cardstock.",
            },
            {
              author: "Linda J., Pizzeria Manager",
              rating: 5,
              text: "Used these to distribute our menu coupon codes locally. The glossy printing is bright and the hole fits perfectly over door handles.",
            },
          ],
          ctaHeading: "Kick off local door hanger campaigns",
          ctaBody:
            "Custom print door hangers with coupon codes and contact numbers.",
          ctaLabel: "Customize Door Hangers",
        },
      },
    ],
};