import React from 'react';

const CoffeeList = (props) => {
    return (
        <fieldset>
            <legend> ORDER LIST </legend>
            <table>
                <thead>
                    <tr>
                        <td>Coffee</td>
                        <td>Email Address</td>
                        <td>Flavor</td>
                        <td>Size</td>
                        <td>Strength</td>
                    </tr>
                </thead>
                <tbody>
                    {props.orders.map((item, index) => {
                        return (
                                <tr key={index}>
                                    <td>{item.coffee}</td>
                                    <td>{item.emailAddress}</td>
                                    <td>{item.flavor}</td>
                                    <td>{item.size}</td>
                                    <td>{item.strength}</td>
                                </tr>
                        );            
                    })}
                </tbody>
            </table>
        </fieldset>
    );
};

export default CoffeeList;