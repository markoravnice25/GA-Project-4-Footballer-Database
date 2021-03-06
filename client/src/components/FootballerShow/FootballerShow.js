import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom'

// Bootstrap components76t
import Button from 'react-bootstrap/Button'

// Components
import FootballersCarousel from '../home/FootballersCarousel'

import { userIsAuthenticated, userIsOwner, getTokenFromLocalStorage } from '../../helpers/auth'

const FootballerShow = ({ footballers, callback, settings }) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [footballer, setFootballer] = useState(null)
  const [errors, setErrors] = useState(false)


  // Get single footballer
  useEffect(() => {
    const getFootballer = async () => {
      try {
        const response = await axios.get(`/api/footballers/${id}/`)
        console.log(response)
        setFootballer(response.data)
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
      await axios.delete(`/api/footballers/${id}/`, {
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },
      })
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
              <div className='col-md-6'>
                <h4>{footballer.number} - {footballer.fullName}</h4>
              </div>
              <div className="styles col-md-4 offset-md-2">
                <h2>Styles</h2>
                {footballer && footballer.styles && footballer.styles.map(style => {
                  return (
                    <div className="footballer-styles" key={style.name}>
                      <p><span>{style.name} </span></p>
                    </div>
                  )
                })}
              </div>
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
                  <div className="col-md-6"><h4>marketValue: <br></br><span>{footballer.marketValue}m</span></h4></div>
                </div>
              </div>
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