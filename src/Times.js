import React, { Component } from 'react';
import TimeStamp from './TimeStamp';

class Times extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamps: [
          {id: 0, timestamp: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()}
      ]
    }
  }
  render() {
    return (  
        <div className="time-container">
            <TimeStamp
                timestamps={this.state.timestamps}
            />
            <button onClick={() => this._newTime()}>Save Time</button>
        </div>
    );
  }


  _newTime(){
      const newTime = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
      const newID = this.state.timestamps[this.state.timestamps.length-1].id + 1;
      this.setState({
        timestamps: [...this.state.timestamps, {id: newID, timestamp: newTime}]
      });
  }
}

export default Times;