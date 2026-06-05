const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/lib/productsRegistry.ts');
let content = fs.readFileSync(filePath, 'utf8');

// The new rich descriptions
const descriptions = {
  "tablecloths": "Transform any standard folding table into a highly professional promotional display with our Custom Tablecloths. Printed using advanced dye-sublimation on premium 300D polyester twill, these covers feature a vibrant, scratch-resistant print that won't crack or peel. They are completely machine washable, flame-retardant (meeting NFPA 701 safety certifications), and designed to stay wrinkle-free throughout long events. Available in standard 6ft and 8ft sizes in both 4-sided (closed back) and 3-sided (open back) configurations for convenient under-table storage access.",
  
  "table-runners": "For a versatile, portable, and budget-friendly branding solution, our Custom Table Runners are the perfect choice. Drape one over a plain solid-colored tablecloth to instantly elevate your booth's look without the cost of a full tablecloth. Made from durable 300D polyester twill with optional liquid-repellent coatings, our table runners roll down flat, fit easily in any travel bag, and wash clean in the machine. Choose from multiple standard widths to display your company logo prominently.",
  
  "fitted-tablecloths": "Give your display tables a clean, sharp, box-tailored look with Fitted Tablecloths. Custom-tailored to slip perfectly over standard 6ft and 8ft rectangular tables, these covers stay securely in place without hanging or pooling on the floor, making them excellent for busy outdoor venues or professional recruiting events. Constructed from flame-retardant 300D knit polyester twill, they are machine-washable, wrinkle-resistant, and built to withstand repeated setups.",
  
  "round-tablecloths": "Elevate your round banquet, registry, or cocktail tables with our Round Custom Tablecloths. Specially hemmed for standard circular table sizes, they drape elegantly to the floor in a seamless design. Using full-spectrum dye-sublimation printing, your custom colors, patterns, and logos will appear bright and clear, providing a premium aesthetic for weddings, evening galas, corporate fundraisers, and hotel lobbies.",
  
  "stretch-tablecloths": "Achieve a sleek, modern, and high-impact look with our contoured Stretch Tablecloths. Made from an elastic polyester-spandex blend, these covers stretch tightly over your table frame and secure into place using reinforced rubber leg pockets, preventing any flapping or shifting in windy outdoor conditions. The tight tension naturally pulls out all folds and wrinkles, ensuring a perfectly smooth, professional surface for tech conferences, outdoor festivals, and modern brand exhibitions.",
  
  "pop-up-displays": "Make a massive impression on the trade show floor with our premium Pop-Up Backdrop Displays. Featuring a lightweight accordion-style aluminum frame that snaps open in under two minutes, this backdrop utilizes a large, high-definition tension fabric graphic that attaches securely around the perimeter with heavy-duty hook-and-loop velcro. It packs down into a compact trolley bag with rolling wheels for effortless travel and setup.",
  
  "tension-fabric-displays": "Our Tension Fabric Displays represent the gold standard of modern exhibition back walls. Utilizing an interlocking, lightweight aluminum tube frame that clicks together without tools, the graphic slides over the frame like a pillowcase and zips shut at the bottom for a perfectly tight, seamless, and wrinkle-free display. Printed via dye-sublimation on premium stretch polyester knit, it ensures your artwork looks spectacular and eliminates any glare under bright convention hall lights.",
  
  "step-and-repeat-banner": "Create the perfect photo opportunity at red carpets, press conferences, weddings, and corporate summits with our Step & Repeat Banners. Designed to display repeated logos in a clean grid layout, the glare-free matte finish of our heavy-duty blockout vinyl ensures beautiful, flash-friendly photography. The package comes with an optional adjustable backdrop stand and top/bottom pole pockets for fast mounting.",
  
  "retractable-banners": "Our Retractable Banners (Roll Up Stands) are the ultimate standalone banner display for trade shows, retail checkouts, and office lobbies. The banner graphic pulls up from an anodized aluminum base stand in seconds and secures with a vertical support rod. Each kit includes a padded carrying bag, making transport and setup incredibly simple. Printed on premium curl-resistant polyester film or standard 13oz vinyl to maintain a clean, flat presentation.",
  
  "x-banner-stand": "The X-Frame Banner Stand is a highly cost-effective, portable freestanding banner solution. By utilizing flexible composite fiberglass arms connected to a central hinge, the stand pulls a custom corner-grommeted banner taut, keeping your graphic perfectly flat and readable. Because the banner attaches simply via grommets, you can order replacement prints and swap graphics in seconds without needing to buy new stands.",
  
  "tabletop-retractable-banners": "Bring high-impact branding to counter-tops, checkout registers, hotel lobbies, and registration desks with Tabletop Retractable Banners. These miniature versions of our full-sized roll-up stands feature a compact aluminum base housing that pulls up and retracts in seconds. Printed on smooth, high-resolution polypropylene film, they ensure small details and text are clear and easy to read from a close distance.",
  
  "custom-canopy-tents": "Stand out at outdoor events, farmers markets, sporting events, and street fairs with our 10' x 10' Custom Canopy Tents. The canopy top is made from heavy-duty, waterproof, and UV-resistant fabric printed in rich full-color dye-sublimation. The popup frame features a commercial-grade steel or aluminum truss system with adjustable height settings, popping up in minutes for instant shade and high-visibility branding.",
  
  "feather-flags": "Draw customers in from the roadside with our best-selling Custom Feather Flags. Designed to flutter in the wind and turn heads, these tall advertising flags are printed on premium open-weave knit polyester to reduce wind load stress. Supported by composite fiberglass poles and a rotating ground spike or cross stand, they rotate 360 degrees to remain visible from any traffic direction.",
  
  "vinyl-banners": "Our Custom Vinyl Banners are a versatile, heavy-duty signage solution for indoor and outdoor advertising. Constructed from durable 13oz gloss or 15oz premium matte PVC vinyl with heat-welded hems, they are fully waterproof and UV-resistant to survive the elements. Complete with pre-installed brass grommets or pole pockets for easy hanging, they are perfect for storefront openings, construction fences, and event banners.",
  
  "business-cards": "Leave a lasting impression with premium Custom Business Cards. Printed on ultra-thick 14pt or 16pt cardstock with offset high-resolution printing, these standard 3.5\" x 2\" cards represent your business with absolute quality. Customize your finish with professional non-glare matte or high-gloss UV sheen, and choose single or double-sided layouts to distribute to tradeshow attendees, recruits, and new leads.",
  
  "custom-postcards": "Hand out rich, full-color Custom Postcards at your event table to advertise promotions, catalog your services, or distribute coupons. Printed in high definition on heavy 14pt gloss cover paper, they feel substantial and professional. Choose between matte or high-gloss front finishes and custom sizes to create flyers, handouts, or mailers that prompt action from potential clients."
};

