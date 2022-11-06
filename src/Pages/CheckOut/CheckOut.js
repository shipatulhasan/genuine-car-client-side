import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";
import OrderedProduct from "./OrderedProduct";

const CheckOut = () => {
  const service = useLoaderData();
  
 
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  md:px-8 ">
      <div className="grid gap-12 md:grid-cols-2">
        <OrderedProduct service={service} />
        <CheckOutForm service={service} />
      </div>
    </div>
  );
};

export default CheckOut;
