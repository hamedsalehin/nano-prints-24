import Image from "next/image";

export function ExpertsSection() {
  return (
    <section className="py-16 relative">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://ext.same-assets.com/1114826555/3305545375.jpeg"
          alt="Custom signs background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 z-10">
        <div className="bg-white rounded-lg p-8 md:p-12 max-w-2xl mx-auto text-center shadow-xl border-t-4 border-yellow-400">
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
            className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-500 transition-colors shadow-lg"
          >
            Call Us: 305-967-1005
          </a>
        </div>
      </div>
    </section>
  );
}