// Locate the "trade-show": category block in the registry
const tradeShowIndex = content.indexOf('"trade-show":');
if (tradeShowIndex === -1) {
  console.error('Could not find "trade-show": key in file');
  process.exit(1);
}

// Extract the section after "trade-show":
let afterTradeShow = content.substring(tradeShowIndex);

// Loop through each product and replace its description in the trade-show section
for (const [id, desc] of Object.entries(descriptions)) {
  // We search for `id: "${id}"` first, then find the subsequent `description: ` line
  const idRegex = new RegExp(`id:\\s*"${id}"`);
  const idMatch = afterTradeShow.match(idRegex);
  if (!idMatch) {
    console.error(`Could not find id: "${id}" inside trade-show section`);
    continue;
  }
  
  const idPos = idMatch.index;
  // Look for description within the next 200 characters
  const descSnippet = afterTradeShow.substring(idPos, idPos + 300);
  const descMatch = descSnippet.match(/description:\s*"[^"]*"/);
  if (!descMatch) {
    console.error(`Could not find description string for id "${id}"`);
    continue;
  }
  
  const oldDescString = descMatch[0];
  const newDescString = `description: "${desc.replace(/"/g, '\\"')}"`;
  
  // Replace only this specific occurrence
  const targetSnippet = descSnippet.replace(oldDescString, newDescString);
  afterTradeShow = afterTradeShow.substring(0, idPos) + targetSnippet + afterTradeShow.substring(idPos + 300);
  console.log(`Updated description for product: ${id}`);
}

// Re-assemble content
content = content.substring(0, tradeShowIndex) + afterTradeShow;

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated registry descriptions!');
