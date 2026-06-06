"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingCart, User, Phone, MessageCircle, HelpCircle, Package, Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { name: "Signs", href: "/custom-signs" },
  { name: "Banners", href: "/custom-banners" },
  { name: "Flags", href: "/custom-flags" },
  { name: "Vehicle Signs", href: "/vehicle-signs" },
  { name: "Tradeshow", href: "/trade-show" },
  { name: "Stickers & Decals", href: "/custom-decals" },
  { name: "Marketing Materials", href: "/marketing-materials" },
  { name: "Promotional Products", href: "/promotional-products" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="w-full">
      {/* Top utility bar — deep dark with pink/cyan accents */}
      <div className="bg-gray-950 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-end gap-4 md:gap-6">
          <a href="#" className="flex items-center gap-1.5 hover:text-[#00e5ff] transition-colors duration-200">
            <Package className="w-4 h-4" />
            <span className="hidden sm:inline">Order Status</span>
          </a>
          <a href="mailto:nanosign1@gmail.com" className="flex items-center gap-1.5 hover:text-[#00e5ff] transition-colors duration-200">
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">nanosign1@gmail.com</span>
          </a>
          <a href="#" className="flex items-center gap-1.5 hover:text-[#00e5ff] transition-colors duration-200">
            <HelpCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Help Center</span>
          </a>
          <a href="tel:305-967-1005" className="flex items-center gap-1.5 hover:text-[#00e5ff] transition-colors duration-200">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">305-967-1005</span>
          </a>
        </div>
      </div>

      {/* Main header — white with pink/cyan search accents */}
      <div className="bg-white border-b border-pink-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/nano-print-logo.png"
                alt="Nano Prints Logo"
                width={180}
                height={70}
                className="h-14 w-auto object-contain"
                priority
              />
            </Link>

            {/* Search bar */}
            <div className="hidden md:flex flex-1 max-w-xl">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-full focus:outline-none focus:border-[#ff2d78] transition-colors duration-200"
                />
                <button
                  type="button"
                  className="absolute right-0 top-0 h-full px-5 rounded-r-full text-white font-semibold text-sm brand-gradient hover:opacity-90 transition-opacity"
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-4">
              <a href="#" className="hidden sm:flex items-center gap-2 text-gray-700 hover:text-[#ff2d78] transition-colors duration-200">
                <User className="w-5 h-5" />
                <span className="text-sm font-medium">Sign In</span>
                <ChevronDown className="w-4 h-4" />
              </a>

              <a href="#" className="relative flex items-center gap-2 text-gray-700 hover:text-[#ff2d78] transition-colors duration-200">
                <div className="relative">
                  <ShoppingCart className="w-5 h-5" />
                  <span
                    className="absolute -top-2 -right-2 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-bold"
                    style={{ background: "linear-gradient(135deg, #ff2d78, #00e5ff)" }}
                  >
                    0
                  </span>
                </div>
                <span className="text-sm font-medium hidden sm:inline">Cart</span>
              </a>

              {/* Mobile menu button */}
              <button
                type="button"
                className="md:hidden p-2 text-gray-700 hover:text-[#ff2d78] transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile search */}
          <div className="md:hidden mt-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-full focus:outline-none focus:border-[#ff2d78] transition-colors"
              />
              <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-[#ff2d78]">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Navigation — animated pink→purple→cyan gradient */}
        <nav className="hidden md:block w-full brand-gradient-animated">
          <div className="w-full px-12 lg:px-28 xl:px-40">
            <ul className="flex w-full justify-between items-center">
              {navItems.map((item) => (
                <li key={item.name} className="relative text-center flex-grow flex-shrink-0 basis-auto">
                  <Link
                    href={item.href}
                    className="block w-full h-full relative px-5 py-2.5 font-semibold text-white hover:text-[#00e5ff] transition-colors duration-200 font-poppins text-[16px] lg:text-[17px] after:content-[''] after:absolute after:h-[3px] after:bg-[#00e5ff] after:bottom-0 after:left-0 after:w-full after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t brand-gradient-animated">
            <ul className="py-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="block px-4 py-3 text-sm font-medium text-white hover:text-[#00e5ff] hover:bg-white/10 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      {/* Promo banner — pink gradient with white text */}
      <div
        className="py-2.5 text-center"
        style={{ background: "linear-gradient(90deg, #ff2d78 0%, #b020ff 50%, #00e5ff 100%)" }}
      >
        <p className="text-sm font-bold text-white tracking-wide">
          ✨ Custom Printing &amp; Signage — Fast Turnaround!{" "}
          <a href="tel:305-967-1005" className="underline hover:no-underline hover:text-[#00e5ff] transition-colors">
            Call 305-967-1005
          </a>
        </p>
      </div>
    </header>
  );
}
