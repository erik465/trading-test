import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 60px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  transition: 0.35s;

  &:hover {
    color: #4CAF50;
  }
`

const Logo = styled.div`
  background: #4CAF50;
  height: 50px;
  width: 150px;
`

const Links = styled.div`
  display: flex;
  gap: 30px; 
  align-items: center;
`

const LoginButton = styled(Link)`
  display: block;
  border: 1px solid #4CAF50;
  color: #4CAF50;
  padding: 10px 20px;
  transition: 0.35s;
  
  &:hover {
    background: #45a049;
    color: #eee;
  }
  `

const SignupButton = styled(Link)`
display: block;
  background: #4CAF50;
  color: #eee;
  padding: 10px 20px;
  transition: .35s;
      border: 1px solid #eee;

  
  &:hover {
    background: #eee;
    color: #45a049;
    border: 1px solid #4CAF50;
  }
  `

const Navbar = () => {
  return (
    <StyledNavbar>
      <Logo />
      <Links>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/modules">Lessons</StyledLink>
        <StyledLink to="/quiz">Quiz</StyledLink>
        <LoginButton to="/login">Login</LoginButton>
        <SignupButton to="/signup">Signup</SignupButton>
        </Links>
    </StyledNavbar>
  );
};

export default Navbar;
