import React from 'react';
import TextAdder from './TextAdder';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledWordSection = styled.div`

.off {
  display: none;
}
`; 

class WordSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: false,
    }
  }

  showSettings = () => {
    this.setState({
      settings: true,
    });
  };

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
      <StyledWordSection>
        {/* {this.props.text.map((word, index) => {
          return <div key={index}>
            <h1>
              {word}</h1>
          </div>
        })} */}
        <div className="Word-section">
        <h1 className='text'>Start</h1>
        </div>
        <i 
        onClick={this.showSettings}
        class="fa fa-wrench"/>
        <div className={this.state.settings ? "settings" : 'off'}>
        <i 
        onClick={this.start}
        class="fa fa-play" />
        </div>
        <TextAdder />
      </StyledWordSection>
    );
  }
}

const mapStateToProps = state => {
  return {
    text: state.text
  }
}

export default connect(mapStateToProps)(WordSection);