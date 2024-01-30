import React from 'react'
import UserDescription from './UserDescription'
import CreatePostCard from '../utility/CreatePostCard'
import Share from '../SharePost/Share'
import MyPosts from './MyPosts'

const ProfileDataAndPostsComponent = () => {
  return (
    <div className='profile-bottom flex justify-between border-black border-2'>

      <div className="profile-bottom-left w-[36%] h-20 border-black border-2">
        <div className="profile-bottom-left-inside">
            <UserDescription />
        </div>
      </div>

      <div className="profile-bottom-right w-[56%] border-black border-2">
        <div className="profile-bottom-right-inside">
            <Share />
            <MyPosts />
        </div>
      </div>

    </div>
  )
}

export default ProfileDataAndPostsComponent;
