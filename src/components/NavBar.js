import React from 'react'
import {Navbar,Nav,Form} from "react-bootstrap"
import { Link } from "react-router-dom";

import brand from "../assets/spiral.svg"

function NavBar(props) {
    const linkItems = props.links
    .filter((item) => item.islink)
    .map((item, index) => (
      <Nav.Link as={Link} to={item.link} key={index}>
        {item.title}
      </Nav.Link>
    ));
    return (
        <Navbar variant="dark" className="bg-darkblue " >
        <Navbar.Brand as={Link} to="/" className="mx-5">
          <img className="d-inline me-2" style={{"width":"35px"}} src={brand} alt="" srcSet="" />
          Movies
          </Navbar.Brand>
          <Nav className="mr-auto">
          {linkItems}
           </Nav>
      </Navbar>
    )
}

export default NavBar
