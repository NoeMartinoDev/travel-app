import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios";

const validate = (form) => {
    const errors = {}
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)) errors.email = "Correo electrónico inválido"
    if(!form.email) errors.email = "Completar correo electrónico"
    if(form.password.length < 8) errors.password = "Contraseña inválida"
    if(!form.password) errors.password = "Completar contraseña"
    return errors
}

const Login = ( props ) => {

  const navigate = useNavigate()
    
    const [ form, setForm] = useState({
        email: "",
        password: ""
    })

    const [ errors, setErrors ] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        // if(event.target.name === "email") {
        //     setForm({...form, email: event.target.value})
        // }
        // if(event.target.name === "password") {
        //     setForm({...form, password: event.target.value})
        // }

        const property = event.target.name
        const value = event.target.value

        setForm({...form, [ property ] : value})
        setErrors(validate({...form, [ property ] : value}))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (Object.keys(errors).length === 0) {
          // if(form.email === "noe@mail.com" && form.password === "12345678") {
          //   alert("Login exitoso")
          //   props.setIsLoged(true)
          //   localStorage.setItem("isLoged", true)
          //   navigate("/")
          // } else alert("Datos incorrectos")
          try {
            const response = await axios.post("/users/login", form)
            if(response.data.error === "User not found") {
              alert("No estás registrado, por favor, registrate para continuar")
              navigate("/registro")
            } else if (response.data.error === "Incorrect data") {
              alert("Datos incorrectos")
            } else {
              props.setUser(response.data)
              localStorage.setItem("isLoged", JSON.stringify(response.data))
              navigate("/")
            }
          } catch (error) {
            console.log(error)
          }
        }
    }

    return (
        <Form onSubmit={handleSubmit} style={{width: "40%", margin: "30px auto"}}>
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
          <Button type="submit" variant="secondary">Ingresar</Button>
          <Form.Group className="mb-3">
            <Form.Label>¿No tenés usuario? <Link to="/registro">Registrate</Link></Form.Label>
          </Form.Group>
        </Form>
      )
}

export default Login;