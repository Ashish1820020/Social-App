import React from 'react'
import { useSelector } from 'react-redux';
import { IoPeople } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const SidebarLinks = ({index}) => {
    
    const { userData } = useSelector(state => state.auth);
    const navigate = useNavigate()

    if(index === 1){
        return (
          <div className='w-full' onClick={() => navigate(`/profile/${userData._id}`)}>
              <div className='flex items-center gap-3 py-2 mt-2 p-2 hover:bg-[#80808028]'>
                  <img src={userData.avatar} alt="" className='img-hover h-8 w-8 border-black border-2 rounded-full'/>
                  <p className='text-lg font-medium'>{userData.name}</p>
              </div>
          </div>
        )
    }
    else if(index === 2){
        return (
          <div className=' w-full'>
              <div className='flex items-center gap-3 py-2 mt-2 p-2 hover:bg-[#80808028]'>
                <div className="icon-hover icon">
                    <IoPeople className='h-6 w-6 text-[#1876f2ad]' />
                </div>
                <p className='text-lg font-medium'>Find Friends</p>
              </div>
          </div>
        )
    }
}

export default SidebarLinks
