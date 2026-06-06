import Image from "next/image";

export function ExpertsSection() {
  return (
    <section className="py-20 relative">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://ext.same-assets.com/1114826555/3305545375.jpeg"
          alt="Custom signs background"
          fill
          className="object-cover"
        />
        {/* Dark pink/cyan tinted overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(176,32,255,0.65) 0%, rgba(0,0,0,0.60) 50%, rgba(0,229,255,0.40) 100%)",
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
            The Experts in Custom Signs
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            At Nano Signs, we&apos;ve been creating custom, affordable signs
            for our community in Oakland Park, FL. Whether you need
            aluminum yard signs, vinyl banners, vehicle wraps, or custom decals,
            our mission is to help you spread your message with quality signage.
          </p>
          <a
            href="tel:305-967-1005"
            className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 font-bold rounded-full text-white transition-all duration-300 hover:scale-105 hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #ff2d78, #b020ff, #00e5ff)",
              boxShadow: "0 0 20px rgba(255,45,120,0.45), 0 0 40px rgba(0,229,255,0.2)",
            }}
          >
            Call Us: 305-967-1005
          </a>
        </div>
      </div>
    </section>
  );
}
