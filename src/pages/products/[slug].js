'use client';

import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const products = [
  {
    title: 'Biomass Burner',
    slug: 'biomass-burner',
    description:
      'Our Biomass Burner is an efficient and cost-effective solution for industrial heating. Designed to reduce energy costs and environmental impact, it leverages renewable biomass fuel to deliver consistent performance. Ideal for industries seeking sustainable heating solutions.',
    image: '/burner1.jpg',
    features: [
      'High thermal efficiency with up to 90% energy conversion.',
      'Low emissions, meeting stringent environmental standards.',
      'Compatible with various biomass fuels like wood pellets and agricultural waste.',
      'Automated control system for easy operation.',
    ],
    price: 'Contact for pricing',
  },
  {
    title: 'Biomass Hotair',
    slug: 'biomass-hotair',
    description:
      'The Biomass Hotair generator is a high-performance system for drying and heating applications. It uses biomass to produce clean, hot air, making it perfect for industries like agriculture, food processing, and manufacturing.',
    image: '/biomasshotair.avif',
    features: [
      'Produces hot air up to 300°C for diverse applications.',
      'Energy-efficient design reduces operational costs.',
      'Robust construction ensures long-term durability.',
      'Eco-friendly alternative to fossil fuel-based systems.',
    ],
    price: 'Contact for pricing',
  },
  {
    title: 'pellets',
    slug: 'pellets',
    description:
      'Our pellets offers advanced moisture removal for industrial processes. It ensures quality and consistency by using biomass energy to dry materials efficiently, making it ideal for agricultural and industrial applications.',
    image: '/pellets.jpg',
    features: [
      'Uniform drying with precise temperature control.',
      'High capacity, suitable for large-scale operations.',
      'Reduces drying time by up to 30% compared to traditional methods.',
      'Sustainable design with minimal carbon footprint.',
    ],
    price: 'Contact for pricing',
  },
];

export default function ProductDetails() {
  const router = useRouter();
  const { slug } = router.query;

  const product = products.find((p) => p.slug === slug);

  if (!product || !slug) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-6">
              The product you’re looking for doesn’t exist. Explore our other products!
            </p>
            <button
              onClick={() => router.push('/products')}
              className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold uppercase tracking-wide hover:bg-blue-700 transition-transform hover:scale-105"
            >
              Back to Products
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      <Head>
        <title>{`${product.title} | Aryan Engineers Biomass Solutions`}</title>
        <meta
          name="description"
          content={`Learn more about the ${product.title} by Aryan Engineers in Pune, India. ${product.description}`}
        />
        <meta
          name="keywords"
          content={`${product.title}, Aryan Engineers products, biomass solutions, industrial storage tanks, biomass burner Pune, sustainable industrial products`}
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={`${product.title} | Aryan Engineers Biomass Solutions`} />
        <meta
          property="og:description"
          content={`Discover the ${product.title} by Aryan Engineers, a leader in biomass solutions and industrial products in Pune, India.`}
        />
        <meta property="og:image" content={product.image} />
        <meta property="og:url" content={`https://yourwebsite.com/products/${slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Product',
              name: product.title,
              description: product.description,
              image: product.image,
              url: `https://yourwebsite.com/products/${slug}`,
              brand: {
                '@type': 'Brand',
                name: 'Aryan Engineers',
              },
              offers: {
                '@type': 'Offer',
                price: 'Contact for pricing',
                priceCurrency: 'INR',
                availability: 'https://schema.org/InStock',
              },
            }),
          }}
        />
      </Head>
      <Header />
      <main className="flex-grow">
        <section className="relative min-h-[400px] bg-gradient-to-b from-blue-900 to-blue-700 text-white">
          <div className="absolute inset-0">
            <Image
              src={product.image}
              alt={`${product.title} by Aryan Engineers`}
              fill
              className="object-cover opacity-30"
              priority
              quality={85}
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {product.title}
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover how Aryan Engineers’ {product.title} can enhance your industrial processes with sustainable solutions.
            </motion.p>
          </div>
        </section>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                  About the {product.title}
                </h2>
                <p className="text-gray-600 text-base sm:text-lg mb-4">{product.description}</p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Key Features</h3>
                <ul className="list-disc list-inside text-gray-600 text-base sm:text-lg mb-4 space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <p className="text-gray-500 text-base sm:text-lg mb-2">
                  <strong>Price:</strong> {product.price}
                </p>
                <p className="text-gray-500 text-sm mb-6">
                  <strong>Last Updated:</strong> May 16, 2025, 06:48 PM IST
                </p>
                <button
                  onClick={() => router.push('/contact')}
                  className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold uppercase tracking-wide hover:bg-blue-700 transition-transform hover:scale-105"
                >
                  Inquire Now
                </button>
              </motion.div>
              <motion.div
                className="relative h-64 sm:h-80 md:h-96"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={product.image}
                  alt={`${product.title} in action`}
                  fill
                  className="object-cover rounded-2xl shadow-lg"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-blue-800 text-white text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-2xl sm:text-3xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Need More Information?
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Contact us to learn more about the {product.title} and how it can benefit your operations.
            </motion.p>
            <motion.a
              href="/contact"
              className="inline-block bg-white text-blue-800 py-3 px-8 rounded-lg font-semibold uppercase tracking-wide hover:bg-gray-100 transition-transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
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