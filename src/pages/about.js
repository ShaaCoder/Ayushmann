'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
     <Head>
  <title>About Ayushmann | Biomass Solutions & Storage Tanks</title>
  <meta
    name="description"
    content="Learn about Ayushmann, a leading provider of biomass solutions, storage tanks, and industrial products in Gali No.3 Surat Nagar Bahadurgarh-124507, Distt. Jhajjar, India. Discover our mission, history, and commitment to sustainability that drives innovation and eco-friendly practices."
  />
  <meta
    name="keywords"
    content="Ayushmann, biomass solutions, storage tanks, industrial products, Gali No.3 Surat Nagar Bahadurgarh-124507, Distt. Jhajjar, sustainable industrial solutions, biomass burners, eco-friendly storage tanks, renewable energy solutions Gali No.3 Surat Nagar Bahadurgarh-124507, Distt. Jhajjar"
  />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="About Ayushmann | Biomass Solutions & Storage Tanks" />
  <meta
    property="og:description"
    content="Discover Ayushmann, your trusted partner for innovative biomass solutions and industrial storage tanks in Gali No.3 Surat Nagar Bahadurgarh-124507, Distt. Jhajjar, India."
  />
  <meta property="og:image" content="https://www.ayushmannbiomass.com/biomassBg.jpg" />
  <meta property="og:url" content="https://www.ayushmannbiomass.com/about" />
  <meta name="twitter:card" content="summary_large_image" />
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Ayushmann',
        url: 'https://www.ayushmannbiomass.com/',
        logo: 'https://www.ayushmannbiomass.com/logo.png',
        description:
          'Ayushmann is a trusted firm in Gali No.3 Surat Nagar Bahadurgarh-124507, Distt. Jhajjar, India, specializing in biomass solutions, storage tanks, and industrial products.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Gali No.3 Surat Nagar Bahadurgarh-124507, Distt. Jhajjar',
          addressLocality: 'Bahadurgarh',
          addressRegion: 'Haryana',
          postalCode: '124507',
          addressCountry: 'IN',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+918708822925',
          contactType: 'Customer Service',
          email: 'kveerse370@gmail.com',
        },
        sameAs: [
          'https://www.facebook.com/ayushmann',
        ],
      }),
    }}
  />
</Head>

      <Header />
      <main className="flex-grow bg-gray-50 font-sans">
        {/* Hero Section */}
        <section className="relative min-h-[400px] bg-gradient-to-b from-blue-900 to-blue-700 text-white">
          <div className="absolute inset-0">
            <Image
              src="/biomassBg.jpg"
              alt="Ayushmann Biomass Solutions"
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
              About Ayushmann
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Pioneering sustainable biomass solutions  in Bahadurgarh, India.
            </motion.p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                  Who We Are
                </h2>
                <p className="text-gray-600 text-base sm:text-lg mb-4">
                  Founded in Bahadurgarh, <strong>Ayushmann</strong> is a trusted name in the industrial sector, specializing in innovative <strong>biomass solutions</strong>, high-quality <strong>storage tanks</strong>, and advanced industrial products. With a commitment to sustainability and excellence, we empower businesses worldwide to address critical challenges and seize opportunities.
                </p>
                <p className="text-gray-600 text-base sm:text-lg">
                  Our mission is to deliver cost-effective, eco-friendly solutions that drive industrial progress. From biomass burners to pallet trucks, our products are designed to meet the highest standards of quality and performance.
                </p>
              </motion.div>
              <motion.div
                className="relative h-64 sm:h-80 md:h-96"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/burner1.jpg"
                  alt="Ayushmann Industrial Facility"
                  fill
                  className="object-cover rounded-2xl shadow-lg"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              className="text-2xl sm:text-3xl font-bold text-gray-800 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Our Core Values
            </motion.h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Sustainability',
                  description:
                    'We prioritize eco-friendly solutions to reduce environmental impact and promote green industrial practices.',
                },
                {
                  title: 'Innovation',
                  description:
                    'Our team embraces cutting-edge technology to deliver advanced biomass and industrial solutions.',
                },
                {
                  title: 'Quality',
                  description:
                    'Every product is crafted with precision to meet rigorous quality standards and client expectations.',
                },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-transform hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our History */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Our Journey
            </motion.h2>
            <motion.div
              className="prose prose-lg text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p>
                Established over a decade ago in Gali No.3 Surat Nagar Bahadurgarh-124507, Distt. Jhajjar,Ayushmann began as a small enterprise with a vision to revolutionize the industrial sector. Our focus on <strong>biomass solutions</strong>  quickly gained traction, earning us a reputation for reliability and innovation.
              </p>
              <p>
                Today, we are a global leader, serving clients across industries with a diverse portfolio that includes biomass burners, dryers, and pellets . Our commitment to sustainability and customer satisfaction drives us to continuously improve and expand our offerings.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-800 text-white text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-2xl sm:text-3xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Partner withAyushmann
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Ready to explore our innovative biomass solutions and industrial products? Contact us today to discuss-Way, your needs.
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
      <br />
      <Footer />
    </div>
  );
};

export default About;
