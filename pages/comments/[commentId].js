
const commentDetails= ({comment}) => {
    return (
        <div>
            <h2 className="text-2xl">Post name :{comment.name} </h2>
            <p className="text-2xl">Post Body :{comment.body} </p>
            <p className="text-2xl">Post Body :{comment.email} </p>
            
        </div>
    );
};

export default commentDetails;

export const getStaticPaths = async () =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/comments/");
    const data = await response.json();
    const paths = data.map( comment =>{
        return{
            params:{
                commentId:`${comment.id}`
            }
        }
    })
    return{
        paths,
        fallback:false,
    }
}

export const getStaticProps = async (context) =>{
    const {params} = context;
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${params.commentId}`);
    const data = await response.json();
    return{
        props:{
            comment:data,
        }
    }
}