import React from 'react';
import { connect } from 'react-redux';
import { addText } from '../../Store/actions';

class WordAdder extends React.Component {
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
    this.props.addWords(this.state.text);

    this.setState({
      text: '',
    });
  };

  render() { 
    return ( 
      <div>
      <input name="text" value={this.state.text} onChange={this.changeHandler} placeholder="Text" />
      <button onClick={this.addTextToRedux}>Add</button>
      </div>
     );
  }
}
 
export default connect(null, { addText })(WordAdder);