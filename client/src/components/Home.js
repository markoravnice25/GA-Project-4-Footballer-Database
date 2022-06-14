import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import FootballerCarousel from './FootballerShow/FootballerCarousel'

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
      <Slider {...settingsSingle} className='main-slider'>
        <img src="/images/Argentina.jpg" alt="" />
        <img src="/images/Qatar.jpeg" alt="Qatar" />
        <img src="/images/USA.jpg" alt="USA" />
        <img src="/images/Australia.jpeg" alt="Australia" />
        <img src="/images/Italy.webp" alt="Italy" />
        <img src="/images/Senegal.jpeg" alt='Senegal' />
      </Slider>

      <FootballerCarousel settings={settings} footballers={footballers} continent='Europe' />
      <FootballerCarousel settings={settings} footballers={footballers} continent='South America' />
      <FootballerCarousel settings={settings} footballers={footballers} continent='Africa' />
      <FootballerCarousel settings={settings} footballers={footballers} continent='North America' />
      <FootballerCarousel settings={settings} footballers={footballers} continent='Asia' />
      <FootballerCarousel settings={settings} footballers={footballers} continent='Oceania' />
    </main>
  )
}

export default Home