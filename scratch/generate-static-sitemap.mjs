import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const registryPath = path.resolve(__dirname, "../src/lib/productsRegistry.ts");
const outputPath = path.resolve(__dirname, "../public/sitemap.xml");

if (!fs.existsSync(registryPath)) {
  console.error("productsRegistry.ts not found!");
  process.exit(1);
}

const registryContent = fs.readFileSync(registryPath, "utf8");

// Parse categories and products
const categories = [
  "custom-signs",
  "custom-banners",
  "custom-flags",
  "vehicle-signs",
  "trade-show",
  "custom-decals",
  "marketing-materials",
  "promotional-products"
];

const baseUrl = "https://nano-signs.com";
const currentDate = new Date().toISOString().split("T")[0];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage -->
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
`;

// Static custom sign sub-pages
const staticSigns = [
  "a-frame-signs",
  "acrylic-signs",
  "aluminum-signs",
  "coroplast-signs",
  "foam-board-signs",
  "parking-signs",
  "real-estate-panels",
  "window-signs",
  "yard-signs"
];
for (const sign of staticSigns) {
  xml += `  <url>
    <loc>${baseUrl}/custom-signs/${sign}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
}

// Category pages and dynamic products
for (const cat of categories) {
  // Add category page
  xml += `  <url>
    <loc>${baseUrl}/${cat}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
`;

  // Skip custom-signs because they are static sub-pages
  if (cat === "custom-signs") continue;

  // Find products in this category block
  const catRegex = new RegExp(`"${cat}"|'${cat}'\\s*:\\s*\\{([\\s\\S]*?)\\}`, 'i');
  // We can just extract product IDs for simplicity
  // Products are listed as: id: "vinyl-banners", or similar. Let's find product IDs
  // To keep it simple, we can scan products from the registry content for this category.
  // Let's do a simple extraction: find occurrences of id: "..." in products block.
}

// Let's write an accurate parser or manually define products for reliability.
// Let's manually define the product list because we want it to be 100% accurate and fast.
const productsMap = {
  "custom-banners": ["vinyl-banners", "fabric-banners", "mesh-banners", "canvas-banners", "roll-up-banners", "step-and-repeat-banners", "pole-banners"],
  "custom-flags": ["feather-flags", "teardrop-flags", "straight-flags", "nylon-flags", "pennant-flags", "garden-flags"],
  "vehicle-signs": ["bumper-stickers", "license-plates", "car-door-decals", "car-window-decals", "bumper-magnets"],
  "trade-show": ["table-runners", "fitted-tablecloths", "round-tablecloths", "stretch-tablecloth", "pop-up-displays", "tension-fabric-displays", "step-repeat-banners", "custom-canopy-tents"],
  "custom-decals": ["sheet-stickers", "die-cut-stickers", "kiss-cut-stickers", "clear-stickers", "wall-decals", "window-decals", "floor-decals"],
  "marketing-materials": ["business-cards", "postcards", "flyers-brochures", "presentation-folders", "rack-cards", "door-hangers"],
  "promotional-products": ["custom-t-shirts", "coffee-mugs", "tote-bags", "pens", "notebooks", "keychains", "fridge-magnets"]
};

for (const [cat, products] of Object.entries(productsMap)) {
  for (const prod of products) {
    xml += `  <url>
      <loc>${baseUrl}/${cat}/${prod}</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.6</priority>
    </url>
`;
  }
}

xml += `</urlset>`;

fs.writeFileSync(outputPath, xml, "utf8");
console.log("Static sitemap.xml generated successfully in public folder!");
