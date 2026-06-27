import { ProductPageConfig } from "@/components/SignProductPage";

export interface RegistryProduct {
  id: string;
  name: string;
  description: string;
  image: string;
  hoverImage?: string;
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
  breadcrumbLabel?: string;
  products: RegistryProduct[];
  categoryDescriptionText?: string;
  categorySecondaryImage?: string;
  faqs?: { q: string; a: string }[];
  reviewRating?: string;
  reviewCount?: string;
  reviewQuote?: string;
}

import { customBanners } from "./registry/banners";
import { customFlags } from "./registry/flags";
import { vehicleSigns } from "./registry/vehicle";
import { tradeshow } from "./registry/tradeshow";
import { customDecals } from "./registry/decals";
import { signAccessories } from "./registry/accessories";
import { marketingMaterials } from "./registry/marketing";
import { promotionalProducts } from "./registry/promotional";
import { customSigns } from "./registry/signs";

export const PRODUCTS_REGISTRY: Record<string, RegistryCategory> = {
  "custom-banners": customBanners,
  "custom-flags": customFlags,
  "vehicle-signs": vehicleSigns,
  "trade-show": tradeshow,
  "custom-decals": customDecals,
  "sign-accessories": signAccessories,
  "marketing-materials": marketingMaterials,
  "promotional-products": promotionalProducts,
  "custom-signs": customSigns,
};
