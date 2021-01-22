import React from "react";
import styled from "@emotion/styled";

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

//TODO Set the key of the map with the id of the password saved on the bd given by mongo

const PasswordList = ({ passwords }) => {
  return (
    <PasswordListContainer>
      <h2> - Todas tus contraseñas guardadas -</h2>
      {passwords.map((pass) => (
        <PasswordView pass={pass} />
      ))}
    </PasswordListContainer>
  );
};

export default PasswordList;
