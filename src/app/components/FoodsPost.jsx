import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FoodsPost = ({ food }) => {
    return (
        <div className="card bg-base-100 h-full w-full shadow-sm">
            <figure>
                <Image width={300}
                height={300}
                src={food.image_link}
                alt={food.dish_name}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {food.dish_name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{food.main_ingredients}</p>
                <div className="card-actions justify-end">
                    <div className="btn badge badge-outline bg-red-500">{food.price} Taka</div>
                    <Link href={`/menu/${food.id}`} className="btn badge badge-outline bg-blue-500">
                        See details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FoodsPost;