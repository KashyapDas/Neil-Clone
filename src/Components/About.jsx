import React from "react";
import { FaArrowDown } from "react-icons/fa";
import style from "./regular.module.css";

function About() {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row">
      
      <div className="leftDiv w-full h-3/4 lg:w-3/5 lg:h-full">
        
        <div className="topDiv w-full h-1/2 md:h-3/5 lg:h-1/2 flex flex-col items-center">
          <h1 className={`${style.mediumOTF} text-3xl md:text-5xl lg:text-6xl xl:text-7xl`}>
            Creative <span className="ml-8 md:ml-16">Developer</span>{" "}
          </h1>
          <div className="imageDiv w-4/5 h-3/4 md:w-3/5 md:h-4/5 lg:h-3/5 lg:w-[90%] xl:w-[80%] overflow-hidden rounded-md">
            <img
              src="https://i.pinimg.com/736x/d4/ec/de/d4ecde0d5df25113423d19bae55084d5.jpg"
              alt="Image not found"
              className="w-full h-full object-cover object-top"
            />
          </div>

        </div>

        <div className="bottomDiv w-full h-1/2 md:h-2/5 lg:h-1/2 flex flex-col items-center lg:flex-row-reverse lg:items-start lg:justify-center ">
          
          <div className="textDiv w-3/5 md:w-1/2 h-[75%] lg:w-4/5 lg:h-full xl:w-3/5 p-1 flex items-center lg:items-start justify-center">
              <h1 className={`${style.madena} text-lg md:text-2xl lg:text-4xl xl:text-5xl text-center text-wrap font-extrabold lg:font-medium`}>I support designers and agencies with creative development. Currently front end engineer at Wise. based in London United Kingdom.</h1>
          </div>
          <div className="iconDiv w-full h-[25%] lg:w-fit lg:h-fit flex items-center justify-center">
              <FaArrowDown className="text-4xl lg:text-6xl" />
          </div>

        </div>
      
      </div>

      <div className="rightDiv w-full h-1/5 lg:w-2/5 lg:h-full flex flex-col items-end md:flex-row md:items-start md:gap-x-8 lg:gap-0 md:justify-center lg:justify-around ">
          
          <h1 className={`${style.fontSpringSemiBold} text-5xl md:text-7xl lg:text-8xl xl:text-8xl md:mt-4 lg:mt-0 lg:h-full lg:w-10 break-words `}>Richard</h1>
          
          <h1 className={`${style.fontSpringSemiBold} text-5xl md:text-7xl lg:text-8xl xl:text-8xl md:mt-4 lg:mt-0 lg:h-full lg:w-10 break-words `}>Ekwonye</h1>
      
      </div>
    
    </div>
  );
}

export default About;
