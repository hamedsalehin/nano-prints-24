const valueProps = [
  {
    icon: "https://ext.same-assets.com/1114826555/593408931.svg",
    title: "Award-Winning Support",
    description: "Experience top-rated customer service every step of your purchase.",
  },
  {
    icon: "https://ext.same-assets.com/1114826555/3683589186.svg",
    title: "Tax Exempt Savings",
    description: "Qualify for tax exemption on eligible orders and stretch your budget even further.",
  },
  {
    icon: "https://ext.same-assets.com/1114826555/3064715821.svg",
    title: "Expert Design Services",
    description: "Our professional in-house team brings your custom sign vision to life, hassle-free.",
  },
  {
    icon: "https://ext.same-assets.com/1114826555/3700267247.svg",
    title: "Exclusive Corporate Pricing",
    description: "Secure discounted rates on bulk orders for brand consistency and cost savings.",
    link: "Learn More",
  },
  {
    icon: "https://ext.same-assets.com/1114826555/2316830229.svg",
    title: "100% Satisfaction Guaranteed",
    description: "Not completely satisfied with your product? Our customer love team will make it right.",
  },
  {
    icon: "https://ext.same-assets.com/1114826555/1104967888.svg",
    title: "Free Artwork Check",
    description: "We'll review any artwork for free so your sign design is pixel perfect.",
  },
];

export function ValuePropositions() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valueProps.map((prop) => (
            <div
              key={prop.title}
              className="bg-white rounded-lg p-6 flex items-start gap-4 hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0">
                <img
                  src={prop.icon}
                  alt=""
                  className="w-12 h-12"
                />
              </div>
              <div>
                <h3 className="font-poppins font-bold text-gray-900 mb-2">
                  {prop.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {prop.description}
                  {prop.link && (
                    <>
                      {" "}
                      <a href="#" className="text-[#33ad6b] hover:underline">
                        {prop.link}
                      </a>
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
