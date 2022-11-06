import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ServicesContext } from '../../Layouts/Main';
import ServiceHeader from './ServiceHeader';
import Sidebar from './Sidebar';
import ServiceDetails from './ServiceDetails';

const SingleService = () => {
    const services = useContext(ServicesContext)
    const service = useLoaderData()

    const {img,price,title,_id} = service

    return (
        <section>
            <ServiceHeader image={img} title={title} />
            <div className='grid grid-cols-1 gap-2 px-2 md:grid-cols-4 pt-20 '>

                <ServiceDetails service={service} />
                <Sidebar price={price} id={_id} services={services} />
                

            </div>
            
        </section>
    );
};

export default SingleService;