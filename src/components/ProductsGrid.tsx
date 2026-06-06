import Image from "next/image";

const products = [
  { name: "Tablecloths", image: "https://ext.same-assets.com/1114826555/1168034624.png" },
  { name: "Magnets", image: "https://ext.same-assets.com/1114826555/2268709474.png" },
  { name: "Retractable Banners", image: "https://ext.same-assets.com/1114826555/898075086.png" },
  { name: "Step & Repeat Banners", image: "https://ext.same-assets.com/1114826555/2684103585.png" },
  { name: "Vinyl Decals", image: "https://ext.same-assets.com/1114826555/1305703507.png" },
  { name: "Flags", image: "https://ext.same-assets.com/1114826555/1691749293.png" },
  { name: "Fabric Banners", image: "https://ext.same-assets.com/1114826555/1835265645.png" },
  { name: "Event Tents", image: "https://ext.same-assets.com/1114826555/2283645032.png" },
  { name: "Business Cards", image: "https://ext.same-assets.com/1114826555/4083306019.png" },
  { name: "Labels and Stickers", image: "https://ext.same-assets.com/1114826555/2442714004.png" },
];

export function ProductsGrid() {
  return (
    <section
      className="py-14"
      style={{ background: "linear-gradient(160deg, #f0faff 0%, #fdf0f8 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-poppins text-2xl md:text-3xl font-bold mb-8 pink-cyan-text">
          Products Designed to Grow Your Business
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <a key={product.name} href="#" className="group">
              {/* Pure CSS hover via product-card-hover */}
              <div className="product-card-hover bg-white rounded-xl p-4 mb-3 aspect-square flex items-center justify-center relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-center font-medium text-gray-800 transition-all group-hover:pink-cyan-text">
                {product.name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
