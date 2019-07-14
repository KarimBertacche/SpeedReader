import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import TextContainer from './Components/TextContainer/TextContainer';
import books from './books.jpg'
import styled from 'styled-components';
import './App.css';

const StyledDiv = styled.div`
  background-image: linear-gradient(to right, rgba(0,0,0,.5), rgba(0,0,0,.5)),url(${books});
  background-position: center;
  background-repeat: no-repeat; 
  background-size: cover;
  height: 100vh;
`;

function App() {
  return (
    <StyledDiv>
      <NavBar/>
      <TextContainer/>
    </StyledDiv>
  );
}

export default App;
