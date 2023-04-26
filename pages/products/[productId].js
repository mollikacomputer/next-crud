import Link from "next/link";

const ProductDetails = ({product}) => {
    return (
        <div>
            <h2 className="text-2xl"> Product Id : {product.id} </h2>
            <h2 className="text-2xl">Product Title :{product.title} </h2>
            <p> {product.body} </p>
            <Link href={"/products"} >
            <button className="btn btn-success"> Back to Product Page </button>
            </Link>
        </div>
    );
};

export default ProductDetails;

export const getStaticPaths = async () =>{
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const products = await response.json();
    const paths = products.map( product =>{
        return{
            params:{
                productId:`${product.id}`
            }
        }
    })
    return{
        paths,
        fallback:false,
    }
}

export const getStaticProps = async(context) =>{
    const {params} = context;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.productId}`);
    const data = await response.json();
    return{
        props:{
            product:data,
        }
    }
}