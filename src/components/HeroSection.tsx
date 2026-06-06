import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative">
      <div className="relative overflow-hidden min-h-[420px] md:min-h-[520px]">
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
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div
                className="max-w-lg rounded-2xl px-8 py-8"
                style={{
                  background: "rgba(0,0,0,0.38)",
                  backdropFilter: "blur(6px)",
                  WebkitBackdropFilter: "blur(6px)",
                }}
              >
                <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 drop-shadow-lg">
                  Nano Prints
                </h1>
                <p className="font-poppins text-xl md:text-2xl font-bold text-white/90 mb-1 drop-shadow">
                  Your Custom Printing Expert
                </p>
                <p
                  className="font-poppins text-lg md:text-xl font-semibold mb-8"
                  style={{ color: "#00e5ff", textShadow: "0 0 12px rgba(0,229,255,0.7)" }}
                >
                  Fast. Reliable. Built to Last.
                </p>

                <div className="flex flex-wrap gap-4">
                  {/* Primary CTA */}
                  <a
                    href="/custom-signs"
                    className="inline-flex items-center justify-center px-8 py-3.5 font-bold rounded-full text-white transition-all duration-300 hover:scale-105"
                    style={{
                      background: "linear-gradient(135deg, #ff2d78, #b020ff)",
                      boxShadow: "0 0 20px rgba(255,45,120,0.6), 0 0 40px rgba(255,45,120,0.2)",
                    }}
                  >
                    Shop Signs
                  </a>
                  {/* Secondary CTA */}
                  <a
                    href="/custom-banners"
                    className="inline-flex items-center justify-center px-8 py-3.5 border-2 font-bold rounded-full transition-all duration-300 hover:scale-105"
                    style={{
                      borderColor: "#00e5ff",
                      color: "#00e5ff",
                      textShadow: "0 0 8px rgba(0,229,255,0.6)",
                      boxShadow: "0 0 16px rgba(0,229,255,0.35)",
                    }}
                  >
                    Shop Banners
                  </a>
                </div>
              </div>
          </div>
        </div>

        {/* Side neon badge */}
        <div className="hidden lg:block absolute right-20 top-1/2 -translate-y-1/2 z-10">
          <div
            className="px-6 py-8 rounded-2xl text-center"
            style={{
              background: "rgba(0,0,0,0.55)",
              backdropFilter: "blur(12px)",
              border: "1.5px solid rgba(0,229,255,0.5)",
              boxShadow: "0 0 30px rgba(255,45,120,0.3), 0 0 60px rgba(0,229,255,0.15)",
            }}
          >
            <div
              className="px-3 py-1 text-xs mb-3 inline-block rounded-full font-bold"
              style={{
                background: "linear-gradient(135deg, #ff2d78, #00e5ff)",
                color: "#fff",
              }}
            >
              Nano Prints
            </div>
            <p
              className="font-poppins font-black text-2xl mb-1"
              style={{ color: "#00e5ff", textShadow: "0 0 12px rgba(0,229,255,0.8)" }}
            >
              Oakland Park
            </p>
            <p className="text-white/80 text-sm">Florida</p>
            <p className="text-white/80 text-sm mb-4">Local Business</p>
            <p
              className="font-bold text-lg"
              style={{ color: "#ff2d78", textShadow: "0 0 10px rgba(255,45,120,0.7)" }}
            >
              305-967-1005
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
