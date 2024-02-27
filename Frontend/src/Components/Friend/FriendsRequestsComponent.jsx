import Spinner from "../../Utils/Spinner"
import FriendCard from "./FriendCard"



const FriendsRequestsComponent = ({friendRequests, isLoading}) => {
  return (
    <Spinner isLoading={isLoading}>
        <div className={`friend-requests ${(isLoading || friendRequests.length>0) && 'h-[420px]'}`}>
            {
                (isLoading || friendRequests.length>0) && <h3 className='font-bold text-black text-[20px] text-lg mb-4'>Friend requests</h3>
            }
            <div className="friend-requests-inside flex overflow-x-auto">
            {
                friendRequests?.map((friend) => {
                    const buttonNames={1: 'Confirm', 2: 'Delete'}
                    return <FriendCard key={friend._id} friend={friend} buttonNames={buttonNames} />
                })
            }
            </div>
        </div>
    </Spinner>
  )
}

export default FriendsRequestsComponent
