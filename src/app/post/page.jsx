import React from 'react';
import Post from '@/app/components/Post';

const postPage = async () => {
    const responce = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await responce.json();

    return (
        <>
            <h2>Post Size: {data.length}</h2>
            <div className="flex justify-center items-center flex-col gap-4 p-4">
                {data.map((post) => (
                    <Post key={post.id} post={post} />
                ))}
            </div>
        </>
    );
};

export default postPage