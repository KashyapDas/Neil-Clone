import React from "react";
import style from "./regular.module.css";
import { Link } from "react-router-dom";

function Sidebar({ navIcon }) {
  return (
    <div
      className={`w-screen h-screen bg-slate-300 absolute z-30 top-0 ${
        navIcon ? "right-[0%] bg-opacity-100" : "-right-[100%] opacity-0"
      } transition-all delay-100 duration-200 ease-linear md:hidden`}
    >
      <div className="navbar w-full h-full flex flex-col items-center justify-center gap-y-4">
        <Link to="/"
          className={`${style.garphite} font-extrabold text-4xl hover:text-blue-700`}
        >
          Print Shop
        </Link>
        <Link to="/about"
          className={`${style.garphite} font-extrabold text-4xl hover:text-blue-700`}
        >
          Commercials
        </Link>
        <Link to="/contact"
          className={`${style.garphite} font-extrabold text-4xl hover:text-blue-700`}
        >
          Covers
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
