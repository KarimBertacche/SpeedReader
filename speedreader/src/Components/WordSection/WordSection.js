import React from 'react';
import TextAdder from './TextAdder';
import { connect } from 'react-redux';

class WordSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
         }
  }

  render() { 
    return ( 
      <div>
{this.props.text.map((word, index) => {
  return <div key={index}>
    <h1>
  {word}</h1>
  </div>
})}
<TextAdder/>
      </div>
     );
  }
}

const mapStateToProps = state => {
  return {
    text: state.text
  }
}
 
export default connect(mapStateToProps)(WordSection);