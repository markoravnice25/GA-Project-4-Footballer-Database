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
    <Slider {...settingsSingle}>
      <img src="https://res.cloudinary.com/dnj5og0ry/image/upload/v1656692327/project-4-footballer-database/Argentina_kuqujs.jpg" alt="Argentina" />
      <img src="https://res.cloudinary.com/dnj5og0ry/image/upload/v1656692317/project-4-footballer-database/Qatar_vyqzfb.jpg" alt="Qatar" />
      <img src="https://res.cloudinary.com/dnj5og0ry/image/upload/v1656692308/project-4-footballer-database/USA_ksbavl.jpg" alt="USA" />
      <img src="https://res.cloudinary.com/dnj5og0ry/image/upload/v1656692324/project-4-footballer-database/Australia_k5tg8l.jpg" alt="Australia" />
      <img src="https://res.cloudinary.com/dnj5og0ry/image/upload/v1656692320/project-4-footballer-database/Italy_aka2ir.webp" alt="Italy" />
      <img src="https://res.cloudinary.com/dnj5og0ry/image/upload/v1656692314/project-4-footballer-database/Senegal_xmz0pa.jpg" alt='Senegal' />
    </Slider>
  )
}

export default FootballersSlider