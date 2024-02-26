import { useDispatch, useSelector } from 'react-redux';
import FriendCard from '../Components/Friend/FriendCard'
import React, { useEffect, useState } from 'react'
import { getFriendsPageData } from '../Store/api/authApi';
import { all } from 'axios';
import Spinner from '../Utils/Spinner';

const Friends = () => {

    // receivedFriendRequest
    const { userData } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    console.log(userData);

    const [ isLoading, setIsLoading ] = useState(false);
    const [ friendRequests, setFriendRequests ] = useState([]);
    const [ allUsers, setAllUsers ] = useState([]);
    const [ isError, setIsError ] = useState(false);
    // const [ userProfileData, setUserProfileData ] = useState(null);

    console.log(isLoading);
    useEffect(() => {

        const fetchData = async () =>{
            try {
                setIsLoading(true);
                const data = await getFriendsPageData()
                setFriendRequests(data.receivedRequests);
                setAllUsers(data.allUsers);
                
            } catch (error) {
                setIsError(true);
                console.log(error);
            }
            finally{
                setIsLoading(false);
            }
        } 
        fetchData();      
    }, [])

  return (
    <div className='friends-page w-full'>
        <div className='friends-page-inside w-full flex flex-row gap-4'>
            <div className="friends-page-left w-[20%] h-[100vh] p-4 bg-white shadow-md shadow-black">
                <div className="friends-page-left-inside w-[100%] border-2 border-[red] h-[100vh]">

                </div>
            </div>

            <div className="friends-page-right w-[80%] p-4">
                <div className="friends-page-right-inside w-[100%] p-2">
                    <Spinner isLoading={isLoading}>
                        <div className="friend-requests h-[420px]">
                            <h3 className='font-bold text-black text-[20px] text-lg mb-4'>Friend requests</h3>
                            <div className="friend-requests-inside flex overflow-x-auto">
                            {
                                friendRequests?.map((elem) => {
                                    return <FriendCard key={elem._id} {...elem} />
                                })
                            }
                            </div>
                        </div>
                    </Spinner>
                    <hr className='text-[#ced0d4] h-2'/>
                    
                    <Spinner isLoading={isLoading}>
                        <div className="friend-you-may-know h-[65%] p-2">
                            <h3 className='font-bold text-lg mb-4 text-black'>People you may know</h3>
                            <div className="friend-you-may-know-inside flex flex-wrap gap-y-2">   
                            { 
                                allUsers?.map((elem) => {
                                    return <FriendCard key={elem._id} {...elem} />
                                })
                            }
                            </div>
                        </div>
                    </Spinner>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Friends
