import Image from "next/image";
import { Star } from "lucide-react";

const favorites = [
  {
    name: "Retractable Banners",
    image: "https://ext.same-assets.com/1114826555/1417611430.jpeg",
    rating: 4,
  },
  {
    name: "Feather Flags",
    image: "https://ext.same-assets.com/1114826555/2702359766.jpeg",
    rating: 5,
  },
  {
    name: "Parking Signs",
    image: "https://ext.same-assets.com/1114826555/2322474123.jpeg",
    rating: 5,
  },
  {
    name: "Real Estate Signs",
    image: "https://ext.same-assets.com/1114826555/125916218.jpeg",
    rating: 5,
  },
  {
    name: "Sandwich Boards",
    image: "https://ext.same-assets.com/1114826555/966939002.jpeg",
    rating: 0,
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
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-poppins text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Our Customer Favorites
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {favorites.map((item) => (
            <a
              key={item.name}
              href="#"
              className="group"
            >
              <div className="aspect-square rounded-lg overflow-hidden mb-3 relative border-2 border-transparent group-hover:border-yellow-400 transition-all">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-center font-medium text-gray-800 group-hover:text-yellow-600 transition-colors mb-1">
                {item.name}
              </p>
              {item.rating > 0 && (
                <div className="flex justify-center">
                  <StarRating rating={item.rating} />
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
