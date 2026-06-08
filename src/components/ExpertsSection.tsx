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
            borderTop: "4px solid transparent",
            borderImage: "linear-gradient(90deg, #ff2d78, #b020ff, #00e5ff) 1",
          }}
        >
          <h2 className="font-poppins text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Oakland Park's Premier Shop for Custom Printing &amp; Signage
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Welcome to Nano Signs, your trusted local print shop offering high-quality, affordable 
            custom signs and signage solutions in Oakland Park, FL. From outdoor vinyl banners 
            and real estate yard signs to custom decals, flags, vehicle wraps, and business signs, 
            our expert teams design and print durable, eye-catching promotional materials built to get your brand noticed.
          </p>
          <a
            href="tel:305-967-1005"
            className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 font-bold rounded-full text-white transition-all duration-300 hover:scale-105 hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #ff2d78, #b020ff, #00e5ff)",
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
