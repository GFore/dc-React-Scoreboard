import React, { Component } from 'react';
import InputBox from './InputBox';
import OutputBox from './OutputBox';

class Talkies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    }
  }
  render() {
    return (  
        <div>
            <InputBox
                term={this.state.term}
                onChange={(event) => this._onChange(event.target.value)}
            />
            <OutputBox
                term={this.state.term}
            />

        </div>
    );
  }

  _onChange = userInput => {
    this.setState({
      term: userInput
    });
  };

}

export default Talkies;