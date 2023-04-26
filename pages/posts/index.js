import Link from 'next/link';
import React from 'react';

const index = ({posts}) => {
    return (
        <div>
            <h2 className='text-3xl' > Post Page </h2>
            <h2 className="text-2xl"> Total Post {posts.length} </h2>
            {
                posts.map( post => {
                    return(
                        <div>
                            <Link href={`/posts/${post.id}`} > 
                            <h2 className="text-2xl"> {post.title} </h2>
                            </Link>
                            <hr/>
                            <hr/>
                            <p> {post.body} </p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default index;

export const getStaticProps = async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return {
        props:{
            posts:data,
        }
    }
}