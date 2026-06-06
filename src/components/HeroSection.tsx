import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="bg-white py-6">
      <div className="w-full px-6 md:px-16 lg:px-24 xl:px-32">
        <div className="relative overflow-hidden rounded-2xl min-h-[420px] md:min-h-[520px]">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="https://ext.same-assets.com/1114826555/2245761263.jpeg"
              alt="Custom signs and banners"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex items-center min-h-[420px] md:min-h-[520px]">
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
              <div className="max-w-lg rounded-2xl px-8 py-8 bg-white shadow-xl border border-gray-100">
                <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-2">
                  Nano Prints
                </h1>
                <p className="font-poppins text-xl md:text-2xl font-bold text-gray-700 mb-1">
                  Your Custom Printing Expert
                </p>
                <p className="font-poppins text-lg md:text-xl font-bold mb-8 text-[#ff2d78]">
                  Fast. Reliable. Built to Last.
                </p>

                <div className="flex flex-wrap gap-4">
                  {/* Primary CTA */}
                  <Link
                    href="/custom-signs"
                    className="inline-flex items-center justify-center px-8 py-3.5 font-bold rounded-full text-white transition-all duration-300 hover:scale-105"
                    style={{
                      background: "linear-gradient(135deg, #ff2d78, #b020ff)",
                      boxShadow: "0 4px 15px rgba(255, 45, 120, 0.3)",
                    }}
                  >
                    Shop Signs
                  </Link>
                  {/* Secondary CTA */}
                  <Link
                    href="/custom-banners"
                    className="inline-flex items-center justify-center px-8 py-3.5 border-2 font-bold rounded-full transition-all duration-300 hover:scale-105"
                    style={{
                      borderColor: "#ff2d78",
                      color: "#ff2d78",
                    }}
                  >
                    Shop Banners
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
