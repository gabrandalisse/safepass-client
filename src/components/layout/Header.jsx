import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const HeaderContainer = styled.div`
  background: rgba( 255, 255, 255, 0.25 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: space-between;
  height: 4rem;

  @media screen and (max-width: 769px) {
    flex-direction: column;
    padding: 10px 0;
  }
`;

const Logo = styled.p`
  font-family: 'Rubik', sans-serif;
  font-weight: bold;
  letter-spacing: 4px;
  padding-left: 20px;

  span {
    color: #34e89e;
  }
`;

const Nav = styled.nav`
  padding-right: 20px;

  a {
    text-decoration: none;
    padding-left: 15px;
    color: #000;
    font-family: 'Karla', sans-serif;
  }
`;

const Header = () => {
    return (
      <header>
        <HeaderContainer>
          <div>
            <Logo>
              <span>SAFE</span>PASS
            </Logo>
          </div>

          <Nav>
            <Link to="/">Registrarse</Link>
            <Link to="/login">Iniciar Sesión</Link>
          </Nav>
        </HeaderContainer>
      </header>
    );
};
 
export default Header;