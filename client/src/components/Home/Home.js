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
const Home = () => {

  // state
  const [footballers, setFootballers] = useState([])

  // fetch data
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/footballers/')
      setFootballers(data)
    }
    getData()
  }, [])
  console.log(footballers)

  // top slider specs
  const settingsSingle = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  }
  // carousel specs
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 7,
    slidesToScroll: 1,
  }

  // TODO display
  return (
    <main>
      <FootballersSlider settingsSingle={settingsSingle} />
      <div className='carousel-column'>
        <FootballersCarousel settings={settings} footballers={footballers} continent='Europe' />
        <FootballersCarousel settings={settings} footballers={footballers} continent='South America' />
        <FootballersCarousel settings={settings} footballers={footballers} continent='Africa' />
        <FootballersCarousel settings={settings} footballers={footballers} continent='North America' />
        <FootballersCarousel settings={settings} footballers={footballers} continent='Asia' />
        <FootballersCarousel settings={settings} footballers={footballers} continent='Oceania' />
      </div>
    </main>
  )
}

export default Home