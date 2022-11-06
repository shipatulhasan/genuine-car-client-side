import React from 'react';
import img from '../../asset/about_us/person.jpg'
import img1 from '../../asset/about_us/parts.jpg'

const About = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="grid lg:grid-cols-2">
        <div className="relative mb-20">
           <img src={img} className="object-cover rounded shadow-lg h-96 w-11/12 md:w-8/12 " alt="" />
           <img src={img1} className="absolute bottom-0 right-0 md:right-24 object-cover w-64 h-64 rounded border-8 border-white " alt="" />
           </div>
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg mt-10">
            
              <p className='text-orange font-bold tracking-wider uppercase mb-2'>About us</p>
            
            <div className="max-w-md mb-6">
              <h2 className="max-w-sm mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 md:text-5xl md:leading-tight">
              We are qualified & of experience in this field
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
              </p>
              <p className="mt-2 text-base text-gray-700 md:text-lg">
              the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  
              </p>
              <button className="mt-5 text-slate-100 py-2 px-6 rounded bg-orange hover:bg-slate-200 hover:text-slate-700 hover:bg-opacity-30 border border-orange transition-colors duration-300 ease-linear">Discover More</button>
            </div>
          </div>
          
        </div>
      </div>
    );
};

export default About;