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
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-poppins text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Custom Signs for Every Need
        </h2>

        <div className="relative">
          {/* Scroll buttons */}
          <button
            type="button"
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-yellow-400 shadow-lg rounded-full p-2 hover:bg-yellow-500 transition-colors -ml-4"
          >
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>

          <button
            type="button"
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-yellow-400 shadow-lg rounded-full p-2 hover:bg-yellow-500 transition-colors -mr-4"
          >
            <ChevronRight className="w-6 h-6 text-black" />
          </button>

          {/* Carousel */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto hide-scrollbar pb-4"
          >
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="flex-shrink-0 w-40 md:w-48 group"
              >
                <div className="bg-gray-50 rounded-lg p-4 mb-3 group-hover:shadow-md group-hover:border-yellow-400 border-2 border-transparent transition-all h-36 flex items-center justify-center">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={160}
                    height={120}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-center font-medium text-gray-800 group-hover:text-yellow-600 transition-colors">
                  {category.name}
                </p>
              </Link>
            ))}
          </div>

          {/* Progress indicator */}
          <div className="mt-4 flex justify-center gap-1">
            <div className="w-16 h-1 bg-yellow-400 rounded" />
            <div className="w-16 h-1 bg-gray-200 rounded" />
          </div>
        </div>
      </div>
    </section>
  );
}
