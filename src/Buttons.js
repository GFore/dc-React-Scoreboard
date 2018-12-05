import React from 'react';


function Buttons(props) {
    return (
        <div className="btnGroup">
            <button onClick={() => props.addPerson()}>Add Player</button>
            {/* <button onClick={() => props.changeScore(props.id, -1)}>-1</button> */}
        </div>
    );
}


export default Buttons;