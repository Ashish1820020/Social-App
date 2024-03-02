import { useDispatch, useSelector } from 'react-redux';
import FriendCard from '../Components/Friend/FriendCard'
import React, { useEffect, useState } from 'react'
import { getFriendsPageData } from '../Store/api/authApi';
import { all } from 'axios';
import Spinner from '../Utils/Spinner';
import FriendsRequestsComponent from '../Components/Friend/FriendsRequestsComponent';
import PeopleMayKnowComponent from '../Components/Friend/PeopleMayKnowComponent';
import FriendLeftLinks from '../Components/Friend/FriendLeftLinks';
import { links } from '../Utils/FriendsLeftLinkArray';
import HelperComponent from '../Components/Friend/HelperComponent';
import { Outlet } from 'react-router-dom';

const Friends = () => {

    // receivedFriendRequest
    const { userData } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const [ isLoading, setIsLoading ] = useState(false);
    const [ friendRequests, setFriendRequests ] = useState([]);
    const [ allUsers, setAllUsers ] = useState([]);
    const [ isError, setIsError ] = useState(false);
    // const [ userProfileData, setUserProfileData ] = useState(null);

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
                <div className="friends-page-left-inside w-[100%] h-[100vh]">
                    {
                        links.map((currentLink) => {
                            return <FriendLeftLinks key={currentLink.name} currentLink={currentLink} />
                        })
                    }
                </div>
            </div>

            <div className="friends-page-right w-[80%] p-4">
                <div className="friends-page-right-inside w-[100%] p-2">
                    
                    {/* <Outlet /> */}
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Friends

{/* <HelperComponent helperArray={friendRequests} isLoading={isLoading}/>
                    
                    {
                        friendRequests.length>0 && allUsers.length>0 && <hr className='text-[#ced0d4] h-2'/>
                    }
                   
                    <HelperComponent helperArray={allUsers} isLoading={isLoading}/> */}
