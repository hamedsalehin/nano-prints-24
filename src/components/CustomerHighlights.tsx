const customerPhotos = [
  {
    image: "https://ext.same-assets.com/1114826555/876457887.jpeg",
    name: "Thomas Brown",
    date: "8 months ago",
  },
  {
    image: "https://ext.same-assets.com/1114826555/1959825830.jpeg",
    name: "Jean La",
    date: "8 months ago",
  },
  {
    image: "https://ext.same-assets.com/1114826555/119799418.jpeg",
    name: "Robert Stewart",
    date: "9 months ago",
  },
  {
    image: "https://ext.same-assets.com/1114826555/3506997956.jpeg",
    name: "Cindy Maynard",
    date: "11 months ago",
  },
  {
    image: "https://ext.same-assets.com/1114826555/2873649867.jpeg",
    name: "Francesca Audi",
    date: "1 year ago",
  },
  {
    image: "https://ext.same-assets.com/1114826555/4099876739.jpeg",
    name: "Ed Spinks",
    date: "1 year ago",
  },
  {
    image: "https://ext.same-assets.com/1114826555/2035095922.jpeg",
    name: "Susie",
    date: "2 years ago",
  },
  {
    image: "https://ext.same-assets.com/1114826555/1362570557.jpeg",
    name: "James Culpepper",
    date: "2 years ago",
  },
  {
    image: "https://ext.same-assets.com/1114826555/3133295348.jpeg",
    name: "Anonymous",
    date: "2 years ago",
  },
];

export function CustomerHighlights() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-poppins text-xl md:text-2xl font-bold text-gray-900 mb-6">
          Customer Highlights
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-3 gap-1 md:gap-2">
          {customerPhotos.map((photo, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden group cursor-pointer"
            >
              <img
                src={photo.image}
                alt={`Customer photo by ${photo.name}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end justify-center opacity-0 group-hover:opacity-100">
                <div className="p-2 text-white text-center">
                  <p className="text-sm font-medium">{photo.name}</p>
                  <p className="text-xs opacity-80">{photo.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
