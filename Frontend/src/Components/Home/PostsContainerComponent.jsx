
import PostCard from '../../Components/Posts/PostCard';
import React from 'react'

const PostsContainerComponent = ({allPosts}) => {
  return (
    <div className="posts-container w-full">
        <div className="posts-container w-full">
        {
            allPosts?.map((elem) => <PostCard key={elem._id} {...{elem}}/>)
        }
        </div>
    </div>
  )
}

export default PostsContainerComponent;
