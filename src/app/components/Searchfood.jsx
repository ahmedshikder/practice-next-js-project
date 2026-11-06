import React from 'react';
import { use } from 'react';

const Searchfood = ({ SearchfoodPromise }) => {

    const foods = use(SearchfoodPromise);
    return (
        <div>
            <h2>Total Foods: {foods.length}</h2>
        </div>
    );
};

export default Searchfood;