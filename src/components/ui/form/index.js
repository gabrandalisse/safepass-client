import styled from '@emotion/styled';

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  margin-top: 50px;
  justify-content: space-around;

  form {
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    width: 60%;

    @media screen and (max-width: 769px) {
      border: 1px solid black;
      width: 80%;
    }

      h3, p {
        padding-top: 10px;
        text-align: center;
      }
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px;

  label {
    font-family: "Karla", sans-serif;
    font-weight: bold;
  }

  input {
    margin-top: 5px;
    padding: 10px 0 10px 5px;
    border: 1px solid black;
  }

  input[type="submit"] {
    background-color: #0f3443;
    color: #fff;
    font-weight: bold;
    font-size: 15px;
    padding: 15px 0;
    border-radius: 5px;
    transition: 0.5s all ease-in-out;

    &:hover {
      background-color: #34e89e;
      color: #000;
      cursor: pointer;
    }
  }
`;

export const Alert = styled.p`
  background-color: #FFF;
  border: 1px solid red;
  margin-bottom: 10px;
  padding: 6px 0;
  text-transform: uppercase;
  font-weight: bold;
`;
