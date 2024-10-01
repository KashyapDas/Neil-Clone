import React, { useState } from "react";
import { FaGripLines, FaGripLinesVertical } from "react-icons/fa";
import style from "./regular.module.css";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

function Navbar() {
  const [navIcon, setNavIcon] = useState(false);

  return (
    <>
      <div className="w-full h-[10%] p-3 flex items-center justify-between">
        <h1 className={`${style.garphite} text-4xl md:text-5xl lg:text-6xl xl:text-7xl absolute top-3 left-5 z-50 md:relative md:top-0 md:left-0`}>Neil</h1>
        <div
          className="icon w-fit h-fit absolute top-3 right-10 z-50 md:hidden"
          onClick={() => setNavIcon((prev) => !prev)}
        >
          {navIcon ? (
            <FaGripLinesVertical className="text-4xl" />
          ) : (
            <FaGripLines className="text-4xl" />
          )}
        </div>

        <div className={`navbar w-fit h-fit hidden md:flex md:gap-x-5 lg:gap-x-10  ${style.apercu} uppercase font-extrabold cursor-pointer`}>
          <Link to="/" className="md:text-lg lg:text-2xl xl:text-3xl hover:bg-slate-300 p-2 rounded-md">Print Shop</Link>
          <Link to="/about" className="md:text-lg lg:text-2xl xl:text-3xl hover:bg-slate-300 p-2 rounded-md">Commercials</Link>
          <Link to="/contact" className="md:text-lg lg:text-2xl xl:text-3xl hover:bg-slate-300 p-2 rounded-md">Covers</Link>
          
        </div>
      </div>



      <Sidebar navIcon={navIcon} />
    </>
  );
}

export default Navbar;
