import React, { Component } from 'react';
import ScoreCard from './Scorecard';
import Buttons from './Buttons';

class Scores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: [
        {id: 1, name: "Cindy",  score: 1001},
        {id: 2, name: "Loo",  score: 20},
        {id: 3, name: "Who",  score: 500}
      ]
    }
  }
  render() {
    return (  
        <div className="score-container">
          {this._scoresAsCards()}
          <Buttons 
            addPerson={() => this._addPlayer()}
          />
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


  _addPlayer(){
    const newPlayer = {
        id: this.state.scores.length+1,
        name: prompt("Name: "),
        score: Number(prompt("Score: "))
    };
    this.setState({
      scores: [...this.state.scores, newPlayer]
    })
  }

}

export default Scores;