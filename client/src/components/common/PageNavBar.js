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
    <Navbar expand="sm">
      <Container>
        {/* Navbar brand */}
        {/* Wherever you use a href on a bootstrap component, replace it with an as={Link} and a to="/" */}
        <Navbar.Brand as={Link} to="/">⚽️</Navbar.Brand>
        {/* Navbar collapse is our menu wrapped in a collapsible container for mobile */}
        {/* Navbar Toggle is our mobile burger icon - this is displayed at a breakpoint specified on the Navbar component above */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Nav Link is an individual link inside a nav. Same as Nav Brand, to spcifiy react navigation use "as" and "to" */}
          {userIsAuthenticated() ?
            <>
              {/* <Nav.Link as={Link} to="/account/">ACCOUNT</Nav.Link> */}
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