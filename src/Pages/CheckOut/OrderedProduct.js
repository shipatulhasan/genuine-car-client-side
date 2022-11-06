import React from 'react';

const OrderedProduct = ({service}) => {
    const {img,title,price} = service
    return (
        <div className="p-5">
           
        <img src={img} className="rounded-xl mb-5 w-80 h-56" alt="" />
        <div className="px-2 flex flex-col justify-between h-20">
        <p className="text-orange text-6xl">${price}</p>
          <h6 className="mb-2 font-bold text-4xl leading-5 mt-4">{title}</h6>

        </div>
      </div>
    );
};

export default OrderedProduct;