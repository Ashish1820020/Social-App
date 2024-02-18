import React from 'react';
import { IoPersonAdd } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { FaCamera } from "react-icons/fa";


const ProfileComponent = ({setProfileImgFile, previewProfileImg, setPreviewProfileImg, userProfileData}) => {

    const handleProfileImgSelect = (e) => {
        setPreviewProfileImg(URL.createObjectURL(e.target.files[0]))
        setProfileImgFile(e.target.files[0])
    }
  return (
    <form action="put" encType="multipart/form-data" className='profile flex flex-col justify-center w-full h-48 rounded-lg p-2 bg-white'>
        <div className="profile-inside flex justify-between py-2 px-4">
            <div className="image-section img-hover max-w-[10%] h-28 w-28 rounded-full relative border-[#00000063] border-[.5px]">
                <img src={previewProfileImg && previewProfileImg} alt="" className='w-full h-full rounded-full' />
                <input
                type="file"
                id="profilePic"
                name='file'
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleProfileImgSelect}
                />
                <label htmlFor='profilePic' 
                    className='absolute bottom-[0px] right-[0px] bg-[#9fa3aade] rounded-full p-2'>
                    <FaCamera className='icon-hover text-xl'/>
                </label>
            </div>
            <div className="user-details-section w-[90%] flex justify-between">
                <div className="user-details-left">
                    <p className='text-[1.8rem] font-bold text-[#00000091]'>{userProfileData.name}</p>
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
    </form>
  )
}

export default ProfileComponent
