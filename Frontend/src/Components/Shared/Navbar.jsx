import React from "react";
import {
  MdNotificationsActive,
  MdMessage,
  MdLightMode,
  MdDarkMode,
  MdSearch,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Logo from "../../assets/SocialEcho.png";

const Navbar = () => {
  const mode = "light";
  return (
    <div className="shadow bg-white flex items-center justify-between px-5 h-16">

      <div className="left flex flex-col text-center justify-center">
        <img className="w-36 h-5" src={Logo} />
      </div>

      <div className="h-10 text-black py-1 bg-gray-50 border w-full hidden   sm:flex items-center justify-between rounded-full text-sm shadow-sm focus:shadow-outline-blue focus:border-blue-500 transition duration-300 pl-5 pr-5 md:w-[420px] lg:w-[660px] ">
        <input type="text" placeholder="search for peoples" name="search" className="bg-gray-50 focus:outline-none md:w-[220px]" />
        <MdSearch className="text-xl cursor-pointer" />
      </div>

      <div className="flex flex-column items-center text-xl">
        {mode === "light" ? (
          <MdDarkMode className="mx-4 cursor-pointer" />
        ) : (
          <MdLightMode className="mx-4 cursor-pointer" />
        )}
        <MdMessage className="mx-2 cursor-pointer" />
        <MdNotificationsActive className="mx-4 cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
