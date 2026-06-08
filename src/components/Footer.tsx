import Image from "next/image";
import { Facebook, Twitter, Linkedin, Youtube, MapPin, Mail, Phone } from "lucide-react";

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
];

const bottomLinks = [
  { name: "Privacy Policy", href: "#" },
  { name: "Terms of Service", href: "#" },
  { name: "Accessibility", href: "#" },
];

const socialIcons = [Facebook, Twitter, Linkedin, Youtube];

export function Footer() {
  return (
    <footer
      className="text-white"
      style={{ background: "linear-gradient(160deg, #0d0d1a 0%, #130a1f 50%, #001a22 100%)" }}
    >
      {/* Top gradient accent line */}
      <div
        className="h-1 w-full"
        style={{ background: "linear-gradient(90deg, #ff2d78 0%, #b020ff 50%, #00e5ff 100%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand and Contact */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Image
                src="/images/nano logo complete.png"
                alt="Nano Signs"
                width={160}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Your trusted custom printing expert in Oakland Park, FL. Quality signs, banners, and more.
            </p>

            <div className="space-y-3 mb-6">
              <a href="tel:305-967-1005" className="flex items-center gap-2 text-gray-300 hover:text-[#ff2d78] transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "#ff2d78" }} />
                <span>305-967-1005</span>
              </a>
              <a href="tel:305-967-9654" className="flex items-center gap-2 text-gray-300 hover:text-[#ff2d78] transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "#ff2d78" }} />
                <span>305-967-9654</span>
              </a>
              <a href="mailto:nanosign1@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-[#00e5ff] transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: "#00e5ff" }} />
                <span>nanosign1@gmail.com</span>
              </a>
              <div className="flex items-start gap-2 text-gray-300">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#00e5ff" }} />
                <span>4567 Powerline Rd, Oakland Park, FL 33309</span>
              </div>
            </div>

            {/* Social icons — pure CSS hover via .social-icon-hover */}
            <div className="flex gap-3">
              {socialIcons.map((Icon, i) => (
                <a key={i} href="#" className="social-icon-hover p-2 rounded-full">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Help Center */}
          <div>
            <h3 className="font-poppins font-bold mb-4 pink-cyan-text">
              {footerLinks.helpCenter.title}
            </h3>
            <ul className="space-y-2">
              {footerLinks.helpCenter.links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-[#00e5ff] transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-poppins font-bold mb-4 pink-cyan-text">
              {footerLinks.company.title}
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-[#00e5ff] transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-poppins font-bold mb-4 pink-cyan-text">
              {footerLinks.products.title}
            </h3>
            <ul className="space-y-2">
              {footerLinks.products.links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-[#00e5ff] transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <p className="text-sm text-gray-500 mb-2">We accept:</p>
              <div className="flex flex-wrap gap-2">
                {paymentMethods.map((method) => (
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
      <div style={{ borderTop: "1px solid rgba(255,45,120,0.2)" }}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center gap-4">
              {bottomLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-gray-500 hover:text-[#ff2d78] transition-colors text-sm">
                  {link.name}
                </a>
              ))}
            </div>
            <p className="text-gray-600 text-sm">Copyright 2025 Nano Signs. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
