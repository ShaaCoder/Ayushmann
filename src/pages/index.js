import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import ClientLayout from "@/components/ClientLayout";

export default function Home() {
  // Example product data (you can replace or make dynamic later)
  const product = {
    name: "High-Efficiency Biomass Burner",
    description:
      "Our biomass burner delivers superior energy savings and eco-friendly industrial heating solutions.",
    image: "https://www.ayushmannbiomass.com/images/biomass-burner.jpg",
    price: "25000",
    currency: "INR",
    availability: "https://schema.org/InStock",
    url: "https://www.ayushmannbiomass.com/products/biomass-burner",
  };

  // JSON-LD structured data for the product
  const jsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: [product.image],
    description: product.description,
    brand: {
      "@type": "Brand",
      name: "Ayushmann Biomass",
    },
    offers: {
      "@type": "Offer",
      url: product.url,
      priceCurrency: product.currency,
      price: product.price,
      availability: product.availability,
    },
  };

  return (
    <>
      <Head>
        <title>Biomass Burners & Industrial Solutions | Ayushmann Products</title>
        <meta
          name="description"
          content="Browse Ayushmann’s high-efficiency biomass burners, hot air generators, and stoves. Engineered for industrial sustainability and energy savings in Bahadurgarh, Jhajjar, India."
        />
        <meta
          name="keywords"
          content="biomass burners, industrial heating solutions, biomass hot air generators, biomass stoves, sustainable energy India, Ayushmann biomass products, Bahadurgarh, Jhajjar energy solutions"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.ayushmannbiomass.com/" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Biomass Burners & Industrial Heating Solutions | Ayushmann Products"
        />
        <meta
          property="og:description"
          content="Discover Ayushmann’s eco-friendly, cost-saving biomass burners, hot air generators, and stoves designed for industrial efficiency and sustainability."
        />
        <meta property="og:url" content="https://www.ayushmannbiomass.com/" />
        <meta
          property="og:image"
          content="https://www.ayushmannbiomass.com/og-image-products.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Biomass Burners & Industrial Heating Solutions | Ayushmann Products"
        />
        <meta
          name="twitter:description"
          content="Discover Ayushmann’s eco-friendly, cost-saving biomass burners, hot air generators, and stoves designed for industrial efficiency and sustainability."
        />
        <meta
          name="twitter:image"
          content="https://www.ayushmannbiomass.com/twitter-image-products.jpg"
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <div>
        <ClientLayout />
      </div>
    </>
  );
}
