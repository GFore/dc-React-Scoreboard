import React, { Component } from 'react';
import CoffeeInputs from './CoffeeInputs';
// import TimeStamp from './TimeStamp';

class CoffeeRuns extends Component {
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
        <div className="time-container">
            <form action="https://dc-coffeerun.herokuapp.com/api/coffeeOrders" method="POST" data-form>
            <fieldset >
                <legend> PLACE YOUR ORDER</legend>
                <CoffeeInputs
                    name="Coffee"
                    term={this.state.formCoffee}
                    changeHandler={(event) => this._onChange("formCoffee", event.target.value)}
                    placeholder="Enter coffee type"
                    type="text"
                />
                <CoffeeInputs
                    name="Email"
                    term={this.state.formEmail}
                    changeHandler={(event) => this._onChange("formEmail", event.target.value)}
                    placeholder="Enter your email"
                    type="email"
                />
                <CoffeeInputs
                    name="Flavor"
                    term={this.state.formFlavor}
                    changeHandler={(event) => this._onChange("formFlavor", event.target.value)}
                    placeholder="Enter coffee flavor"
                    type="text"
                />
                <CoffeeInputs
                    name="Size"
                    term={this.state.formSize}
                    changeHandler={(event) => this._onChange("formSize", event.target.value)}
                    placeholder="Enter coffee size"
                    type="text"
                />
                <CoffeeInputs
                    name="Strength"
                    term={this.state.formStrength}
                    changeHandler={(event) => this._onChange("formStrength", event.target.value)}
                    placeholder=""
                    type="number"
                />
                {/* <input type="submit" value="Submit" />
                <input type="reset" /> */}
            </fieldset>
            </form>
        </div>
    );
  }

    _onChange = (keyName, userInput) => {
       console.log(keyName);
       console.log(userInput);
        this.setState({
            [keyName]: userInput
        });
    };



}

export default CoffeeRuns;


