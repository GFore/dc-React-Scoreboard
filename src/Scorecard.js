import React from 'react';


function ScoreCard(props) {
    return (
        <div className="flexor">
            <button onClick={() => props.removeScore(props.id)}>X</button>
            <h2> Name: {props.name} Score: {props.score}</h2>
            <button onClick={() => props.changeScore(props.id, 1)}>+1</button>
            <button onClick={() => props.changeScore(props.id, -1)}>-1</button>
        </div>
    );
}

export default ScoreCard;