import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/authentication/authContext";

// Components
import Layout from "../layout/Layout";
import { FormContainer, InputGroup, Form, Alert } from "../ui/form";

const Register = (props) => {
  // Export the alert context
  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;

  // Export the auth context
  const authContext = useContext(AuthContext);
  const { authenticated, message, newUser } = authContext;

  // If the user is already authenticated or registered
  useEffect(() => {
    if( authenticated ) {
      props.history.push('/passwords');
    }

    if( message ) {
      showAlert(message);
    }
  },[message, authenticated, props.history]);

  // Register from state
  const [user, updateUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Put the form data in the state
  const handleChange = (e) => {
    updateUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // Destructuring user data
  const { name, email, password } = user;

  // Creating the user
  const handleSubmit = (e) => {
    e.preventDefault();

    // Verify data
    if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
      showAlert("Todos los campos son obligatorios.");
      return;
    } else if (password.length < 6) {
      showAlert("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    // Create and save the user
    newUser(user);
  };

  return (
    <Layout>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <h3>Registrarse</h3>
          <p>
            Para mantener todas tus contraseñas seguras y en un solo lugar. Lo
            mejor de todo es que es gratis!
          </p>

          <InputGroup>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Ej: Gabriel Andres Brandalisse"
              onChange={handleChange}
            />
          </InputGroup>

          <InputGroup>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ej: correo@correo.com"
              onChange={handleChange}
            />
          </InputGroup>

          <InputGroup>
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu Password"
              onChange={handleChange}
            />
          </InputGroup>

          <InputGroup>
            {alert ? <Alert>{alert}</Alert> : null}
            <input type="submit" value="Registrarse" />
          </InputGroup>
        </Form>
      </FormContainer>
    </Layout>
  );
};

export default Register;
