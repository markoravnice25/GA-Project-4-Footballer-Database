import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import FootballersCarousel from './FootballersCarousel'
import FootballersSlider from './FootballersSlider'

const Home = () => {

  const [footballers, setFootballers] = useState([])


  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/footballers/') // * <-- replace with your endpoint
      setFootballers(data)
    }
    getData()
  }, [])
  console.log(footballers)

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
  }

  const settingsSingle = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  }

  return (
    <main>
      <FootballersSlider settingsSingle={settingsSingle} />

      <FootballersCarousel settings={settings} footballers={footballers} continent='Europe' />
      <FootballersCarousel settings={settings} footballers={footballers} continent='South America' />
      <FootballersCarousel settings={settings} footballers={footballers} continent='Africa' />
      <FootballersCarousel settings={settings} footballers={footballers} continent='North America' />
      <FootballersCarousel settings={settings} footballers={footballers} continent='Asia' />
      <FootballersCarousel settings={settings} footballers={footballers} continent='Oceania' />
    </main>
  )
}

export default Home