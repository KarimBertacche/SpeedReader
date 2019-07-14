import React from 'react';
import { connect } from 'react-redux';
import { addText } from '../../Store/actions';
import styled from 'styled-components';

const StyledTextAdder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  .input-plus {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 30%;
  }

  i {
    font-size: 4rem;
    transition: .6s ease-in-out;

    &:hover {
      color: black;
    }
  }

  input {
    font-size: 1.5rem;
    text-align: center;
    width: 90%;
    height: 25rem;
    border-radius: .5rem;
  }
`;

class TextAdder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: '',
    }
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addTextToRedux = () => {
    this.props.addText(this.state.text.split(' '));

    this.setState({
      text: '',
    });
  };

  render() { 
    return ( 
      <StyledTextAdder>
        <h1>Add text to train your reading skills !</h1>
        <div className="input-plus">
          <input 
            type="text" 
            name="text" 
            value={this.state.text} 
            onChange={this.changeHandler} 
            placeholder="Text" 
          />
          <i
            onClick={this.addTextToRedux} 
            className="fa fa-plus-square"
          />
        </div>
      </StyledTextAdder>
    );
  }
}
 
export default connect(null, { addText })(TextAdder);