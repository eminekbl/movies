import React from 'react'
import {Navbar,Nav,Form} from "react-bootstrap"
import { Link } from "react-router-dom";

function NavBar(props) {
    const linkItems = props.links
    .filter((item) => item.islink)
    .map((item, index) => (
      <Nav.Link as={Link} to={item.link} key={index}>
        {item.title}
      </Nav.Link>
    ));
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">Movies</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          {linkItems}
           </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavBar
