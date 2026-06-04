"use client";

import { useState } from "react";
import Link from "next/link";
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
  { name: "Gifts", href: "/gifts" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="w-full">
      {/* Top utility bar */}
      <div className="bg-black text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-end gap-4 md:gap-6">
          <a href="#" className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors">
            <Package className="w-4 h-4" />
            <span className="hidden sm:inline">Order Status</span>
          </a>
          <a href="mailto:nanosign1@gmail.com" className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors">
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">nanosign1@gmail.com</span>
          </a>
          <a href="#" className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors">
            <HelpCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Help Center</span>
          </a>
          <a href="tel:305-967-1005" className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">305-967-1005</span>
          </a>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <div className="flex items-center">
                <div className="bg-yellow-400 text-black font-poppins font-bold text-xl px-3 py-1.5 rounded">
                  Nano Signs
                </div>
              </div>
            </Link>

            {/* Search bar */}
            <div className="hidden md:flex flex-1 max-w-xl">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-yellow-500">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-4">
              <a href="#" className="hidden sm:flex items-center gap-2 text-gray-700 hover:text-yellow-500 transition-colors">
                <User className="w-5 h-5" />
                <span className="text-sm font-medium">Sign In</span>
                <ChevronDown className="w-4 h-4" />
              </a>

              <a href="#" className="relative flex items-center gap-2 text-gray-700 hover:text-yellow-500 transition-colors">
                <div className="relative">
                  <ShoppingCart className="w-5 h-5" />
                  <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    0
                  </span>
                </div>
                <span className="text-sm font-medium hidden sm:inline">Cart</span>
              </a>

              {/* Mobile menu button */}
              <button
                type="button"
                className="md:hidden p-2"
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
                placeholder="Search"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />
              <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block border-t bg-black py-3">
          <div className="w-full px-6 lg:px-12">
            <ul className="flex items-center justify-between gap-x-4 lg:gap-x-6">
              {navItems.map((item) => (
                <li key={item.name} className="text-center">
                  <a
                    href={item.href}
                    className="block py-1.5 text-[13px] lg:text-[14px] font-bold text-white hover:text-yellow-400 transition-colors whitespace-nowrap uppercase tracking-wider font-poppins"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-t bg-black">
            <ul className="py-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="block px-4 py-3 text-sm font-medium text-white hover:bg-gray-900 hover:text-yellow-400"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      {/* Promo banner */}
      <div className="bg-yellow-400 text-black py-2.5 text-center">
        <p className="text-sm font-bold">
          Custom Signs & Banners - Fast Turnaround!{" "}
          <a href="tel:305-967-1005" className="underline hover:no-underline">
            Call 305-967-1005
          </a>
        </p>
      </div>
    </header>
  );
}
