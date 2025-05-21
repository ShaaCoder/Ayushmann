'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.service) newErrors.service = 'Please select a service';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        setStatus('sending');
        const response = await fetch('/api/send-whatsapp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const { url } = await response.json();
          setStatus('success');
          setFormData({ name: '', email: '', phone: '', service: '', message: '' });
          setErrors({});
          window.open(url, '_blank');
        } else {
          throw new Error('Failed to send message');
        }
      } catch (error) {
        console.error('Error:', error);
        setStatus('error');
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      <Head>
        <title>Contact Ayushmann | Biomass Solutions Pune</title>
        <meta
          name="description"
          content="Contact Ayushmann in Pune, India, for innovative biomass solutions, storage tanks, and industrial products. Reach out via our form, phone, or email."
        />
        <meta
          name="keywords"
          content="contact Ayushmann, biomass solutions Pune, industrial storage tanks, Pune industrial products, sustainable solutions"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contact Ayushmann | Biomass Solutions Pune" />
        <meta
          property="og:description"
          content="Get in touch with Ayushmann for expert biomass solutions and industrial storage tanks in Pune, India."
        />
        <meta property="og:image" content="/biomassBg.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Ayushmann',
              url: 'https://yourwebsite.com',
              logo: '/logo.png',
              description:
                'Ayushmann is a trusted firm in Bahadurgarh, India, specializing in biomass solutions,  industrial products.',
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
                telephone: '8708822925',
                contactType: 'Customer Service',
                email: 'kveerse370@gmail.com',
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
              src="/biomassBg.jpg"
              alt="Contact Ayushmann for Biomass Solutions"
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
              Contact Ayushmann
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Connect with us in Pune, India, to explore innovative biomass solutions and industrial storage tanks.
            </motion.p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500 opacity-10 rounded-full transform translate-x-16 -translate-y-16" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500 opacity-10 rounded-full transform -translate-x-16 translate-y-16" />
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="w-full sm:w-1/2">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className={`w-full p-3 rounded-lg border ${
                          errors.name ? 'border-red-500' : 'border-gray-200'
                        } bg-white/90 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors text-sm`}
                      />
                      {errors.name && (
                        <p className="text-red-300 text-xs mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div className="w-full sm:w-1/2">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className={`w-full p-3 rounded-lg border ${
                          errors.email ? 'border-red-500' : 'border-gray-200'
                        } bg-white/90 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors text-sm`}
                      />
                      {errors.email && (
                        <p className="text-red-300 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className={`w-full p-3 rounded-lg border ${
                        errors.phone ? 'border-red-500' : 'border-gray-200'
                      } bg-white/90 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors text-sm`}
                    />
                    {errors.phone && (
                      <p className="text-red-300 text-xs mt-1">{errors.phone}</p>
                    )}
                  </div>
                  <div>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full p-3 rounded-lg border ${
                        errors.service ? 'border-red-500' : 'border-gray-200'
                      } bg-white/90 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors text-sm appearance-none`}
                    >
                      <option value="" disabled>
                        Select Service
                      </option>
                     <option value="biomass-solutions">Biomass Solutions</option>
                      <option value="biomass-dryers">Biomass dryers</option>
                      <option value="biomass-hotair">Biomass hotair</option>
                      <option value="biomass-burner">Biomass burner</option>
                    </select>
                    {errors.service && (
                      <p className="text-red-300 text-xs mt-1">{errors.service}</p>
                    )}
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Your Message"
                    className="w-full p-3 rounded-lg border border-gray-200 bg-white/90 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors text-sm"
                  />
                  {status === 'success' && (
                    <p className="text-green-300 text-sm">Message sent successfully!</p>
                  )}
                  {status === 'error' && (
                    <p className="text-red-300 text-sm">Failed to send message. Please try again.</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className={`w-full bg-white text-blue-800 py-3 rounded-lg font-semibold uppercase tracking-wide hover:bg-gray-100 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md ${
                      status === 'sending' ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
                  Our Contact Details
                </h2>
                <p className="text-gray-600 text-base sm:text-lg mb-6">
                  Reach out to <strong>Ayushmann</strong> in Bahadurgarh, India, for inquiries about our <strong>biomass solutions</strong>, <strong>storage tanks</strong>, or other industrial products. We’re here to assist you.
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-600 text-sm">
                    Gali No.3 Surat Nagar Bahadurgarh-124507, Distt. Jhajjar
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600 text-sm">
                      <a href="tel:+918708822925" className="hover:text-blue-600 transition-colors">
                        8708822925
                      </a>
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600 text-sm">
                      <a
                        href="mailto:info@aryanengineers.com"
                        className="hover:text-blue-600 transition-colors"
                      >
                        kveerse370@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="mt-8 relative h-64 sm:h-80">
                  <Image
                    src="/contact.jpg"
                    alt="Ayushmann Pune Office"
                    fill
                    className="object-cover rounded-2xl shadow-lg"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
