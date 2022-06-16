// Todo - imports
// react
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

// components
import { userIsAuthenticated } from '../../helpers/auth.js'

// bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { components } from 'react-select'

// todo - component
const PageNavBar = () => {

  const navigate = useNavigate()

  const handleLogout = () => {
    window.localStorage.removeItem('project-4-footballer-database')
    navigate('/login')
  }

  // todo - return
  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand as={Link} to="/">⚽️</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {userIsAuthenticated() ?
            <>
              <Nav.Link onClick={handleLogout}>LOGOUT</Nav.Link>
              {/* <Nav.Link as={Link} to="/">FAVOURITES</Nav.Link> */}
              <Nav.Link as={Link} to="/account">ACCOUNT</Nav.Link>
            </>
            :
            <>
              <Nav.Link as={Link} to="/register">REGISTER</Nav.Link>
              <Nav.Link as={Link} to="/login">LOGIN</Nav.Link>
            </>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default PageNavBar