import React from "react";
import logo from "../assets/logo.png";
import Buttons from "./Buttons";
const Navbar = () => {
  return (
    <nav className="px-[168px] shrink-0 flex items-center justify-between   h-[80px] font-[forum] text-primary">
      <div className="">
        <img
          src={logo}
          alt="logo"
          className="w-[146px] h-[37px] object-contain"
        />
      </div>
      <div>
        <ul className=" flex items-center justify-between text-[20px] ">
          <li className="px-5 cursor-pointer"> Menu</li>
          <li className="px-5 cursor-pointer"> Restaurant</li>
          <li className="px-5 cursor-pointer"> Locations</li>
          <li className="px-5 cursor-pointer"> About</li>
          <li className="px-5 cursor-pointer"> Blog</li>
        </ul>
      </div>
      <div>
        <Buttons content={"Contact Us"} />
      </div>
    </nav>
  );
};

export default Navbar;
