import React from 'react';

function OutputBox(props) {
    let termToDisplay = props.term;
    if (props.outType === "Leet") {
        termToDisplay = leetSpeak(termToDisplay);
    }
    return (
        <div className="talky">
            <div className="talky-label">{props.outType}: </div>
            <div className="talky-text">{termToDisplay}</div>
        </div>
    );
}

function translate(ltr) {
    const lettersToNumbers = {'A': '4', 'E': '3', 'G': '6', 'I': '1', 'O': '0', 'S': '5', 'T': '7',};
    return lettersToNumbers[ltr] || ltr;
  }

function leetSpeak(word) {
    let translation = ``;
    
    for (let character of word) {
        translation += translate(character);
    };
    
    return translation;
}

export default OutputBox;