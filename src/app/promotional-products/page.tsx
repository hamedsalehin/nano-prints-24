"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const promoProducts = [
  {
    id: "t-shirts",
    name: "Custom T-Shirts",
    image: "https://www.buildasign.com/0085750_vinyl-banners_360.png",
    href: "/promotional-products/t-shirts",
  },
  {
    id: "mugs",
    name: "Coffee Mugs & Tumblers",
    image: "https://www.buildasign.com/0086638_ceramic-mugs_360.png",
    href: "/promotional-products/mugs",
  },
  {
    id: "tote-bags",
    name: "Canvas Tote Bags",
    image: "https://www.buildasign.com/0086644_tote-bags_360.png",
    href: "/promotional-products/tote-bags",
  },
  {
    id: "pens",
    name: "Custom Logo Pens",
    image: "https://www.buildasign.com/0086650_pens_360.png",
    href: "/promotional-products/pens",
  },
  {
    id: "notebooks",
    name: "Custom Journals",
    image: "https://www.buildasign.com/0086656_notebooks_360.png",
    href: "/promotional-products/notebooks",
  },
  {
    id: "keychains",
    name: "Custom Logo Keychains",
    image: "https://www.buildasign.com/0086660_keychains_360.png",
    href: "/promotional-products/keychains",
  },
  {
    id: "fridge-magnets",
    name: "Custom Fridge Magnets",
    image: "https://www.buildasign.com/0086664_fridge-magnets_360.png",
    href: "/promotional-products/fridge-magnets",
  },
];

const faqs = [
  {
    q: "Is there a minimum order quantity (MOQ) for promotional products?",
    a: "Many of our promotional products, including custom t-shirts, mugs, and journals, have no minimum order quantity—you can order just a single item! For items like custom pens or fridge magnets, we sell them in convenient pack sizes (e.g., packs of 50 or 100) to ensure you get the absolute best bulk rates.",
  },
  {
    q: "What print file formats do you recommend for logos?",
    a: "For the absolute sharpest print results, we recommend uploading vector files such as PDF, EPS, or AI. High-resolution PNG and JPG files are also supported. Our design check process automatically verifies that your files have sufficient resolution before printing begins.",
  },
  {
    q: "Are ceramic mugs and tumblers dishwasher safe?",
    a: "Yes! Our custom ceramic mugs are printed using industrial dye-sublimation wraps that are fully microwave and dishwasher safe, meaning your design won't fade or peel over time.",
  },
  {
    q: "Can I get a physical proof before ordering in bulk?",
    a: "We provide instant, high-fidelity digital previews during the configuration process. For massive orders, you can order a single unit of mugs, t-shirts, or journals to evaluate the print texture and color matching before proceeding with the entire bulk package.",
  },
  {
    q: "How does volume discounting work for corporate swag?",
    a: "Our bulk discount tiers are applied automatically as you increase the quantity. You can save up to 55% on items like pens, magnets, and keychains when purchasing in larger volumes for conventions or corporate onboarding programs.",
  },
];

export default function PromotionalProductsCategoryPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Header />

      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-[20px] lg:px-[48px] 3xl:px-[96px] py-3 flex items-center gap-2 text-sm text-gray-500 font-['Open_Sans']">
            <Link href="/" className="hover:text-yellow-650 transition-colors">Home</Link>
            <span>/</span>
            <span className="font-semibold text-gray-900">Promotional Products</span>
          </div>
        </div>

        {/* Hero Section Banner */}
        <section className="relative w-full lg:px-[48px] 3xl:px-[96px] pt-1">
          <div className="relative overflow-hidden rounded-xl">
            <picture>
              <source
                srcSet="https://www.buildasign.com/images/uploaded/BAS_WEB_071125_Category_Flags_Secondary.jpg"
                media="(min-width: 992px)"
              />
              <img
                className="w-full h-[168px] lg:h-[400px] object-cover object-center pointer-events-none"
                src="https://www.buildasign.com/images/uploaded/BAS_WEB_071125_Category_Flags_Secondary.jpg"
                alt="Custom Promotional Products Swag and Merch Banner"
              />
            </picture>

            {/* Desktop Card Overlay */}
            <div className="hidden lg:block absolute top-1/2 transform -translate-y-1/2 left-[48px] z-10">
              <div className="bg-white rounded-xl shadow-xl p-10 flex flex-col items-center justify-center w-[450px] border border-gray-100">
                <div className="text-center font-poppins mb-6">
                  <h1 className="text-3xl font-extrabold text-gray-900 mb-2 leading-none">Promotional Swag</h1>
                  <p className="text-lg text-gray-750 font-semibold leading-normal">
                    Brand It. Share It. Grow It.
                  </p>
                </div>
                <div className="flex gap-3 w-full">
                  <Link
                    href="/promotional-products/t-shirts"
                    className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold px-5 py-3.5 rounded-lg text-center transition-colors text-sm font-poppins shadow-md"
                  >
                    Custom T-Shirts
                  </Link>
                  <Link
                    href="/promotional-products/mugs"
                    className="flex-1 border-2 border-yellow-500 hover:bg-yellow-50/50 text-yellow-600 font-extrabold px-5 py-3.5 rounded-lg text-center transition-colors text-sm font-poppins"
                  >
                    Logo Mugs
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Card Block (Underneath banner on mobile) */}
          <div className="lg:hidden w-full bg-white p-5 text-center border-b">
            <h1 className="text-2xl font-bold font-poppins text-gray-900 mb-1">Promotional Swag</h1>
            <p className="text-base text-gray-650 font-semibold font-poppins mb-4">
              Brand It. Share It. Grow It.
            </p>
            <div className="flex gap-3 max-w-sm mx-auto">
              <Link
                href="/promotional-products/t-shirts"
                className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-4 py-3 rounded-lg text-center transition-colors text-sm font-poppins shadow"
              >
                Custom T-Shirts
              </Link>
              <Link
                href="/promotional-products/mugs"
                className="flex-1 border-2 border-yellow-500 hover:bg-yellow-50/30 text-yellow-600 font-bold px-4 py-3 rounded-lg text-center transition-colors text-sm font-poppins"
              >
                Logo Mugs
              </Link>
            </div>
          </div>
        </section>

        {/* Browse Products Grid */}
        <section className="w-full px-[20px] lg:px-[48px] 3xl:px-[96px] py-10">
          <div className="mb-6">
            <h2 className="font-poppins font-semibold text-2xl lg:text-3xl text-gray-900">
              Browse Products
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 font-opensans">
            {promoProducts.map((p) => (
              <Link
                key={p.id}
                href={p.href}
                className="flex flex-col items-center justify-start group text-center cursor-pointer"
              >
                {/* Image Container with Yellow background on hover */}
                <div className="relative w-full aspect-square p-[15px] bg-[#F6F6F6] rounded-xl transition-all duration-300 ease-in-out group-hover:bg-yellow-400 border border-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    alt={p.name}
                    src={p.image}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
                {/* Product Name */}
                <div className="mt-3 flex items-center justify-center min-h-[40px]">
                  <h3 className="text-base font-bold text-gray-900 leading-snug group-hover:text-yellow-600 transition-colors">
                    {p.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Two-Column Copy Section */}
        <section className="py-12 px-[20px] lg:px-[48px] 3xl:px-[96px] bg-white border-t border-gray-150">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Text description */}
            <div className="flex flex-col text-left">
              <h4 className="font-poppins font-bold text-2xl lg:text-3xl text-gray-900 mb-4">
                Corporate Swag & Promotional Merch
              </h4>
              <p className="text-gray-700 leading-relaxed text-base font-opensans">
                Elevate your brand presentation with custom-branded promotional merchandise. Perfect for outfitting your team, gifting key accounts, or distributing in high volumes at tradeshow booths. From mugs and writing instruments to canvas tote bags and apparel, we utilize premium print bonding techniques to keep your branding crisp, clear, and durable through heavy day-to-day use.
              </p>
            </div>
            {/* Secondary Image */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md max-w-[532px] w-full justify-self-center lg:justify-self-end">
              <img
                src="https://www.buildasign.com/images/uploaded/Redesign/BAS_WEB_Redesign_Category_DecalsClings_Secondary.jpg"
                alt="Custom Promotional Swag Collections"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* FAQs Accordion Section */}
        <section className="py-12 px-[20px] lg:px-[48px] 3xl:px-[96px] bg-gray-50 border-t border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-poppins font-bold text-2xl lg:text-3xl text-gray-900 text-center mb-8">
              Promotional Products Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-5 text-left font-bold text-base lg:text-lg text-gray-800 hover:bg-gray-50 transition-colors"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-gray-500 shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="p-5 border-t border-gray-100 bg-gray-50/50">
                        <p className="text-gray-700 leading-relaxed text-sm lg:text-base font-opensans">
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Customer Highlights Snippet */}
        <section className="py-10 px-[20px] lg:px-[48px] 3xl:px-[96px] bg-white text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold font-poppins mb-6">Customer Highlights</h3>
            <div className="flex justify-center items-center gap-1.5 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-5 h-5 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-sm font-semibold text-gray-500 ml-2">4.9 / 5 (1,480 Reviews)</span>
            </div>
            <p className="text-gray-500 text-sm italic font-opensans">
              "We ordered 500 custom logo pens and a couple dozen ceramic mugs for our annual summit giveaway bags. The logo resolution is incredibly sharp, ink is very smooth, and the mugs look amazing. Our delegates loved them."
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
