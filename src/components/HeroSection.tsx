import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="w-full relative overflow-hidden h-[260px] sm:h-[380px] md:h-[480px] lg:h-[580px] xl:h-[660px]">
      <Image
        src="/images/hero-image.png"
        alt="Nano Signs — Custom banners, yard signs, roll-up displays and more"
        fill
        className="object-cover object-center"
        priority
      />
    </section>
  );
}
