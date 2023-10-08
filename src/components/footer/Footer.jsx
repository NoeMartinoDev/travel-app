import React from 'react';
import {Container, Nav, Navbar }from 'react-bootstrap';

const Footer = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="w-100 justify-content-between">
            <Nav.Link className="ms-3" disabled>
              Copyright © 2023 Viajemos
            </Nav.Link>
            <div className="d-flex">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Footer;