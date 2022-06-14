import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


// Bootstrap components
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/esm/Col'
import { useState } from 'react'

const Register = () => {

  const navigate = useNavigate()

  const [ formData, setFormData ] = useState({
    email: '',
    username: '',
    password: '',
    password_confirmation: '',
    first_name: '',
    last_name: '',
    profile_image: '',
    nationality: '',
  })

  const [ errors, setErrors ] = useState({})

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/api/auth/register/', formData)
      navigate('/login')
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
          <h3 className='create-account'>Testing! CREATE AN ACCOUNT</h3>
        </Row>
        {/* Description */}
        <Row>
          <p className='create-account-paragraph'>Start your Waterstones journey by creating your account. For enhanced rewards,
            <a href="/register"> REGISTER</a> for
            <span className='inline-plus'> plus </span>
            and join our hugely popular email programme.</p>
        </Row>
        <Row>
          <p className='create-account-paragraph-2'>Denotes required field *</p>
        </Row>
        {/* Title */}
        {/* Name */}
        <Row className="mb-3 form-label">
          <Form.Group as={Col}>
            <Form.Label>First name*</Form.Label>
            <Form.Control type="text" name='first_name' value={formData.first_name} onChange={handleChange} />
            {errors.first_name && <p className='text-danger'>{errors.first_name}</p>}
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Last name*</Form.Label>
            <Form.Control type="text" name='last_name' value={formData.last_name} onChange={handleChange} />
            {errors.last_name && <p className='text-danger'>{errors.last_name}</p>}
          </Form.Group>
        </Row>
        {/* Email */}
        <Row className="mb-3 form-label">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email*</Form.Label>
            <Form.Control type="email" name='email' value={formData.email} onChange={handleChange} />
            {errors.email && <p className='text-danger'>{errors.email}</p>}
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Username*</Form.Label>
            <Form.Control type="text" name='username' value={formData.username} onChange={handleChange} />
            {errors.username && <p className='text-danger'>{errors.username}</p>}
          </Form.Group>
        </Row>
        {/* Password */}
        <Row className="mb-3 form-label">
          <Form.Group as={Col}>
            <Form.Label>Choose a password*</Form.Label>
            <Form.Control type="password" name='password' value={formData.password} onChange={handleChange} />
            {errors.password && <p className='text-danger'>{errors.password}</p>}
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Confirm password*</Form.Label>
            <Form.Control type="password" name='password_confirmation' value={formData.password_confirmation} onChange={handleChange} />
            {errors.password_confirmation && <p className='text-danger'>{errors.password_confirmation}</p>}
          </Form.Group>
        </Row>
        <Row className="mb-3 form-label">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Profile Image*</Form.Label>
            <Form.Control type="text" name='profile_image' value={formData.profile_image} onChange={handleChange} />
            {errors.profile_image && <p className='text-danger'>{errors.profile_image}</p>}
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Nationality*</Form.Label>
            <Form.Control type="text" name='nationality' value={formData.nationality} onChange={handleChange} />
            {errors.nationality && <p className='text-danger'>{errors.nationality}</p>}
          </Form.Group>
        </Row>
        {/* Checkboxes and register button */}
        <Form.Group className="mb-3 form-label" id="formGridCheckbox">
          <Form.Check className='checkbox' type="checkbox" label="Recieve reading recommendations and be the first to hear about our special editions and author events, straight to your inbox" />
        </Form.Group>
        <Row>
          <Form.Group as={Col} className="mb-3 form-label" id="formGridCheckbox">
            <Form.Check className='checkbox2' type="checkbox" label="I agree to the Waterstones.com Terms and Conditions." />
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
export default Register