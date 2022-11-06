import React from 'react';

const ServiceDetails = ({service}) => {
    const {title,img,facility,description} = service
    return (
        <div className='col-span-3 pr-16'>

            <div className='relative overflow-hidden rounded'>
            <div className="bg-black opacity-30 absolute w-full h-full" />
            <img src={img} className='w-full h-[500px]' alt="" />
            </div>
            <h2 className='py-8 text-black font-bold text-5xl'>
                {title}
            </h2>
            <p className='text-gray-700'>
                {description}
            </p>

            <div className='grid gap-5 md:grid-cols-2 mt-10'>
                {
                    facility.map((item,i)=><div key={i} className='rounded-lg border-t-2 border-t-orange p-8 bg-slate-100'>
                    <h2 className='text-xl text-black font-bold mb-2'>{item.name}</h2>
                    <p>{item.details}</p>
                </div>)
                }
                
            </div>
            
        </div>
    );
};

export default ServiceDetails;