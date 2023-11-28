import React from 'react'

const LoginForm = () => {
  return (
    <form action="" className="flex flex-col px-1 md:w-[550px] mx-auto p-4 my-10">
        <label htmlFor="email" className='text-black text-lg font-normal pb-2'>Email Address</label>
        <input type="email" name="email" className="h-8 outline-2 outline outline-blue-400 bg-gray-200 mb-4 rounded-sm" />
        <label htmlFor="password" className='text-black text-lg font-normal pb-2'>Password</label>
        <input type="password" name="password" className="h-8 outline-2 outline outline-blue-400 bg-gray-200 rounded-sm"/>
        <button type='submit' className="bg-blue-700 text-white text-lg mt-4 py-2 rounded-sm hover:bg-blue-500" >Log in</button>
        <div className='text-blue-500 text-lg my-3'>Forgotten Password?</div>

        <div className='flex gap-2 items-center justify-center my-5'>
            <hr className='border-none h-px w-1/5 my-20px bg-gray-500 my-2 mr-2'/>
            <span className='text-lg'>or</span>
            <hr className='border-none h-px w-1/5 my-20px bg-gray-500 my-2 ml-2'/>
        </div>
        <div className='flex items-center justify-center'>
            <button type='submit' className="bg-green-600 text-white text-lg mt-4 py-2 hover:bg-green-500 w-fit px-2 my-auto">Create New Account</button>
        </div>
    </form>
  )
}

export default LoginForm;
