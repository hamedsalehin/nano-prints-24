"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const decalsProducts = [
  {
    id: "bumper-stickers",
    name: "Bumper Stickers",
    image: "https://www.buildasign.com/0085810_bumper-stickers_360.png",
    href: "/custom-decals/bumper-stickers",
  },
  {
    id: "car-door-decals",
    name: "Car Door Decals",
    image: "https://www.buildasign.com/0085984_car-door-decals_360.png",
    href: "/custom-decals/car-door-decals",
  },
  {
    id: "car-window-decals",
    name: "Car Window Decals",
    image: "https://www.buildasign.com/0085990_car-window-decals_360.png",
    href: "/custom-decals/car-window-decals",
  },
  {
    id: "window-decals",
    name: "Window Decals",
    image: "https://www.buildasign.com/0085949_window-decals_360.png",
    href: "/custom-decals/window-decals",
  },
  {
    id: "roll-labels",
    name: "Roll Labels",
    image: "https://www.buildasign.com/0086594_roll-labels_360.png",
    href: "/custom-decals/roll-labels",
  },
  {
    id: "window-clings",
    name: "Static Window Clings",
    image: "https://www.buildasign.com/0085814_static-window-clings_360.png",
    href: "/custom-decals/window-clings",
  },
  {
    id: "sheet-stickers",
    name: "Sheet Stickers",
    image: "https://www.buildasign.com/0086628_sheet-stickers_360.png",
    href: "/custom-decals/sheet-stickers",
  },
  {
    id: "return-address-labels",
    name: "Return Address Labels",
    image: "https://www.buildasign.com/0086632_return-address-labels_360.jpeg",
    href: "/custom-decals/return-address-labels",
  },
];

const faqs = [
  {
    q: "What type of decal material should I choose?",
    a: "It depends on your surface and how you plan to use the decal. Clear decals are great for glass and offer a sleek, see-through look where the background shows through. Opaque decals have a solid white backing, making colors pop and providing full coverage making them ideal for most surfaces and long-term use. Static clings use no adhesive, are easy to reposition, and perfect for short-term use on smooth surfaces like windows. For bulk needs, sticker sheets and roll labels offer flexible, efficient options.",
  },
  {
    q: "Can these decals be used indoors and outdoors?",
    a: "Yes! We offer materials that suit both environments. Opaque vinyl and clear decals are durable enough for outdoor use, while static clings and wall decals are best for indoor or short-term outdoor placement.",
  },
  {
    q: "What surfaces do your decals stick to best?",
    a: "All our decals are made for smooth, non-porous surfaces like glass, metal, painted walls, and plastic. For best results, apply to clean, flat areas free of dust or texture.",
  },
  {
    q: "Are custom decals easy to apply and remove?",
    a: "Yes! Most apply with simple pressure and can be removed without damage. Static clings are especially easy to reposition or remove, while adhesive decals may require heat or adhesive remover for clean removal. Sticker sheets and roll labels are designed for peel-and-stick convenience and are easy to handle in bulk.",
  },
  {
    q: "Can I upload my own design or logo?",
    a: "Absolutely! You can upload your own artwork, logos, or images, or start with one of our pre-designed templates. Our design tool lets you customize text, colors, and layout—no design experience needed.",
  },
  {
    q: "What decal sizes do you offer?",
    a: "We offer a wide range of standard and custom sizes to fit your needs; whether it's a small window graphic or a large wall display. You can select your preferred size on each product page or enter a custom dimension if needed.",
  },
];

