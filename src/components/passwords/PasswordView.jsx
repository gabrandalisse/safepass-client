import React from 'react';
import styled from '@emotion/styled';

const MainContainer = styled.div`
    margin: 10px 20px;
    border: 1px solid black;
    padding: 20px;
    transition: .8s all ease-in-out;

    span {
        color: #FFF;
    }

    &:hover {
        background-color: #0f3443;
        color: #FFF;

        span {
            color: #34e89e;
        }
    }
`;

const PasswordView = ({ pass }) => {
    // Destructuring the object passed as prop from the map
    const { name, password } = pass;

    return (  
        <MainContainer>
            <h3>Nombre de la Página: <span>{name}</span></h3>
            <p>Contraseña: <span>{password}</span></p>
        </MainContainer>
    );
}
 
export default PasswordView;
