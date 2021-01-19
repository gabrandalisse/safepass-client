import React, { useState, useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

// Components
import Layout from "../layout/Layout";
import { FormContainer, InputGroup, Alert } from "../ui/form";

const Login = () => {
  // Export the alert context
  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;

  // Register from state
  const [user, updateUser] = useState({
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
  const { email, password } = user;

  // Creating the user
  const handleSubmit = (e) => {
    e.preventDefault();

    // Verify data
    if ( email.trim() === "" || password.trim() === "") {
      showAlert("Todos los campos son obligatorios.");
      return;
    } 

    // Validate the user

    // Redirect
  };

  return (
    <Layout>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <h3>Iniciar Sesión</h3>
          <p>
            Para mantener ver y gestionar todas tus contraseñas!
          </p>

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
            <input type="submit" value="Iniciar Sesión" />
          </InputGroup>
        </form>
      </FormContainer>
    </Layout>
  );
};

export default Login;
