import React, { useContext } from 'react';
import { ServicesContext } from '../../Layouts/Main';
import About from './About';
import Services from './Services/Services';
import Slider from './Slider/Slider';

const Home = () => {
    const services = useContext(ServicesContext)
    return (
        <div>
            <Slider />
            <About />
            <Services services={services} />

            
        </div>
    );
};

export default Home;