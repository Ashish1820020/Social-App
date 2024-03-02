import Spinner from '../../Utils/Spinner'
import React from 'react'
import FriendCard from './FriendCard'

const HelperComponent = ({isLoading=true, helperArray}) => {

    console.log('====================================');
    console.log(isLoading);
    console.log('====================================');
  return (
    <Spinner isLoading={isLoading}>
        <div className={`friend-requests ${(isLoading || helperArray?.length>0) && 'h-[420px]'}`}>
            {
                (isLoading || helperArray?.length>0) && <h3 className='font-bold text-black text-[20px] text-lg mb-4'>Friend requests</h3>
            }
            <div className="friend-requests-inside flex overflow-x-auto">
            {
                helperArray?.map((friend) => {
                    const buttonNames={1: 'Confirm', 2: 'Delete'}
                    return <FriendCard key={friend._id} friend={friend} buttonNames={buttonNames} />
                })
            }
            </div>
        </div>
    </Spinner>
  )
}

export default HelperComponent;
