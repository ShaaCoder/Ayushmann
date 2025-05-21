import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

const features = [
  'Amazing Product Quality',
  'Enhanced Operator',
  'Superior Durability',
  'Great Connectivity',
  'Customizable Design',
  'Networking Platform',
];

const ProductFeatures = () => {
  return (
    <section className="bg-gray-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12 relative">
        {/* Left Image Block */}
        <div className="relative w-full lg:w-1/2">
          <div className="rounded-tr-[40px] sm:rounded-tr-[60px] overflow-hidden shadow-lg">
            <Image
              src="/burner2.jpg" // Replace with your actual image path
              alt="Ayushmann Biomass Machine"
              width={800}
              height={600}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover w-full h-auto aspect-[4/3]"
              priority
            />
          </div>

          {/* Circular Quality Badge */}
          <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 bg-white rounded-xl shadow-xl p-4 sm:p-6 w-32 sm:w-40 text-center z-20 transition-transform hover:scale-105">
            <div className="border-4 border-blue-600 rounded-full w-16 sm:w-24 h-16 sm:h-24 mx-auto flex items-center justify-center text-xl sm:text-2xl font-bold text-blue-700">
              100%
            </div>
            <p className="text-xs sm:text-sm font-semibold text-gray-800 mt-2">Providing Quality</p>
          </div>
        </div>

        {/* Right Text Block */}
        <div className="w-full lg:w-1/2 bg-blue-700 text-white p-6 sm:p-8 lg:p-10 lg:rounded-bl-[60px] flex flex-col justify-center">
          <span className="uppercase text-xs sm:text-sm tracking-widest text-blue-300 font-semibold block mb-2">
            Product Features
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-snug mb-4">
            Sleek, Customizable Design for Your Ambiance
          </h2>
          <p className="mb-6 text-sm sm:text-base text-white/90">
            Established in 2020 in Gali No.3 Surat Nagar Bahadurgarh-124507, Distt. Jhajjar, Ayushmann Biomass Energy Equipment is a leading manufacturer of
            biomass burner, biomass hot air, biomass dryer, biomass stoves, and more. Our products are renowned for their premium quality and
            affordability, ensuring timely delivery and a strong client base.
          </p>

          {/* Feature List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white text-sm font-medium mb-6">
            {features.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-white flex-shrink-0" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="flex items-center space-x-2 pt-4 border-t border-white/30 text-white/80 text-sm">
            <svg
              className="w-5 h-5 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M3 13h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM5 17h14v2H5v-2zM5 5h14v2H5V5zm0 8h14v2H5v-2z" />
            </svg>
            <p>The Network Platform enhances product connectivity.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeatures;
