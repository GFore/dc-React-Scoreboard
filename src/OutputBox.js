import React from 'react';

function OutputBox(props) {
    return (
        <div className="talky">Output: <span>{props.term}</span></div>
    );
}

export default OutputBox;