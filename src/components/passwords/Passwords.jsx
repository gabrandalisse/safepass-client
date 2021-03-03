import React, { useContext, useEffect } from "react";
import styled from "@emotion/styled";
import passwordContext from '../../context/password/passwordContext';

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

  // Extract password functions from context
  const PasswordContext = useContext(passwordContext);
  const { getAll } = PasswordContext;

  useEffect(() => {
    getAll();
  }, []);

  return (
    <Layout>
      <MainContainer>
        <NewPassword />
        <PasswordList 
          
        />
      </MainContainer>
    </Layout>
  );
};

export default Passwords;
