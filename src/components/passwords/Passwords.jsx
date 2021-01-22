import React from "react";
import styled from "@emotion/styled";

// Components
import Layout from "../layout/Layout";
import NewPassword from './NewPassword';
import PasswordList from './PasswordList';

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: space-around;
  transform: translateY(20%);
  gap: 20px;
  margin: 0 20px;

  @media screen and (max-width: 769px) {
    flex-direction: column;
    transform: translateY(5%);
    gap: 20px;
    margin: 0;
  }
`;

const Passwords = () => {

  const example = [{name: "Facebook", password: "1234"}, {name: "Instagram", password: "456"}, {name: "Twitter", password: "queondamonoestamo activo"}];


  return (
    <Layout>
      <MainContainer>
        <NewPassword />
        <PasswordList 
          passwords={example}
        />
      </MainContainer>
    </Layout>
  );
};

export default Passwords;
