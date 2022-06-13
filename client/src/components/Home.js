import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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
    slidesToShow: 4,
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
      <Slider {...settingsSingle} className='big-slider'>
        <img src="/images/Argentina.jpg" alt="" />
        <img src="/images/Qatar.jpeg" alt="Qatar" />
        <img src="/images/USA.jpg" alt="USA" />
        <img src="/images/Australia.jpeg" alt="Australia" />
        <img src="/images/Italy.webp" alt="Italy" />
        <img src="/images/Senegal.jpeg" alt='Senegal'/>
      </Slider>

      <div className='genre-row fiction'>
        <h2>Europe</h2>
        <Slider {...settings} className='carousel-wrapper'>
          {footballers.map(item => {
            const { fullName, age, profileImage, citizenship, pk } = item
            if (item.continent === 'Europe') {
              return (
                <div key={pk}>
                  <Link to={'/'}>
                    <div className="image-wrapper">
                      <img src={profileImage} />
                    </div>
                    <div className='card-body-home'>
                      <div className='card-title'>
                        <h4>{fullName}</h4>
                      </div>
                      <div className='authors-home'>
                        <h5>{age}</h5>
                      </div>
                      <h4 className="price">{citizenship}</h4>
                    </div>
                  </Link>
                </div>
              )
            }
          })}
        </Slider>
      </div>

      <div className='genre-row graphic-novel'>
        <hr />
        <h2>South America</h2>
        <Slider {...settings} className='carousel-wrapper'>
          {footballers.map((item, index) => {
            const { fullName, age, profileImage, citizenship, pk } = item
            if (item.continent === 'South America') {
              return (
                <div key={pk}>

                  <Link to={'/'}>
                    <div key={index}>
                      <div className="image-wrapper">
                        <img src={profileImage} />
                      </div>
                      <div className='card-body-home'>
                        <div className='card-title'>
                          <h4>{fullName}</h4>
                        </div>
                        <div className='authors-home'>
                          <h5>{age}</h5>
                        </div>
                        <h4 className="price">{citizenship}</h4>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            }
          })}
        </Slider>
      </div>

      <div className='genre-row fiction'>
        <h2>Africa</h2>
        <Slider {...settings} className='carousel-wrapper'>
          {footballers.map(item => {
            const { fullName, age, profileImage, citizenship, pk } = item
            if (item.continent === 'Africa') {
              return (
                <div key={pk}>
                  <Link to={'/'}>
                    <div className="image-wrapper">
                      <img src={profileImage} />
                    </div>
                    <div className='card-body-home'>
                      <div className='card-title'>
                        <h4>{fullName}</h4>
                      </div>
                      <div className='authors-home'>
                        <h5>{age}</h5>
                      </div>
                      <h4 className="price">{citizenship}</h4>
                    </div>
                  </Link>
                </div>
              )
            }
          })}
        </Slider>
      </div>

      <div className='genre-row fiction'>
        <h2>North America</h2>
        <Slider {...settings} className='carousel-wrapper'>
          {footballers.map(item => {
            const { fullName, age, profileImage, citizenship, pk } = item
            if (item.continent === 'North America') {
              return (
                <div key={pk}>
                  <Link to={'/'}>
                    <div className="image-wrapper">
                      <img src={profileImage} />
                    </div>
                    <div className='card-body-home'>
                      <div className='card-title'>
                        <h4>{fullName}</h4>
                      </div>
                      <div className='authors-home'>
                        <h5>{age}</h5>
                      </div>
                      <h4 className="price">{citizenship}</h4>
                    </div>
                  </Link>
                </div>
              )
            }
          })}
        </Slider>
      </div>

      <div className='genre-row fiction'>
        <h2>Asia</h2>
        <Slider {...settings} className='carousel-wrapper'>
          {footballers.map(item => {
            const { fullName, age, profileImage, citizenship, pk } = item
            if (item.continent === 'Asia') {
              return (
                <div key={pk}>
                  <Link to={'/'}>
                    <div className="image-wrapper">
                      <img src={profileImage} />
                    </div>
                    <div className='card-body-home'>
                      <div className='card-title'>
                        <h4>{fullName}</h4>
                      </div>
                      <div className='authors-home'>
                        <h5>{age}</h5>
                      </div>
                      <h4 className="price">{citizenship}</h4>
                    </div>
                  </Link>
                </div>
              )
            }
          })}
        </Slider>
      </div>

      <div className='genre-row fiction'>
        <h2>Oceania</h2>
        <Slider {...settings} className='carousel-wrapper'>
          {footballers.map(item => {
            const { fullName, age, profileImage, citizenship, pk } = item
            if (item.continent === 'Oceania') {
              return (
                <div key={pk}>
                  <Link to={'/'}>
                    <div className="image-wrapper">
                      <img src={profileImage} />
                    </div>
                    <div className='card-body-home'>
                      <div className='card-title'>
                        <h4>{fullName}</h4>
                      </div>
                      <div className='authors-home'>
                        <h5>{age}</h5>
                      </div>
                      <h4 className="price">{citizenship}</h4>
                    </div>
                  </Link>
                </div>
              )
            }
          })}
        </Slider>
      </div>
    </main>
  )
}

export default Home