export default function DecalsCategoryPage() {
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
          <div className="max-w-7xl mx-auto px-[20px] lg:px-[48px] 3xl:px-[96px] py-3 flex items-center gap-2 text-sm text-gray-500 font-[&#x27;Open_Sans&#x27;]">
            <Link href="/" className="hover:text-yellow-650 transition-colors">Home</Link>
            <span>/</span>
            <span className="font-semibold text-gray-900">Custom Decals</span>
          </div>
        </div>

        {/* Hero Section Banner */}
        <section className="relative w-full lg:px-[48px] 3xl:px-[96px] pt-1">
          <div className="relative overflow-hidden rounded-xl">
            <picture>
              <source
                srcSet="https://www.buildasign.com/0084348_Desktop.jpeg"
                media="(min-width: 992px)"
              />
              <source
                srcSet="https://www.buildasign.com/0084349_Tablet.jpeg"
                media="(min-width: 481px)"
              />
              <img
                className="w-full h-[168px] lg:h-[400px] object-cover object-top pointer-events-none"
                src="https://www.buildasign.com/0084350_Mobile.jpeg"
                alt="Custom Stickers and Decals Banner"
              />
            </picture>

            {/* Desktop Card Overlay */}
            <div className="hidden lg:block absolute top-1/2 transform -translate-y-1/2 left-[48px] z-10">
              <div className="bg-white rounded-xl shadow-xl p-10 flex flex-col items-center justify-center w-[450px] border border-gray-100">
                <div className="text-center font-poppins mb-6">
                  <h1 className="text-3xl font-extrabold text-gray-900 mb-2 leading-none">Custom Decals</h1>
                  <p className="text-lg text-gray-700 font-semibold leading-normal">
                    Design It. Stick It. Leave Your Mark.
                  </p>
                </div>
                <div className="flex gap-3 w-full">
                  <Link
                    href="/custom-decals/window-decals"
                    className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold px-5 py-3.5 rounded-lg text-center transition-colors text-sm font-poppins shadow-md"
                  >
                    Window Decals
                  </Link>
                  <Link
                    href="/custom-decals/bumper-stickers"
                    className="flex-1 border-2 border-yellow-500 hover:bg-yellow-50/50 text-yellow-600 font-extrabold px-5 py-3.5 rounded-lg text-center transition-colors text-sm font-poppins"
                  >
                    Bumper Stickers
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Card Block (Underneath banner on mobile) */}
          <div className="lg:hidden w-full bg-white p-5 text-center border-b">
            <h1 className="text-2xl font-bold font-poppins text-gray-900 mb-1">Custom Decals</h1>
            <p className="text-base text-gray-600 font-semibold font-poppins mb-4">
              Design It. Stick It. Leave Your Mark.
            </p>
            <div className="flex gap-3 max-w-sm mx-auto">
              <Link
                href="/custom-decals/window-decals"
                className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-4 py-3 rounded-lg text-center transition-colors text-sm font-poppins shadow"
              >
                Window Decals
              </Link>
              <Link
                href="/custom-decals/bumper-stickers"
                className="flex-1 border-2 border-yellow-500 hover:bg-yellow-50/30 text-yellow-600 font-bold px-4 py-3 rounded-lg text-center transition-colors text-sm font-poppins"
              >
                Bumper Stickers
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
            {decalsProducts.map((p) => (
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
                Custom Decals
              </h4>
              <p className="text-gray-700 leading-relaxed text-base font-opensans">
                Discover our full lineup of custom decal solutions, including vinyl decals, static clings, sticker sheets, and roll labels. Perfect for use indoors or out, our decals are built to last and ideal for everything from storefront displays to vehicle branding and promotional giveaways. Easily personalize your decals with our intuitive design tools by uploading your own artwork or choosing from our ready-made templates to get started today.
              </p>
            </div>
            {/* Secondary Image */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md max-w-[532px] w-full justify-self-center lg:justify-self-end">
              <img
                src="https://www.buildasign.com/images/uploaded/Redesign/BAS_WEB_Redesign_Category_DecalsClings_Secondary.jpg"
                alt="Custom Decals Visual Layout"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* FAQs Accordion Section */}
        <section className="py-12 px-[20px] lg:px-[48px] 3xl:px-[96px] bg-gray-50 border-t border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-poppins font-bold text-2xl lg:text-3xl text-gray-900 text-center mb-8">
              Custom Decals Frequently Asked Questions
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
              <span className="text-sm font-semibold text-gray-500 ml-2">4.9 / 5 (1,840 Reviews)</span>
            </div>
            <p className="text-gray-500 text-sm italic font-opensans">
              "The custom window decals turned out perfectly! Extremely easy to apply without bubbles, and the resolution is incredibly sharp. Will buy again!"
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
