import React from 'react';
import TextAdder from './TextAdder';
import { connect } from 'react-redux';

class WordSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  start = () => {
    const texts = this.props.text;

    var i = 0;

    const increment = () => {

      if (texts[i] !== texts[texts.length]) {
        document.querySelector('.text').textContent = texts[i];
        i += 1;
      }
    };

    setInterval(increment, 1000);
  };

  render() {
    return (
      <div>
        {/* {this.props.text.map((word, index) => {
          return <div key={index}>
            <h1>
              {word}</h1>
          </div>
        })} */}
        <div className="Word-section">
        <h1 className='text'>Start</h1>
        </div>
        <div className="settings">
        <i 
        onClick={this.start}
        class="fa fa-play" />
        </div>
        <TextAdder />
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