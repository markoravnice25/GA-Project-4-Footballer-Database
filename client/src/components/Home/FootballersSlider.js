import React from 'react'
import Slider from 'react-slick'

const FootballersSlider = ({ settingsSingle }) => {
  return (
    <Slider {...settingsSingle} className='main-slider'>
      <img src="/images/Argentina.jpg" alt="" />
      <img src="/images/Qatar.jpeg" alt="Qatar" />
      <img src="/images/USA.jpg" alt="USA" />
      <img src="/images/Australia.jpeg" alt="Australia" />
      <img src="/images/Italy.webp" alt="Italy" />
      <img src="/images/Senegal.jpeg" alt='Senegal' />
    </Slider>
  )
}

export default FootballersSlider
