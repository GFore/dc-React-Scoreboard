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
                changeHandler={this._onChange}
            />
            <OutputBox
                outType="Output"
                term={this.state.term}
            />
            <OutputBox
                outType="Upper"
                term={this.state.term.toUpperCase()}
            />
            <OutputBox
                outType="Leet"
                term={this.state.term.toUpperCase()}
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