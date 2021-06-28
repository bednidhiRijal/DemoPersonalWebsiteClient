import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav } from "react-bootstrap";
import "./NavBar.css";


const NavBar = () => {
  return (
      <Container fluid="ls" className="conta1">
        <Navbar expand="lg" className="nabbar-width">
          <Navbar.Brand href="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Everest_kalapatthar.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Everest mage"
            />{" "}
            Bednidhi Rijal
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ml-auto"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home Page</Nav.Link>
              <Nav.Link href="/biography">Biography</Nav.Link>
              <Nav.Link href="/interview">Interview</Nav.Link>
              <Nav.Link href="/essaywriting">Essay Writing</Nav.Link>
              <Nav.Link href="/pictures">Pictures</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
  );
};

export default NavBar;
