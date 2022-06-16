import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom'
// import { ReviewDisplay } from './ReviewDisplay'
// import { SimilarBookDisplay } from './SimilarBookDisplay'
// slider
// import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'


// Bootstrap components76t
import Button from 'react-bootstrap/Button'


// Components
import FootballersCarousel from '../Home/FootballersCarousel'

import { userIsAuthenticated, userIsOwner, getTokenFromLocalStorage } from '../../helpers/auth'
const FootballerShow = ({ footballers, callback }) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [footballer, setFootballer] = useState(null)
  const [errors, setErrors] = useState(false)


  // Get single footballer
  useEffect(() => {
    const getFootballer = async () => {
      try {
        const response = await axios.get(`/api/footballers/${id}`)
        console.log(response)
        setFootballer(response.data)
        // setFormData(data)
        // setReviews(data.reviews)
      } catch (error) {
        setErrors(true)
      }
    }
    getFootballer()
    // console.log('reviews --->', reviews)
  }, [id])
  console.log(footballer)

  const deleteFootballer = async () => {
    try {
      // Sending delete request
      await axios.delete(`/api/footballers/${id}`, {
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },
      })
      // If successful navigate away from the single page back to cheeses
      // When cheeses loads, it makes a fresh api call getting new data, without this cheese in it
      callback(Math.random())
      navigate('/account')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container">
      {footballer ?
        <>
          <div className="container footballer-show-container">
            <div className='row footballer-title-row'>
              <h4>{footballer.number} - {footballer.fullName}</h4>
            </div>
            <div className="row">
              <div className="col-md-3 profile-pic">
                <img src={footballer.profileImage} alt="" />
              </div>
              <div className="col-md-4 footballer-info personal-information">
                <div className="row footballer-info-row">
                  <h2>Personal Information</h2>
                </div>
                <div className="row footballer-info-row">
                  <div className="col-md-6"><h4>Date of birth: <br></br><span>{footballer.dateOfBirth}</span></h4></div>
                  <div className="col-md-6"><h4>Age: <br></br><span>{footballer.age}</span></h4></div>
                </div>
                <div className="row footballer-info-row">
                  <div className="col-md-6"><h4>Place of Birth: <br></br><span>{footballer.placeOfBirth}</span></h4></div>
                  <div className="col-md-6"><h4>Citizenship: <br></br><span>{footballer.citizenship}</span></h4></div>
                </div>
                <div className="row footballer-info-row">
                  <div className="col-md-6"><h4>Height: <br></br><span>{footballer.height}cm</span></h4></div>
                  <div className="col-md-6"><h4>Continent: <br></br><span>{footballer.continent}</span></h4></div>
                </div>
                <div className="row footballer-info-row">
                  <div className="col-md-6"><h4>International Caps: <br></br><span>{footballer.caps}</span></h4></div>
                  <div className="col-md-6"><h4>International Goals: <br></br><span>{footballer.goals}</span></h4></div>
                </div>
                {/* {footballer.styles && footballers.styles.map(style => {
                    return (
                      <div key={style.name}>
                        <p>{style.name}</p>
                      </div>
                    )
                  })} */}
              </div>
              <div className="col-md-4 footballer-info football-information">
                <div className="row footballer-info-row">
                  <h2>Football Information</h2>
                </div>
                <div className="row footballer-info-row">
                  <div className="col-md-6"><h4>Position: <br></br><span>{footballer.position}</span></h4></div>
                  <div className="col-md-6"><h4>Current International: <br></br><span>{footballer.currentInternational}</span></h4></div>
                </div>
                <div className="row footballer-info-row">
                  <div className="col-md-6"><h4>Club: <br></br><span>{footballer.club}</span></h4></div>
                  <div className="col-md-6"><h4>League: <br></br><span>{footballer.league}</span></h4></div>
                </div>
                <div className="row footballer-info-row">
                  <div className="col-md-6"><h4>League Level: <br></br><span>{footballer.leagueLevel}</span></h4></div>
                  <div className="col-md-6"><h4>Joined Club: <br></br><span>{footballer.joinedClub}</span></h4></div>
                </div>
                <div className="row footballer-info-row">
                  <div className="col-md-6"><h4>Contract Expires: <br></br><span>{footballer.contractExpires}</span></h4></div>
                  <div className="col-md-6"><h4>marketValue: <br></br><span>{footballer.marketValue}</span></h4></div>
                </div>
              </div>
              {/* <div className="col-md-3 footballer-info">
                <div className="row footballer-info-row">
                  <div className="col-md-6"><h4>Place of birth: {footballer.placeOfBirth}</h4></div>
                  <div className="col-md-6"><h4>Position: {footballer.position}</h4></div>
                </div>
                <div className="row footballer-info-row">
                  <div className="col-md-6"><h4>Citizenship: {footballer.citizenship}</h4></div>
                  <div className="col-md-6"><h4>Club: {footballer.club}</h4></div>
                </div>
                <div className="row footballer-info-row">
                  <div className="col-md-6"><h4>Country: {footballer.currentInternational}</h4></div>
                  <div className="col-md-6"><h4>Club: {footballer.leagueLevel}</h4></div>
                </div>
                <div className="row footballer-info-row">
                  <div className="col-md-6"><h4>Caps/Goals: {footballer.caps}/{footballer.goals}</h4></div>
                  <div className="col-md-6"><h4>Joined Club: {footballer.joinedClub}</h4></div>
                </div>
                <div className="row footballer-info-row">
                  <div className="col-md-6"><h4>Value: {footballer.marketValue}</h4></div>
                  <div className="col-md-6"><h4>Club: {footballer.contractExpires}</h4></div>
                </div>
                <div className="row footballer-info-row">
                  <div className="col-md-6"><h4>Continent: {footballer.continent}</h4></div>
                  <div className="col-md-6"><h4>Club: {footballer.contractExpires}</h4></div>
                </div>
              </div> */}
            </div>
          </div>
          {userIsOwner(footballer) && userIsAuthenticated() &&
            <div className="owner-buttons mb-4">
              <Button className='delete' onClick={deleteFootballer}>Delete {footballer.fullName}</Button>
              <Link className='btn edit' to={`/footballer/edit/${id}`}>Edit {footballer.fullName}</Link>
            </div>
          }
          <div className='carousel-column carousel-column-show-page'>
            <FootballersCarousel footballers={footballers} continent={footballer.continent} />
          </div>
        </>
        :
        <h2 className='text-center'>
          No footballer with that ID.
        </h2>
      }
    </div>
  )
}

export default FootballerShow