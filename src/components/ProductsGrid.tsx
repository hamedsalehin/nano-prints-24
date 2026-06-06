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
      <div className="w-full px-6 md:px-16 lg:px-24 xl:px-32">
        <h2 className="font-poppins text-3xl md:text-4xl font-extrabold mb-8 tracking-tight pink-cyan-text">
          Products Designed to Grow Your Business
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <a key={product.name} href="#" className="group">
              {/* Pure CSS hover via product-card-hover */}
              <div className="product-card-hover bg-white rounded-xl p-4 mb-3 aspect-square flex items-center justify-center relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-center font-bold text-gray-800 text-base md:text-lg transition-all group-hover:pink-cyan-text">
                {product.name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
