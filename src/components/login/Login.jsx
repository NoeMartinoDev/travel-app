import React from 'react';
import { useState } from "react";

const validate = (form) => {
    const errors = {}
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)) errors.email = "Correo electrónico inválido"
    if(!form.email) errors.email = "Completar correo electrónico"
    if(form.password.length <= 8) errors.password = "Contraseña inválida"
    if(!form.password) errors.password = "Completar contraseña"
    return errors
}

const Login = () => {
    
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

    const handleSubmit = (event) => {
        event.preventDefault()
        if(Object.keys(errors).length === 0) {
            alert("Login exitoso")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Correo electrónico:</label>
                <input type="text" name="email" value={form.email} onChange={handleChange}></input>
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div>
                <label htmlFor="password">Contraseña:</label>
                <input type="text" name="password" value={form.password} onChange={handleChange}></input>
                {errors.password && <p>{errors.password}</p>}
            </div>
            <button>Ingresar</button>
        </form>
    )
}

export default Login;