import React, { Component } from 'react';
import './App.css';
import Scores from './Scores';
import Times from './Times';
import Talkies from './Talkies';
import CoffeeRuns from './CoffeeRuns';
import CoffeeRunsAPI from './CoffeeRunsAPI';

class App extends Component {
  render() {
    return (  
      <div className="App">
        <h1 className="App-header">React Exercises</h1>
        <Scores />
        <Times />
        <Talkies />
        <CoffeeRuns />
        <CoffeeRunsAPI />
      </div>
    );
  }

}

export default App;