import Link from "next/link";

const blogList = ({ blogPosts }) => {
  return (
    <div>
      <h2 className="text-2xl">
        {" "}
        Blog Post List Total Post: {blogPosts.length}{" "}
      </h2>
      {blogPosts.map((blogPost) => (
        <>
          <Link href={`/blog/${blogPost.id}`}>
            <h2 className="text-2xl"> {blogPost.title} </h2>
          </Link>
          <p> {blogPost.body} </p>
        </>
      ))}
    </div>
  );
};

export default blogList;

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      blogPosts: data,
    },
  };
};
