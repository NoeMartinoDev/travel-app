import React from "react";
import { Nav, Navbar, Container, Row, Col, Form, Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-info">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Viajemos
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#link">Creá tu experiencia</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Buscá tu próximo destino"
                className=" mr-sm-2"
              />
            </Col>
            <Col xs="auto">
              <Button type="submit" variant="secondary">
                Buscar
              </Button>
            </Col>
          </Row>
        </Form>
        <Nav.Link href="#link">Ingresar</Nav.Link>
      </Container>
    </Navbar>
  );
};

export default NavBar;