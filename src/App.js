import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ScoreCard from './Scorecard';

class App extends Component {
  constructor(props) {    //not really needed since it's top level, just here for practice
    super(props);

    //Set up state
    this.state = {
      scores: [
        {id: 1, name: "bob",  score: 1001},
        {id: 2, name: "sue",  score: 20},
        {id: 3, name: "lou",  score: 500}
      ]
    }
  }
  render() {
    return (  
      <div className="App">
        <h1>Scoreboard App</h1>
        <div className="score-container">
          {this._scoresAsCards()}
        </div>
      </div>
    );
  }

  _scoresAsCards(){
    const cards = this.state.scores.map(score => {
      return (
        <ScoreCard
          key = {score.id}
          id = {score.id}
          name = {score.name}
          score = {score.score}
          changeScore={(id, delta) => this._changeScoreById(id, delta)}
        />
       
      );
    });
    return cards;
  }

  _changeScoreById(id, scoreDelta){
    // find the player in this.state.score and increment their score
    const newScores = this.state.scores.map(score => {
      // only change the score for the matching id
      if(score.id === id) {
        score.score += scoreDelta;    //scoreDelta is 1 for increasing score, or -1 for decreasing score
      }
      return score;
    });

    this.setState({
      scores: newScores
    })
  }

}

export default App;