"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  {
    name: "Signs",
    href: "/custom-signs",
    image: "https://ext.same-assets.com/1114826555/1445363370.png",
  },
  {
    name: "Real Estate Signs",
    href: "/custom-signs/real-estate-signs",
    image: "https://ext.same-assets.com/1114826555/3882498341.png",
  },
  {
    name: "Banners",
    href: "/custom-banners",
    image: "https://ext.same-assets.com/1114826555/3799598245.png",
  },
  {
    name: "Retractable Banners",
    href: "/custom-banners/roll-up-banners",
    image: "https://ext.same-assets.com/1114826555/2401743055.png",
  },
  {
    name: "Flags",
    href: "/custom-flags",
    image: "https://ext.same-assets.com/1114826555/1286398033.png",
  },
  {
    name: "Magnets",
    href: "/vehicle-signs",
    image: "https://ext.same-assets.com/1114826555/851572100.png",
  },
  {
    name: "Tradeshow",
    href: "/trade-show",
    image: "https://ext.same-assets.com/1114826555/2283645032.png",
  },
  {
    name: "Custom Decals",
    href: "/custom-decals",
    image: "https://ext.same-assets.com/1114826555/2442714004.png",
  },
  {
    name: "Business Cards",
    href: "/marketing-materials",
    image: "https://ext.same-assets.com/1114826555/4083306019.png",
  },
];

export function CategoryCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.75;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-14 bg-white border-b border-gray-100">
      <div className="w-full px-6 md:px-16 lg:px-24 xl:px-32">
        <h2 className="font-poppins text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 tracking-tight">
          Custom Signs for Every Need
        </h2>

        <div className="relative">
          {/* Scroll buttons */}
          <button
            type="button"
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 text-black shadow-xl rounded-full p-3 hover:bg-yellow-400 transition-colors -ml-5 focus:outline-none"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 text-black shadow-xl rounded-full p-3 hover:bg-yellow-400 transition-colors -mr-5 focus:outline-none"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto hide-scrollbar pb-6 px-1"
          >
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="flex-shrink-0 w-48 md:w-64 group"
              >
                <div className="bg-[#F8F9FA] rounded-2xl p-6 mb-4 group-hover:shadow-2xl group-hover:border-yellow-400 border-2 border-transparent transition-all duration-300 ease-in-out aspect-square flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.8),transparent)]">
                  <div className="relative w-full h-full">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      sizes="(max-width: 768px) 192px, 256px"
                      className="object-contain transition-transform duration-500 ease-out group-hover:scale-110"
                    />
                  </div>
                </div>
                <p className="text-center font-bold text-gray-900 group-hover:text-yellow-600 transition-colors font-poppins text-base md:text-lg leading-tight">
                  {category.name}
                </p>
              </Link>
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-2 flex justify-center gap-1.5">
            <div className="w-20 h-1.5 bg-yellow-400 rounded-full" />
            <div className="w-20 h-1.5 bg-gray-150 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
