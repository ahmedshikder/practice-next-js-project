'use client';
import React from 'react';
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const countHendelerlike = () => {
        setCount(count + 1)
    }

    const countHendelerdislike = () => {
        if (count > 0) setCount(count - 1)
        
    }

    return (
        <div className="flex gap-5 items-center justify-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-4xl font-bold">👍 {count}</h2>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition-colors duration-300">
                <span onClick={countHendelerlike} className="text-2xl">Like</span>
            </button>
            <button className='bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition-colors duration-300"'>
                <span onClick={countHendelerdislike} className="text-2xl">😡Like</span>
            </button>
        </div>
    );
};

export default Counter;