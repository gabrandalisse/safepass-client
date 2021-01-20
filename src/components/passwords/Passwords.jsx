import React from "react";
import styled from "@emotion/styled";

// Components
import Layout from "../layout/Layout";
import NewPassword from './NewPassword';

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: space-around;
  transform: translateY(20%);
`;

const Cube = styled.div`
  width: 300px;
  height: 300px;
  background-color: red;
`;

const Passwords = () => {
  return (
    <Layout>
      <MainContainer>
        <NewPassword />
        <Cube></Cube>
      </MainContainer>
    </Layout>
  );
};

export default Passwords;
