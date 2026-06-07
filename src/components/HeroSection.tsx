import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="w-full relative overflow-hidden min-h-[420px] md:min-h-[540px]">
      {/* Background image — no overlay, stretches edge-to-edge */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-image.jpeg"
          alt="Nano Signs — Custom banners, yard signs, roll-up displays and more"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Content — no background card, aligned to the right on desktop, and left on mobile */}
      <div className="relative z-10 flex justify-start md:justify-end items-center min-h-[360px] sm:min-h-[440px] md:min-h-[540px] w-full px-6 md:px-16 lg:px-24 xl:px-32">
        <div className="w-[85%] sm:w-[70%] md:w-[50%] lg:w-[42%] xl:w-[35%] max-w-[440px] p-0">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-white text-[10px] sm:text-xs font-bold mb-3 sm:mb-5 tracking-wide uppercase"
            style={{
              background: "linear-gradient(135deg, #ff2d78, #b020ff, #00e5ff)",
              boxShadow: "0 0 16px rgba(255,45,120,0.35)",
            }}
          >
            ✦ Oakland Park, FL · 20+ Years Happy
          </div>

          <h1 className="font-poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-900 mb-2 sm:mb-3 leading-tight drop-shadow-sm">
            With Us,{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #ff2d78, #b020ff, #00e5ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Be Seen.
            </span>
          </h1>

          <p className="font-poppins text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-700 mb-5 sm:mb-8 leading-relaxed drop-shadow-sm">
            Custom banners, yard signs, vehicle wraps &amp; more —{" "}
            <span className="text-[#ff2d78] font-bold">fast turnaround</span> &amp; built to last.
          </p>

          <div className="flex flex-wrap gap-2.5 sm:gap-4">
            {/* Primary CTA */}
            <Link
              href="/custom-signs"
              className="inline-flex items-center justify-center px-4 py-2 sm:px-8 sm:py-3.5 text-xs sm:text-sm md:text-base font-bold rounded-full text-white transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #ff2d78, #b020ff, #00e5ff)",
                boxShadow: "0 0 24px rgba(255,45,120,0.45), 0 0 48px rgba(0,229,255,0.2)",
              }}
            >
              Shop Signs
            </Link>
            {/* Secondary CTA */}
            <Link
              href="tel:305-967-1005"
              className="inline-flex items-center justify-center px-4 py-2 sm:px-8 sm:py-3.5 text-xs sm:text-sm md:text-base border-2 font-bold rounded-full transition-all duration-300 hover:scale-105"
              style={{
                borderColor: "#ff2d78",
                color: "#ff2d78",
              }}
            >
              📞 Call Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
