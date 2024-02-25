import React from 'react'

const FriendCard = () => {
  return (
    <div className='friend-card w-[220px] h-[360px] rounded-md mr-2 shadow-[gray] shadow-md bg-white'>
        <div className='friend-card-inside w-full h-full rounded-md'>
            <img src="" alt="" className='h-[64%] bg-white rounded-md'/>
            <div className="friend-card-bottom flex flex-col p-2">
                <p className='font-bold text-black'>Name</p>
                <button className='bg-blue-500 w-[100%] m-auto text-white my-2 rounded-md p-[5px]'>Confirm</button>
                <button className='w-[100%] bg-[#b3b1b150] m-auto rounded-md p-[5px]'>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default FriendCard
