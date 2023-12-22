import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios";

const validate = (form) => {
    const errors = {}
    if(!form.name) errors.name = "Completar nombre"
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)) errors.email = "Correo electrónico inválido"
    if(!form.email) errors.email = "Completar correo electrónico"
    if(form.password.length < 8) errors.password = "Contraseña inválida"
    if(!form.password) errors.password = "Completar contraseña"
    return errors
}

const Register = ( props ) => {

  const navigate = useNavigate()
    
    const [ form, setForm ] = useState({
        name: "",
        email: "",
        password: ""
    })

    const [ errors, setErrors ] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleChange = (event) => {

        const property = event.target.name
        const value = event.target.value

        setForm({...form, [ property ] : value})
        setErrors(validate({...form, [ property ] : value}))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (Object.keys(errors).length === 0) {
            try {
                const response = await axios.post("/users/register", form)
                if(response.data === "User alredy exits") {
                    alert("Ya estás registrado/a con ese correo electrónico")
                    navigate("/ingresar")
                } else {
                    alert("Registro exitoso")
                    navigate("/ingresar")
                }
            } catch (error) {
                console.log(error.message)
            }
        } else {
            alert("Completar todos los campos")
        }
    }

    return (
        <Form onSubmit={handleSubmit} style={{width: "40%", margin: "30px auto"}}>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="name">Nombre:</Form.Label>
                <Form.Control type="text" name="name" value={form.name} onChange={handleChange}></Form.Control>
                {errors.name && <Form.Text>{errors.name}</Form.Text>}
          </Form.Group>
          <Form.Group className="mb-3">
                <Form.Label htmlFor="email">Correo electrónico:</Form.Label>
                <Form.Control type="text" name="email" value={form.email} onChange={handleChange}></Form.Control>
                {errors.email && <Form.Text>{errors.email}</Form.Text>}
          </Form.Group>
          <Form.Group className="mb-3">
                <Form.Label htmlFor="password">Contraseña:</Form.Label>
                <Form.Control type="text" name="password" value={form.password} onChange={handleChange}></Form.Control>
                {errors.password && <Form.Text>{errors.password}</Form.Text>}
          </Form.Group>
          <Button type="submit" variant="secondary">Registrarse</Button>
          <Form.Group className="mb-3">
                <Form.Label>¿Ya tenés usuario? <Link to="/ingresar">Ingresá</Link></Form.Label>
          </Form.Group>
        </Form>
      )
}

export default Register;