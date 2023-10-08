import React from "react";
import { Card, Button } from "react-bootstrap";

//Inline
// const titulo = {
//     backgroundColor: "blue",
//     color: "white",
//     fontSize: "10px"
// }

const CardItem = (props) => {
  return (
    <Card style={{ width: "16rem", margin: "8px"}}>
      <Card.Img variant="top" src={props.image} alt={props.title} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.city}</Card.Text>
        <Card.Text>{props.location}</Card.Text>
        <Button variant="secondary">Ver más</Button>
      </Card.Body>
    </Card>
  )
}

export default CardItem;