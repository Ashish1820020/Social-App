import React from 'react';
import { IoPersonAdd } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";


const ProfileComponent = ({userData}) => {
    console.log(userData);


  return (
    <div className='profile w-full h-40 border-blue-800 border-2 rounded-xl p-2 bg-white'>
        <div className="profile-inside flex justify-between py-2 px-4">
            <div className="image-section img-hover w-[10%]">
                <img src={userData.avatar} alt="" className='h-28 w-28 rounded-lg' />
            </div>
            <div className="user-details-section w-[90%] flex justify-between">
                <div className="user-details-left">
                    <p className='text-2xl font-bold text-[#00000091]'>{userData.name}</p>
                </div>
                <div className="user-details-right">
                    <div className=" flex gap-4 user-details-right-top">
                        <div className="add-button button-hover flex gap-1 items-center bg-[#8080806e] text-black p-2 rounded-md">
                            <IoPersonAdd className='text-xl' />
                            <p className='text-lg'>Add Friend</p>
                        </div>
                        <div className="message button-hover flex gap-1 items-center bg-blue-500 text-white p-2 rounded-md">
                            <TiMessages className='text-xl'/>
                            <p className='text-lg'>Message</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileComponent
