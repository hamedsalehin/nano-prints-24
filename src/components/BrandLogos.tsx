const brands = [
  { name: "Ford", logoText: "Ford" },
  { name: "Walgreens", logoText: "Walgreens" },
  { name: "Toyota", logoText: "TOYOTA" },
  { name: "Target", logoText: "TARGET" },
  { name: "Amazon", logoText: "amazon" },
  { name: "Uber", logoText: "Uber" },
  { name: "Hilton", logoText: "Hilton" },
  { name: "Tesla", logoText: "TESLA" },
  { name: "GM", logoText: "GM" },
  { name: "The Home Depot", logoText: "THE HOME DEPOT" },
];

export function BrandLogos() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-poppins text-xl md:text-2xl font-bold text-gray-900 mb-8">
          Brands That Trust Us
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
            >
              <span className="font-poppins font-bold text-lg md:text-xl text-gray-700">
                {brand.logoText}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
