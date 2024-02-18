import PostLoader from '../../Utils/PostLoader';
import { getUserPostApi } from '../../Store/api/postApi';
import PostCard from '../Posts/PostCard';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const MyPosts = ({detailedPost, setDetailedPost}) => {

  const [userPosts, setUserPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const location = useLocation();

  
  useEffect(() => {
    console.log("useEffect My Posts");
    const profileId = location.pathname.split('/')[2]
    const fetchProfileData = async () => {
        setIsLoading(true);
        try {
            const data = await getUserPostApi(profileId)
            setUserPosts(data);
        } catch (error) {
            console.log(error);
            setIsError(true)
        }
        finally{
            setIsLoading(false);
        }

    }
    fetchProfileData();
}, []);
  
  return (
    <PostLoader isLoading={isLoading}>
      <div className='flex flex-col gap-8'>
        {
          isError? 
          <div>Error occurred</div>
          :
          userPosts?.map((elem, index) => <PostCard key={elem._id}  {...{elem, detailedPost, setPostDetails: setDetailedPost, from: 'profile'}}/>)
        }
      </div>
    </PostLoader>
  )
}

export default MyPosts
