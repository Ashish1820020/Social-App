import { manageFriends, sendOrCancelFriendRequest } from '../../Store/api/authApi'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const FriendCard = ({friend, buttonNames}) => {

  const dispatch = useDispatch();
  const { userData } = useSelector(state => state.auth);

  const handleAddOrAccept = () => {
    if(buttonNames[1] === 'Confirm'){
      dispatch(manageFriends({action: 'accepted', userId: friend._id}));
    }else{
      dispatch(sendOrCancelFriendRequest(friend._id))
    }
  }

  return (
    <div className='friend-card w-[220px] h-[360px] rounded-md mr-2 shadow-[gray] shadow-md bg-white'>
        <div className='friend-card-inside w-full h-full rounded-md'>
            <img src={friend.avatar && friend.avatar} alt="" className='h-[60%] w-[100%] bg-white rounded-tl-md rounded-tr-md'/>
            <div className="friend-card-bottom flex flex-col p-2">
                <p className='font-bold text-sm text-black my-2'>{friend.name}</p>

                {
                  userData.sendFriendRequest.includes(friend._id)?
                  <>
                    <button className='bg-[#b3b1b150] w-[100%] m-auto text-white my-4 rounded-md p-[5px]' onClick={handleAddOrAccept}>cancel</button>
                  </>
                  :
                  <>
                    <button className='bg-blue-500 w-[100%] m-auto text-white my-2 rounded-md p-[5px]' onClick={handleAddOrAccept}>{buttonNames[1]}</button>
                    <button className='w-[100%] bg-[#b3b1b150] m-auto rounded-md p-[5px]'>{buttonNames[2]}</button>
                  </>
                }
                {/* <button className='bg-blue-500 w-[100%] m-auto text-white my-2 rounded-md p-[5px]' onClick={handleAddOrAccept}>{buttonNames[1]}</button>
                <button className='w-[100%] bg-[#b3b1b150] m-auto rounded-md p-[5px]'>{buttonNames[2]}</button> */}
            </div>
        </div>
    </div>
  )
}

export default FriendCard
