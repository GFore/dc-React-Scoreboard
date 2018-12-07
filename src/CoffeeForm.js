import React, { Component } from 'react';

class CoffeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coffee: "",
      emailAddress: "",
      flavor: "",
      size: "",
      strength: ""
    }
  }

  render() {
    return (  
        <div>
            {/* <form action="https://dc-coffeerun.herokuapp.com/api/coffeeOrders" method="POST" data-form> */}
            <form onSubmit={this._handleSubmit}>
            <fieldset >
                <legend> PLACE YOUR ORDER</legend>
                <div className="cof">
                    <label className="cof-label" htmlFor="coffee">Coffee: </label>  
                    <input
                        id="coffee"
                        className="cof-text"
                        value={this.state.coffee}
                        onChange={(event) => this._onChange("coffee", event.target.value)}
                        placeholder="Enter coffee name"
                        type="text"
                    />
                    <br />
                </div>
                <div className="cof">
                    <label className="cof-label" htmlFor="email">Email: </label>  
                    <input
                        id="email"
                        className="cof-text"
                        value={this.state.emailAddress}
                        onChange={(event) => this._onChange("emailAddress", event.target.value)}
                        placeholder="Enter your email"
                        type="email"
                    />
                    <br />
                </div>
                <div className="cof">
                    <label className="cof-label" htmlFor="flavor">Flavor: </label>  
                    <input
                        id="flavor"
                        className="cof-text"
                        value={this.state.flavor}
                        onChange={(event) => this._onChange("flavor", event.target.value)}
                        placeholder="Enter coffee flavor"
                        type="text"
                    />
                    <br />
                </div>
                <div className="cof">
                    <label className="cof-label" htmlFor="size">Size: </label>  
                    <input
                        id="size"
                        className="cof-text"
                        value={this.state.size}
                        onChange={(event) => this._onChange("size", event.target.value)}
                        placeholder="Enter coffee size"
                        type="text"
                    />
                    <br />
                </div>
                <div className="coffeeRunFormButtons">
                    <div className="cof-strength">
                        <label className="cof-label" htmlFor="strength">Strength: </label>  
                        <input
                            id="strength"
                            className="cof-num"
                            value={this.state.strength}
                            onChange={(event) => this._onChange("strength", event.target.value)}
                            type="number"
                            min="0"
                            max="100"
                            />
                    </div>
                    <div className="btnGroup">
                        <button>Submit</button>
                        <button onClick={(event) => this._handleReset(event)}>Reset</button>
                    </div>
                </div>

            </fieldset>
            </form>
        </div>
    );
  }

    _onChange = (keyName, userInput) => {
        this.setState({
            [keyName]: userInput
        });
    };

    _handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleSubmit(this.state);
        this._handleReset();
    }

    _handleReset = () => {
        this.setState({
            coffee: "",
            emailAddress: "",
            flavor: "",
            size: "",
            strength: ""
          });
    }

}

export default CoffeeForm;