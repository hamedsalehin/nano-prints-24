import Image from "next/image";
import { Facebook, Twitter, Linkedin, Youtube, MessageCircle, MapPin, Mail, Phone } from "lucide-react";

const footerLinks = {
  helpCenter: {
    title: "Help Center",
    links: [
      { name: "Contact Us", href: "#" },
      { name: "Frequently Asked Questions", href: "#" },
      { name: "Corporate Pricing", href: "#" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { name: "About Us", href: "#" },
      { name: "Our Services", href: "#" },
      { name: "Portfolio", href: "#" },
      { name: "Testimonials", href: "#" },
    ],
  },
  products: {
    title: "Products",
    links: [
      { name: "Custom Signs", href: "#" },
      { name: "Banners", href: "#" },
      { name: "Vehicle Wraps", href: "#" },
      { name: "Decals & Stickers", href: "#" },
    ],
  },
};

const paymentMethods = [
  { name: "Mastercard", icon: "https://ext.same-assets.com/1114826555/2789702158.svg" },
  { name: "Visa", icon: "https://ext.same-assets.com/1114826555/794747697.svg" },
  { name: "Discover", icon: "https://ext.same-assets.com/1114826555/3085012672.svg" },
  { name: "PayPal", icon: "https://ext.same-assets.com/1114826555/4065183383.svg" },
  { name: "American Express", icon: "https://ext.same-assets.com/1114826555/1149552964.svg" },
  { name: "Apple Pay", icon: "https://ext.same-assets.com/1114826555/936547833.svg" },
];

const bottomLinks = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "Accessibility", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand logo */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Image src="/images/nano-print-logo.png" alt="Nano Prints" width={160} height={60} className="h-12 w-auto object-contain" />
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Your trusted custom signs expert in Oakland Park, FL. Quality signs, banners, and more.
            </p>

            <div className="space-y-3 mb-6">
              <a href="tel:305-967-1005" className="flex items-center gap-2 text-gray-300 hover:text-[#ffea00] transition-colors">
                <Phone className="w-4 h-4" style={{ color: "#ffea00" }} />
                <span>305-967-1005</span>
              </a>
              <a href="tel:305-967-9654" className="flex items-center gap-2 text-gray-300 hover:text-[#ffea00] transition-colors">
                <Phone className="w-4 h-4" style={{ color: "#ffea00" }} />
                <span>305-967-9654</span>
              </a>
              <a href="mailto:nanosign1@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-[#00d4ff] transition-colors">
                <Mail className="w-4 h-4" style={{ color: "#00d4ff" }} />
                <span>nanosign1@gmail.com</span>
              </a>
              <div className="flex items-start gap-2 text-gray-300">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#39ff14" }} />
                <span>4567 Powerline Rd, Oakland Park, FL 33309</span>
              </div>
            </div>

            <div className="flex gap-3">
              <a href="#" className="bg-gray-800 p-2 rounded-full transition-colors" onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background='#00d4ff'; (e.currentTarget as HTMLElement).style.color='#000'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background=''; (e.currentTarget as HTMLElement).style.color=''; }}>
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full transition-colors" onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background='#39ff14'; (e.currentTarget as HTMLElement).style.color='#000'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background=''; (e.currentTarget as HTMLElement).style.color=''; }}>
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full transition-colors" onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background='#ff00ff'; (e.currentTarget as HTMLElement).style.color='#000'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background=''; (e.currentTarget as HTMLElement).style.color=''; }}>
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full transition-colors" onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background='#ffea00'; (e.currentTarget as HTMLElement).style.color='#000'; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background=''; (e.currentTarget as HTMLElement).style.color=''; }}>
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

            {/* Help Center — Cyan heading */}
            <h3 className="font-poppins font-bold mb-4" style={{ color: "#00d4ff" }}>
              {footerLinks.helpCenter.title}
            </h3>
            <ul className="space-y-2">
              {footerLinks.helpCenter.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#00d4ff] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

            {/* Company — Lime heading */}
            <h3 className="font-poppins font-bold mb-4" style={{ color: "#39ff14" }}>
              {footerLinks.company.title}
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#39ff14] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

            {/* Products — Magenta heading */}
            <h3 className="font-poppins font-bold mb-4" style={{ color: "#ff00ff" }}>
              {footerLinks.products.title}
            </h3>
            <ul className="space-y-2">
              {footerLinks.products.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#ff00ff] transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-2">We accept:</p>
              <div className="flex flex-wrap gap-2">
                {paymentMethods.slice(0, 4).map((method) => (
                  <img
                    key={method.name}
                    src={method.icon}
                    alt={method.name}
                    className="h-6 bg-white rounded px-1"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center gap-4">
              {bottomLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-[#ffea00] transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <p className="text-gray-500 text-sm">
              Copyright 2025 Nano Prints. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
