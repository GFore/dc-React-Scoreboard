import React from 'react';

function InputBox(props) {
    return (
        <div className="talky">Input:  
          <input
            value={props.term}
            onChange={props.onChange}
            placeholder="Type here"
          />
          {/* <button type="submit">add</button> */}
        </div>
    );
}

export default InputBox;