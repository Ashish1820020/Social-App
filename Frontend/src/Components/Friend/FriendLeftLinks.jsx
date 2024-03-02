import React from 'react'
import { BsPersonFillAdd, BsPersonFillCheck, BsPersonFillDown  } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const FriendLeftLinks = ({currentLink}) => {
    
  return (
    <NavLink to={`/friends/${currentLink.link}`} className='hover:text-black'>
        <div className='w-full rounded-lg '>
            <div className='flex items-center gap-3 py-3 p-2 hover:bg-[#80808028] rounded-lg'>
                <div className="icon-hover icon">
                    <currentLink.icon className='h-8 w-8 text-black bg-[#e4e2e2] rounded-full p-1' />
                </div>
                <p className='text-lg font-medium'>{currentLink.name}</p>
            </div>
        </div>
    </NavLink>
  )
}

export default FriendLeftLinks
