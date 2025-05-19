import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

const products = [
  {
    title: 'Biomass Pellet Burner',
    brand: 'Ayushmann Biomass Pellet Burner Equipment',
    image: '/biomassmachine.jpg',
  },
  {
    title: 'Biomass Burner',
    brand: 'Ayushmann Biomass Burner Equipment',
    image: '/biomassburner.jpg',
  },
  {
    title: 'Hot air',
    brand: 'Ayushmann Biomass Energy Equipment',
    image: '/hotair.jpeg',
  },
    {
    title: 'burner',
    brand: 'Ayushmann Biomass Energy Equipment',
    image: '/burner1.jpg',
  },
   {
    title: 'Biomass Stove',
    brand: 'Ayushmann Biomass Energy Equipment',
    image: '/biomassstove.webp',
  },

];

const ProductGallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -400 : 400,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-10">
        <p className="uppercase text-sm text-blue-600 font-bold tracking-wide">Our Products</p>
        <h2 className="text-3xl md:text-4xl font-extrabold max-w-2xl mx-auto leading-tight">
          Our products are high in demand due to their premium quality and affordable prices
        </h2>
      </div>

      {/* Scroll Buttons */}
      <div className="relative max-w-7xl mx-auto">
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full shadow p-2"
          onClick={() => scroll('left')}
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth px-10 py-4"
        >
          {products.map((product, idx) => (
            <div
              key={idx}
              className="min-w-[280px] max-w-xs bg-white shadow-md rounded-3xl overflow-hidden flex-shrink-0"
            >
              <div className="h-52 relative">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-xs uppercase font-semibold text-blue-600">{product.brand}</p>
                <h3 className="text-lg font-bold">{product.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full shadow p-2"
          onClick={() => scroll('right')}
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </section>
  );
};

export default ProductGallery;
