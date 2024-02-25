import React from 'react'
import { useSelector } from 'react-redux';
import { IoPeople } from "react-icons/io5";
import { NavLink, useNavigate } from 'react-router-dom';

const SidebarLinks = ({index}) => {
    
    const { userData } = useSelector(state => state.auth);
    const navigate = useNavigate()

    if(index === 1){
        return (
          <div className='w-full rounded-lg' onClick={() => navigate(`/profile/${userData._id}`)}>
              <div className='flex items-center gap-3 py-3 p-2 hover:bg-[#80808028] rounded-lg'>
                  <img src={userData.avatar} alt="" className='img-hover h-8 w-8 border-[#0000003d] border-[.5px] rounded-full'/>
                  <p className='text-lg font-medium'>{userData.name}</p>
              </div>
          </div>
        )
    }
    else if(index === 2){
        return (
            <NavLink to={'/friends'} className='hover:text-black'>
                <div className='w-full rounded-lg '>
                    <div className='flex items-center gap-3 py-3 p-2 hover:bg-[#80808028] rounded-lg'>
                        <div className="icon-hover icon">
                            <IoPeople className='h-6 w-6 text-[#1876f2ad]' />
                        </div>
                        <p className='text-lg font-medium'>Find Friends</p>
                    </div>
                </div>
            </NavLink>
        )
    }
}

export default SidebarLinks
