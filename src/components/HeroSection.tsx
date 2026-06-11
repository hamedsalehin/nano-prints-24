import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="w-full">
      <h1 className="sr-only">Nano Signs — Premium Custom Signs, Banners, Flags &amp; Promotional Products</h1>
      <div className="relative w-full aspect-[2164/727]">
        <Image
          src="/images/hero-image.jpeg"
          alt="Nano Signs — Custom banners, yard signs, roll-up displays and more"
          fill
          sizes="100vw"
          quality={90}
          className="object-contain object-center"
          priority
        />
        {/* Dynamic percentage-positioned Request Quote Button overlaying the hero image */}
        <Link
          href="/get-a-quote"
          className="absolute bottom-[10%] left-[8%] z-10 px-[3%] py-[1.2%] bg-white text-gray-950 font-black uppercase tracking-wider rounded-none shadow-2xl transition-all duration-300 hover:bg-[#ff2d78] hover:text-white hover:border-[#ff2d78] border border-transparent active:scale-95"
          style={{
            fontSize: "clamp(8px, 1.15vw, 16px)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          }}
        >
          Request Quote
        </Link>
      </div>
    </section>
  );
}
