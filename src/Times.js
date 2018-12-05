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
            <div>
                <button onClick={() => this._newTime()}>Save Time</button>
                <button onClick={() => this._resetTime()}>Reset</button>
            </div>
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

  _resetTime(){
    this.setState({
        timestamps: [{
                    id: 0,
                    timestamp: new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()
                    }]
    });
  }
}

export default Times;