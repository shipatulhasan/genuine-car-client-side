import React from 'react';

const ServiceHeader = ({image,title}) => {
    return (
        <div className='relative rounded overflow-hidden'>
            <div className="bg-gradient-to-r from-black to-transparent opacity-90 absolute w-full h-full" />
            <img alt="" src={image} className="w-full object-cover h-[300px]" />
            <h1 className="mb-5 text-4xl md:text-6xl font-bold text-slate-100 md:leading-tight absolute top-1/3 pl-5">{title}</h1>

            
        </div>
    );
};

export default ServiceHeader;