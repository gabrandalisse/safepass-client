import React from 'react';

// Components
import {
    InputGroup,
    Form
} from '../ui/form';

const NewPassword = () => {
    return (
      <Form>
        <h3>Agrega una nueva contraseña</h3>
        <InputGroup>
          <label>Nombre de la Página:</label>
          <input type="text" name="" placeholder="Ej: Facebook" id="" />
        </InputGroup>
        <InputGroup>
          <label>Contraseña:</label>
          <input type="text" name="" placeholder="Tu contraseña" id="" />
        </InputGroup>
        <InputGroup>
            <input type="submit" value="Guardar" />
          </InputGroup>
      </Form>
    );
};
 
export default NewPassword

