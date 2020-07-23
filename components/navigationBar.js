import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'

const NavigationBar = ({logo, navItems}) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">{logo}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {Object.entries(navItems).forEach((label, link) => {
            return (<Nav.Link href={link}>{label}</Nav.Link>)
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar