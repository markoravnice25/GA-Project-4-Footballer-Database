import React from 'react'
// Bringin in Link for react navigation
import { Link, useNavigate } from 'react-router-dom'

import { userIsAuthenticated } from '../../helpers/auth.js'

// Import React Components
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

// Import helpers



const PageNavBar = () => {

  const navigate = useNavigate()
  // console.log(userIsAuthenticated())

  const handleLogout = () => {

    window.localStorage.removeItem('project-4-footballer-database')

    navigate('/login')
  }

  return (
    <Navbar bg="warning" expand="sm">
      <Container>
        {/* Navbar brand */}
        {/* Wherever you use a href on a bootstrap component, replace it with an as={Link} and a to="/" */}
        <Navbar.Brand as={Link} to="/">⚽️</Navbar.Brand>
        {/* Navbar collapse is our menu wrapped in a collapsible container for mobile */}
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          {/* Nav Link is an individual link inside a nav. Same as Nav Brand, to spcifiy react navigation use "as" and "to" */}
          {userIsAuthenticated() ?
            <>
              <Nav.Link as={Link} to="/account">Account</Nav.Link>
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              <Nav.Link as={Link} to="/account/wishlist">♥️Wish List</Nav.Link>
              
            </>

            :
            <>
              <Nav.Link as={Link} to="/register">Register</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            </>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default PageNavBar