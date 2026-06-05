import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

const favorites = [
  {
    name: "Retractable Banners",
    image: "https://ext.same-assets.com/1114826555/1417611430.jpeg",
    href: "/custom-banners/retractable-banners",
    rating: 4,
  },
  {
    name: "Feather Flags",
    image: "https://ext.same-assets.com/1114826555/2702359766.jpeg",
    href: "/custom-flags/feather-flags",
    rating: 5,
  },
  {
    name: "Parking Signs",
    image: "https://ext.same-assets.com/1114826555/2322474123.jpeg",
    href: "/custom-signs/parking-signs",
    rating: 5,
  },
  {
    name: "Real Estate Signs",
    image: "https://ext.same-assets.com/1114826555/125916218.jpeg",
    href: "/custom-signs/real-estate-signs",
    rating: 5,
  },
  {
    name: "Sandwich Boards",
    image: "https://ext.same-assets.com/1114826555/966939002.jpeg",
    href: "/custom-signs/a-frame-signs",
    rating: 5, // let's give a default rating for a favorite product instead of 0
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

export function CustomerFavorites() {
  return (
    <section className="py-14 bg-white">
      <div className="w-full px-6 md:px-16 lg:px-24 xl:px-32">
        <h2 className="font-poppins text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 tracking-tight">
          Our Customer Favorites
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {favorites.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group flex flex-col"
            >
              <div className="aspect-square rounded-2xl overflow-hidden mb-4 relative border-2 border-transparent group-hover:border-yellow-400 group-hover:shadow-2xl transition-all duration-300 ease-in-out shadow-md">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 192px, 256px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <p className="text-center font-bold text-gray-900 group-hover:text-yellow-600 transition-colors mb-1 font-poppins text-base md:text-lg leading-tight">
                {item.name}
              </p>
              {item.rating > 0 && (
                <div className="flex justify-center mt-1">
                  <StarRating rating={item.rating} />
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
