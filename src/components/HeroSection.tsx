import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-yellow-50 via-white to-yellow-50">
      <div className="relative overflow-hidden min-h-[400px] md:min-h-[500px]">
        {/* Background with gradient overlay */}
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
              <p className="font-poppins text-lg md:text-xl font-semibold text-gray-700 mb-6">
                Fast. Reliable. Built to Last.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="/custom-signs"
                  className="inline-flex items-center justify-center px-8 py-3 bg-yellow-400 text-black font-bold rounded-full hover:bg-yellow-500 transition-colors shadow-lg"
                >
                  Shop Signs
                </a>
                <a
                  href="/custom-banners"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-black text-black font-bold rounded-full hover:bg-black hover:text-yellow-400 transition-colors bg-white"
                >
                  Shop Banners
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Side badge */}
        <div className="hidden lg:block absolute right-20 top-1/2 -translate-y-1/2 z-10">
          <div className="bg-black text-white px-6 py-8 rounded-lg text-center shadow-xl">
            <div className="border border-yellow-400 px-3 py-1 text-xs mb-2 inline-block rounded text-yellow-400">
              Nano Prints
            </div>
            <p className="font-poppins font-bold text-2xl mb-1 text-yellow-400">Oakland Park</p>
            <p className="text-sm">Florida</p>
            <p className="text-sm mb-4">Local Business</p>
            <p className="text-yellow-400 font-bold">305-967-1005</p>
          </div>
        </div>
      </div>
    </section>
  );
}
