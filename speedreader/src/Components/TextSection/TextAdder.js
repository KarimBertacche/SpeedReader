import React from 'react';
import { connect } from 'react-redux';
import { addText } from '../../Store/actions';
import styled from 'styled-components';

const StyledTextAdder = styled.div`
display: flex;

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
      <input type="text" name="text" value={this.state.text} onChange={this.changeHandler} placeholder="Text" />
      <i
      onClick={this.addTextToRedux} 
      className="fa fa-plus-square"/>
      </StyledTextAdder>
     );
  }
}
 
export default connect(null, { addText })(TextAdder);