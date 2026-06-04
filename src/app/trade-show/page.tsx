"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const tradeshowProducts = [
  {
    id: "tablecloths",
    name: "Custom Tablecloths",
    image: "https://www.buildasign.com/0086553_tablecloths_360.png",
    href: "/trade-show/tablecloths",
  },
  {
    id: "table-runners",
    name: "Table Runners",
    image: "https://www.buildasign.com/0086575_table-runners_360.jpeg",
    href: "/trade-show/table-runners",
  },
  {
    id: "fitted-tablecloths",
    name: "Fitted Tablecloths",
    image: "https://www.buildasign.com/0086560_fitted-tablecloths_360.png",
    href: "/trade-show/fitted-tablecloths",
  },
  {
    id: "round-tablecloths",
    name: "Round Tablecloths",
    image: "https://www.buildasign.com/0086566_round-tablecloths_360.png",
    href: "/trade-show/round-tablecloths",
  },
  {
    id: "stretch-tablecloths",
    name: "Stretch Tablecloth",
    image: "https://www.buildasign.com/0086570_stretch-tablecloth_360.png",
    href: "/trade-show/stretch-tablecloths",
  },
  {
    id: "pop-up-displays",
    name: "Pop-Up Displays",
    image: "https://www.buildasign.com/0086582_pop-up-displays_360.png",
    href: "/trade-show/pop-up-displays",
  },
  {
    id: "tension-fabric-displays",
    name: "Tension Fabric Displays",
    image: "https://www.buildasign.com/0086489_tension-fabric-displays_360.png",
    href: "/trade-show/tension-fabric-displays",
  },
  {
    id: "step-and-repeat-banner",
    name: "Step & Repeat Banners",
    image: "https://www.buildasign.com/0086470_step-repeat-banners_360.png",
    href: "/trade-show/step-and-repeat-banner",
  },
  {
    id: "retractable-banners",
    name: "Retractable Banner",
    image: "https://www.buildasign.com/0085822_retractable-banner_360.png",
    href: "/trade-show/retractable-banners",
  },
  {
    id: "x-banner-stand",
    name: "X-Banners",
    image: "https://www.buildasign.com/0086478_x-banners_360.png",
    href: "/trade-show/x-banner-stand",
  },
  {
    id: "tabletop-retractable-banners",
    name: "Tabletop Retractable Banners",
    image: "https://www.buildasign.com/0086578_tabletop-retractable-banners_360.png",
    href: "/trade-show/tabletop-retractable-banners",
  },
  {
    id: "custom-canopy-tents",
    name: "Custom Canopies",
    image: "https://www.buildasign.com/0088150_custom-canopy-tents_360.png",
    href: "/trade-show/custom-canopy-tents",
  },
  {
    id: "feather-flags",
    name: "Feather Flags",
    image: "https://www.buildasign.com/0085996_feather-flags_360.png",
    href: "/trade-show/feather-flags",
  },
  {
    id: "vinyl-banners",
    name: "Vinyl Banners",
    image: "https://www.buildasign.com/0085750_vinyl-banners_360.png",
    href: "/trade-show/vinyl-banners",
  },
  {
    id: "business-cards",
    name: "Business Cards",
    image: "https://www.buildasign.com/0085790_business-cards_360.jpeg",
    href: "/trade-show/business-cards",
  },
  {
    id: "custom-postcards",
    name: "Postcards",
    image: "https://www.buildasign.com/0086663_postcards_360.png",
    href: "/trade-show/custom-postcards",
  },
];

const faqs = [
  {
    q: "Can I customize designs with my logo and brand colors?",
    a: "Yes! All of our tradeshow products are fully customizable with your logo, brand colors, messaging, and graphics. You can upload your own artwork or use our easy online design tools. Need help? Our professional design team is here to assist, whether you need a quick layout fix or a fully custom design, we’ve got you covered. 1-800-330-9622",
  },
  {
    q: "Do you offer portable and easy-to-set-up display options?",
    a: "Yes! Many of our products; like retractable banners, pop up displays, and tabletop signage; are lightweight, portable, and quick to assemble, making setup and teardown fast and stress-free.",
  },
  {
    q: "How long does it take to receive my order?",
    a: "Production and shipping times vary depending on the product and customization, but most orders ship within a few business days. Expedited options are available at checkout.",
  },
  {
    q: "What should I include in my tradeshow booth setup?",
    a: "A well-rounded booth typically includes branded table covers, vertical signage like banners or displays, informational handouts (such as postcards or business cards), and high-impact elements like custom tents or backdrops for visibility.",
  },
  {
    q: "What if I need help choosing the right products for my event?",
    a: "Our team is here to help! If you're not sure which products best suit your booth space, goals, or budget, our event specialists can walk you through options and make personalized recommendations based on your needs. 1-800-330-9622",
  },
];

