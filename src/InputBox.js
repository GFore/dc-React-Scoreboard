import React from 'react';

function InputBox(props) {
    return (
        <div className="talky">
          <div className="talky-label">Input: </div>  
          <input
            className="talky-text"
            value={props.term}
            onChange={(event) => props.changeHandler(event.target.value)}
            placeholder="Type here"
          />
          {/* <button type="submit">add</button> */}
        </div>
    );
}

export default InputBox;