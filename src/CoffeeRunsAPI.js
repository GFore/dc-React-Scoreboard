import React, { Component } from 'react';
import CoffeeForm from './CoffeeForm';
import CoffeeList from './CoffeeList';

class CoffeeRunsAPI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: []
        }
    }

    componentDidMount() {
        fetch('https://dc-coffeerun.herokuapp.com/api/coffeeOrders')
            .then(result => result.json())
            .then(orderArray => {
                this.setState({
                    orders: Object.values(orderArray)
                })
            })
    }


    render() {
        return (  
            <div className="Exercise">
                <h2>Medium #2 - CoffeeRun with API!</h2>
                <div className="coffeeRunContainer">
                    <CoffeeForm handleSubmit={this._submitOrder} />
                    <CoffeeList orders={this.state.orders} />
                </div>
            </div>
        );
    }

    _submitOrder = (order) => {
        fetch('https://dc-coffeerun.herokuapp.com/api/coffeeOrders', {
            method: 'POST',
            body: JSON.stringify({
                coffee: order.coffee,
                emailAddress: order.emailAddress,
                flavor: order.flavor,
                size: order.size,
                strength: order.strength
            }),
            headers: {'Content-Type': 'application/json; charset=utf-8'}
        })
        .then(() => {
            this.setState({
                orders: [...this.state.orders, order]
            });
        })
    }
}

export default CoffeeRunsAPI;