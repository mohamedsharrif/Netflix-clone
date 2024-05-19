import React from 'react'
import HomeHero from '../components/HomeHero'
import Features from '../components/feature/Features'
import Faqs from '../components/faqs/Faqs'

const Home = () => {
  return (
    <div className='relative'>
      <HomeHero />
      <Features />
      <Faqs />
    </div>
  )
}

export default Home
