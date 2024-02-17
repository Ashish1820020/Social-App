import React, { useState } from 'react';



const LoginForm = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <form action="" className="flex flex-col px-1 md:w-[550px] mx-auto p-4 mt-10">
        <label htmlFor="email" className='text-black text-lg font-normal pb-2'>Email Address</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" 
        className="h-8 outline-2 outline outline-blue-400 bg-gray-200 mb-4 rounded-sm" />

        <label htmlFor="password" className='text-black text-lg font-normal pb-2'>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" 
        className="h-8 outline-2 outline outline-blue-400 bg-gray-200 rounded-sm"/>

        <button type='submit'onClick={(e) => handleLogin(e, {email, password})} 
        className="bg-blue-700 text-white text-lg mt-4 py-2 rounded-sm hover:bg-blue-500" >
          Log in
        </button>
        
        <div className='text-blue-500 text-lg my-3'>Forgotten Password?</div>
    </form>
  )
}

export default LoginForm;
