import FriendCard from '../Components/Friend/FriendCard'
import React from 'react'

const Friends = () => {
  return (
    <div className='friends-page w-full'>
        <div className='friends-page-inside w-full flex flex-row gap-4'>
            <div className="friends-page-left w-[20%] h-[100vh] p-4 bg-white shadow-md shadow-black">
                <div className="friends-page-left-inside w-[100%] border-2 border-[red] h-[100vh]">

                </div>
            </div>

            <div className="friends-page-right w-[80%] p-4">
                <div className="friends-page-right-inside w-[100%] p-2">
                    <div className="friend-requests h-[420px]">
                        <h3 className='font-bold text-black text-[20px] text-lg mb-4'>Friend requests</h3>
                        <div className="friend-requests-inside flex overflow-x-auto">
                            <FriendCard />
                            <FriendCard />
                            <FriendCard />
                            <FriendCard />
                        </div>
                    </div>
                    <hr className='text-[#ced0d4] h-2'/>
                    <div className="friend-you-may-know h-[65%] p-2">
                        <h3 className='font-bold text-lg mb-4'>People you may know</h3>
                        <div className="friend-you-may-know-inside flex flex-wrap gap-y-2">
                            <FriendCard />
                            <FriendCard />
                            <FriendCard />
                            <FriendCard />
                            <FriendCard />
                            <FriendCard />
                            <FriendCard />
                            <FriendCard />
                            <FriendCard />
                            <FriendCard />
                            <FriendCard />
                            <FriendCard />
                            <FriendCard />
                            <FriendCard />
                            <FriendCard />
                            <FriendCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Friends
