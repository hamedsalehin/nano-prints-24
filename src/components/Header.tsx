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
  { name: "Sign Holders", href: "/sign-accessories" },
  { name: "Marketing Materials", href: "/marketing-materials" },
  { name: "Promotional Products", href: "/promotional-products" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="w-full">
      {/* Top utility bar — Bright Cyan */}
      <div className="text-black text-sm py-2" style={{ background: "#00d4ff" }}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-end gap-4 md:gap-6">
          <a href="#" className="flex items-center gap-1.5 font-semibold hover:text-white transition-colors">
            <Package className="w-4 h-4" />
            <span className="hidden sm:inline">Order Status</span>
          </a>
          <a href="mailto:nanosign1@gmail.com" className="flex items-center gap-1.5 font-semibold hover:text-white transition-colors">
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">nanosign1@gmail.com</span>
          </a>
          <a href="#" className="flex items-center gap-1.5 font-semibold hover:text-white transition-colors">
            <HelpCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Help Center</span>
          </a>
          <a href="tel:305-967-1005" className="flex items-center gap-1.5 font-semibold hover:text-white transition-colors">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">305-967-1005</span>
          </a>
        </div>
      </div>

      {/* Main header — White */}
      <div className="bg-white border-b border-gray-200">
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
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:border-transparent"
                  style={{ "--tw-ring-color": "#00d4ff" } as React.CSSProperties}
                />
                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors" style={{ color: undefined }} onMouseEnter={e => (e.currentTarget.style.color = "#00d4ff")} onMouseLeave={e => (e.currentTarget.style.color = "")}>
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-4">
              <a href="#" className="hidden sm:flex items-center gap-2 text-gray-700 transition-colors hover:text-[#00d4ff]">
                <User className="w-5 h-5" />
                <span className="text-sm font-medium">Sign In</span>
                <ChevronDown className="w-4 h-4" />
              </a>

              <a href="#" className="relative flex items-center gap-2 text-gray-700 hover:text-[#00d4ff] transition-colors">
                <div className="relative">
                  <ShoppingCart className="w-5 h-5" />
                  {/* Cart badge — Bright Lime */}
                  <span className="absolute -top-2 -right-2 text-black text-xs w-4 h-4 rounded-full flex items-center justify-center font-bold" style={{ background: "#39ff14" }}>
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
                className="w-full px-4 py-2.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:border-transparent"
              />
              <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Navigation — Black bar, cyan hover underline */}
        <nav className="hidden md:block bg-black w-full">
          <div className="w-full px-12 lg:px-28 xl:px-40">
            <ul className="flex w-full justify-between items-center">
              {navItems.map((item) => (
                <li key={item.name} className="relative text-center flex-grow flex-shrink-0 basis-auto">
                  <Link
                    href={item.href}
                    className="nav-link block w-full h-full relative px-5 py-2 font-semibold text-white font-poppins text-[16px] lg:text-[17px] transition-colors duration-200 after:content-[''] after:absolute after:h-[3px] after:bottom-0 after:left-0 after:w-full after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-200"
                    style={{ "--hover-color": "#00d4ff", "--underline-color": "#00d4ff" } as React.CSSProperties}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#00d4ff"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = ""; }}
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
          <nav className="md:hidden border-t bg-black">
            <ul className="py-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="block px-4 py-3 text-sm font-medium text-white hover:bg-gray-900 transition-colors"
                    onMouseEnter={e => (e.currentTarget.style.color = "#00d4ff")}
                    onMouseLeave={e => (e.currentTarget.style.color = "")}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      {/* Promo banner — Bright Magenta */}
      <div className="py-2.5 text-center text-white font-bold text-sm" style={{ background: "#ff00ff" }}>
        Custom Printing &amp; Signage — Fast Turnaround!{" "}
        <a href="tel:305-967-1005" className="underline hover:no-underline">
          Call 305-967-1005
        </a>
      </div>
    </header>
  );
}
