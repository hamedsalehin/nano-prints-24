import { MetadataRoute } from "next";
import { PRODUCTS_REGISTRY } from "@/lib/productsRegistry";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nano-signs.com";

  // 1. Homepage
  const sitemaps: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];

  // 2. Static Sign Product Pages
  const staticSignSlugs = [
    "a-frame-signs",
    "acrylic-signs",
    "aluminum-signs",
    "coroplast-signs",
    "foam-board-signs",
    "parking-signs",
    "real-estate-signs",
    "window-signs",
    "yard-signs",
  ];
  for (const slug of staticSignSlugs) {
    sitemaps.push({
      url: `${baseUrl}/custom-signs/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  // 3. Dynamic Category Pages
  for (const category of Object.keys(PRODUCTS_REGISTRY)) {
    sitemaps.push({
      url: `${baseUrl}/${category}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    });

    // Exclude custom-signs subproducts as they are statically covered above
    if (category === "custom-signs") continue;

    // 4. Dynamic Product Pages
    const categoryData = PRODUCTS_REGISTRY[category];
    for (const product of categoryData.products) {
      sitemaps.push({
        url: `${baseUrl}/${category}/${product.id}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.6,
      });
    }
  }

  return sitemaps;
}
