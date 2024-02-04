import PostCard from '../Posts/PostCard';
import React from 'react'
import { useSelector } from 'react-redux';

const MyPosts = () => {
  

  const { userPosts } = useSelector(state => state.posts);

  console.log(userPosts);
  return (
    <div className='flex flex-col gap-8'>
      {
        userPosts?.map((elem, index) => <PostCard key={elem._id}  {...{elem}}/>)
      }
    </div>
  )
}

export default MyPosts
