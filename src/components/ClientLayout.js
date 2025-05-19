import React from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import ProductShowcase from './ProductShowcase'
import WhyAryanEngineering from './WhyAyushman'
import ProductFeatures from './ProductFeatures'
import ProductGallery from './ProductGallery'
import NewsAndCallback from './NewsAndCallback'
import Footer from './Footer'
const ClientLayout = () => {
  return (
    <div>
    <Header/>
    <HeroSection/>
    <WhyAryanEngineering/>    
    <ProductFeatures/>
    <ProductGallery/>
    <NewsAndCallback/>
    <Footer/>
    </div>
  )
}

export default ClientLayout