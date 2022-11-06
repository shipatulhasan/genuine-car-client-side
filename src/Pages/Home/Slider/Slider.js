import React, { useEffect } from "react";
import img1 from "../../../asset/homeCarousel/4.jpg";
import img2 from "../../../asset/homeCarousel/2.jpg";
import img3 from "../../../asset/homeCarousel/3.jpg";
import img4 from "../../../asset/homeCarousel/1.jpg";
import Slide from "./Slide";

const Slider = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    }, [])
  const slides = [
    {
      id: 1,
      img: img1,
      next: 2,
      prev: 4,
    },
    {
      id: 2,
      img: img2,
      next: 3,
      prev: 1,
    },
    {
      id: 3,
      img: img3,
      next: 4,
      prev: 2,
    },
    {
      id: 4,
      img: img4,
      next: 1,
      prev: 3,
    },
   
  ];

  return (
    <div className="carousel w-full mb-10">
        {
            slides.map(slide=><Slide key={slide.id} slide={slide} />)
        }
    </div>
  );
};

export default Slider;
