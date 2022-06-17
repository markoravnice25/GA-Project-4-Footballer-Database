import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { useNavigate, useParams, Link } from 'react-router-dom'

import Slider from 'react-slick'

import { userIsAuthenticated, getTokenFromLocalStorage, getPayload } from '../../helpers/auth'

import FootballersCarousel from '../Home/FootballersCarousel'

const AccountProfile = () => {
  const navigate = useNavigate()
  const [account, setAccount] = useState('')
  const [errors, setErrors] = useState(false)

  const payload = getPayload()
  const id = payload.sub

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 6,
    slidesToScroll: 1,
  }

  useEffect(() => {
    !userIsAuthenticated() && navigate('/login')

    const getAccount = async () => {
      try {
        const { data } = await axios.get(`/api/auth/profile/${id}`, {
          headers: {
            Authorization: `Bearer ${getTokenFromLocalStorage()}`,
          },
        })
        setAccount(data)
        console.log(data)
      } catch (error) {
        console.log(error)
        setErrors(true)
      }
    }
    getAccount()

  }, [])
  console.log(account)

  return (
    <>
      <div className="container footballer-show-container">
        <div className='row footballer-title-row'>
          <h4>{account.username}</h4>
        </div>
        <div className="row">
          <div className="col-md-3 profile-pic">
            <img src={account.profile_image} alt="" />
          </div>
          <div className="col-md-3 footballer-info personal-information-account">
            <div className="row footballer-info-row">
              <h2>Personal Information</h2>
            </div>
            <div className="row footballer-info-row">
              <div className="col-md-6"><h4>Name: <br></br><span>{account.first_name}</span></h4></div>
            </div>
            <div className="row footballer-info-row">
              <div className="col-md-6"><h4>Surname: <br></br><span>{account.last_name}</span></h4></div>
            </div>
            <div className="row footballer-info-row">
              <div className="col-md-6"><h4>Email: <br></br><span>{account.email}cm</span></h4></div>
            </div>
            <div className="row footballer-info-row">
              <div className="col-md-6"><h4>Citizenship: <br></br><span>{account.nationality}</span></h4></div>
            </div>
          </div>
          <div className="col-md-2 account-buttons-div">
            <div className="owner-buttons owner-buttons-account mb-4">
              <Link className='btn edit' to={'/footballer/add'}>Add Footballer</Link>
            </div>
          </div>
        </div>
      </div>
      <div className='account-page-carousel'>
        <div className='continent-row'>
          <h2>{account.username}, Here are footballers you&apos;ve added to the database!</h2>
          <Slider {...settings} className='carousel-wrapper'>
            {account && account.footballers && account.footballers.map(item => {
              const { fullName, age, profileImage, citizenship, id, club, position, marketValue } = item

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
                        <h5>{marketValue}m</h5>
                        <h5>{club}</h5>
                        <h5>{position}</h5>
                        <h5>{age}</h5>
                      </div>
                    </div>
                  </Link>
                </div>
              )

            })}
          </Slider>
        </div>
        <hr />
      </div>
      {/* <div>
        <h2>Your Added Players</h2>
        <div>{account && account.footballers && account.footballers.map(footballer => {
          console.log(footballer)
          return (
            <div className='your-added-players' key={footballer.id}>
              <Link to={`/footballer/${footballer.id}`}>
                <div className="added-image">
                  <img src={footballer.profileImage} />
                </div>
                <div className='added-card-body'>
                  <div className='added-card-title'>
                    <h4>{footballer.fullName}</h4>
                  </div>
                  <div className='added-player-age'>
                    <h5>{footballer.age}</h5>
                  </div>
                  <h4 className="added-player-citizenship">{footballer.citizenship}</h4>
                </div>
              </Link>
            </div>
          )
        })} </div>
      </div> */}
    </>
  )
}

export default AccountProfile