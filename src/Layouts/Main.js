import React from 'react';
import { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar'

export const ServicesContext = createContext()

const Main = () => {
    const services = useLoaderData()
    return (
        <ServicesContext.Provider value={services}>
             <Navbar />  
             <Outlet />
             <Footer />         
        </ServicesContext.Provider>
    );
};

export default Main;            