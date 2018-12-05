import React from "react";

const TimeStamp = props => {
  return (
    <ul>
      {props.timestamps.map(item => {
        return (
          <li 
            key={item.id} 
            className="single-timestamp"
            // onClick={() => props.handleClick(item.id)}
          >{item.timestamp}</li>
        );
      })}
    </ul>
  );
};

export default TimeStamp;