// TODO - imports
import React from 'react'
import Slider from 'react-slick'

// TODO - components
const FootballersSlider = () => {

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