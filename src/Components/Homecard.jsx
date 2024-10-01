import React from "react";
import style from "./regular.module.css";

function Homecard({src,heading,subHeading,info}) {
  return (
    <div className="ads-div w-full h-1/2 flex gap-x-4 lg:gap-x-0 rounded-md md:flex-col md:h-full lg:h-full lg:justify-between ">

      <div className="image-div w-1/2 h-60 overflow-hidden rounded-md md:w-full md:h-[70%] lg:h-[70%]">
        <img
          src={src}
          alt="Image Not Found"
          className="w-full h-full object-cover "
        />
      </div>

      <div className="text-div w-1/2 h-60 flex flex-col items-center justify-center overflow-hidden md:h-[30%] md:w-full lg:h-[30%] lg:mt-1">
        <h1 className={`${style.fontSpringRegular} text-4xl md:text-5xl lg:text-7xl xl:text-8xl`}>{heading}</h1>
        <h2 className={`${style.fontSpringRegular} text-2xl lg:text-3xl xl:text-4xl`}>{subHeading}</h2>
        <h3 className={`${style.madena} text-xl lg:text-2xl xl:text-3xl`}>{info}</h3>
      </div>
    
    </div>
  );
}

export default Homecard;
