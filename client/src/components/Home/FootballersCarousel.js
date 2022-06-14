// TODO - imports
// react
import React from 'react'
import { Link } from 'react-router-dom'
// slider
import Slider from 'react-slick'

//TODO - component
const FootballersCarousel = ({ settings, footballers, continent, club }) => {
  return (
    <div className='continent-row'>
      <h2>{continent}</h2>
      <Slider {...settings} className='carousel-wrapper'>
        {footballers.map(item => {
          const { fullName, age, profileImage, citizenship, id } = item
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
                    <div className='player-age'>
                      <h5>{age}</h5>
                    </div>
                    <h4 className="player-citizenship">{citizenship}</h4>
                  </div>
                </Link>
              </div>
            )
          }
        })}
      </Slider>
    </div>
  )
}

export default FootballersCarousel