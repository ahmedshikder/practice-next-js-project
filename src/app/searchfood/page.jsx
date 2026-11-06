'use client';
import React from 'react';
import Searchfood from '@/app/components/Searchfood';


// const SearchfoodPromise = async () => {
//     const response = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods`);
//     const data = await response.json();
//     const foods = data.data;
//     return foods;
// }

const SearchfoodPromise = fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods').then((Response) => Response.json()).then((data) => data.data);

const SearchPage = () => {
    return (
        <div>
            <suspense fallback="Loading...">
                <Searchfood SearchfoodPromise={SearchfoodPromise} />
            </suspense>
        </div>
    );
};

export default SearchPage;