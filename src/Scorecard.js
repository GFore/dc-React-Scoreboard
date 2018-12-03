import React from 'react';


function ScoreCard(props) {
    return (
        <div className="flexor">
            <h2>Name: {props.name} Score: {props.score}</h2>
            <button onClick={() => props.incScore(props.id)}>+</button>
            <button onClick={() => props.decScore(props.id)}>-</button>
        </div>
    );
}

export default ScoreCard;