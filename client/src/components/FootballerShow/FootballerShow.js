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

// import Spinner from '../utilities/Spinner'
import { userIsAuthenticated, userIsOwner, getTokenFromLocalStorage } from '../../helpers/auth'
const FootballerShow = ({ footballers }) => {
  const navigate = useNavigate()
  const { id, reviewID, bookId } = useParams()
  // const [review, setReview] = useState('')
  // const [reviews, setReviews] = useState([])
  const [footballer, setFootballer] = useState(null)
  const [errors, setErrors] = useState(false)
  //for section display same subgenre books
  // const [similarBooks, setSimilarBooks] = useState([])

  // reviewform
  // const [formData, setFormData] = useState({
  //   reviewTitle: '',
  //   text: '',
  // })


  // TODO ================================= Start of Wishlist button functionality =================================

  // // * 1) state
  // const [ wishlistItem, setWishlistItem ] = useState('🎁')

  // // * 2) useEffect for status (has item been added to wishList or not?)
  // useEffect(() => {
  //   const getWishListStatus = async () => {
  //     const wishlistArray = await axios.get('/api/account/wishlist/', {
  //       headers: {
  //         Authorization: `Bearer ${getTokenFromLocalStorage()}`,
  //       },
  //     })
  //     wishlistArray.data.some(item => item.id === id) ? setWishlistItem('🧨 Remove from Wishlist 🧨') : setWishlistItem('🎁 Add to Wishlist 🎁')
  //   }
  //   getWishListStatus()
  // }, [book])

  // // * 3) execution of button functionality - logic in back end request.
  // const addOrRemove = async (e) => {
  //   e.preventDefault()
  //   try {
  //     const response = await axios.post(`/api/account/wishlist/${id}`, null, {
  //       headers: {
  //         Authorization: `Bearer ${getTokenFromLocalStorage()}`,
  //       },
  //     })
  //     navigate('/account/wishlist')
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // TODO ================================= end of Wishlist button functionality =================================

  // to get single book
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

  // to get all the books
  // useEffect(() => {
  //   const getSimilarBooks = async () => {
  //     try {
  //       const { data } = await axios.get('/api/books')
  //       setSimilarBooks(data)

  //     } catch (error) {
  //       setErrors(true)

  //     }
  //   }
  //   getSimilarBooks()
  // }, [id])

  // This useEffect checks to see if the user is the owner
  // useEffect(() => {
  //   if (review) {
  //     // On page load we want to check the user is owner !userIsOwner(review) && 
  //     navigate(`/api/books/${id}/reviews/`)
  //   }
  // }, [review, navigate])
  // // ? Update formData
  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value })
  //   setErrors({ ...errors, [e.target.name]: '' })
  // }


  // this function will addreview 

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   try {
  //     const { data } = await axios.post(`/api/books/${id}/reviews`, formData, {
  //       headers: {
  //         Authorization: `Bearer ${getTokenFromLocalStorage()}`,
  //       },
  //     })
  //     navigate(`/books/${data._id}`)
  //     console.log('data --->', data)
  //     setReviews([ ...reviews, formData ])
  //     setFormData({
  //       reviewTitle: '',
  //       text: '',
  //     })
  //   } catch (error) {
  //     console.log(error)
  //     console.log(error.response.data)
  //     setErrors(error.response.data)
  //   }
  // }


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
                  <Button variant="danger">Delete Footballer</Button>
                  <Link className='btn btn-primary' to={`/footballer/edit/${id}`}>Edit Footballer</Link>
                </div>
              }
            </div>
            <div className='carousel-column'>
              <FootballersCarousel footballers={footballers} continent={footballer.continent} />
            </div>




            {/* <h4 className='you-may-also'>You may also be interested in...</h4>
            <div className='similar-books-wrapper'>
              {similarBooks.filter(item => item.subGenre === book.subGenre && item.id !== book.id).map((item, index) => {
                if (index < 6) {
                  return <SimilarBookDisplay key={item.id} item={item} />
                }
              })}
            </div>

            <Col>
              {userIsAuthenticated() ?
                <form className='review-form' onSubmit={handleSubmit}>
                  <h4 className='text'>Write your review</h4> */}

            {/* reviewTitle */}
            {/* <label htmlFor="reviewTitle">Title</label> */}

            {/* <input type="text" name="reviewTitle" className='input' placeholder='Add a title for your review here' value={formData.reviewTitle} onChange={handleChange} /> */}
            {/* <textarea type="text" name="title" className="input" rows="2" placeholder='Add a title for your review here' value={formData.reviewTitle} onChange={handleChange}></textarea> */}

            {/* {errors.reviewTitle && <p className='text-danger'>{errors.reviewTitle}</p>} */}

            {/* reviewText */}
            {/* <label htmlFor="reviewText">Text</label> */}

            {/* <input type="text" name="reviewText" className='input' placeholder='write your review here' value={formData.reviewText} onChange={handleChange} /> */}
            {/* <textarea type="text" name="text" className="input" rows="4" placeholder='write your review here' value={formData.text} onChange={handleChange}></textarea>


                  {errors.reviewText && <p className='text-danger'>{errors.reviewText}</p>} */}

            {/* Submit */}
            {/* <button type="submit" className="button small">POST REVIEW</button>
                </form>
                :
                (
                  <div className="not-registered-container">
                    <div>
                      <p>🖋<Link to="/login">Sign in </Link>to write a review</p>
                      <p>Not Registered Yet? <Link to="/register">Register</Link> instead</p>
                    </div>
                    {errors.text && (
                      <p>{errors.text}</p>
                    )}
                  </div>
                )}
            </Col>
            {!reviews.length < 1
              ?
              <h4 className='reviews-header'>Reviews:</h4>
              :
              <h4 className='reviews-header'>No reviews yet!</h4>
            }
            <div className='reviews-display-box'>
              {
                reviews.map((review) => {
                  return <ReviewDisplay key={review.id} review={review} />
                })
              }
            </div> */}

          </>
          :
          <h2 className='text-center'>
            {/* {errors ? 'Something went wrong! Please try again later!' : <Spinner />} */}
          </h2>
        }

      </Row>

    </Container>
  )






}
export default FootballerShow