import Link from "next/link";

const postDetails = ({post}) => {
    return (
        <div>
            <h2 className="text-2xl">Post Title is:{post.title} </h2>
            <p> Post Body: {post.body} </p>
            <Link href="/posts" > <button className="btn btn-success">Back to Post Page </button>  </Link>
        </div>
    );
};

export default postDetails;

export const getStaticProps = async (context) =>{
    const {params} = context;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json();
    return{
        props:{
            post:data,
        }
    }
}

export const getStaticPaths = async () =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
    const data = await response.json();
    const paths = data.map( post =>{
        return{
            params:{
                postId:`${post.id}`
            }
        }
    })
    return{
        paths,
        fallback:false,
    }
}