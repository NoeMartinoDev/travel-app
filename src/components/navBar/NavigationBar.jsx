import React, { useState } from "react";
import { Nav, Navbar, Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = (props) => {

  const [ exp, setExp ] = useState("")

  const handleClick = () => {
    props.setIsLoged(false)
    localStorage.removeItem("isLoged")
  }

  const handleChange = (event) => {
    setExp(event.target.value)
  }

  const handleSearch = (event) => {
    event.preventDefault()
    const results = props.data.filter( element => element.city === exp || element.location === exp)
    console.log(results)
    props.setData(results)
  }


  return (
    <Navbar expand="lg" className="bg-info">
      <Container>
        <Link to="/" className="nav-link"><Navbar.Brand>
          <img
            alt=""
            src="logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Viajemos
        </Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/tuexperiencia" className="nav-link">Sumá tu experiencia</Link>
          </Nav>
        </Navbar.Collapse>
        <Form>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Buscá tu próximo destino"
                className=" mr-sm-2"
                value={exp}
                onChange={handleChange}
              />
            </Col>
            <Col xs="auto">
              <Button type="submit" variant="secondary" onClick={handleSearch}>
                Buscar
              </Button>
            </Col>
          </Row>
        </Form>
        {props.isLoged ?
        <Nav.Link onClick={handleClick} style={{marginLeft: "15px"}}>Cerrar sesión</Nav.Link>
        : <Link to="/ingresar" className="nav-link" style={{marginLeft: "15px"}}>Ingresar</Link>}
      </Container>
    </Navbar>
  );
};

export default NavigationBar;