export default function TradeshowPage() {
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
            <span className="font-semibold text-gray-900">Tradeshow</span>
          </div>
        </div>

        {/* Hero Section Banner */}
        <section className="relative w-full lg:px-[48px] 3xl:px-[96px] pt-1">
          <div className="relative overflow-hidden rounded-xl">
            <picture>
              <source
                srcSet="https://www.buildasign.com/0083714_BAS_WEB_071125_Category_Tradeshow_MCA_Desktop.jpeg"
                media="(min-width: 992px)"
              />
              <source
                srcSet="https://www.buildasign.com/0083715_BAS_WEB_071125_Category_Tradeshow_MCA_Tablet.jpeg"
                media="(min-width: 481px)"
              />
              <img
                className="w-full h-[168px] lg:h-[400px] object-cover object-top pointer-events-none"
                src="https://www.buildasign.com/0083717_BAS_WEB_071125_Category_Tradeshow_MCA_Mobile.jpeg"
                alt="Tradeshow Event Displays Banner"
              />
            </picture>

            {/* Desktop Card Overlay */}
            <div className="hidden lg:block absolute top-1/2 transform -translate-y-1/2 left-[48px] z-10">
              <div className="bg-white rounded-xl shadow-xl p-10 flex flex-col items-center justify-center w-[450px] border border-gray-100">
                <div className="text-center font-poppins mb-6">
                  <h1 className="text-3xl font-extrabold text-gray-900 mb-2 leading-none">Tradeshow</h1>
                  <p className="text-lg text-gray-700 font-semibold leading-normal">
                    Where First Impressions Get Noticed.
                  </p>
                </div>
                <div className="flex gap-3 w-full">
                  <Link
                    href="/trade-show/tablecloths"
                    className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold px-5 py-3.5 rounded-lg text-center transition-colors text-sm font-poppins shadow-md"
                  >
                    Tablecloths
                  </Link>
                  <Link
                    href="/trade-show/retractable-banners"
                    className="flex-1 border-2 border-yellow-500 hover:bg-yellow-50/50 text-yellow-600 font-extrabold px-5 py-3.5 rounded-lg text-center transition-colors text-sm font-poppins"
                  >
                    Retractable Banners
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Card Block (Underneath banner on mobile) */}
          <div className="lg:hidden w-full bg-white p-5 text-center border-b">
            <h1 className="text-2xl font-bold font-poppins text-gray-900 mb-1">Tradeshow</h1>
            <p className="text-base text-gray-600 font-semibold font-poppins mb-4">
              Where First Impressions Get Noticed.
            </p>
            <div className="flex gap-3 max-w-sm mx-auto">
              <Link
                href="/trade-show/tablecloths"
                className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-4 py-3 rounded-lg text-center transition-colors text-sm font-poppins shadow"
              >
                Tablecloths
              </Link>
              <Link
                href="/trade-show/retractable-banners"
                className="flex-1 border-2 border-yellow-500 hover:bg-yellow-50/30 text-yellow-600 font-bold px-4 py-3 rounded-lg text-center transition-colors text-sm font-poppins"
              >
                Retractable Banners
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
            {tradeshowProducts.map((p) => (
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
                Tradeshow
              </h4>
              <p className="text-gray-700 leading-relaxed text-base font-opensans">
                Your tradeshow booth should do more than fill space, it should tell your brand story. With a full range of customizable displays, signage, and print materials, we help you make every event count. From table covers to backdrops, banners to business cards, our products are designed to build cohesion, attract attention, and drive engagement. Whether you're setting up for a local fair or a national expo, we've got everything you need to show up strong and stay top of mind.
              </p>
            </div>
            {/* Secondary Image */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md max-w-[532px] w-full justify-self-center lg:justify-self-end">
              <img
                src="https://www.buildasign.com/images/uploaded/Redesign/NPIB-34422-Tradeshow-Hero-001_en-gb.png"
                alt="Tradeshow Booth Design Visual"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* FAQs Accordion Section */}
        <section className="py-12 px-[20px] lg:px-[48px] 3xl:px-[96px] bg-gray-50 border-t border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-poppins font-bold text-2xl lg:text-3xl text-gray-900 text-center mb-8">
              Tradeshow Frequently Asked Questions
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
              <span className="text-sm font-semibold text-gray-500 ml-2">4.9 / 5 (3,240 Reviews)</span>
            </div>
            <p className="text-gray-500 text-sm italic font-opensans">
              "The table cover and pop-up backdrop banner printed beautifully! Setup took seconds and our logo colors matched perfectly."
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
