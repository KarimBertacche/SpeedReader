import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
display: flex;
justify-content: center;
h1 {
  font-family: 'Permanent Marker', cursive;
  font-size: 3rem;
  color: white;
}
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <StyledHeader>
<h1>SpeedReader</h1>
      </StyledHeader>
     );
  }
}
 
export default Header;