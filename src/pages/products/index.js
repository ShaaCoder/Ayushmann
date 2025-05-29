'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const products = [
  {
    title: 'Biomass Burner',
    description:
      'Efficient and cost-effective biomass burner for industrial heating, designed to reduce energy costs and environmental impact.',
    image: '/burner1.jpg',
    link: '/products/biomass-burner',
    price: 'Contact for pricing',
  },
  {
    title: 'Biomass Hotair',
    description:
      'High-performance hot air generator using biomass, ideal for drying and heating applications in various industries.',
    image: '/biomasshotair.jpg',
    link: '/products/biomass-hotair',
    price: 'Contact for pricing',
  },
  {
    title: 'Biomass Stove',
    description:
      'High-efficiency biomass stove designed for clean and sustainable cooking or heating. Ideal for industrial and commercial applications, offering reduced emissions and cost-effective fuel usage.',
    image: '/biomassstove.jpg',
    link: '/products/biomass-stove',
    price: 'Contact for pricing',
  },
];

export default function Products() {
  return (
    <>
      <Head>
        <title>Biomass Burners & Industrial Solutions | Ayushmann Products</title>
        <meta
          name="description"
          content="Browse Ayushmann’s high-efficiency biomass burners, hot air generators, and stoves. Designed for industrial sustainability in Bahadurgarh, Jhajjar, India."
        />
        <meta
          name="keywords"
          content="biomass burners, industrial heating solutions, biomass hot air generator, biomass stove, sustainable energy India, Ayushmann products, Jhajjar"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Biomass Burners & Industrial Solutions | Ayushmann Products" />
        <meta
          property="og:description"
          content="Explore Ayushmann's eco-friendly and cost-saving biomass solutions including burners, hot air generators, and stoves for industrial use."
        />
        <meta property="og:image" content="https://www.ayushmannbiomass.com/biomassBg.jpg" />
        <meta property="og:url" content="https://www.ayushmannbiomass.com/products" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.ayushmannbiomass.com/products" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ItemList',
              itemListElement: products.map((product, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                item: {
                  '@type': 'Product',
                  name: product.title,
                  description: product.description,
                  image: `https://www.ayushmannbiomass.com${product.image}`,
                  url: `https://www.ayushmannbiomass.com${product.link}`,
                  brand: { '@type': 'Brand', name: 'Ayushmann' },
                  offers: {
                    '@type': 'Offer',
                    priceCurrency: 'INR',
                    price: '0.0',
                    availability: 'https://schema.org/InStock',
                    url: `https://www.ayushmannbiomass.com${product.link}`,
                  },
                },
              })),
            }),
          }}
        />
      </Head>

      <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
        <Header />

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative min-h-[300px] sm:min-h-[400px] bg-gradient-to-b from-blue-900 to-blue-700 text-white">
            <div className="absolute inset-0">
              <Image
                src="/biomassBg.jpg"
                alt="Ayushmann Biomass Solutions"
                fill
                sizes="100vw"
                className="object-cover opacity-30"
                priority
                quality={80}
              />
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
              <motion.h1
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Our Products
              </motion.h1>
              <motion.p
                className="text-sm sm:text-base lg:text-lg max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Discover Ayushmann’s innovative <strong>biomass solutions</strong> and industrial products, designed
                for sustainability and efficiency in Gali No.3 Surat Nagar, Bahadurgarh-124507, Distt. Jhajjar, India.
              </motion.p>
            </div>
          </section>

          {/* Products Grid */}
          <section className="py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h2
                className="text-2xl sm:text-3xl font-bold text-gray-800 mb-12 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                Explore Our Range
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {products.map((product, index) => (
                  <motion.article
                    key={index}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-transform hover:-translate-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="relative h-48 sm:h-56">
                      <Image
                        src={product.image}
                        alt={`${product.title} by Ayushmann`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                        loading="lazy"
                        quality={75}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{product.title}</h3>
                      <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-3">
                        {product.description}
                      </p>
                      <p className="text-gray-500 text-sm mb-4">{product.price}</p>
                      <a
                        href={product.link}
                        className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                        aria-label={`Learn more about ${product.title}`}
                      >
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-12 sm:py-16 bg-blue-800 text-white text-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h2
                className="text-2xl sm:text-3xl font-bold mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                Ready to Transform Your Industry?
              </motion.h2>
              <motion.p
                className="text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Contact us to learn more about our <strong>biomass solutions</strong> and industrial products tailored
                for your needs.
              </motion.p>
              <motion.a
                href="/contact"
                className="inline-block bg-white text-blue-800 py-2 sm:py-3 px-6 sm:px-8 rounded-lg font-semibold uppercase tracking-wide hover:bg-gray-100 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                aria-label="Contact us for more information"
              >
                Get in Touch
              </motion.a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
