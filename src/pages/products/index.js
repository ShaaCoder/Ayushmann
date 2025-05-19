// app/products/page.js
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
    image: '/biomasshotair.avif',
    link: '/products/biomass-hotair',
    price: 'Contact for pricing',
  },
  {
    title: 'Biomass Pellets',
    description:
      'Premium biomass pellets for efficient moisture removal, ensuring quality and consistency in industrial processes.',
    image: '/pellets.jpg',
    link: '/products/pellets',
    price: 'Contact for pricing',
  },
];

export default function Products() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      <Head>
        <title>Ayushmann Products | Biomass Solutions & Storage Tanks</title>
        <meta
          name="description"
          content="Explore Ayushmann' innovative biomass burners, hot air generators, and pellets, designed for sustainable industrial solutions in Pune, India."
        />
        <meta
          name="keywords"
          content="Ayushmann products, biomass solutions, industrial storage tanks, biomass burner Pune, sustainable industrial products"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Ayushmann Products | Biomass Solutions & Storage Tanks" />
        <meta
          property="og:description"
          content="Discover Ayushmann' range of biomass solutions and industrial products in Pune, India, designed for efficiency and sustainability."
        />
        <meta property="og:image" content="/biomassBg.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/products" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              products.map((product) => ({
                '@context': 'https://schema.org',
                '@type': 'Product',
                name: product.title,
                description: product.description,
                image: product.image,
                url: `https://yourwebsite.com${product.link}`,
                brand: {
                  '@type': 'Brand',
                  name: 'Ayushmann',
                },
                offers: {
                  '@type': 'Offer',
                  price: 'Contact for pricing',
                  priceCurrency: 'INR',
                  availability: 'https://schema.org/InStock',
                },
              }))
            ),
          }}
        />
      </Head>
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
              Discover Ayushmann’ innovative <strong>biomass solutions</strong> and industrial products, designed for
              sustainability and efficiency in Pune, India.
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
                <motion.div
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
                    <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-3">{product.description}</p>
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
                </motion.div>
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
              Contact us to learn more about our <strong>biomass solutions</strong> and industrial products tailored for
              your needs.
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
  );
}