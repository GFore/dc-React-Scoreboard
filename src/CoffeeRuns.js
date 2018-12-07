import React, { Component } from 'react';
import CoffeeForm from './CoffeeForm';
// import TimeStamp from './TimeStamp';

class CoffeeRuns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    }
  }
  render() {
    return (  
        <div className="Exercise evenEx">
            <h2>Medium #1 - CoffeeRun!</h2>
            <CoffeeForm />
            
        </div>
    );
  }

}

export default CoffeeRuns;


