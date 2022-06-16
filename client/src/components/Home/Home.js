// TODO Imports
// React; axios
import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Slick
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// components
import FootballersCarousel from './FootballersCarousel'
import FootballersSlider from './FootballersSlider'

// TODO Component
const Home = ({ footballers }) => {

  // TODO display
  return (
    <>
      <div className='main-slider'>
        <FootballersSlider />
      </div>
      <div className='carousel-column'>
        <FootballersCarousel footballers={footballers} continent='Europe' />
        <FootballersCarousel footballers={footballers} continent='South America' />
        <FootballersCarousel footballers={footballers} continent='Africa' />
        <FootballersCarousel footballers={footballers} continent='North America' />
        <FootballersCarousel footballers={footballers} continent='Asia' />
        <FootballersCarousel footballers={footballers} continent='Oceania' />
      </div>
    </>
  )
}

export default Home