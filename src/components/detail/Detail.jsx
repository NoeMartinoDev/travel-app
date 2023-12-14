import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";
import axios from "axios";

const Detail = () => {

    const cardStyle = {
        width: "80%",
        display: "flex",
        justifyContent: "center",
        margin: " 15px auto",
        padding: "15px",
    }
    
    const { id } = useParams();
    
    //const dataDetail = data?.find( item => item.id === Number(id))

    const [ dataDetail, setDataDetail ] = useState(null)

    useEffect(() => {
      const axiosData = async () => {
        try {
          const response = await axios(`http://localhost:3001/travels/${id}`)
          if(response.status > 400) {
            throw new Error ("No se pudo obtener la data")
          }
          setDataDetail(response.data)
        } catch (error) {
          console.log(error)
        }
      }
      axiosData()
    })

    return (
      <Card style={cardStyle}>
        <Card.Header>{dataDetail?.User.name} - {dataDetail?.date}</Card.Header>
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