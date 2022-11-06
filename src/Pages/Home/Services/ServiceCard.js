import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const {_id, img, title, price } = service;
  return (
    <Link to={`/service-details/${_id}`}>
      <div className="p-5 duration-300 transform bg-white border rounded-xl shadow-sm hover:shadow-xl hover:shadow-slate-300">
        <img src={img} className="rounded-xl mb-5 w-full h-56" alt="" />
        <div className="px-2 flex flex-col justify-between h-20">
          <h6 className="mb-2 font-bold text-lg leading-5">{title}</h6>

          <div className="flex justify-between items-center text-orange">
            <p className=" font-bold">Price: ${price}</p>
              <FaArrowRight />
            
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
