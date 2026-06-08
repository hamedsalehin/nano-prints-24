import Image from "next/image";

export function ExpertsSection() {
  return (
    <section className="py-20 relative">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/experts_section_image.jpeg"
          alt="Local print shop and custom signage facility"
          fill
          sizes="100vw"
          quality={85}
          className="object-cover"
        />
        {/* Logo-inspired pink/cyan tinted overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(255, 45, 120, 0.65) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 229, 255, 0.5) 100%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 z-10">
        <div
          className="rounded-2xl p-8 md:p-12 max-w-2xl mx-auto text-center"
          style={{
            background: "rgba(255,255,255,0.97)",
            boxShadow: "0 0 40px rgba(255,45,120,0.25), 0 0 80px rgba(0,229,255,0.12)",
          }}
        >
          <h2 className="font-poppins text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Your All-in-One Online Shop for Custom Printing &amp; Signage
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Welcome to Nano Signs, your premier online printing materials and signage shop serving 
            businesses across Florida. From heavy-duty outdoor vinyl banners and retractable roll-up banners 
            to custom stickers, decals, advertising flags, and tradeshow displays, we are your all-in-one 
            source for high-quality custom signs. Our print and design experts ensure fast production 
            and durable marketing materials to elevate your brand presence.
          </p>
          <a
            href="tel:305-967-1005"
            className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 font-bold rounded-full text-white transition-all duration-300 hover:scale-105 hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #ff2d78, #00e5ff)",
              boxShadow: "0 0 20px rgba(255,45,120,0.45), 0 0 40px rgba(0,229,255,0.2)",
            }}
          >
            Call for a Sign Quote: 305-967-1005
          </a>
        </div>
      </div>
    </section>
  );
}
