import React from 'react';
import Head from 'next/head';
import Header from './Header';
import HeroSection from './HeroSection';
import WhyAryanEngineering from './WhyAyushman';
import ProductFeatures from './ProductFeatures';
import ProductGallery from './ProductGallery';
import NewsAndCallback from './NewsAndCallback';
import Footer from './Footer';

const ClientLayout = () => {
  return (
    <>
      <Head>
        <title>Ayushmann Biomass | Innovative Biomass Solutions & Industrial Products</title>
        <meta
          name="description"
          content="Ayushmann Biomass offers cutting-edge biomass solutions, storage tanks, and industrial products. Serving Bahadurgarh and beyond with sustainable, high-quality manufacturing."
        />
        <meta
          name="keywords"
          content="Ayushmann Biomass, biomass solutions, storage tanks, industrial products, sustainable solutions, Bahadurgarh, Haryana"
        />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Ayushmann Biomass | Innovative Biomass Solutions & Industrial Products" />
        <meta
          property="og:description"
          content="Explore Ayushmann Biomass' range of biomass solutions, storage tanks, and industrial equipment crafted for sustainability and efficiency."
        />
        <meta property="og:image" content="https://www.ayushmannbiomass.com/og-image.jpg" /> {/* Replace with actual og image */}
        <meta property="og:url" content="https://www.ayushmannbiomass.com/" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ayushmann Biomass | Innovative Biomass Solutions & Industrial Products" />
        <meta
          name="twitter:description"
          content="Explore Ayushmann Biomass' range of biomass solutions, storage tanks, and industrial equipment crafted for sustainability and efficiency."
        />
        <meta name="twitter:image" content="https://www.ayushmannbiomass.com/og-image.jpg" /> {/* Replace with actual Twitter image */}

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Ayushmann Biomass",
              "url": "https://www.ayushmannbiomass.com",
              "logo": "https://www.ayushmannbiomass.com/logo.png",
              "sameAs": [
                "https://www.facebook.com/yourpage",
                "https://www.linkedin.com/company/yourcompany",
                "https://twitter.com/yourhandle"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-8708822925",
                "contactType": "Customer Service",
                "email": "kveerse370@gmail.com"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Gali No.3 Surat Nagar Bahadurgarh-124507, Distt. Jhajjar",
                "addressLocality": "Bahadurgarh",
                "addressRegion": "Haryana",
                "postalCode": "124507",
                "addressCountry": "IN"
              }
            }),
          }}
        />
      </Head>

      <Header />
      <HeroSection />
      <WhyAryanEngineering />

      <ProductFeatures />
      <ProductGallery />
      <NewsAndCallback />
      <Footer />
    </>
  );
};

export default ClientLayout;
