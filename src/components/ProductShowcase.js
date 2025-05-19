import Link from 'next/link';

const ProductShowcase = () => {
  const products = [
    {
      title: 'Biomass burner',
      description: 'Quick and cost-effective screening of baggage to detect threats objects.',
      image: 'https://via.placeholder.com/300x200.png?text=Biomass+Pellet+Burner', // Placeholder image
      link: '/contact',
    },
    {
      title: 'Biomass hotair',
      description: 'Non destructive material testing guaranteeing highest quality.',
      image: 'https://via.placeholder.com/300x200.png?text=Veticle+Fired+Pellet+Burner', // Placeholder image
      link: '/contact',
    },
    {
      title: 'Biomass dryier',
      description: 'Automatic detection of non-conformities of food product.',
      image: 'https://via.placeholder.com/300x200.png?text=Namkin+Bhatti', // Placeholder image
      link: '/contact',
    },

  ];

  return (
    <section className="w-full py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              {/* Image */}
              <div className="w-full h-48 md:h-56 bg-gray-200">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2">
                  {product.title}
                  <div className="h-1 w-12 bg-blue-600 mt-1"></div>
                </h3>
                <p className="text-gray-600 text-sm md:text-base mb-4">
                  {product.description}
                </p>
                <Link href={product.link}>
                  <button className="flex items-center text-blue-900 font-semibold hover:text-blue-600 transition-colors duration-300">
                    Inquiry Now
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;