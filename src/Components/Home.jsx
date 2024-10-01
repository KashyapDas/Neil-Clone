import React from "react";
import Homecard from "./Homecard";
import style from "./regular.module.css";


function Home() {
  return (
    <div className="w-screen h-[90%] flex flex-col md:flex-row-reverse relative">
      {/* Left Side Bar */}

      <div className="leftDiv w-full h-[80%] md:w-[68%] md:h-full p-1 flex flex-col gap-y-2 md:flex-row md:gap-x-10">
        <Homecard src="https://i.pinimg.com/564x/f2/af/2e/f2af2efa49d3d100f231f7647b0f7b5b.jpg" heading="Potrait" subHeading="Kobe Bryant" info="----Style-47" />
        <Homecard src="https://i.pinimg.com/564x/93/dc/3a/93dc3ae0e781045e50e5ed7b14c53246.jpg" heading="Editorial" subHeading="Untitled Res" info="----Port. Go" />
      </div>

      {/* Right Side Bar */}

      <div className="rightDiv w-[20%] h-1/2 md:w-[32%] md:h-full flex flex-col justify-end">
        <h1 className={`${style.apercu} text-xs font-semibold absolute bottom-10 -right-10 origin-left -rotate-90 md:right-[0%] md:left-[2%] md:bottom-64 xl:bottom-72 md:text-xl lg:text-3xl xl:text-4xl `}>Categories +</h1>
        <h2 className={`${style.bang} text-9xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] font-extrabold`}>less.</h2>
      </div>
    </div>
  );
}

export default Home;
