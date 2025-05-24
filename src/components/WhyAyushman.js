import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import ayushmanImage from '../../public/biomassmachine.jpg';
import Link from 'next/link';

const WhyAyushmann = () => {
  const benefits = [
    'Indigenous Development, Local Knowledge',
    'Unmatched Efficiency with Sustainable Solutions',
    'Affordable Pricing with Prompt Customer Support',
  ];

  return (
    <section className="bg-gray-50 py-12 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <span className="text-sm font-semibold text-blue-600 uppercase">Ayushmann Biomass</span>
          <h2 className="text-4xl font-bold mt-2 mb-4">
            Why Choose Ayushmann Biomass Energy Equipment
          </h2>
          <p className="text-gray-700 mb-4">

            Located at <strong>Gali No.3, Surat Nagar, Bahadurgarh-124507, Distt. Jhajjar</strong>, Ayushmann Biomass Energy Equipment is a trusted manufacturer of high-quality biomass solutions. 
            We provide eco-friendly energy solutions, including 
            <strong> Biomass Wood Pellet Machines</strong>, <strong>Biomass Wood Pellet Burners</strong>, Biomass Stoves, and more.
            Gali No.3 Surat Nagar Bahadurgarh-124507, Distt. Jhajjar, we “Ayushmann Biomass Energy Equipment” are a Sole Proprietorship firm,
            engaged as the foremost Manufacturer of <strong>Biomass Wood Pellet Machines</strong>, 
            <strong> Biomass Wood Pellet Burners</strong>, Biomass Stoves, and more.

          </p>
          <p className="text-gray-600 mb-6">
            Our products are known for their premium quality, cost-effectiveness, and reliability. 
            We prioritize customer satisfaction through timely delivery, excellent after-sales support, 
            and a commitment to sustainable energy solutions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {benefits.map((item, index) => (
              <div key={index} className="flex items-start space-x-2">
                <CheckCircle className="text-blue-600 mt-1" size={20} />
                <span className="text-sm font-medium text-gray-800">{item}</span>
              </div>
            ))}
          </div>

          {/* Simple Tailwind Button */}
          <Link href="/products" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-full transition">
            Explore Our Products
          </Link>
        </div>

        {/* Image Section */}
        <div className="relative">
          <Image
            src={ayushmanImage}
            alt="Ayushmann Biomass Energy Equipment"
            width={600}
            height={500}
            className="rounded-xl shadow-lg"
          />
          <div className="absolute bottom-4 right-4 bg-blue-700 text-white px-4 py-2 rounded-full flex items-center space-x-2 shadow-md">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 15l5.19-3L10 9v6zm12-3c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10z"/>
            </svg>
            <span className="text-sm">Visit Our Facility</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAyushmann;
