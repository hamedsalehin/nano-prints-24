import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Zap, ShieldCheck, Star } from "lucide-react";

const signProducts = [
  {
    name: "Yard Signs",
    description: "Corrugated plastic signs perfect for lawns, events, and political campaigns.",
    image: "https://ext.same-assets.com/1114826555/1445363370.png",
    href: "/custom-signs/yard-signs",
    price: "Starting at $3.99",
    badge: "Best Seller",
  },
  {
    name: "Real Estate Signs",
    description: "Professional aluminum and coroplast signs for property listings.",
    image: "https://ext.same-assets.com/1114826555/3882498341.png",
    href: "/custom-signs/real-estate-signs",
    price: "Starting at $12.99",
    badge: "Most Popular",
  },
  {
    name: "Aluminum Signs",
    description: "Durable rust-proof aluminum signs for indoor and outdoor use.",
    image: "https://ext.same-assets.com/1114826555/1445363370.png",
    href: "/custom-signs/aluminum-signs",
    price: "Starting at $8.99",
    badge: "Heavy Duty",
  },
  {
    name: "A-Frame Signs",
    description: "Portable sandwich board signs ideal for sidewalk and event advertising.",
    image: "https://ext.same-assets.com/1114826555/2283645032.png",
    href: "/custom-signs/a-frame-signs",
    price: "Starting at $89.99",
    badge: "Eye-Catching",
  },
  {
    name: "Foam Board Signs",
    description: "Lightweight, professional indoor display signs for presentations and lobbies.",
    image: "https://ext.same-assets.com/1114826555/3799598245.png",
    href: "/custom-signs/foam-board-signs",
    price: "Starting at $14.99",
    badge: "Indoor Favorite",
  },
  {
    name: "Acrylic Signs",
    description: "Premium clear or colored acrylic for a polished, modern look.",
    image: "https://ext.same-assets.com/1114826555/898075086.png",
    href: "/custom-signs/acrylic-signs",
    price: "Starting at $24.99",
    badge: "Premium",
  },
  {
    name: "Coroplast Signs",
    description: "Waterproof corrugated plastic signs — the most versatile outdoor sign.",
    image: "https://ext.same-assets.com/1114826555/2401743055.png",
    href: "/custom-signs/coroplast-signs",
    price: "Starting at $4.99",
    badge: "Waterproof",
  },
  {
    name: "Window Signs",
    description: "Custom window clings, decals and perforated vinyl for storefronts.",
    image: "https://ext.same-assets.com/1114826555/2442714004.png",
    href: "/custom-signs/window-signs",
    price: "Starting at $9.99",
    badge: "Storefront",
  },
  {
    name: "Parking Signs",
    description: "Regulatory and custom parking signs — aluminum or coroplast.",
    image: "https://ext.same-assets.com/1114826555/1286398033.png",
    href: "/custom-signs/parking-signs",
    price: "Starting at $6.99",
    badge: "Ready to Ship",
  },
];

const whyUs = [
  { icon: <Zap className="w-6 h-6 text-yellow-500" />, title: "Ships Next Day", body: "Order by 5 PM and your signs ship the very next business day." },
  { icon: <ShieldCheck className="w-6 h-6 text-yellow-500" />, title: "100% Satisfaction", body: "Not happy? We'll reprint or refund — no questions asked." },
  { icon: <CheckCircle2 className="w-6 h-6 text-yellow-500" />, title: "Free Artwork Check", body: "Every order includes a complimentary review of your artwork files." },
  { icon: <Star className="w-6 h-6 text-yellow-500" />, title: "Expert Design Team", body: "Need help with your design? Our in-house team is here for you." },
];

export default function SignsPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header />

      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-yellow-600">Home</Link>
            <span>/</span>
            <span className="font-medium text-gray-900">Signs</span>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-white py-14 border-b">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900 mb-4 leading-tight">
                Custom Signs for <br />Every Purpose
              </h1>
              <p className="text-lg text-gray-500 max-w-xl mb-8 leading-relaxed">
                From yard signs to premium acrylic, we print stunning custom signs fast. Choose your product, upload your design, and we ship next day.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/custom-signs/yard-signs" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-7 py-3 rounded-full transition-all shadow-md">
                  Shop Yard Signs →
                </Link>
                <Link href="/custom-signs/aluminum-signs" className="border-2 border-gray-900 text-gray-900 font-bold px-7 py-3 rounded-full hover:bg-gray-900 hover:text-white transition-all font-poppins">
                  View Aluminum Signs
                </Link>
              </div>
            </div>
            <div className="flex-1 grid grid-cols-3 gap-3 max-w-md">
              {signProducts.slice(0, 6).map((p) => (
                <Link key={p.name} href={p.href} className="group aspect-square bg-gray-50 rounded-xl border border-gray-200 hover:border-yellow-400 transition-all overflow-hidden flex items-center justify-center p-3">
                  <Image src={p.image} alt={p.name} width={80} height={80} className="object-contain group-hover:scale-110 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold font-poppins mb-10 text-gray-900">Shop All Sign Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {signProducts.map((product) => (
                <Link
                  key={product.name}
                  href={product.href}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-200 overflow-hidden flex flex-col"
                >
                  <div className="aspect-[4/3] relative bg-gray-50 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.badge && (
                      <span className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-yellow-600 transition-colors">{product.name}</h3>
                    <p className="text-gray-500 text-sm mb-4 flex-grow">{product.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="font-bold text-lg text-gray-900">{product.price}</span>
                      <span className="bg-yellow-400 group-hover:bg-yellow-500 text-black px-4 py-2 rounded-lg font-bold text-sm transition-colors">
                        Shop Now →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white border-t">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold font-poppins text-center mb-12">Why Nano Signs?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyUs.map((item) => (
                <div key={item.title} className="text-center flex flex-col items-center gap-4">
                  <div className="w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-20 bg-black text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-4xl font-bold font-poppins mb-4">Ready to make an impact?</h2>
            <p className="text-gray-400 text-lg mb-10">Custom signs printed fast, shipped fast, and designed to impress.</p>
            <Link href="/custom-signs/yard-signs" className="bg-yellow-400 text-black font-bold px-10 py-4 rounded-full hover:bg-yellow-500 transition-all shadow-xl text-lg inline-block">
              Start Designing Today
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
