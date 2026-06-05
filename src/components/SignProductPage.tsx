"use client";

import { useState, useMemo, useEffect, ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, CheckCircle2, Truck, ShieldCheck, Star, Info, Clock } from "lucide-react";

/* ─── Generic Types ─────────────────────────────── */
export interface SizeOption {
  label: string;
  value: string;
  basePrice: number;
}
export interface SelectOption {
  label: string;
  value: string;
  priceAdder: number;
  description?: string;
}
export interface ToggleOption {
  id: string;
  label: string;
  priceAdder: number;
  description?: string;
}
export interface FaqItem { q: string; a: string; }
export interface ReviewItem { author: string; rating: number; text: string; }
export interface SpecRow { key: string; value: string; }

export interface ProductPageConfig {
  title: string;
  subtitle: string;
  breadcrumb: string;
  breadcrumbHref: string;
  promoText: string;
  image: string;
  ratingCount: string;
  ratingScore: string;
  sizes: SizeOption[];
  selects?: { label: string; options: SelectOption[] }[];
  toggleGroups?: { label: string; options: ToggleOption[] }[];
  qtyDiscount: string;
  keyFeatures: string[];
  useCases: string[];
  specs: SpecRow[];
  faqs: FaqItem[];
  reviews: ReviewItem[];
  ctaHeading: string;
  ctaBody: string;
  ctaLabel: string;
  uniqueCallout?: { icon: ReactNode; heading: string; body: string; color: string };
  description?: string;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(s => (
        <Star key={s} className={`w-4 h-4 ${s <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
      ))}
    </div>
  );
}

function ShippingCountdown() {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [nextShipDate, setNextShipDate] = useState("");

  useEffect(() => {
    // Calculate next shipping date
    const today = new Date();
    const shipDate = new Date(today);
    
    // If it's after 5 PM, it ships the next business day
    if (today.getHours() >= 17) {
      shipDate.setDate(today.getDate() + 1);
    }
    
    // Adjust for weekend (Saturday=6, Sunday=0)
    while (shipDate.getDay() === 0 || shipDate.getDay() === 6) {
      shipDate.setDate(shipDate.getDate() + 1);
    }

    const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'short', day: 'numeric' };
    setNextShipDate(shipDate.toLocaleDateString('en-US', options));

    const timer = setInterval(() => {
      const now = new Date();
      const cutoff = new Date(now);
      cutoff.setHours(17, 0, 0, 0); // 5:00 PM cutoff

      let diff = cutoff.getTime() - now.getTime();
      if (diff < 0) {
        // Cutoff passed, countdown to tomorrow's cutoff
        cutoff.setDate(cutoff.getDate() + 1);
        diff = cutoff.getTime() - now.getTime();
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-green-50 border border-green-200 rounded-xl p-3.5 text-xs text-green-800 font-semibold flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-2">
        <Clock className="w-4 h-4 text-green-600 shrink-0 animate-pulse" />
        <span>Order in the next <span className="font-extrabold">{timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</span></span>
      </div>
      <div>
        Ships: <span className="underline font-extrabold text-green-900">{nextShipDate}</span>
      </div>
    </div>
  );
}

export function SignProductPage({ cfg }: { cfg: ProductPageConfig }) {
  const [selectedSize, setSelectedSize] = useState(cfg.sizes[0]);
  const [selectValues, setSelectValues] = useState<Record<string, SelectOption>>(() => {
    const init: Record<string, SelectOption> = {};
    cfg.selects?.forEach(s => { init[s.label] = s.options[0]; });
    return init;
  });
  const [toggleValues, setToggleValues] = useState<Record<string, ToggleOption>>(() => {
    const init: Record<string, ToggleOption> = {};
    cfg.toggleGroups?.forEach(g => { init[g.label] = g.options[0]; });
    return init;
  });
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("overview");

  const unitPrice = useMemo(() => {
    let price = selectedSize.basePrice;
    Object.values(selectValues).forEach(v => { price += v.priceAdder; });
    Object.values(toggleValues).forEach(v => { price += v.priceAdder; });
    let discount = 1;
    if (quantity >= 100) discount = 0.82;
    else if (quantity >= 50) discount = 0.87;
    else if (quantity >= 25) discount = 0.90;
    else if (quantity >= 10) discount = 0.94;
    else if (quantity >= 5) discount = 0.97;
    return price * discount;
  }, [selectedSize, selectValues, toggleValues, quantity]);

  const totalPrice = (unitPrice * quantity).toFixed(2);
  const originalTotalPrice = ((unitPrice / 0.75) * quantity).toFixed(2); // 25% off display

  const customizeUrl = useMemo(() => {
    const parts = selectedSize.value.split("x");
    if (parts.length === 2) {
      const height = parts[0];
      const width = parts[1];
      return `/PrintDesignExperience/Load?productId=51060&width=${width}&height=${height}`;
    }
    return `/PrintDesignExperience/Load?productId=51060`;
  }, [selectedSize.value]);

  // Dynamic preview calculations
  const aspect = useMemo(() => {
    const dims = selectedSize.label.match(/\d+(\.\d+)?/g)?.map(Number);
    if (!dims || dims.length < 2) return 4 / 3;
    const [d1, d2] = dims;
    
    // Check if vertical orientation is selected in selects or toggle values
    let isVertical = false;
    const orientSelect = Object.entries(selectValues).find(([k]) => k.toLowerCase().includes("orientation"));
    if (orientSelect && orientSelect[1].value.toLowerCase().includes("vertical")) {
      isVertical = true;
    }
    const orientToggle = Object.entries(toggleValues).find(([k]) => k.toLowerCase().includes("orientation"));
    if (orientToggle && orientToggle[1].id.toLowerCase().includes("vertical")) {
      isVertical = true;
    }

    if (cfg.title.toLowerCase().includes("parking") || isVertical) {
      // Parking signs and products with selected vertical orientation are portrait
      const w = Math.min(d1, d2);
      const h = Math.max(d1, d2);
      return w / h;
    } else {
      // Most other products are landscape by default
      const w = Math.max(d1, d2);
      const h = Math.min(d1, d2);
      return w / h;
    }
  }, [selectedSize.label, cfg.title, selectValues, toggleValues]);

  const hasRoundedCorners = useMemo(() => {
    const cornerToggle = Object.entries(toggleValues).find(([k]) => k.toLowerCase().includes("corner"));
    if (cornerToggle && cornerToggle[1].id.toLowerCase().includes("round")) return true;
    const cornerSelect = Object.entries(selectValues).find(([k]) => k.toLowerCase().includes("corner"));
    if (cornerSelect && cornerSelect[1].value.toLowerCase().includes("round")) return true;
    return false;
  }, [toggleValues, selectValues]);

  const hasStakes = useMemo(() => {
    const stakeToggle = Object.entries(toggleValues).find(([k]) => k.toLowerCase().includes("stake"));
    if (stakeToggle && !["none", "no_stake", "sign_only"].includes(stakeToggle[1].id)) return true;
    const stakeSelect = Object.entries(selectValues).find(([k]) => k.toLowerCase().includes("stake"));
    if (stakeSelect && !["none", "no_stake", "sign_only"].includes(stakeSelect[1].value)) return true;
    return false;
  }, [toggleValues, selectValues]);

  const hasGrommets = useMemo(() => {
    const grommetToggle = Object.entries(toggleValues).find(([k]) => k.toLowerCase().includes("grommet") || k.toLowerCase().includes("hole"));
    if (grommetToggle && !["none", "no_grommets", "no_holes", "sign_only"].includes(grommetToggle[1].id)) return true;
    const grommetSelect = Object.entries(selectValues).find(([k]) => k.toLowerCase().includes("grommet") || k.toLowerCase().includes("hole"));
    if (grommetSelect && !["none", "no_grommets", "no_holes", "sign_only"].includes(grommetSelect[1].value)) return true;
    return false;
  }, [toggleValues, selectValues]);

  const acrylicType = useMemo(() => {
    const typeSelect = Object.entries(selectValues).find(([k]) => k.toLowerCase().includes("acrylic type"));
    return typeSelect ? typeSelect[1].value : "clear";
  }, [selectValues]);

  const isAFrame = cfg.title.toLowerCase().includes("a-frame");
  const frameMaterial = useMemo(() => {
    const fm = Object.entries(selectValues).find(([k]) => k.toLowerCase().includes("frame material"));
    return fm ? fm[1].value : "plastic";
  }, [selectValues]);

  const isRealEstate = cfg.title.toLowerCase().includes("real estate");
  const accessoryType = useMemo(() => {
    const acc = Object.entries(toggleValues).find(([k]) => k.toLowerCase().includes("accessories"));
    return acc ? acc[1].id : "none";
  }, [toggleValues]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b text-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-2 text-gray-500">
          <Link href="/" className="hover:text-yellow-600">Home</Link>
          <span>/</span>
          <Link href={cfg.breadcrumbHref} className="hover:text-yellow-600">{cfg.breadcrumb}</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{cfg.title}</span>
        </div>
      </div>

      {/* Promo */}
      <div className="bg-yellow-400 text-black text-center py-2 text-sm font-bold tracking-wide">
        {cfg.promoText}
      </div>

      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* ── LEFT ── */}
          <div className="flex-1 min-w-0">
            <h1 className="text-3xl md:text-4xl font-bold font-poppins mb-2">{cfg.title}</h1>
            <p className="text-gray-500 mb-3">{cfg.subtitle}</p>
            <div className="flex items-center gap-3 mb-6">
              <StarRating rating={5} />
              <span className="text-sm text-gray-500">{cfg.ratingScore} / 5 ({cfg.ratingCount} Reviews)</span>
            </div>

            {/* Dynamic Product Visual Configurator Preview */}
            <div className="relative w-full flex items-center justify-center p-12 bg-slate-50 border border-slate-100 shadow-inner mb-6 rounded-2xl min-h-[420px] overflow-visible">
              
              {/* A-Frame visual shell */}
              {isAFrame ? (
                <div className={`relative p-5 pb-16 rounded-t-[2.5rem] border-8 shadow-2xl flex flex-col items-center justify-center max-w-[340px] w-full transition-colors duration-300 ${
                  frameMaterial === "aluminum" ? "bg-slate-700 border-slate-800" : "bg-white border-slate-300"
                }`}>
                  {/* Hinge */}
                  <div className="absolute top-0 w-1/3 h-3 bg-slate-800 rounded-t-lg -mt-3 shadow"></div>
                  
                  {/* Insert Container */}
                  <div 
                    style={{ aspectRatio: aspect }}
                    className="relative w-full shadow-inner border border-gray-200 overflow-hidden bg-white"
                  >
                    <Image src={cfg.image} alt={cfg.title} fill className="object-contain p-2" />
                  </div>
                  
                  {/* Stand feet */}
                  <div className="absolute bottom-0 left-6 w-5 h-10 bg-slate-800 rounded-b-lg"></div>
                  <div className="absolute bottom-0 right-6 w-5 h-10 bg-slate-800 rounded-b-lg"></div>
                </div>
              ) : isRealEstate && (accessoryType === "yard_arm") ? (
                <div className="relative pt-20 pl-24 pr-8 pb-8 flex flex-col items-center justify-center w-full max-w-[420px]">
                  {/* Gallows Post */}
                  <div className="absolute top-0 left-10 w-5 h-full bg-slate-800 rounded-lg shadow-md z-0"></div>
                  <div className="absolute top-2 left-10 w-[260px] h-5 bg-slate-800 rounded-lg shadow-md z-0"></div>
                  {/* Hanging chains */}
                  <div className="absolute top-7 left-24 w-1.5 h-14 bg-gradient-to-b from-slate-600 to-slate-400 z-0 rounded-full"></div>
                  <div className="absolute top-7 left-[220px] w-1.5 h-14 bg-gradient-to-b from-slate-600 to-slate-400 z-0 rounded-full"></div>
                  
                  {/* Stretched Hanging Sign Canvas */}
                  <div 
                    style={{ aspectRatio: aspect }} 
                    className={`relative w-full shadow-lg border border-gray-200 transition-all duration-300 z-10 ${
                      hasRoundedCorners ? "rounded-3xl" : "rounded-none"
                    } ${
                      acrylicType === "clear"
                        ? "bg-blue-50/10 backdrop-blur-[2px] border border-white/40 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]"
                        : "bg-white"
                    }`}
                  >
                    <Image src={cfg.image} alt={cfg.title} fill className="object-contain p-4" />
                    {hasGrommets && (
                      <>
                        <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 rounded-full bg-gradient-to-r from-gray-400 to-gray-300 border border-gray-500 flex items-center justify-center shadow-inner"><div className="w-1 h-1 rounded-full bg-white/70"></div></div>
                        <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 rounded-full bg-gradient-to-r from-gray-400 to-gray-300 border border-gray-500 flex items-center justify-center shadow-inner"><div className="w-1 h-1 rounded-full bg-white/70"></div></div>
                      </>
                    )}
                  </div>
                </div>
              ) : isRealEstate && (accessoryType === "full_frame") ? (
                <div className="relative p-6 border-8 border-slate-900 bg-slate-100 rounded-lg flex flex-col items-center justify-center max-w-[380px] w-full shadow-2xl">
                  <div 
                    style={{ aspectRatio: aspect }}
                    className="relative w-full shadow-inner border border-gray-200 overflow-hidden bg-white"
                  >
                    <Image src={cfg.image} alt={cfg.title} fill className="object-contain p-2" />
                  </div>
                </div>
              ) : (
                /* Standard dynamic sign preview */
                <div 
                  style={{ aspectRatio: aspect }} 
                  className={`relative w-full max-w-[380px] shadow-lg border transition-all duration-300 ${
                    hasRoundedCorners ? "rounded-[2rem]" : "rounded-none"
                  } ${
                    cfg.title.toLowerCase().includes("acrylic")
                      ? acrylicType === "clear"
                        ? "bg-slate-100/20 backdrop-blur-[3px] border-white/50 shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.4),0_8px_20px_rgba(0,0,0,0.06)] bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.3),transparent)]"
                        : acrylicType === "frosted"
                          ? "bg-white/40 backdrop-blur-[6px] border-white/70 shadow-[inset_0_1.5px_2.5px_rgba(255,255,255,0.6),0_8px_20px_rgba(0,0,0,0.06)]"
                          : acrylicType === "black"
                            ? "bg-slate-950 border-slate-900 text-white shadow-[inset_0_1.5px_2.5px_rgba(255,255,255,0.15),0_8px_24px_rgba(0,0,0,0.3)]"
                            : "bg-white border-gray-200" // white acrylic
                      : "bg-white border-gray-200"
                  }`}
                >
                  <Image src={cfg.image} alt={cfg.title} fill className="object-contain p-6" />

                  {/* Grommets Overlay */}
                  {hasGrommets && (
                    <>
                      <div className="absolute top-3 left-3 w-4 h-4 rounded-full bg-gradient-to-r from-gray-400 to-gray-300 border border-gray-500 flex items-center justify-center shadow-inner"><div className="w-1.5 h-1.5 rounded-full bg-white/70"></div></div>
                      <div className="absolute top-3 right-3 w-4 h-4 rounded-full bg-gradient-to-r from-gray-400 to-gray-300 border border-gray-500 flex items-center justify-center shadow-inner"><div className="w-1.5 h-1.5 rounded-full bg-white/70"></div></div>
                      <div className="absolute bottom-3 left-3 w-4 h-4 rounded-full bg-gradient-to-r from-gray-400 to-gray-300 border border-gray-500 flex items-center justify-center shadow-inner"><div className="w-1.5 h-1.5 rounded-full bg-white/70"></div></div>
                      <div className="absolute bottom-3 right-3 w-4 h-4 rounded-full bg-gradient-to-r from-gray-400 to-gray-300 border border-gray-500 flex items-center justify-center shadow-inner"><div className="w-1.5 h-1.5 rounded-full bg-white/70"></div></div>
                    </>
                  )}
                </div>
              )}

              {/* Wire Stakes (H-Frame) Overlay */}
              {hasStakes && !isAFrame && !(isRealEstate && accessoryType !== "h_frame" && accessoryType !== "none") && (
                <div className="absolute top-[calc(50%+40px)] left-1/2 -translate-x-1/2 w-[160px] h-[150px] pointer-events-none z-0 transition-all duration-300">
                  <svg className="w-full h-full text-slate-400 drop-shadow" viewBox="0 0 100 120" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="20" y1="0" x2="20" y2="120" strokeLinecap="round" />
                    <line x1="80" y1="0" x2="80" y2="120" strokeLinecap="round" />
                    <line x1="20" y1="30" x2="80" y2="30" strokeLinecap="round" />
                    <line x1="20" y1="80" x2="80" y2="80" strokeLinecap="round" />
                  </svg>
                </div>
              )}
            </div>

            <div className="flex gap-3 mb-8">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-16 h-16 rounded-lg border-2 border-gray-100 hover:border-yellow-400 cursor-pointer p-1 bg-gray-50 transition-colors">
                  <Image src={cfg.image} alt="" width={64} height={64} className="w-full h-full object-contain" />
                </div>
              ))}
            </div>

            {/* Unique callout */}
            {cfg.uniqueCallout && (
              <div className={`${cfg.uniqueCallout.color} rounded-2xl p-5 mb-8 flex gap-4`}>
                <div className="flex-shrink-0 mt-1">{cfg.uniqueCallout.icon}</div>
                <div>
                  <h3 className="font-bold mb-1">{cfg.uniqueCallout.heading}</h3>
                  <p className="text-sm opacity-80">{cfg.uniqueCallout.body}</p>
                </div>
              </div>
            )}

            {/* Trust badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              {[
                { icon: <Truck className="w-5 h-5 text-yellow-500" />, t: "Next Day Ship", s: "Order by 5 PM" },
                { icon: <ShieldCheck className="w-5 h-5 text-yellow-500" />, t: "100% Guarantee", s: "Love it or reprint" },
                { icon: <CheckCircle2 className="w-5 h-5 text-yellow-500" />, t: "Free Proof", s: "Before we print" },
                { icon: <Star className="w-5 h-5 text-yellow-500" />, t: "Top Rated", s: cfg.ratingScore + " stars" },
              ].map(b => (
                <div key={b.t} className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
                  {b.icon}
                  <div><p className="text-xs font-bold leading-tight">{b.t}</p><p className="text-[10px] text-gray-500">{b.s}</p></div>
                </div>
              ))}
            </div>

            {/* Tabs */}
            <div className="border-b mb-8">
              <div className="flex overflow-x-auto">
                {["overview","specs","faqs","reviews"].map(tab => (
                  <button key={tab} onClick={() => setActiveTab(tab)}
                    className={`px-5 py-3 text-sm font-bold capitalize whitespace-nowrap border-b-2 -mb-px transition-colors ${activeTab === tab ? "border-yellow-400 text-yellow-600" : "border-transparent text-gray-500 hover:text-gray-800"}`}>
                    {tab === "faqs" ? "FAQs" : tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {activeTab === "overview" && (
              <div className="space-y-6">
                {cfg.description && (
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 font-opensans border-b border-gray-150 pb-6 whitespace-pre-line">
                    {cfg.description}
                  </p>
                )}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {cfg.keyFeatures.map(f => (
                        <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-yellow-500 shrink-0" />{f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-yellow-50 rounded-xl p-5">
                    <h3 className="font-bold mb-3">Great For</h3>
                    <div className="flex flex-wrap gap-2">
                      {cfg.useCases.map(t => (
                        <span key={t} className="bg-white border border-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "specs" && (
              <div className="rounded-2xl border overflow-hidden">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-gray-100">
                    {cfg.specs.map(s => (
                      <tr key={s.key} className="odd:bg-gray-50">
                        <td className="px-5 py-3 font-bold text-gray-700 w-2/5">{s.key}</td>
                        <td className="px-5 py-3 text-gray-600">{s.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === "faqs" && (
              <div className="space-y-4">
                {cfg.faqs.map(({ q, a }) => (
                  <div key={q} className="bg-gray-50 rounded-xl p-5">
                    <h4 className="font-bold mb-2">{q}</h4>
                    <p className="text-gray-600 text-sm">{a}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-4">
                {cfg.reviews.map(r => (
                  <div key={r.author} className="bg-gray-50 rounded-xl p-5">
                    <div className="flex justify-between mb-2">
                      <span className="font-bold text-sm">{r.author}</span>
                      <StarRating rating={r.rating} />
                    </div>
                    <p className="text-gray-600 text-sm">{r.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ── RIGHT: Configurator ── */}
          <div className="w-full lg:w-[420px] shrink-0 font-opensans">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 sticky top-6">

              {/* Price */}
              <div className="pb-5 border-b mb-5">
                <div className="flex items-end gap-2.5 mb-1.5">
                  <span className="text-4xl font-extrabold text-gray-900 font-poppins">${totalPrice}</span>
                  <span className="text-lg text-gray-400 line-through font-semibold mb-0.5">${originalTotalPrice}</span>
                  <span className="text-red-500 font-extrabold text-sm mb-1 bg-red-50 px-2 py-0.5 rounded-full">25% OFF</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 font-semibold">${unitPrice.toFixed(2)} each</span>
                  {quantity >= 5 && <span className="text-green-600 font-extrabold">Bulk Discount Applied!</span>}
                </div>
              </div>

              <div className="space-y-5">
                {/* Size */}
                <div>
                  <label className="block text-sm font-bold mb-2">Size</label>
                  <div className="relative">
                    <select value={selectedSize.value} onChange={e => setSelectedSize(cfg.sizes.find(s => s.value === e.target.value)!)}
                      className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 cursor-pointer font-semibold">
                      {cfg.sizes.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Selects */}
                {cfg.selects?.map(sel => (
                  <div key={sel.label}>
                    <label className="block text-sm font-bold mb-2">{sel.label}</label>
                    <div className="relative">
                      <select
                        value={selectValues[sel.label]?.value}
                        onChange={e => {
                          const found = sel.options.find(o => o.value === e.target.value);
                          if (found) setSelectValues(prev => ({ ...prev, [sel.label]: found }));
                        }}
                        className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 cursor-pointer font-semibold">
                        {sel.options.map(o => <option key={o.value} value={o.value}>{o.label}{o.priceAdder > 0 ? ` (+$${o.priceAdder.toFixed(2)})` : ""}</option>)}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                    {selectValues[sel.label]?.description && (
                      <p className="mt-1.5 text-xs text-gray-500 flex items-center gap-1 leading-normal">
                        <Info className="w-3.5 h-3.5 text-gray-400 shrink-0" /> {selectValues[sel.label].description}
                      </p>
                    )}
                  </div>
                ))}

                {/* Toggle groups */}
                {cfg.toggleGroups?.map(grp => (
                  <div key={grp.label}>
                    <label className="block text-sm font-bold mb-2">{grp.label}</label>
                    <div className="grid grid-cols-2 gap-2">
                      {grp.options.map(o => (
                        <button key={o.id} onClick={() => setToggleValues(prev => ({ ...prev, [grp.label]: o }))}
                          className={`p-3 text-left rounded-xl border-2 transition-all duration-200 ${toggleValues[grp.label]?.id === o.id ? "border-yellow-400 bg-yellow-50" : "border-gray-200 hover:border-gray-300 bg-white"}`}>
                          <span className="block text-xs font-bold text-gray-900">{o.label}</span>
                          {o.priceAdder > 0 && <span className="text-[10px] text-gray-500 font-semibold">+${o.priceAdder.toFixed(2)}</span>}
                          {o.description && <span className="block text-[10px] text-gray-400 mt-0.5 leading-normal">{o.description}</span>}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Quantity */}
                <div>
                  <label className="block text-sm font-bold mb-2">Quantity</label>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
                      <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2.5 hover:bg-gray-100 text-lg font-bold transition-colors">−</button>
                      <input type="number" value={quantity} min={1}
                        onChange={e => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-16 text-center bg-transparent focus:outline-none font-extrabold text-sm text-gray-900" />
                      <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2.5 hover:bg-gray-100 text-lg font-bold transition-colors">+</button>
                    </div>
                    <span className="text-xs text-gray-500 font-semibold">{cfg.qtyDiscount}</span>
                  </div>
                  {/* Qty tiers */}
                  <div className="mt-3 grid grid-cols-4 gap-1.5 text-center text-[10px] font-bold">
                    {[["5+","3% off"],["10+","6% off"],["25+","10% off"],["50+","13% off"]].map(([q,d]) => (
                      <div key={q} className="bg-gray-50 border border-gray-200 rounded-lg p-1.5 shadow-sm">
                        <div className="text-gray-700">{q}</div>
                        <div className="text-green-600">{d}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Shipping Date Countdown Widget */}
              <div className="mt-6">
                <ShippingCountdown />
              </div>

              <div className="space-y-3 mt-4">
                <Link href={customizeUrl} className="w-full block text-center bg-yellow-400 hover:bg-yellow-500 active:scale-[0.98] text-black font-extrabold py-4 rounded-xl transition-all text-sm uppercase tracking-wider shadow-md font-poppins">
                  Customize & Upload Artwork
                </Link>
                <button className="w-full bg-black hover:bg-gray-900 active:scale-[0.98] text-white font-extrabold py-4 rounded-xl transition-all text-sm uppercase tracking-wider shadow-md font-poppins">
                  Add to Cart
                </button>
                <p className="text-center text-xs text-gray-400 font-semibold pt-1">Free artwork check included with every order</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* CTA */}
      <section className="py-20 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold font-poppins mb-4">{cfg.ctaHeading}</h2>
          <p className="text-gray-400 text-lg mb-8">{cfg.ctaBody}</p>
          <Link href={customizeUrl} className="inline-block bg-yellow-400 text-black font-bold px-10 py-4 rounded-full hover:bg-yellow-500 transition-all shadow-xl text-lg font-poppins">
            {cfg.ctaLabel}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

