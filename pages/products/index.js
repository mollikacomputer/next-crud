import Link from "next/link";

const ProductList = ({ products }) => {
  return (
    <div>
      <h2 className="text-3xl">Product List {products.length} </h2>
      {products.map((product) => (
        <>
          <Link href={`/products/${product.id}`}>
            <h2 className="text-2xl">{product.title}</h2>
          </Link>
          <p> {product.body} </p>
        </>
      ))}
    </div>
  );
};

export default ProductList;

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      products: data,
    },
  };
};
