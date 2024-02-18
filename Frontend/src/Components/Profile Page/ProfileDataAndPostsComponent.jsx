import React from 'react'
import UserDescription from './UserDescription'
import CreatePostCard from '../utility/CreatePostCard'
import Share from '../SharePost/Share'
import MyPosts from './MyPosts'

const ProfileDataAndPostsComponent = ({detailedPost, setDetailedPost}) => {

  console.log("ProfileDataAndPostsComponent");
  return (
    <div className='profile-bottom flex justify-between'>

      <div className="profile-bottom-left w-[38%]">
        <div className="profile-bottom-left-inside">
            <UserDescription />
        </div>
      </div>

      <div className="profile-bottom-right w-[60%]">
        <div className="flex flex-col gap-6 profile-bottom-right-inside">
          <Share />
          <MyPosts {...{detailedPost, setDetailedPost}} />
        </div>
      </div>

    </div>
  )
}

export default ProfileDataAndPostsComponent;
