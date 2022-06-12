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
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  }

  return (
    <main>
      <Slider {...settingsSingle} className='big-slider'>
        <img src="https://cdn.waterstones.com/images/00225298-1920x533.jpeg" />
        <img src="https://cdn.waterstones.com/images/00225721-1920x533.jpeg" />
        <img src="https://cdn.waterstones.com/images/00225177-1920x533.jpeg" />
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

      <div className='genre-row science-fiction'>
        <hr />
        <h2>Africa</h2>
        <Slider {...settings} className='carousel-wrapper'>
          {footballers.map((item, index) => {
            const { title, author, image, price, _id } = item
            if (item.genre === 'Science Fiction') {
              return (
                <div key={_id}>
                  <Link to={`/books/${_id}`}>
                    <div key={index}>
                      <div className="image-wrapper">
                        <img src={image} />
                      </div>
                      <div className='card-body-home'>
                        <div className='card-title'>
                          <h4>{title}</h4>
                        </div>
                        <div className='authors-home'>
                          <h5>{author}</h5>
                        </div>
                        <h4 className="price">£ {price}</h4>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            }
          })}
        </Slider>
      </div>

      <div className='genre-row children-teenage'>
        <hr />
        <h2>North America</h2>
        <Slider {...settings} className='carousel-wrapper'>
          {footballers.map((item, index) => {
            const { title, author, image, price, _id } = item
            if (item.genre === 'Children\'s & Teenage') {
              return (
                <div key={_id}>
                  <Link to={`/books/${_id}`}>
                    <div key={index}>
                      <div className="image-wrapper">
                        <img src={image} />
                      </div>
                      <div className='card-body-home'>
                        <div className='card-title'>
                          <h4>{title}</h4>
                        </div>
                        <div className='authors-home'>
                          <h5>{author}</h5>
                        </div>
                        <h4 className="price">£ {price}</h4>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            }
          })}
        </Slider>
      </div>

      <div className='genre-row non-fiction'>
        <hr />
        <h2>Asia</h2>
        <Slider {...settings} className='carousel-wrapper'>
          {footballers.map((item, index) => {
            const { title, author, image, price, _id } = item
            if (item.genre === 'Non-Fiction Books') {
              return (
                <div key={_id}>
                  <Link to={`/books/${_id}`}>
                    <div key={index}>
                      <div className="image-wrapper">
                        <img src={image} />
                      </div>
                      <div className='card-body-home'>
                        <div className='card-title'>
                          <h4>{title}</h4>
                        </div>
                        <div className='authors-home'>
                          <h5>{author}</h5>
                        </div>
                        <h4 className="price">£ {price}</h4>
                      </div>
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
        <h2>Oceania</h2>
        <Slider {...settings} className='carousel-wrapper'>
          {footballers.map((item, index) => {
            const { title, author, image, price, _id } = item
            if (item.genre === 'Graphic Novels & Manga') {
              return (
                <div key={_id}>
                  <Link to={`/books/${_id}`}>
                    <div key={index}>
                      <div className="image-wrapper">
                        <img src={image} />
                      </div>
                      <div className='card-body-home'>
                        <div className='card-title'>
                          <h4>{title}</h4>
                        </div>
                        <div className='authors-home'>
                          <h5>{author}</h5>
                        </div>
                        <h4 className="price">£ {price}</h4>
                      </div>
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