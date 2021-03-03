import React, { useContext } from "react";
import styled from "@emotion/styled";
import passwordContext from '../../context/password/passwordContext';

// Imported components
import PasswordView from "./PasswordView";

const PasswordListContainer = styled.ul`
  list-style: none;
  width: 50%;
  height: 100%;
  margin: 0 10px;
  padding: 10px;

  /* Glassmorphism */
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  h2 {
    text-align: center;
    text-transform: uppercase;
    padding: 10px 0;
  }

  @media screen and (max-width: 769px) {
    width: 80%;
    border: 1px solid black;
  }
`;

const PasswordList = () => {

  // Extract password functions from context
  const PasswordContext = useContext(passwordContext);
  const { passwords } = PasswordContext;

  return (
    <PasswordListContainer>

      {
        passwords.length !== 0 ? (
            <> 
              <h2> - Todas tus contraseñas guardadas -</h2>
              {
                passwords.map(pass => (
                  <PasswordView 
                    key={pass._id}
                    pass={pass}
                  />
                ))
              }
              
            </>
        ) : (
          <h2>No tienes contraseñas almacenadas</h2>
        )
      }


     


    </PasswordListContainer>
  );
};

export default PasswordList;
