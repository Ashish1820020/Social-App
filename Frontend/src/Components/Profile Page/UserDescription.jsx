import React from 'react'
import { MdWorkOutline } from "react-icons/md";
import { FaGraduationCap, FaHome } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const UserDescription = () => {
  return (
    <div className='user-description w-full bg-[white] rounded-md'>
      <div className='user-description-inside w-full p-6 flex-col gap-y-6'>

        <div className="intro mb-8">
          <h2 className='text-black text-2xl font-bold'>Intro</h2>
          <p className='text-center px-16 py-4 text-xl'>
            Believe in yourself and you can do unbelievable things.
          </p>
        </div>


        <hr />


        <div className="profile-description mt-12">
          <div className='flex gap-3 items-center my-4'>
            <MdWorkOutline className='icon text-2xl'/>
            <p className='text-xl'>Software Engineer at Digital Avenues Pvt. Ltd.</p>
          </div>

          <div className='flex gap-3 items-center my-4'>
            <FaGraduationCap className='icon text-2xl'/>
            <p className='text-xl'>Studied at Academy of Technology</p>
          </div>

          <div className='flex gap-3 items-center my-4'>
            <FaGraduationCap className='icon text-2xl' />
            <p className='text-xl'>Went to Ichlabad High School</p>
          </div>

          <div className='flex gap-3 items-center my-4'>
            <FaHome  className='icon text-2xl'/>
            <p className='text-xl'>Lives in Kolkata, West Bengal</p>
          </div>
          
          <div className='flex gap-3 items-center my-4'>
            <FaLocationDot  className='icon text-2xl'/>
            <p className='text-xl'>From Barddhaman, West Bengal</p>
          </div>
        </div>



      </div>
    </div>
  )
}

export default UserDescription
