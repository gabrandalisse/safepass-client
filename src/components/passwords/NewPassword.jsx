import React, { useState, useContext, useEffect } from "react";
import alertContext from "../../context/alert/alertContext";
import passwordContext from "../../context/password/passwordContext";

// Material UI
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "90%",
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "10px",
    paddingBottom: "10px"
  },
  textField: {
    color: "white"
  }
}));

const NewPassword = () => {
  const classes = useStyles();

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
    updateFormData({
      name: "",
      password: ""
    });
  };

  return (
    <Box className={classes.box}>
      <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <TextField
          className={classes.textField}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="name"
          label="Nombre de la Página"
          name="name"
          autoComplete="name"
          autoFocus
          onChange={handleChange}
          value={name}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Contraseña"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={handleChange}
        />
        <Button type="submit" fullWidth variant="outlined" color="primary" >
          Guardar Contraseña
        </Button>
        {alert ? <Alert severity="error">{alert}</Alert> : null}
      </form>
    </Box>
  );
};

export default NewPassword;
