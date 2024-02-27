import Spinner from '../../Utils/Spinner';
import FriendCard from './FriendCard';

const PeopleMayKnowComponent = ({allUsers, isLoading}) => {
  return (
    <Spinner isLoading={isLoading}>
        <div className={`friend-you-may-know ${(isLoading || allUsers.length>0) && 'h-[65%]'} p-2`}>
            {(isLoading || allUsers.length>0) && <h3 className='font-bold text-lg mb-4 text-black'>People you may know</h3>}
            <div className="friend-you-may-know-inside flex flex-wrap gap-y-2">   
            { 
                allUsers?.map((friend) => {
                  const buttonNames={1: 'Add Friend', 2: 'Remove'}
                    return <FriendCard key={friend._id} friend={friend} buttonNames={buttonNames} />
                })
            }
            </div>
        </div>
    </Spinner>
  )
}

export default PeopleMayKnowComponent
