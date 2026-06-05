import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative bg-white">
      <div className="relative overflow-hidden min-h-[400px] md:min-h-[500px]">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://ext.same-assets.com/1114826555/2245761263.jpeg"
            alt="Custom signs and banners"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center min-h-[400px] md:min-h-[500px]">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-lg">
              <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                Nano Prints
              </h1>
              <p className="font-poppins text-xl md:text-2xl font-bold text-gray-900 mb-1">
                Your Custom Printing Expert
              </p>
              <p className="font-poppins text-lg md:text-xl font-semibold text-gray-600 mb-6">
                Fast. Reliable. Built to Last.
              </p>

              <div className="flex flex-wrap gap-3">
                {/* Primary CTA — Bright Yellow */}
                <a
                  href="/custom-signs"
                  className="inline-flex items-center justify-center px-8 py-3 font-bold rounded-full shadow-lg transition-opacity hover:opacity-85"
                  style={{ background: "#ffea00", color: "#111" }}
                >
                  Shop Signs
                </a>
                {/* Secondary CTA — Bright Lime */}
                <a
                  href="/custom-banners"
                  className="inline-flex items-center justify-center px-8 py-3 font-bold rounded-full shadow-lg transition-opacity hover:opacity-85"
                  style={{ background: "#39ff14", color: "#111" }}
                >
                  Shop Banners
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Side badge — stays dark/clean */}
        <div className="hidden lg:block absolute right-20 top-1/2 -translate-y-1/2 z-10">
          <div className="bg-black text-white px-6 py-8 rounded-xl text-center shadow-xl">
            {/* Cyan accent border */}
            <div className="px-3 py-1 text-xs mb-2 inline-block rounded font-bold" style={{ border: "1px solid #00d4ff", color: "#00d4ff" }}>
              Nano Prints
            </div>
            {/* Magenta highlight */}
            <p className="font-poppins font-bold text-2xl mb-1" style={{ color: "#ff00ff" }}>Oakland Park</p>
            <p className="text-sm text-gray-300">Florida</p>
            <p className="text-sm mb-4 text-gray-300">Local Business</p>
            {/* Yellow phone */}
            <p className="font-bold" style={{ color: "#ffea00" }}>305-967-1005</p>
          </div>
        </div>
      </div>
    </section>
  );
}
