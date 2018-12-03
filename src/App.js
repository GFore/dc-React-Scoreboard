import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

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
        <div key={score.id}>
          <h2>Name: {score.name} || Score: {score.score}</h2>
          <button onClick={() => this._incrementScoreById(score.id)}>+</button>
        </div>
      )
    });
    return cards;
  }

//Version 0:
  _incrementScoreById(id){
    // find the player in this.state.score and increment their score
    const newScores = this.state.scores.map(score => {
      // only change the score for the matching id
      if(score.id === id) {
        score.score += 1;
      }
      return score;
    });

    this.setState({
      scores: newScores
    })
  }



  //Version 1: use .map to manually construct replacement
  // _incrementScoreById(id){
  //   // find the player in this.state.score
  //   // increment their score
  //   const newScores = this.state.scores.map(score => {
  //     if(score.id !== id) {return score}
  //     else {
  //       return {
  //         id: score.id,
  //         name: score.name,
  //         score: score.score+1
  //       }
  //     }
  //   });
  //   // call this.setState
  //   this.setState({
  //     scores: newScores
  //   })
  // }


  //Version 2: use .map and copy values out of the original
//     _incrementScoreById(id){
//       // find the player in this.state.score
//       // increment their score
//       const newScores = this.state.scores.map(scr => {
//         if(scr.id !== id) {return scr}
//         else {
//           return {...scr, 
//             score: scr.score+1,
//           }
//         }
//       });
//       // call this.setState
//       this.setState({
//         scores: newScores
//       })
//     }

// //Version 3: use .map with ternary
// _incrementScoreById(id){
//   // find the player in this.state.score
//   // increment their score
//   const newScores = this.state.scores.map(scr => {
//     scr.id !== id ? scr : {...scr, 
//       score: scr.score+1,
//     }
//     }
//   );
//   // call this.setState
//   this.setState({
//     scores: newScores
//   })
// }


}

export default App;

// Removed this code from div.App
/* <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header> */