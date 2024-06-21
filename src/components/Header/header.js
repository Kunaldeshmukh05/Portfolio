import React from 'react';
import { Nav, Container, Card } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import './header.css'
const Header = () => {
  return (
    <>
    
    <Container fluid  style={{fontSize:'1.3vw'}}>
      <Navbar bg-light expand="lg" className="fixed-top-navbar" style={{padding:'0.5vw' }}>
        <Navbar.Brand href="/">Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav  className="me-auto">
            <LinkContainer to="/" style={{marginLeft:'20vw'}}>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Skills" style={{marginLeft:'10vw'}}>
              <Nav.Link>Skills</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Project" style={{marginLeft:'10vw'}}>
              <Nav.Link>Projects</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Experience"  style={{marginLeft:'10vw'}}>
              <Nav.Link>Experience</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/About" style={{marginLeft:'10vw'}}>
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
        
      </Navbar>
      <hr style={{ border: '1px solid black' }} />

    </Container>
    
    </>
  );
}

export default Header;

