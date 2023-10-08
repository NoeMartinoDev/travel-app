import React from "react";
import CardItem from "../cardItem/CardItem";
import { Container, Row } from "react-bootstrap";

const Cards = (props) => {
  return (
    <Container>
      <Row>
        {props.data ? (
          props.data.map((item) => (
           <CardItem
              title={item.title}
              image={item.image}
              city={item.city}
              location={item.location}
              key={item.id}
            />
          ))
        ) : (
          <p>Cargando datos</p>
        )}
      </Row>
    </Container>
  )
}

export default Cards;

//Ternario
//  condicion ? (
//      si es true codigo que se ejecuta
//  ) : (
//      si es false codigo que se ejecuta
//  )

//  condicion ? codigo si es true : codigo si es false