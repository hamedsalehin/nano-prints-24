import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

const favorites = [
  { name: "Retractable Banners", image: "/images/customer-favorites/retractable_banners.jpeg", href: "/custom-banners/roll-up-banners", rating: 4 },
  { name: "Feather Flags", image: "/images/customer-favorites/Feather_flags.jpeg", href: "/custom-flags/feather-flags", rating: 5 },
  { name: "Parking Signs", image: "/images/customer-favorites/parking_sign.jpeg", href: "/custom-signs/parking-signs", rating: 5 },
  { name: "Real Estate Signs", image: "/images/customer-favorites/real_estate_signs.jpeg", href: "/custom-signs/real-estate-signs", rating: 5 },
  { name: "Car Magnets", image: "/images/customer-favorites/car_magnet.jpeg", href: "/vehicle-signs/magnetic-signs", rating: 5 },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${star <= rating ? "fill-[#ff2d78] text-[#ff2d78]" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
}

export function CustomerFavorites() {
  return (
    <section className="py-14 bg-white">
      <div className="w-full px-6 md:px-16 lg:px-24 xl:px-32">
        <h2 className="font-poppins text-3xl md:text-4xl font-extrabold mb-8 tracking-tight pink-cyan-text">
          Our Customer Favorites
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {favorites.map((item) => (
            <Link key={item.name} href={item.href} className="group flex flex-col">
              {/* Pure CSS hover via favorite-card-hover */}
              <div className="favorite-card-hover aspect-square rounded-2xl overflow-hidden mb-4 relative shadow-md">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 192px, 256px"
                  quality={85}
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <p className="text-center font-bold text-gray-900 mb-1 font-poppins text-base md:text-lg leading-tight group-hover:pink-cyan-text transition-all">
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
