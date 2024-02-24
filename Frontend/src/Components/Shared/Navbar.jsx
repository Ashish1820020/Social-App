import React, { useState } from "react";
import {
  MdNotificationsActive,
  MdMessage,
  MdLightMode,
  MdDarkMode,
  MdSearch,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import Logo from "../../assets/SocialEcho.png";
import { useDispatch } from "react-redux";
import { logoutApi } from "../../Store/api/authApi";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [profileMenu, setProfileMenu] = useState(false);
  console.log(profileMenu);
  const mode = "light";
  const dispatch = useDispatch();
  const navigate = useNavigate()
  return (
    <div className="shadow bg-white flex items-center justify-between px-5 h-16">

      <NavLink to={'/home'}>
        <div className="left flex flex-col text-center justify-center">
          <img className="w-36 h-5" src={Logo} />
        </div>
      </NavLink>

      <div className="h-10 text-black py-1 bg-gray-50 border w-full hidden sm:flex items-center justify-between rounded-full text-sm shadow-sm focus:shadow-outline-blue focus:border-blue-500 transition duration-300 pl-5 pr-5 md:w-[420px] lg:w-[660px] ">
        <input type="text" placeholder="search for peoples" name="search" className="bg-gray-50 focus:outline-none md:w-[220px]" />
        <MdSearch className="text-xl cursor-pointer" />
      </div>

      <div className="flex flex-column items-center text-xl">
        {mode === "light" ? (
          <MdDarkMode className="mx-4 cursor-pointer" />
        ) : (
          <MdLightMode className="mx-4 cursor-pointer" />
        )}
        <MdMessage className="mx-2 text-xl cursor-pointer" />
        <MdNotificationsActive className="mx-4 cursor-pointer" />
        <div className="profile-pic h-[20px] w-[20px] border-2 border-black rounded-full relative" onClick={() => setProfileMenu(!profileMenu)}>
          <div className={`w-[8rem] absolute ${profileMenu? 'top-4' : 'top-[-1000px] none'} left-[-7rem] p-4 py-6 z-50`}>
            <button 
            className="px-2 py-2 w-full hover:bg-[#a39f9f70] hover:text-white text-2xl font-body bg-white"
            >profile</button>


            <button 
            className="px-2 py-2 w-full hover:bg-[#a39f9f70] hover:text-white text-2xl font-body bg-white"
            onClick={() =>{
              dispatch(logoutApi())
              navigate('/')
            }}>logout</button>

            <button 
            className="px-2 py-2 w-full hover:bg-[#a39f9f70] hover:text-white text-2xl font-body bg-white">others</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
