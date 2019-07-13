import React from 'react';
import TextAdder from './TextAdder';
import { connect } from 'react-redux';
import styled from 'styled-components';

const StyledTextSection = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

.word-section {
  background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898; 
 background-blend-mode: multiply,multiply;
 color: white;
 width: 400px;
 height: 400px;
display: flex;
justify-content: center;
align-items: center;
}

.off {
  display: none;
}

.menu {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #DCD9D4; 
 background-image: linear-gradient(to bottom, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%), radial-gradient(at 50% 0%, rgba(255,255,255,0.10) 0%, rgba(0,0,0,0.50) 50%); 
 background-blend-mode: soft-light,screen;
  width: 400px;
  height: 3rem;
}

.words-per-min {
  display: flex;
}
`; 

class TextSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: false,
      number: '',
      textBackgroundColor: '',
      textFontSize: '',
      textHeight: '',
      textWidth: '',
    }
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
    };

  showSettings = () => {
    this.setState({
      settings: true,
    });
  };

  start = () => {
    const texts = this.props.text;

    const wordsPerSecond = this.state.number / 60;
    
    const resultForSetInterval = 1000 / wordsPerSecond 

    let i = 0;

    const increment = () => {

      if (texts[i] !== texts[texts.length]) {
        document.querySelector('.text').textContent = texts[i];
        i += 1;
      }
    };

    setInterval(increment, resultForSetInterval);

    this.setState({
      settings: false,
    });
  };

  render() {

    const styleTextSection = {
      color: this.state.textColor,
      background: this.state.textBackgroundColor,
      fontSize: `${this.state.textFontSize}px`,
      height: `${this.state.textHeight}px`,
      width:  `${this.state.textWidth}px`,
  };

    return (
      <StyledTextSection>
        <div 
        className="word-section"
        style={styleTextSection}>
        <h1 
        className='text'>Start</h1>
        </div>
       <div className="menu">
        <i 
        onClick={this.start}
        className="fa fa-play" />
        <i 
        onClick={this.showSettings}
        className="fa fa-wrench"/>
        </div>
        <div className={this.state.settings ? "settings" : 'off'}>
        <div className="words-per-min">
        <p>Words per minute</p>
        <input type="number"
         name="number" 
         value={this.state.number} 
         onChange={this.changeHandler}
          placeholder="number"
           min="60" />
           <p>Background Color</p>
        <input type="text"
         name="textBackgroundColor" 
         value={this.state.textBackgroundColor} 
         onChange={this.changeHandler}
          placeholder="textBackgroundColor"
           />
           <p>Fontsize</p>
        <input type="number"
         name="textFontSize" 
         value={this.state.textFontSize} 
         onChange={this.changeHandler}
          placeholder="Fontsize" />
           <p>Height</p>
        <input type="number"
         name="textHeight" 
         value={this.state.textHeight} 
         onChange={this.changeHandler}
          placeholder="Height" />
           <p>Width</p>
        <input type="number"
         name="textWidth" 
         value={this.state.textWidth} 
         onChange={this.changeHandler}
          placeholder="Width"/>
           </div>
        </div>
        <TextAdder />
      </StyledTextSection>
    );
  }
}

const mapStateToProps = state => {
  return {
    text: state.text
  }
}

export default connect(mapStateToProps)(TextSection);