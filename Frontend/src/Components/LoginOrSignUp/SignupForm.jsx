import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupApi } from '../../Store/api/authApi';
import axios from 'axios';



const SignupForm = ({handleSignup}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  const dispatch = useDispatch();


  
  return (
    <form action="post" encType="multipart/form-data" className="flex flex-col px-1 md:w-[550px] mx-auto p-4 mt-10">
        <label htmlFor="name" className='text-black text-lg font-normal pb-2'>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" 
        className="h-8 outline-2 outline outline-blue-400 bg-gray-200 mb-4 rounded-sm" />
        
        <label htmlFor="email" className='text-black text-lg font-normal pb-2'>Email Address</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" 
        className="h-8 outline-2 outline outline-blue-400 bg-gray-200 mb-4 rounded-sm" />

        <label htmlFor="password" className='text-black text-lg font-normal pb-2'>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" 
        className="h-8 outline-2 outline outline-blue-400 bg-gray-200 mb-4 rounded-sm"/>
        
        <label htmlFor="password" className='text-black text-lg font-normal pb-2'>Confirm Password</label>
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} name="password" 
        className="h-8 outline-2 outline outline-blue-400 bg-gray-200 mb-4 rounded-sm"/>
    
        <input type="file" accept="image/*" onChange={(e) => setAvatar(e.target.files[0])} name="avatar" 
        className=" bg-white border-2 border-solid border-gray-500 rounded-md mt-2"/>

        <button type='submit'onClick={(e) => handleSignup(e, {name, email, password, confirmPassword, avatar})} className="bg-blue-700 text-white text-lg mt-4 py-2 rounded-sm hover:bg-blue-500">Sign up</button>
    </form>
  )
}

export default SignupForm;
