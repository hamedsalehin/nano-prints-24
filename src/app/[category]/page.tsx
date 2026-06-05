import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PRODUCTS_REGISTRY } from "@/lib/productsRegistry";
import { FaqAccordion } from "./FaqAccordion";

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  const categories = Object.keys(PRODUCTS_REGISTRY);
  return categories.map((category) => ({
    category: category,
  }));
}

export const dynamicParams = false;


export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const decodedCategory = decodeURIComponent(category);
  const categoryData = PRODUCTS_REGISTRY[decodedCategory];

  if (!categoryData) {
    notFound();
  }

  const firstTwoProducts = categoryData.products.slice(0, 2);


  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />

      <main className="flex-grow">
        {/* Breadcrumbs */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-2 text-sm text-gray-500 font-medium">
            <Link href="/" className="hover:text-green-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-900 capitalize font-semibold">{decodedCategory.replace("-", " ")}</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative w-full overflow-hidden bg-gray-150">
          {/* Responsive picture */}
          <picture className="block w-full">
            {categoryData.tabletHeroImage && (
              <source srcSet={categoryData.tabletHeroImage} media="(min-width: 640px) and (max-width: 1024px)" />
            )}
            {categoryData.mobileHeroImage && (
              <source srcSet={categoryData.mobileHeroImage} media="(max-width: 639px)" />
            )}
            <img
              src={categoryData.heroImage}
              alt={categoryData.title}
              className="w-full h-[220px] sm:h-[300px] lg:h-[400px] object-cover object-center pointer-events-none"
            />
          </picture>

          {/* Floating Left Card Overlay (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/2 left-[8%] transform -translate-y-1/2 z-10">
            <div className="bg-white px-10 py-8 rounded-xl shadow-xl border border-gray-100 flex flex-col items-center justify-center max-w-[480px]">
              <h1 className="text-3xl font-extrabold font-poppins text-gray-900 mb-3 text-center">
                {categoryData.title}
              </h1>
              <p className="text-lg text-gray-650 font-medium text-center mb-6 leading-tight">
                {categoryData.heroSubtitle || "All-Weather. Quick Production. Affordable."}
              </p>
              
              {/* Dynamic CTAs based on first two products */}
              <div className="flex gap-4 w-full justify-center mb-4">
                {firstTwoProducts[0] && (
                  <Link
                    href={`/${decodedCategory}/${firstTwoProducts[0].id}`}
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-sm px-6 py-3 rounded-lg text-center transition-colors flex-1 shadow font-poppins"
                  >
                    {firstTwoProducts[0].name}
                  </Link>
                )}
                {firstTwoProducts[1] && (
                  <Link
                    href={`/${decodedCategory}/${firstTwoProducts[1].id}`}
                    className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold text-sm px-6 py-3 rounded-lg text-center transition-colors flex-1 font-poppins"
                  >
                    {firstTwoProducts[1].name}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Left Card equivalent (shown underneath the image) */}
        <section className="lg:hidden bg-white p-6 border-b text-center flex flex-col items-center">
          <h1 className="text-2xl font-bold font-poppins text-gray-900 mb-2">
            {categoryData.title}
          </h1>
          <p className="text-base text-gray-600 mb-4">
            {categoryData.heroSubtitle || "All-Weather. Quick Production. Affordable."}
          </p>
          <div className="flex gap-3 w-full max-w-[400px]">
            {firstTwoProducts[0] && (
              <Link
                href={`/${decodedCategory}/${firstTwoProducts[0].id}`}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-sm py-3 rounded-lg text-center transition-colors flex-1 shadow font-poppins"
              >
                {firstTwoProducts[0].name}
              </Link>
            )}
            {firstTwoProducts[1] && (
              <Link
                href={`/${decodedCategory}/${firstTwoProducts[1].id}`}
                className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold text-sm py-3 rounded-lg text-center transition-colors flex-1 font-poppins"
              >
                {firstTwoProducts[1].name}
              </Link>
            )}
          </div>
        </section>

        {/* Choose A Product Horizontal Bar */}
        <section className="max-w-7xl mx-auto px-4 py-6">
          <div className="border border-dashed border-yellow-400 bg-[#F6F6F6] rounded-xl p-4 lg:p-6 flex flex-col lg:flex-row items-center gap-4">
            <span className="font-poppins font-semibold text-lg text-yellow-600 whitespace-nowrap">
              Choose A Product:
            </span>
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 overflow-x-auto w-full py-1">
              {categoryData.products.map((prod) => (
                <Link
                  key={prod.id}
                  href={`/${decodedCategory}/${prod.id}`}
                  className="bg-white border border-gray-200 hover:border-yellow-400 hover:text-yellow-600 text-gray-700 font-semibold px-4 py-2 rounded-lg text-sm transition-all whitespace-nowrap shadow-sm"
                >
                  {prod.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Browse Products Grid */}
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="font-poppins font-bold text-2xl lg:text-3xl text-gray-900 mb-8">
              Browse Products
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {categoryData.products.map((product) => (
                <Link
                  key={product.id}
                  href={`/${decodedCategory}/${product.id}`}
                  className="group flex flex-col items-center justify-start text-center"
                >
                  {/* Image Container with zoom hover effect */}
                  <div className="w-full aspect-square bg-[#F6F6F6] rounded-xl p-4 flex items-center justify-center relative overflow-hidden transition-all border border-gray-100 group-hover:shadow-md">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain transition-transform duration-350 ease-out group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-base lg:text-lg font-bold text-gray-900 mt-4 leading-tight group-hover:text-yellow-600 transition-colors">
                    {product.name}
                  </h3>
                  <span className="text-sm font-semibold text-gray-500 mt-1">
                    {product.price}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Two-Column Copy Section */}
        {categoryData.categoryDescriptionText && (
          <section className="py-12 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text description */}
                <div className="flex flex-col">
                  <h2 className="font-poppins font-bold text-2xl lg:text-3xl text-gray-900 mb-5 capitalize">
                    {decodedCategory.replace("-", " ")}
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-base lg:text-lg font-medium">
                    {categoryData.categoryDescriptionText}
                  </p>
                </div>
                {/* Secondary Image */}
                {categoryData.categorySecondaryImage && (
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                    <img
                      src={categoryData.categorySecondaryImage}
                      alt={categoryData.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* FAQs Accordion Section */}
        {categoryData.faqs && categoryData.faqs.length > 0 && (
          <section className="py-12 bg-gray-50 border-t border-b border-gray-100">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="font-poppins font-bold text-2xl lg:text-3xl text-gray-900 text-center mb-8">
                Frequently Asked Questions
              </h2>
              <FaqAccordion faqs={categoryData.faqs} />
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
