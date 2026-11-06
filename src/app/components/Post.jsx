import React from 'react';
import Image from 'next/image';

const Postcomponent = ({ post }) => {
    return (
        <>
        
        <div className="card bg-base-100 image-full w-65 shadow-sm">
            <figure>
                <Image
                    src="https://i1.sndcdn.com/avatars-000605471592-rldfcn-t240x240.jpg"
                    alt="Shoes" 
                    width={400}
                    height={400}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-red-500">{post.title}</h2>
                <p>{post.body}</p>
            </div>
        </div>
        </>
    );
};

export default Postcomponent;