import React, { useContext } from 'react';
import ServiceHeader from '../ServiceDetails/ServiceHeader';
import img from '../../asset/services/4.jpg'
import { ServicesContext } from '../../Layouts/Main';
import ServiceCard from '../Home/Services/ServiceCard';

const Services = () => {
    const title ='Services'
    const services = useContext(ServicesContext)
    return (
        <div>
            <ServiceHeader image={img} title={title} />
            <div className="grid gap-5 py-16 md:grid-cols-2 lg:grid-cols-3">
        {
          services.map(service=><ServiceCard key={service._id} service={service} />)
        }
        
      </div>
        </div>
    );
};

export default Services;