"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const marketingProducts = [
  {
    id: "business-cards",
    name: "Business Cards",
    image: "https://www.buildasign.com/0085790_business-cards_360.jpeg",
    href: "/marketing-materials/business-cards",
  },
  {
    id: "postcards",
    name: "Custom Postcards",
    image: "https://www.buildasign.com/0086663_postcards_360.png",
    href: "/marketing-materials/postcards",
  },
  {
    id: "flyers",
    name: "Flyers & Brochures",
    image: "https://www.buildasign.com/0086669_flyers-brochures_360.png",
    href: "/marketing-materials/flyers",
  },
  {
    id: "door-hangers",
    name: "Door Hangers",
    image: "https://www.buildasign.com/0086684_door-hangers_360.png",
    href: "/marketing-materials/door-hangers",
  },
  {
    id: "folders",
    name: "Presentation Folders",
    image: "https://www.buildasign.com/0086700_presentation-folders_360.png",
    href: "/marketing-materials/folders",
  },
  {
    id: "rack-cards",
    name: "Rack Cards",
    image: "https://www.buildasign.com/0086692_rack-cards_360.png",
    href: "/marketing-materials/rack-cards",
  },
  {
    id: "table-tents",
    name: "Table Tents",
    image: "https://www.buildasign.com/0086720_table-tents_360.png",
    href: "/marketing-materials/table-tents",
  },
];

const faqs = [
  {
    q: "What cardstock and paper options do you offer?",
    a: "We offer a variety of professional materials tailored to each product. Our cards, door hangers, rack cards, and table tents are printed on thick 14pt or 16pt cardstock with gloss or matte finishes. Our flyers and brochures are printed on high-density 100lb glossy or matte text paper for high foldability and crisp readability.",
  },
  {
    q: "Can I write on the glossy printed materials?",
    a: "Glossy UV-coated materials have a slick finish that is resistant to standard ballpoint ink. If you need to write notes, dates, or prices on your handouts, we highly recommend choosing our Smooth Matte finish, which works perfectly with pens and pencils.",
  },
  {
    q: "Do you offer folding services for brochures?",
    a: "Yes! When configuring our 8.5\" x 11\" flyers, you can select 'Tri-Fold' or 'Half-Fold' finishes under the dynamic product configurator. Your brochures will arrive pre-folded and event-ready at no extra hassle.",
  },
  {
    q: "What is the turnaround and shipping speed for print orders?",
    a: "Most marketing material orders are printed and dispatched within 1-2 business days. We offer next-day air and expedited shipping options at checkout if you need them in hand for a major conference or launch.",
  },
  {
    q: "Can I upload my own layouts or design online?",
    a: "Yes! You can upload print-ready files (PDF, PNG, JPG, or AI) or design right in our browser using our design templates. The editor lets you customize text, add contact info, and upload logos with ease.",
  },
];

export default function MarketingMaterialsCategoryPage() {
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
            <span className="font-semibold text-gray-900">Marketing Materials</span>
          </div>
        </div>

        {/* Hero Section Banner */}
        <section className="relative w-full lg:px-[48px] 3xl:px-[96px] pt-1">
          <div className="relative overflow-hidden rounded-xl">
            <picture>
              <source
                srcSet="https://www.buildasign.com/images/uploaded/Redesign/BAS_WEB_Redesign_Category_DecalsClings_Secondary.jpg"
                media="(min-width: 992px)"
              />
              <img
                className="w-full h-[168px] lg:h-[400px] object-cover object-center pointer-events-none"
                src="https://www.buildasign.com/images/uploaded/Redesign/BAS_WEB_Redesign_Category_DecalsClings_Secondary.jpg"
                alt="Custom Marketing Materials and Promo Prints Banner"
              />
            </picture>

            {/* Desktop Card Overlay */}
            <div className="hidden lg:block absolute top-1/2 transform -translate-y-1/2 left-[48px] z-10">
              <div className="bg-white rounded-xl shadow-xl p-10 flex flex-col items-center justify-center w-[450px] border border-gray-100">
                <div className="text-center font-poppins mb-6">
                  <h1 className="text-3xl font-extrabold text-gray-900 mb-2 leading-none">Marketing Materials</h1>
                  <p className="text-lg text-gray-750 font-semibold leading-normal">
                    Professional Print. Promoted Brand.
                  </p>
                </div>
                <div className="flex gap-3 w-full">
                  <Link
                    href="/marketing-materials/business-cards"
                    className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold px-5 py-3.5 rounded-lg text-center transition-colors text-sm font-poppins shadow-md"
                  >
                    Business Cards
                  </Link>
                  <Link
                    href="/marketing-materials/postcards"
                    className="flex-1 border-2 border-yellow-500 hover:bg-yellow-50/50 text-yellow-600 font-extrabold px-5 py-3.5 rounded-lg text-center transition-colors text-sm font-poppins"
                  >
                    Postcards
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Card Block (Underneath banner on mobile) */}
          <div className="lg:hidden w-full bg-white p-5 text-center border-b">
            <h1 className="text-2xl font-bold font-poppins text-gray-900 mb-1">Marketing Materials</h1>
            <p className="text-base text-gray-650 font-semibold font-poppins mb-4">
              Professional Print. Promoted Brand.
            </p>
            <div className="flex gap-3 max-w-sm mx-auto">
              <Link
                href="/marketing-materials/business-cards"
                className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-4 py-3 rounded-lg text-center transition-colors text-sm font-poppins shadow"
              >
                Business Cards
              </Link>
              <Link
                href="/marketing-materials/postcards"
                className="flex-1 border-2 border-yellow-500 hover:bg-yellow-50/30 text-yellow-600 font-bold px-4 py-3 rounded-lg text-center transition-colors text-sm font-poppins"
              >
                Postcards
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
            {marketingProducts.map((p) => (
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
                Promotional & Marketing Prints
              </h4>
              <p className="text-gray-700 leading-relaxed text-base font-opensans">
                Maximize your customer reach with our customizable selection of corporate marketing materials. Whether you are distributing business cards at networking events, sending promotional postcards to targeted local neighborhoods, or placing tables tents in hospitality spots, we ensure your messaging pops. Choose from professional paper stocks, card sizes, and folding configurations to align with your corporate presentation layouts.
              </p>
            </div>
            {/* Secondary Image */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md max-w-[532px] w-full justify-self-center lg:justify-self-end">
              <img
                src="https://www.buildasign.com/images/uploaded/Redesign/NPIB-34422-Tradeshow-Hero-001_en-gb.png"
                alt="Custom Marketing Materials Showcase"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* FAQs Accordion Section */}
        <section className="py-12 px-[20px] lg:px-[48px] 3xl:px-[96px] bg-gray-50 border-t border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-poppins font-bold text-2xl lg:text-3xl text-gray-900 text-center mb-8">
              Marketing Materials Frequently Asked Questions
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
              <span className="text-sm font-semibold text-gray-500 ml-2">4.9 / 5 (1,150 Reviews)</span>
            </div>
            <p className="text-gray-500 text-sm italic font-opensans">
              "The flyers and folded menus turned out absolutely gorgeous! Perfect color alignment with our corporate branding guidelines and the paper quality is very thick. We will order our stationery packs from here from now on."
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
