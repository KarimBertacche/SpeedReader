import React from 'react';
import { connect } from 'react-redux';
import { addText } from '../../Store/actions';

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
    this.props.addText(this.state.text.split);

    this.setState({
      text: '',
    });
  };

  render() { 
    return ( 
      <div>
      <input type="text" name="text" value={this.state.text} onChange={this.changeHandler} placeholder="Text" />
      <button onClick={this.addTextToRedux}>Add</button>
      </div>
     );
  }
}
 
export default connect(null, { addText })(TextAdder);