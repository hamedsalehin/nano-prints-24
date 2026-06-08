import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="w-full">
      <div className="relative w-full aspect-[2164/727]">
        <Image
          src="/images/hero-image.png"
          alt="Nano Signs — Custom banners, yard signs, roll-up displays and more"
          fill
          className="object-contain object-center"
          priority
        />
      </div>
    </section>
  );
}
