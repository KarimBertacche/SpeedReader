import React from 'react';

class WordSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      words: ['Hello',],
         }
  }

  render() { 
    return ( 
      <div>
{this.state.words.map(word => {
  return <h1>
  {word}</h1>
})}
      </div>
     );
  }
}
 
export default WordSection;