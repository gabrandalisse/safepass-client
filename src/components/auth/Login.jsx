import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/authentication/authContext";

// Components
import Layout from "../layout/Layout";
import { FormContainer, InputGroup, Form, Alert } from "../ui/form";

const Login = props => {
  // Export the alert context
  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;

  // Export the auth context
  const authContext = useContext(AuthContext);
  const { authenticated, message, logIn } = authContext;

  // Register form state
  const [user, updateUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if( authenticated ) {
      props.history.push('/passwords');
    } 

    if( message ) {
      showAlert(message);
    }
  }, [authenticated, message, props.history]);

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
    if (email.trim() === "" || password.trim() === "") {
      showAlert("Todos los campos son obligatorios.");
      return;
    }

    // Validate the user and login
    logIn(user);
  };

  return (
    <Layout>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <h3>Iniciar Sesión</h3>
          <p>Para mantener ver y gestionar todas tus contraseñas!</p>

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
        </Form>
      </FormContainer>
    </Layout>
  );
};

export default Login;
