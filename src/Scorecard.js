import React from 'react';


function ScoreCard(props) {
    return (
        <div className="flexor">
            <h3> Name: {props.name} Score: {props.score}</h3>
            <button onClick={() => props.changeScore(props.id, 1)}>+1</button>
            <button onClick={() => props.changeScore(props.id, -1)}>-1</button>
            <button onClick={() => props.removeScore(props.id)}>X</button>
        </div>
    );
}

export default ScoreCard;