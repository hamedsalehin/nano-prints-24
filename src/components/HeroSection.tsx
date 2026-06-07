import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="w-full relative overflow-hidden min-h-[420px] md:min-h-[540px]">
      {/* Background image — no overlay, stretches edge-to-edge */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-image.png"
          alt="Nano Signs — Custom banners, yard signs, roll-up displays and more"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Content — no background card, aligned to the right on all screens */}
      <div className="relative z-10 flex justify-end items-center min-h-[360px] sm:min-h-[440px] md:min-h-[540px] w-full px-6 md:px-16 lg:px-24 xl:px-32">
        <div className="w-[85%] sm:w-[70%] md:w-[50%] lg:w-[42%] xl:w-[35%] max-w-[440px] p-0 text-right">
          <h1 className="font-poppins text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-3 leading-tight drop-shadow-md">
            <span
              style={{
                background: "linear-gradient(135deg, #ff2d78, #b020ff, #00e5ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Nano Signs
            </span>
          </h1>

          <p className="font-poppins text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white leading-relaxed drop-shadow-md">
            Custom banners, yard signs, vehicle wraps &amp; more —{" "}
            <span className="text-[#00e5ff] font-bold">fast turnaround</span> &amp; built to last.
          </p>
        </div>
      </div>
    </section>
  );
}
