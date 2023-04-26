import Link from "next/link";

const blogPostDetails = ({blogPost}) => {
    return (
        <div>
            <h2 className="text-2xl"> {blogPost.title} </h2>
            <p> {blogPost.body} </p>
            <Link href={`/blog`} > <button className="btn btn-success">Back to Blog Page</button> </Link>
        </div>
    );
};

export default blogPostDetails;

export const getStaticPaths = async () =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const blogPosts = await response.json();
    const paths = blogPosts.map( blogPost =>{
        return{
            params:{
                blogPostId:`${blogPost.id}`,
            }
        }
    })
    return{
        paths,
        fallback:false,
    }
};

export const getStaticProps = async (context) =>{
    const {params} = context;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogPostId}`);
    const data = await response.json();
    return{
        props:{
            blogPost:data,
        }
    }
}