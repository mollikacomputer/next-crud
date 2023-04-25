import Image from "next/image";

const ProductList = ({products}) => {


    // const fetchProducts = async () =>{
    //     const response = await fetch('api/products')
    //     const data = await response.json();
    //     setProducts(data);
    // }
    return (
        <div>
            total products: {products.length}
            {
                products.map( product => 
                <>
                <h2 className="text-2xl">
                    {product.title} <br/>
                    </h2>
                <p>{product.body}</p>
                <img
                    src={product.image}
                    width={350}
                    height={250}
                  />

                </>
                  )
            }
        </div>
    );
};

export default ProductList;

export const getStaticProps = async () =>{
    const response = await fetch('http://localhost:3000/api/products');
    const data = await response.json();

    return{
        props:{
            products:data,
        }
    }
}