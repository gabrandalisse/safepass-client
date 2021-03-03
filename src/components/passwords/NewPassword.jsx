import React, { useState, useContext } from "react";
import alertContext from "../../context/alert/alertContext";
import passwordContext from '../../context/password/passwordContext';

// Components
import { InputGroup, Form, Alert } from "../ui/form";

const NewPassword = () => {
  // Extract alert from context
  const AlertContext = useContext(alertContext);
  const { alert, showAlert } = AlertContext;

  // Extract password functions from context
  const PasswordContext = useContext(passwordContext);
  const { newPassword } = PasswordContext;

  // State of the new password
  const [formData, updateFormData] = useState({
    name: "",
    password: "",
  });

  // Saving the data form on the state
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Destructuring data
  const { name, password } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verify all the data from the form
    if (name.trim() === "" || password.trim() === "") {
      showAlert("Todos los campos son obligatorios");
      return;
    }

    // Send the info to the context
    newPassword(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h3>Agrega una nueva contraseña</h3>

      <InputGroup>
        <label htmlFor="name">Nombre de la Página:</label>
        <input
          type="text"
          name="name"
          placeholder="Ej: Facebook"
          id="name"
          onChange={handleChange}
        />
      </InputGroup>

      <InputGroup>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          name="password"
          placeholder="Tu contraseña"
          id="password"
          onChange={handleChange}
        />
      </InputGroup>

      <InputGroup>
        {alert ? <Alert>{alert}</Alert> : null}
        <input type="submit" value="Guardar" />
      </InputGroup>
    </Form>
  );
};

export default NewPassword;
