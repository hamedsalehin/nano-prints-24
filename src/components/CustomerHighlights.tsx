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
    <section
      className="py-12"
      style={{ background: "linear-gradient(160deg, #f9f0ff 0%, #e0faff 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2
          className="font-poppins text-xl md:text-2xl font-bold mb-6 text-transparent bg-clip-text"
          style={{ backgroundImage: "linear-gradient(135deg, #ff2d78, #b020ff, #00e5ff)" }}
        >
          Customer Highlights
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-3 gap-1 md:gap-2">
          {customerPhotos.map((photo, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden group cursor-pointer rounded-lg"
            >
              <img
                src={photo.image}
                alt={`Customer photo by ${photo.name}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Pink/cyan gradient overlay on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center"
                style={{
                  background:
                    "linear-gradient(to top, rgba(255,45,120,0.75) 0%, rgba(176,32,255,0.35) 50%, transparent 100%)",
                }}
              >
                <div className="p-3 text-white text-center">
                  <p className="text-sm font-bold">{photo.name}</p>
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
