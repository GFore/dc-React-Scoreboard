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
                handleClick={this._deleteTimestamp}
            />
            <div>
                <button onClick={() => this._newTime()}>Save Time</button>
                <button onClick={() => this._resetTime()}>Reset</button>
            </div>
        </div>
    );
  }


  _newTime(){
      //determine the new ID by adding one to the last ID. If no scores exist, then set ID to 1
      const newID = this.state.timestamps.length > 0
              ? this.state.timestamps[this.state.timestamps.length-1].id + 1
              : 0;

      const newTime = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
      this.setState({
        timestamps: [...this.state.timestamps, {id: newID, timestamp: newTime}]
      });
  }

  _deleteTimestamp = (idToDelete) => {
    this.setState({
        timestamps: this.state.timestamps.filter(item => item.id !== idToDelete)
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