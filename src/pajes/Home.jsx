import React from 'react'
import HomeHero from '../components/HomeHero'
import Features from '../components/feature/Features'
import Faqs from '../components/faqs/Faqs'
import Footer from '../components/footer/Footer'
import Sub from '../components/Sub'

const Home = () => {
  return (
    <div className='relative'>
      <HomeHero />
      <Features />
      <Faqs />
      <Sub />
      <Footer />
    </div>
  )
}

export default Home
