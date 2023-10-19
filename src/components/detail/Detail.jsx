import React from "react";
import { useParams, Link } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";

const Detail = (props) => {

    const cardStyle = {
        width: "80%",
        display: "flex",
        justifyContent: "center",
        margin: " 15px auto",
        padding: "15px",
    }
    
    const { id } = useParams();
    
    const dataDetail = props.data?.find( item => item.id === Number(id))

    return (
      <Card style={cardStyle}>
        <Card.Header>{dataDetail?.user} - {dataDetail?.date}</Card.Header>
        <Row>
          <Col>
            <Card.Body>
              <Card.Title>{dataDetail?.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{dataDetail?.city} - {dataDetail?.location}</Card.Subtitle>
              <Card.Text>{dataDetail?.description}</Card.Text>
            </Card.Body>
            <Button variant="secondary"><Link to="/" className="nav-link">Atrás</Link></Button>
          </Col>
          <Col>
            <Card.Img src={dataDetail?.image} alt={dataDetail?.title} />
          </Col>
        </Row>
      </Card>
    )
}

export default Detail;