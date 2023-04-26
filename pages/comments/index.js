import Link from "next/link";

const index = ({comments}) => {
    return (
        <div>
            <h2 className="text-2xl"> Comments Page  Total Comments : {comments.length} </h2>
            {
                comments.map( comment => {
                    return(
                        <div>
                            <Link href={`/comments/${comment.id}`} > 
                            <h2 className="text-2xl"> {comment.name} </h2>
                            </Link>
                            <p> {comment.email} </p>
                            <p> {comment.body} </p>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default index;

export const getStaticProps = async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await response.json();
    return{
        props:{
            comments: data.slice(0,5),
        }
    }
}