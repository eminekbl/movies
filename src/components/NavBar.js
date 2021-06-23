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
        <Navbar variant="dark" className="bg-darkblue " >
        <Navbar.Brand as={Link} to="/" className="mx-5">Movies</Navbar.Brand>
          <Nav className="mr-auto">
          {linkItems}
           </Nav>
      </Navbar>
    )
}

export default NavBar
