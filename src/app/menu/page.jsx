import React from 'react';
import FoodsPost from '@/app/components/FoodsPost';

const menuPage = async () => {
    const response = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods');
    const data = await response.json();
    const foods = data.data;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 p-4">
            {foods.map((food) => (
                <FoodsPost key={food.id} food={food} />
            ))}
        </div>
    );
};

export default menuPage;