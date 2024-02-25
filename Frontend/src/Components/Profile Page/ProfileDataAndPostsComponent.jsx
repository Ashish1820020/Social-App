import React from 'react'
import UserDescription from './UserDescription'
import Share from '../SharePost/Share'
import MyPosts from './MyPosts'

const ProfileDataAndPostsComponent = ({detailedPost, setDetailedPost}) => {

  return (
    <div className='profile-bottom flex justify-between'>

      <div className="profile-bottom-left w-[38%] relative top-0">
        <div className="profile-bottom-left-inside sticky top-6">
            <UserDescription />
        </div>
      </div>

      <div className="profile-bottom-right w-[60%]">
        <div className="flex flex-col gap-6 profile-bottom-right-inside">
          <Share from='profile' />
          <MyPosts {...{detailedPost, setDetailedPost}} />
        </div>
      </div>

    </div>
  )
}

export default ProfileDataAndPostsComponent;
