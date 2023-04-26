import Link from "next/link";

const ServiceDetails = ({service}) => {
    return (
        <div>
             <h2 className="text-2xl">{service.id} </h2>
             <h2 className="text-2xl">{service.title} </h2>
            <p> {service.body} </p>
            <Link href={`/services/`} >
             <button className="btn btn-success"> Back to Service Page </button>
            </Link>
        </div>
    );
};

export default ServiceDetails;

export const getStaticPaths = async () =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const services = await response.json()
    const paths = services.map(service =>{
        return{
            params:{
                serviceId:`${service.id}`
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
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.serviceId}`);
    const data = await response.json();
    return{
        props:{
            service:data,
        }
    }
}