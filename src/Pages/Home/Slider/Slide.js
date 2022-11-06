import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Slide = ({slide}) => {

    const {img,id,prev,next} = slide
    
    useEffect(()=>{
        window.scrollTo(0,0)
    }, [])
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full rounded overflow-hidden">
      <div className="bg-gradient-to-r from-black to-transparent opacity-80 absolute w-full h-full" />
      <img alt="" src={img} className="w-full h-[400px] md:h-[600px]" />
      <div className="absolute flex justify-between transform -translate-y-1/2 gap-3 right-10 bottom-8">
          
        <a href={`#slide${prev}`}  className="btn btn-circle border-0 bg-orange">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle border-0 bg-orange">
          ❯
        </a>
      </div>
     
        <div className="max-w-xs md:max-w-md absolute top-1/4 left-5 md:left-10 text-slate-100">
        <h1 className="mb-5 text-4xl md:text-6xl font-bold md:leading-tight">Affordable Price For Car Servicing</h1>
        <p className="mb-5">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <button className="py-2 px-6 rounded bg-orange hover:bg-slate-200 hover:bg-opacity-30 border border-orange transition-colors duration-300 ease-linear">Discover More</button>
        </div>
  </div>
    
  );
};

export default Slide;
