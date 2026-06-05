"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const giftProducts = [
  {
    id: "metal-prints",
    name: "Metal Prints",
    price: "Starting at $28.51",
    image: "https://www.buildasign.com/0086744_metal-prints_360.png",
    href: "/gifts/metal-prints",
  },
  {
    id: "acrylic-prints",
    name: "Acrylic Prints",
    price: "Starting at $39.91",
    image: "https://www.buildasign.com/0086741_acrylic-prints_360.png",
    href: "/gifts/acrylic-prints",
  },
  {
    id: "custom-mugs",
    name: "Custom Mugs",
    price: "Starting at $14.24",
    image: "https://www.buildasign.com/0086754_custom-mugs_360.jpeg",
    href: "/gifts/custom-mugs",
  },
  {
    id: "custom-photo-pillows",
    name: "Photo Pillows",
    price: "Starting at $29.99",
    image: "https://www.buildasign.com/0086762_photo-pillows_360.png",
    href: "/gifts/custom-photo-pillows",
  },
  {
    id: "custom-mouse-pads",
    name: "Custom Mouse Pad",
    price: "Starting at $16.49",
    image: "https://www.buildasign.com/0086759_custom-mouse-pad_360.png",
    href: "/gifts/custom-mouse-pads",
  },
  {
    id: "photo-blankets",
    name: "Photo Blankets",
    price: "Starting at $48.99",
    image: "https://www.buildasign.com/0086766_photo-blankets_360.png",
    href: "/gifts/photo-blankets",
  },
];

const faqs = [
  {
    q: "What are the best personalized gifts for any occasion?",
    a: "Personalized photo gifts like metal prints, mugs, and pillows make meaningful presents for birthdays, anniversaries, holidays, and more. They add a custom touch that feels thoughtful and unique.",
  },
  {
    q: "How long does it take to receive a custom gift order?",
    a: "Most personalized items are produced and shipped within a few business days. Exact delivery times vary depending on the product and shipping option selected at checkout.",
  },
  {
    q: "What photo quality is recommended for best results?",
    a: "For sharp, vibrant results, we recommend using high-resolution images (at least 150 DPI). This ensures your custom prints look as crisp and clear as possible.",
  },
  {
    q: "What if I’m not satisfied with my custom product?",
    a: "Absolutely. We want you to love your gift. If there's an issue with your order, our customer service team is here to help and ensure you’re completely satisfied.",
  },
];

export default function GiftsCategoryPage() {
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
            <span className="font-semibold text-gray-900">Gifts</span>
          </div>
        </div>

        {/* Hero Section Banner */}
        <section className="relative w-full lg:px-[48px] 3xl:px-[96px] pt-1">
          <div className="relative overflow-hidden rounded-xl">
            <picture>
              <source
                srcSet="https://www.buildasign.com/0084307_Desktop.jpeg"
                media="(min-width: 992px)"
              />
              <source
                srcSet="https://www.buildasign.com/0084308_Tablet.jpeg"
                media="(min-width: 481px)"
              />
              <img
                className="w-full h-[168px] lg:h-[400px] object-cover object-top pointer-events-none"
                src="https://www.buildasign.com/0084309_Mobile.jpeg"
                alt="Custom Photo Gifts Banner"
              />
            </picture>

            {/* Desktop Card Overlay */}
            <div className="hidden lg:block absolute top-1/2 transform -translate-y-1/2 left-[48px] z-10">
              <div className="bg-white rounded-xl shadow-xl p-10 flex flex-col items-center justify-center w-[450px] border border-gray-100">
                <div className="text-center font-poppins mb-6">
                  <h1 className="text-3xl font-extrabold text-gray-900 mb-2 leading-none">Gifts</h1>
                  <p className="text-lg text-gray-750 font-semibold leading-normal">
                    Make it Personal. Make it Perfect.
                  </p>
                </div>
                <div className="flex gap-3 w-full">
                  <Link
                    href="/gifts/metal-prints"
                    className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold px-5 py-3.5 rounded-lg text-center transition-colors text-sm font-poppins shadow-md"
                  >
                    Metal Prints
                  </Link>
                  <Link
                    href="/gifts/acrylic-prints"
                    className="flex-1 border-2 border-yellow-500 hover:bg-yellow-50/50 text-yellow-600 font-extrabold px-5 py-3.5 rounded-lg text-center transition-colors text-sm font-poppins"
                  >
                    Acrylic Prints
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Card Block (Underneath banner on mobile) */}
          <div className="lg:hidden w-full bg-white p-5 text-center border-b">
            <h1 className="text-2xl font-bold font-poppins text-gray-900 mb-1">Gifts</h1>
            <p className="text-base text-gray-655 font-semibold font-poppins mb-4">
              Make it Personal. Make it Perfect.
            </p>
            <div className="flex gap-3 max-w-sm mx-auto">
              <Link
                href="/gifts/metal-prints"
                className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-4 py-3 rounded-lg text-center transition-colors text-sm font-poppins shadow"
              >
                Metal Prints
              </Link>
              <Link
                href="/gifts/acrylic-prints"
                className="flex-1 border-2 border-yellow-500 hover:bg-yellow-50/30 text-yellow-600 font-bold px-4 py-3 rounded-lg text-center transition-colors text-sm font-poppins"
              >
                Acrylic Prints
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
            {giftProducts.map((p) => (
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
                {/* Product Name & Starting Price */}
                <div className="mt-3 flex flex-col items-center justify-center min-h-[50px]">
                  <h3 className="text-base font-bold text-gray-900 leading-snug group-hover:text-yellow-600 transition-colors">
                    {p.name}
                  </h3>
                  <span className="text-xs font-semibold text-gray-500 mt-0.5">
                    {p.price}
                  </span>
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
                Gifts
              </h4>
              <p className="text-gray-700 leading-relaxed text-base font-opensans">
                Give the gift of memories with personalized creations that speak from the heart. Whether you're commemorating a special occasion or surprising someone just because, our custom gifts are made to stand out. Stunning metal and acrylic prints add a modern touch to favorite photos, turning moments into art. For something cozy and heartfelt, personalized home and desk items bring warmth to everyday spaces. Designed to be thoughtful, practical, and unforgettable, each gift adds a personal touch they’ll truly appreciate. Create something meaningful in just minutes.
              </p>
            </div>
            {/* Secondary Image */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md max-w-[532px] w-full justify-self-center lg:justify-self-end">
              <img
                src="https://www.buildasign.com/images/uploaded/Blankets/BAS_WEB_Redesign_Category_Gifts_Secondary.jpg"
                alt="Custom Photo Gifts Collage Showcase"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* FAQs Accordion Section */}
        <section className="py-12 px-[20px] lg:px-[48px] 3xl:px-[96px] bg-gray-50 border-t border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-poppins font-bold text-2xl lg:text-3xl text-gray-900 text-center mb-8">
              Gifts Frequently Asked Questions
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
              <span className="text-sm font-semibold text-gray-500 ml-2">4.9 / 5 (1,620 Reviews)</span>
            </div>
            <p className="text-gray-500 text-sm italic font-opensans">
              "Simply gorgeous! The metal prints are incredibly sharp and look so modern on our wall. The colors are very vibrant. We also ordered a photo blanket for my grandmother and she was so thrilled — it is super soft and cozy. Will buy again!"
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
