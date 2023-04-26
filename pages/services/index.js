import Link from "next/link";

const serviceList = ({ services }) => {
  return (
    <div>
      <h2 className="text-3xl">
        Service List Page Total Services:{services.length}
      </h2>
      <hr />
      {services.map((service) => (
        <div>
          <Link href={`/services/${service.id}`}>
            <h2 className="text-2xl">{service.title} </h2>
          </Link>
          <p> {service.body} </p>
        </div>
      ))}
    </div>
  );
};

export default serviceList;

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      services: data,
    },
  };
};
