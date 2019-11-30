import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Lead = styled.h1`
  color: black;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 45px;
  margin-top: 150px;
  position: relative;
  line-height: 1.3;
  height: 130px;
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 55px;
`;
const RegistrationButton = styled.button`
  background-color: green;
  color: white;
  width: 700px;
  height: 60px;
  font-size: 20px;
  margin-left: 320px;
`;

const LoginButton = styled.button`
  background-color: white;
  color: black;
  width: 700px;
  height: 60px;
  font-size: 20px;
  margin-left: 320px;
  margin-top: 20px;
`;

function Homepage() {
  return (
    <div>
      <div className="bg"></div>
      <Lead className="greeting">Welcome!</Lead>
      <ButtonDiv>
        
          <RegistrationButton className="Register">
          <Link to="/register">
            Register</Link>
          </RegistrationButton>
        <LoginButton className="login">Log in</LoginButton>
      </ButtonDiv>
    </div>
  );
}

export default Homepage;
