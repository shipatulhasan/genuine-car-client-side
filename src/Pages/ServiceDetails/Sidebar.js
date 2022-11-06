import React from "react";
import { FaArrowRight, FaRegFileAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../../asset/brand/sidebarlogo.png";

const Sidebar = ({id, price, services }) => {
  return (
    <div className="col-span-1 space-y-6">
      <>
        <ul className="bg-slate-200  w-80 p-10 rounded-box">
          <h2 className="font-bold text-black text-2xl">Services</h2>
          {services.map((service) => (
            <NavLink to={`/service-details/${service._id}`} key={service._id}>
              {({ isActive }) => (
                <li
                  className={`${
                    isActive ? "bg-orange text-slate-50" : "bg-white"
                  } hover:bg-orange p-3 transition-colors duration-100 ease-linear rounded hover:text-slate-50 mt-5 text-base flex justify-between items-center`}
                >
                  {service.title}
                  <FaArrowRight />
                </li>
              )}
            </NavLink>
          ))}
        </ul>
      </>
      <div className="bg-black w-80 p-10 rounded-box space-y-5">
        <h2 className="font-bold text-2xl text-slate-100 pb-2">Download</h2>
        <div className="flex justify-between items-center">
          <div className="flex items-start gap-2 justify-start mt-2">
            <FaRegFileAlt className="text-gray-200 text-xl mt-2" />
            <div>
              <p className="text-white leading-6 text-lg">Our Brochure</p>
              <small className="text-gray-400">Download</small>
            </div>
          </div>
          <button className="bg-orange text-slate-50 p-4 rounded border border-orange hover:bg-white hover:text-orange transition-colors duration-150">
            <FaArrowRight />
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-start gap-2 justify-start mt-2">
            <FaRegFileAlt className="text-gray-200 text-xl mt-2" />
            <div>
              <p className="text-white leading-6 text-lg">Company Details</p>
              <small className="text-gray-400 ">Download</small>
            </div>
          </div>
          <button className="bg-orange text-slate-50 p-4 rounded border border-orange hover:bg-white hover:text-orange transition-colors duration-150">
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="bg-black w-80 p-10 pb-16 rounded-box space-y-5 text-center">
        <img src={logo} className="mx-auto w-36" alt="" />
        <p className="text-white leading-8 text-lg">
          Need Help? We Are Here To Help You
        </p>

        <div className="w-52 mx-auto p-5 pb-10 relative bg-white rounded-box">
          <p className="font-bold leading-8 text-lg">
            <span className="text-orange">Car Doctor </span> Special
          </p>
          <small className="font-semibold text-base">
          save up to <span className="text-orange">50% off</span> 
          </small>
          <button className="bg-orange rounded absolute  -bottom-5 left-10 px-8 py-2 text-white font-bold border hover:bg-white hover:text-orange border-orange transition-colors duration-150 shadow-md">
            Get Qute
          </button>
        </div>
      </div>

      <div className="w-80  px-2 space-y-6 mt-3">
        <p className="text-black font-bold text-3xl mb-4">Price ${price}</p>
        <Link to={`/checkout/${id}`}>
          <button className="bg-orange rounded px-8 py-2 border text-white w-full font-bold hover:bg-white hover:text-orange hover:border-orange transition-colors duration-150 ease-linear">
            Procced Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
