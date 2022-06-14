import Button from 'react-bootstrap/esm/Button'
import React from 'react'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/esm/Col'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'


const Login = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors(false)
  }

  const setTokenToLocalStorage = (token) => {
    window.localStorage.setItem('project-4-footballer-database', token)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log('testing console')
      const response = await axios.post('/api/auth/login/', formData)
      console.log(response)
      setTokenToLocalStorage(response.data.token)
      navigate('/')
    } catch (error) {
      console.log(error)
      setErrors(error.response.data.detail)
    }
  }

  return (
    <section className='section-login'>
      <Form className='auth-login' onSubmit={handleSubmit}>
        <Row className="mb-3 form-label">
          <Row>
            <h3 className='login-heading'>LOGIN</h3>
          </Row>
          <Row>
            <p className='login-paragraph'>Haven&apos;t signed up for an account yet? Simply <a href="/register">Register</a> and we can get you up and started!</p>
          </Row>
          <Row>
            <p className='login-paragraph-2'>Denotes required field *</p>
          </Row>
          <Form.Group as={Col}>
            <Form.Label>Email*</Form.Label>
            <Form.Control type="email" name='email' value={formData.email} onChange={handleChange} />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Password*</Form.Label>
            <Form.Control type="password" name='password' value={formData.password} onChange={handleChange} />
            {errors && <p className='text-danger'>{errors}</p>}
          </Form.Group>
          <Form.Group>
            <Button className='button-login' type="submit">
              Login
            </Button>
          </Form.Group>
        </Row>
      </Form>
    </section>
  )
}

export default Login