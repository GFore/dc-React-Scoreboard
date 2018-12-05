import React, { Component } from 'react';
import './App.css';
import Scores from './Scores';

class App extends Component {
  render() {
    return (  
      <div className="App">
        <h1>Scoreboard App</h1>
        <Scores />
      </div>
    );
  }

}

export default App;