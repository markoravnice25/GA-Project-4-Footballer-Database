//TODO - Imports
// react; axios
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
// bootstrap
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/esm/Col'

// components
import { getTokenFromLocalStorage, userIsOwner } from '../../helpers/auth.js'


const FootballerEdit = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const [playerToUpdate, setplayerToUpdate] = useState(false)

  const [formData, setFormData] = useState({
    number: '#',
    fullName: '',
    age: '',
    profileImage: '',
    dateOfBirth: '',
    placeOfBirth: '',
    citizenship: '',
    height: '',
    position: '',
    currentInternational: '',
    caps: '',
    goals: '',
    club: '',
    league: '',
    leagueLevel: '',
    joinedClub: '',
    contractExpires: '',
    marketValue: '€',
    continent: '',
  })

  const [errors, setErrors] = useState({})

  // UseEffect
  useEffect(() => {
    // Want to make a request for info about the cheese and update each field with it's current value in the db
    const getFootballer = async () => {
      try {
        const { data } = await axios.get(`/api/footballers/${id}`)
        console.log(data)
        setplayerToUpdate(data)
        setFormData(data)
      } catch (err) {
        console.log(err)
      }
    }

    getFootballer()
  }, [id])

  // This useEffect checks to see if the user is the owner, if not navigates back to show page
  useEffect(() => {
    if (!userIsOwner(playerToUpdate) && playerToUpdate) {
      // On page load we want to check the user is owner
      console.log('playerToUpdate ->', playerToUpdate)
      console.log('testing -> ', userIsOwner(playerToUpdate))
      navigate(`/footballer/${id}`)
    }
  }, [playerToUpdate, navigate])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleMultiChange = (e) => {
    console.log(e.target.value)
    console.log(e.target.name)
    const value = Array.from(e.target.selectedOptions, option => option.value)
    console.log(value)
    setFormData({ ...formData, [e.target.name]: value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.put(`/api/footballers/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        },
      })
      navigate(`/footballer/${data.id}`)
      console.log('data --->', data)
      setplayerToUpdate([...playerToUpdate, formData])
      setFormData({
        number: '#',
        fullName: '',
        age: '',
        profileImage: '',
        dateOfBirth: '',
        placeOfBirth: '',
        citizenship: '',
        height: '',
        position: '',
        currentInternational: '',
        caps: '',
        goals: '',
        club: '',
        league: '',
        leagueLevel: '',
        joinedClub: '',
        contractExpires: '',
        marketValue: '€',
        continent: '',
      })
    } catch (error) {
      console.log(error)
      setErrors(error.response.data)
      console.log('checking setErrors')
    }
  }


  return (
    <section className='section-register'>
      {/* Heading */}
      <Form className='auth-register' onSubmit={handleSubmit}>
        <Row>
          <h3 className='create-account'>CREATE AN ACCOUNT</h3>
        </Row>
        {/* Description */}
        <Row>
          <p className='create-account-paragraph'>Start your footballer-database journey by creating your account. Already have an account?
            <a href="/login"> LOGIN</a> and get
            browsing through our database.</p>
        </Row>
        <Row>
          <p className='create-account-paragraph-2'>Denotes required field *</p>
        </Row>
        {/* Title */}
        {/* Name */}
        <Row className="mb-3 form-label">
          <Form.Group as={Col}>
            <Form.Label>Number*</Form.Label>
            <Form.Control type="text" name='number' value={formData.number} onChange={handleChange} />
            {errors.number && <p className='text-danger'>{errors.number}</p>}
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Full Name*</Form.Label>
            <Form.Control type="text" name='fullName' value={formData.fullName} onChange={handleChange} />
            {errors.fullName && <p className='text-danger'>{errors.fullName}</p>}
          </Form.Group>
        </Row>

        <Row className="mb-3 form-label">
          <Form.Group as={Col}>
            <Form.Label>age*</Form.Label>
            <Form.Control type="text" name='age' placeholder='number needed - e.g. 69' value={formData.age} onChange={handleChange} />
            {errors.age && <p className='text-danger'>{errors.age}</p>}
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Profile Image*</Form.Label>
            <Form.Control type="text" name='profileImage' value={formData.profileImage} onChange={handleChange} />
            {errors.profileImage && <p className='text-danger'>{errors.profileImage}</p>}
          </Form.Group>
        </Row>

        <Row className="mb-3 form-label">
          <Form.Group as={Col}>
            <Form.Label>Date of Birth*</Form.Label>
            <Form.Control type="text" name='dateOfBirth' value={formData.dateOfBirth} onChange={handleChange} />
            {errors.dateOfBirth && <p className='text-danger'>{errors.dateOfBirth}</p>}
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Place of Birth*</Form.Label>
            <Form.Control type="text" name='placeOfBirth' value={formData.placeOfBirth} onChange={handleChange} />
            {errors.placeOfBirth && <p className='text-danger'>{errors.placeOfBirth}</p>}
          </Form.Group>
        </Row>

        <Row className="mb-3 form-label">
          <Form.Group as={Col}>
            <Form.Label>Citizenship*</Form.Label>
            <Form.Control type="text" name='citizenship' value={formData.citizenship} onChange={handleChange} />
            {errors.citizenship && <p className='text-danger'>{errors.citizenship}</p>}
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Height*</Form.Label>
            <Form.Control type="text" name='height' placeholder='number needed in cm - e.g. 185' value={formData.height} onChange={handleChange} />
            {errors.height && <p className='text-danger'>{errors.height}</p>}
          </Form.Group>
        </Row>

        <Row className="mb-3 form-label">
          <Form.Group as={Col}>
            <Form.Label>Position*</Form.Label>
            <Form.Control type="text" name='position' value={formData.position} onChange={handleChange} />
            {errors.position && <p className='text-danger'>{errors.position}</p>}
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Current International*</Form.Label>
            <Form.Control type="text" name='currentInternational' value={formData.currentInternational} onChange={handleChange} />
            {errors.currentInternational && <p className='text-danger'>{errors.currentInternational}</p>}
          </Form.Group>
        </Row>

        <Row className="mb-3 form-label">
          <Form.Group as={Col}>
            <Form.Label>Caps*</Form.Label>
            <Form.Control type="text" name='caps' placeholder='number needed - e.g. 69' value={formData.caps} onChange={handleChange} />
            {errors.caps && <p className='text-danger'>{errors.caps}</p>}
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Goals*</Form.Label>
            <Form.Control type="text" name='goals' placeholder='number needed - e.g. 69' value={formData.goals} onChange={handleChange} />
            {errors.goals && <p className='text-danger'>{errors.goals}</p>}
          </Form.Group>
        </Row>

        <Row className="mb-3 form-label">
          <Form.Group as={Col}>
            <Form.Label>Club*</Form.Label>
            <Form.Control type="text" name='club' value={formData.club} onChange={handleChange} />
            {errors.club && <p className='text-danger'>{errors.club}</p>}
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>League*</Form.Label>
            <Form.Control type="text" name='league' value={formData.league} onChange={handleChange} />
            {errors.league && <p className='text-danger'>{errors.league}</p>}
          </Form.Group>
        </Row>

        <Row className="mb-3 form-label">
          <Form.Group as={Col}>
            <Form.Label>League Level*</Form.Label>
            <Form.Control type="text" name='leagueLevel' value={formData.leagueLevel} onChange={handleChange} />
            {errors.leagueLevel && <p className='text-danger'>{errors.leagueLevel}</p>}
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Joined Club*</Form.Label>
            <Form.Control type="text" name='joinedClub' value={formData.joinedClub} onChange={handleChange} />
            {errors.joinedClub && <p className='text-danger'>{errors.joinedClub}</p>}
          </Form.Group>
        </Row>

        <Row className="mb-3 form-label">
          <Form.Group as={Col}>
            <Form.Label>Contract Expires*</Form.Label>
            <Form.Control type="text" name='contractExpires' value={formData.contractExpires} onChange={handleChange} />
            {errors.contractExpires && <p className='text-danger'>{errors.contractExpires}</p>}
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Market Value*</Form.Label>
            <Form.Control type="text" name='marketValue' value={formData.marketValue} onChange={handleChange} />
            {errors.marketValue && <p className='text-danger'>{errors.marketValue}</p>}
          </Form.Group>
        </Row>

        <Row className="mb-3 form-label">
          <Form.Group as={Col}>
            <Form.Label>Continent*</Form.Label>
            <Form.Control type="text" name='continent' value={formData.continent} onChange={handleChange} />
            {errors.continent && <p className='text-danger'>{errors.continent}</p>}
          </Form.Group>
          <Col sm={6}>
            <Form.Group className='mb-3' as={Col} controlId="formGridState">
              <Form.Label>Style*</Form.Label>
              <Form.Control as='select' className='trigger' multiple={true} name='styles' value={formData.styles} onChange={handleMultiChange} >
                <option value={1}>Attacking</option>
                <option value={2}>defensive</option>
                <option value={3}>creative</option>
                <option value={4}>destructive</option>
              </Form.Control>
              {errors.title && <p className='text-danger'>{errors.title.message}</p>}
            </Form.Group>
          </Col>
        </Row>


        {/* Checkboxes and register button */}
        <Form.Group className="mb-3 form-label" id="formGridCheckbox">
          <Form.Check className='checkbox' type="checkbox" label="Receive the latest football news and be the first to hear about player updates" />
        </Form.Group>
        <Row>
          <Form.Group as={Col} className="mb-3 form-label" id="formGridCheckbox">
            <Form.Check className='checkbox2' type="checkbox" label="I agree to the footballer-database Terms and Conditions." />
          </Form.Group>
          <Form.Group as={Col}>
            <Button className='button-register' type="submit">
              REGISTER
            </Button>
          </Form.Group>
        </Row>
      </Form>
    </section>
  )
}

export default FootballerEdit