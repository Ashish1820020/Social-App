import PostLoader from '../../Utils/PostLoader';
import { getUserPostApi } from '../../Store/api/postApi';
import PostCard from '../Posts/PostCard';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const MyPosts = ({detailedPost, setDetailedPost}) => {

  const { isLoading, userPosts, isError } = useSelector(state => state.posts);
  const dispatch = useDispatch();
  const location = useLocation();

  
  useEffect(() => {
    console.log("useEffect My Posts");
    const profileId = location.pathname.split('/')[2]
    
    dispatch(getUserPostApi(profileId))
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
