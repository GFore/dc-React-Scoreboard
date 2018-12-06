import React from 'react';
import CoffeeButtons from './CoffeeButtons'

function CoffeeInputs(props) {
    const inpName = props.name.toLowerCase();
    if (props.type !== "number") {
      return (
        <div className="talky">
          <div className="talky-label"><label htmlFor={inpName}>{props.name}: </label></div>  
          <input
            id={inpName}
            className="talky-text"
            // value={props.term}
            onChange={props.changeHandler}
            placeholder={props.placeholder}
            type={props.type}
          />
          <br /><br />
        </div>
      );
    } else {
        return (
            <div className="coffeeRunFormButtons">
              <div className="strength">
                <div className="talky-label"><label htmlFor={inpName}>{props.name}: </label></div>  
                <input
                  id={inpName}
                  className="talky-num"
                  // value={props.term}
                  onChange={props.changeHandler}
                  min="0"
                  max="100"
                  type={props.type}
                />
              </div>
              <CoffeeButtons />
            </div>
        );
    }
}


export default CoffeeInputs;