import React from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";


const Services = ({services}) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <p className="text-orange font-bold tracking-wider uppercase mb-2">
          services
        </p>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl md:mx-auto">
          Our Service Area
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
        {
          services.map(service=><ServiceCard key={service._id} service={service} />)
        }
        
      </div>
      <div className="pt-3 text-center">
      <Link to='/services' >
      <button className="py-2 px-6 rounded bg-slate-50 hover:bg-orange hover:text-slate-100  border border-orange transition-colors duration-100 ease-linear">View all services</button>
      </Link>
      </div>
      
      

    </div>
  );
};

export default Services;
