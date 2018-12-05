import React, { Component } from 'react';
import './App.css';
import Scores from './Scores';
import Times from './Times';

class App extends Component {
  render() {
    return (  
      <div className="App">
        <h1>React Exercises</h1>
        <h2>Scoreboard App</h2>
        <Scores />
        <hr />
        <h2>Small #1 - Timestamp Button</h2>
        <Times />
      </div>
    );
  }

}

export default App;