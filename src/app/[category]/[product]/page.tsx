import React from "react";
import { notFound } from "next/navigation";
import { SignProductPage } from "@/components/SignProductPage";
import { PRODUCTS_REGISTRY } from "@/lib/productsRegistry";

interface PageProps {
  params: Promise<{
    category: string;
    product: string;
  }>;
}

// Categories that have their own static product sub-pages (e.g. custom-signs/yard-signs/page.tsx)
// These must be excluded from generateStaticParams to avoid route conflicts.
const STATIC_PRODUCT_CATEGORIES = new Set(["custom-signs"]);

export async function generateStaticParams() {
  const paths: { category: string; product: string }[] = [];

  for (const category of Object.keys(PRODUCTS_REGISTRY)) {
    if (STATIC_PRODUCT_CATEGORIES.has(category)) {
      continue;
    }
    const categoryData = PRODUCTS_REGISTRY[category];
    for (const product of categoryData.products) {
      paths.push({
        category: category,
        product: product.id,
      });
    }
  }
  return paths;
}

export const dynamicParams = false;


export default async function ProductConfiguratorPage({ params }: PageProps) {
  const { category, product } = await params;
  const decodedCategory = decodeURIComponent(category);
  const decodedProduct = decodeURIComponent(product);

  const categoryData = PRODUCTS_REGISTRY[decodedCategory];
  if (!categoryData) {
    notFound();
  }

  const productData = categoryData.products.find((p) => p.id === decodedProduct);
  if (!productData) {
    notFound();
  }

  // Render the pre-configured product layout page with dynamic description
  const configWithDesc = {
    ...productData.config,
    description: productData.config.description || productData.description
  };

  return <SignProductPage cfg={configWithDesc} />;
}
