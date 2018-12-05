import React, { Component } from 'react';
import './App.css';
import Scores from './Scores';
import Times from './Times';
import Talkies from './Talkies';

class App extends Component {
  render() {
    return (  
      <div className="App">
        <h1 className="App-header">React Exercises</h1>
        <div className="Exercise">
          <h2>Scoreboard App</h2>
          <Scores />
        </div>
        <div className="Exercise evenEx">
          <h2>Small #1 - Timestamp Button</h2>
          <Times />
        </div>
        <div className="Exercise">
          <h2>Small #2 - Walky Talky</h2>
          <Talkies />
        </div>
      </div>
    );
  }

}

export default App;