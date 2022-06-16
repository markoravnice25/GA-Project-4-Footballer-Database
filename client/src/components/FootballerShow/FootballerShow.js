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
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
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
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container className="bookshow">
      <Row>
        {footballer ?
          <>
            <div className="container">
              <Col md='4'>
                <div className="row">
                  <div className="col-md-4"><h3>{footballer.number} {footballer.fullName} ({footballer.age})</h3></div>
                </div>
                <div className="col-md-2"><img src={footballer.profileImage} alt={footballer.fullName} /></div>
              </Col>
              <Col md=''>
                <div className="row">
                  <div className="col-md-2 offset-md-3"><p>DOB: {footballer.dateOfBirth}</p></div>
                  <div className="col-md-2"><p>Height: {footballer.height}cm</p></div>
                  <div className="col-md-2"><p>Country: {footballer.currentInternational}</p></div>
                  <div className="col-md-2"><p>Club: {footballer.leagueLevel}</p></div>
                </div>
                <div className="row">
                  <div className="col-md-2 offset-md-3"><p>Place of birth: {footballer.placeOfBirth}</p></div>
                  <div className="col-md-2"><p>Position: {footballer.position}cm</p></div>
                  <div className="col-md-2"><p>Caps/Goals: {footballer.caps}/{footballer.goals}</p></div>
                  <div className="col-md-2"><p>League: {footballer.joinedClub}</p></div>
                </div>
                <div className="row">
                  <div className="col-md-2 offset-md-3"><p>Citizenship: {footballer.citizenship}</p></div>
                  <div className="col-md-2"><p>Club: {footballer.club}</p></div>
                  <div className="col-md-2"><p>Value: {footballer.marketValue}</p></div>
                  <div className="col-md-2"><p>Club: {footballer.contractExpires}</p></div>
                </div>
              </Col>
            </div>
            <div>
              {userIsOwner(footballer) &&
                <div className="owner-buttons mb-4">
                  <Button variant="danger" onClick={deleteFootballer}>Delete Footballer</Button>
                  <Link className='btn btn-primary' to={`/footballer/edit/${id}`}>Edit Footballer</Link>
                </div>
              }
            </div>
            <div className='carousel-column'>
              <FootballersCarousel footballers={footballers} continent={footballer.continent} />
            </div>
          </>
          :
          <h2 className='text-center'>
          </h2>
        }
      </Row>
    </Container>
  )
}

export default FootballerShow