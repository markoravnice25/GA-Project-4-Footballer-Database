import React from 'react'
// Bringin in Link for react navigation
import { Link, useNavigate } from 'react-router-dom'

// Import React Components
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

// Import helpers

const PageNavBar = () => {
  return (
    <Navbar bg="warning" expand="sm">
      <Container>
        {/* Navbar brand */}
        {/* Wherever you use a href on a bootstrap component, replace it with an as={Link} and a to="/" */}
        <Navbar.Brand as={Link} to="/">⚽️</Navbar.Brand>
        {/* Navbar collapse is our menu wrapped in a collapsible container for mobile */}
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          {/* Nav Link is an individual link inside a nav. Same as Nav Brand, to spcifiy react navigation use "as" and "to" */}
          <Nav.Link as={Link} to="/">Register</Nav.Link>
          <Nav.Link as={Link} to="/">Login</Nav.Link>
          <Nav.Link>Logout</Nav.Link>
          <Nav.Link as={Link} to="/">Profile</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default PageNavBar