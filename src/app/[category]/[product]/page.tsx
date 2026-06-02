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

  // Render the pre-configured product layout page
  return <SignProductPage cfg={productData.config} />;
}
