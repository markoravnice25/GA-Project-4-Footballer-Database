// TODO - imports
// react
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// slider
import Slider from 'react-slick'

//TODO - component
const FootballersCarousel = ({ continent, footballers }) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 6,
    slidesToScroll: 1,
  }

  return (
    <>
      <div className='continent-row'>
        <h2>{continent}</h2>
        <Slider {...settings} className='carousel-wrapper'>
          {footballers.map(item => {
            const { fullName, age, profileImage, citizenship, id, club, position, marketValue } = item
            if (item.continent === continent) {
              return (
                <div key={id}>
                  <Link to={`/footballer/${id}`}>
                    <div className="image-wrapper">
                      <img src={profileImage} />
                    </div>
                    <div className='card-body-home'>
                      <div className='card-title'>
                        <h4>{fullName}</h4>
                      </div>
                      <div className='footballer-details'>
                        <h5>{citizenship}</h5>
                        <h5>{marketValue}</h5>
                        <h5>{club}</h5>
                        <h5>{position}</h5>
                        <h5>{age}</h5>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            }
          })}
        </Slider>
      </div>
      <hr />
    </>
  )
}

export default FootballersCarousel