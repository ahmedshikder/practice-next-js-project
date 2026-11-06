import React from 'react';

const foodIdPage = async ({ params }) => {
    const { foodsId } = await params;
    const response = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodsId}`);
    const data = await response.json();
    const food = data.data;
    return (
        <div className="card border w-80 bg-gray-700 flex justify-center items-center flex-col gap-4 p-4">
            <h2>{food.main_ingredients}</h2>
        </div>
    );
};

export default foodIdPage;