import React, { Component } from 'react';

class CoffeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formCoffee: "",
      formEmail: "",
      formFlavor: "",
      formSize: "",
      formStrength: ""
    }
  }
  render() {
    return (  
        <div>
            <form action="https://dc-coffeerun.herokuapp.com/api/coffeeOrders" method="POST" data-form>
            <fieldset >
                <legend> PLACE YOUR ORDER</legend>
                <div className="talky">
                    <label className="talky-label" htmlFor="coffee">Coffee: </label>  
                    <input
                        id="coffee"
                        className="talky-text"
                        value={this.state.formCoffee}
                        onChange={(event) => this._onChange("formCoffee", event.target.value)}
                        placeholder="Enter coffee name"
                        type="text"
                    />
                    <br />
                </div>
                <div className="talky">
                    <label className="talky-label" htmlFor="email">Email: </label>  
                    <input
                        id="email"
                        className="talky-text"
                        value={this.state.formEmail}
                        onChange={(event) => this._onChange("formEmail", event.target.value)}
                        placeholder="Enter your email"
                        type="email"
                    />
                    <br />
                </div>
                <div className="talky">
                    <label className="talky-label" htmlFor="flavor">Flavor: </label>  
                    <input
                        id="flavor"
                        className="talky-text"
                        value={this.state.formFlavor}
                        onChange={(event) => this._onChange("formFlavor", event.target.value)}
                        placeholder="Enter coffee flavor"
                        type="text"
                    />
                    <br />
                </div>
                <div className="talky">
                    <label className="talky-label" htmlFor="size">Size: </label>  
                    <input
                        id="size"
                        className="talky-text"
                        value={this.state.formSize}
                        onChange={(event) => this._onChange("formSize", event.target.value)}
                        placeholder="Enter coffee size"
                        type="text"
                    />
                    <br />
                </div>
                <div className="coffeeRunFormButtons">
                    <div className="strength">
                        <label className="talky-label" htmlFor="strength">Strength: </label>  
                        <input
                            id="strength"
                            className="talky-num"
                            value={this.state.formStrength}
                            onChange={(event) => this._onChange("formStrength", event.target.value)}
                            type="number"
                            min="0"
                            max="100"
                            />
                    </div>
                    <div className="btnGroup">
                        <button onClick={() => this._handleSubmit()}>Submit</button>
                        <button onClick={(event) => this._handleReset(event)}>Reset</button>
                    </div>
                </div>
                <br />

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

    _handleReset = (e) => {
        e.preventDefault();
        this.setState({
            formCoffee: "",
            formEmail: "",
            formFlavor: "",
            formSize: "",
            formStrength: ""
          });
    }

}

export default CoffeeForm;