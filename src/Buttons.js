import React from 'react';


function Buttons(props) {
    return (
        <div className="btnGroup">
            <button onClick={() => props.addPerson()}>Add Player</button>
            <button onClick={() => props.resetScores()}>Reset</button>
        </div>
    );
}


export default Buttons;