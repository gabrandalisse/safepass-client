import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import AuthContext from "../../context/authentication/authContext";

// Material UI
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const HeaderContainer = styled.div`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
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
  font-family: "Rubik", sans-serif;
  font-weight: bold;
  letter-spacing: 4px;
  padding-left: 20px;

  span {
    color: #34e89e;
  }
`;

const useStyles = makeStyles((theme) => ({
  button: {
    paddingRight: "10px"
  }
}));

const Nav = styled.nav`
  padding-right: 20px;

  a {
    text-decoration: none;
    padding-left: 15px;
    color: #000;
    font-family: "Karla", sans-serif;
  }
`;

const Header = () => {
  const classes = useStyles();

  // Export the auth context
  const authContext = useContext(AuthContext);
  const { user, logOut } = authContext;

  const handleClick = () => {
    logOut();
  };

  return (
    <header>
      <HeaderContainer>
        <div>
          <Logo>
            <span>SAFE</span>PASS
          </Logo>
        </div>

        {
          user ? (
            <>
              <p>Hola <b>{user.name}</b>!</p>
              <Button
                className={classes.button}
                onClick={handleClick}
              >Cerrar Sesión</Button>
            </>
          ) : (
            <Nav>
              <Link to="/">Registrarse</Link>
              <Link to="/login">Iniciar Sesión</Link>
            </Nav>
          )
        }
      </HeaderContainer>
    </header>
  );
};

export default Header;
