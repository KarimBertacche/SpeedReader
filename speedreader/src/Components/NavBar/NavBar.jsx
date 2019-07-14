import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.nav`
  display: flex;
  justify-content: center;
  
  h1 {
    font-family: 'Permanent Marker', cursive;
    font-size: 3rem;
    color: white;
  }
`;

export default function NavBar() {
  return ( 
    <StyledHeader>
      <h1>SpeedReader</h1>
      <div>
        <NavLink to="/">Sign in</NavLink>
        <NavLink to="/">Sign up</NavLink>
      </div>
    </StyledHeader>
  );
}