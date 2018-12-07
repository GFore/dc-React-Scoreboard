import React, { Component } from 'react';
import CoffeeForm from './CoffeeForm';
import CoffeeList from './CoffeeList';

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
            <div className="coffeeRunContainer">
                <CoffeeForm handleSubmit={this._submitOrder} />
                <CoffeeList orders={this.state.orders} />
            </div>
        </div>
    );
  }

  _submitOrder = (order) => {
      this.setState({
        orders: [...this.state.orders, order]
      });
  }

}

export default CoffeeRuns;