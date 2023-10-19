import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const validate = (form) => {
    const errors = {}
    if(!form.title) errors.title = "Completar el título"
    if(!form.user) errors.user = "Completar tu nombre"
    if(!form.city) errors.city = "Completar la ciudad"
    if(!form.location) errors.location = "Completar la provincia"
    if(!form.description) errors.description = "Completar la descripción"
    if(!form.image) errors.image = "Completar la imagen"
    return errors
}

const FormExp = () => {

    const [ form, setForm ] = useState({
        title: "",
        user: "",
        city: "",
        location: "",
        description: "",
        image: ""
    })

    const [ errors, setErrors ] = useState({
        title: "",
        user: "",
        city: "",
        location: "",
        description: "",
        image: ""
    })

    const handleChange = (event) => {
        const property = event.target.name
        const value = event.target.value

        setForm({...form, [ property ] : value})
        setErrors(validate({...form, [ property ] : value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <Form onSubmit={handleSubmit} style={{width: "60%", margin: "10px auto", marginBottom: "80px"}}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="title">Título:</Form.Label>
            <Form.Control type="text" name="title" value={form.title} onChange={handleChange}></Form.Control>
            {errors.title && <Form.Text>{errors.title}</Form.Text>}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="user">Nombre:</Form.Label>
            <Form.Control type="text" name="user" value={form.user} onChange={handleChange}></Form.Control>
            {errors.user && <Form.Text>{errors.user}</Form.Text>}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="city">Ciudad:</Form.Label>
            <Form.Control type="text" name="city" value={form.city} onChange={handleChange}></Form.Control>
            {errors.city && <Form.Text>{errors.city}</Form.Text>}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="location">Provincia:</Form.Label>
            <Form.Control type="text" name="location" value={form.location} onChange={handleChange}></Form.Control>
            {errors.location && <Form.Text>{errors.location}</Form.Text>}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="description">Descripción:</Form.Label>
            <Form.Control as="textarea" name="description" value={form.description} onChange={handleChange}></Form.Control>
            {errors.description && <Form.Text>{errors.description}</Form.Text>}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="image">Imagen:</Form.Label>
            <Form.Control type="text" name="image" value={form.image} onChange={handleChange}></Form.Control>
            {errors.image && <Form.Text>{errors.image}</Form.Text>}
          </Form.Group>
          <Button type="submit" variant="secondary">Crear</Button>
        </Form>
    )
}

export default FormExp;


// Vacaciones en el norte
// Salta
// Romina
// Pasamos en Salta las vacaciones de invierno, y si bien fueron 5 días, sentí que se pasaron muy rápido y que hubiera necesitado más tiempo para recorrer todas las atracciones de la provincia, por su inmensidad y hermosura. Recorrimos los valles Calchaquíes con sus quebradas y cerros multicolores. Pasamos por las Salinas Grandes y pudimos sacarnos las típicas y divertidas fotos. Paseamos por Salta Capital y ascendimos al Cerro San Bernardo con el teleférico, apreciando la belleza de la ciudad. Me quedé con ganas de volver.

// https://th.bing.com/th/id/OIP.baheit0CDROm3a3tanp9jAHaE7?pid=ImgDet&w=640&h=426&rs=1
