import React, { useState } from 'react';
import styled from '@emotion/styled';

// Components
import Layout from '../layout/Layout';
import { FormContainer, InputGroup, Alert } from "../ui/form";

const OptionButton = styled.button`
    border: none;
    background-color: black;
    color: #FFF;
    padding: 10px;
    margin: 5px 0;
    transition: .5s all ease-in-out;
    font-family: 'Rubik', sans-serif;
    width: 100%;

    &:hover {
        cursor: pointer;
        background-color: #34e89e;
        color: #000;
    }
`;

const OptionGroup = styled.ul`
    list-style: none;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    width: 100%;
    margin: 50px;
    padding: 50px;
`;

const MainContainer = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  justify-content: space-between;
`;


const Passwords = () => {

    // State for the options
    const [ option, updateOption ] = useState("");

    // Choosing what to show
    const handleClick = e => {
        updateOption(e.target.value)
    }

    //? PONER EL FORMULARIO DE LADO IZQ YA LISTO PARA AGREGAR Y EN EL OTRO LADO YA LAS CONTRASEÑAS

    return (
      <Layout>
        <MainContainer>
            <div>
                <OptionGroup>
                    <li><OptionButton type="button" value="new" onClick={handleClick}>Agregar Nueva Contraseña</OptionButton></li>
                    <li><OptionButton type="button" value="list" onClick={handleClick}>Listar Contraseñas</OptionButton></li>
                </OptionGroup>
            </div>

            <div>
     
            </div>

        </MainContainer>
      </Layout>
    );
}
 
export default Passwords;

