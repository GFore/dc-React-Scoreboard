import React from 'react';


function CoffeeButtons(props) {
    return (
        <div className="btnGroup">
            <button onClick={() => props.handleSubmit()}>Submit</button>
            <button onClick={() => props.handleReset()}>Reset</button>
        </div>
    );
}


export default CoffeeButtons;