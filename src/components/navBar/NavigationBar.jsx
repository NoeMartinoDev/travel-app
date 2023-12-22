import React, { useState } from "react";
import { Nav, Navbar, Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const NavigationBar = (props) => {

  const location = useLocation()
  const navigate = useNavigate()

  const [ exp, setExp ] = useState("")

  const handleClick = () => {
    props.setUser(null)
    localStorage.removeItem("isLoged")
  }

  const handleChange = (event) => {
    setExp(event.target.value)
  }

  const handleSearch = async (event) => {
    event.preventDefault()
    if (exp === "") alert ("Escribí un lugar para buscarlo")
    else {
    // const results = props.data.filter( (element) => {
    //   return normalice(element.city) === normalice(exp) || normalice(element.location) === normalice(exp)
    // })
    // props.setFilteredData(results)
    // setExp("")
    // if (results.length === 0) alert ("No hay resultados")
    // if(location.pathname !== "/") navigate("/")
      try {
        const response = await axios(`/travels?name=${exp}`)
        if(response.data.error) alert ("No hay resultados")
        else {
          props.setFilteredData(response.data)
        }
      } catch (error) {
        console.log(error)
      }
      setExp("")
      if(location.pathname !== "/") navigate("/")
  }
  }

  const handleClean = () => {
    props.setFilteredData([])
  }

  return (
    <Navbar expand="lg" className="bg-info">
      <Container>
        <Link to="/" className="nav-link" onClick={handleClean}><Navbar.Brand>
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
        {props.user ?
        <Nav.Link onClick={handleClick} style={{marginLeft: "15px"}}>Cerrar sesión</Nav.Link>
        : <Link to="/ingresar" className="nav-link" style={{marginLeft: "15px"}}>Ingresar</Link>}
      </Container>
    </Navbar>
  );
};

export default NavigationBar;