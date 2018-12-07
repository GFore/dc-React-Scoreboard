import React from 'react';

const CoffeeList = (props) => {
    return (
        <fieldset>
            <legend> ORDER LIST </legend>
            <table>
                <thead>
                    <tr>
                        <td>Coffee</td>
                        <td>Email</td>
                        <td>Flavor</td>
                        <td>Size</td>
                        <td>Strength</td>
                    </tr>
                </thead>
                <tbody>
                    {props.orders.map((item, index) => {
                        return (
                                <tr key={index}>
                                    <td>{item.formCoffee}</td>
                                    <td>{item.formEmail}</td>
                                    <td>{item.formFlavor}</td>
                                    <td>{item.formSize}</td>
                                    <td>{item.formStrength}</td>
                                </tr>
                        );            
                    })}
                </tbody>
            </table>
        </fieldset>
    );
};

export default CoffeeList;