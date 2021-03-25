import React from 'react';


const cart = (props) => {
    const cart = props.cart;
    let totalPopulation= 0;
    for (let i = 0; i < cart.length; i++) {
        const country = cart[i];
        totalPopulation = totalPopulation + country.population;
        
    }
    return (
        <div>
            <h3>this is cart {cart.length}</h3>
            <h3>total population {totalPopulation}</h3>
        </div>
    );
};

export default cart;