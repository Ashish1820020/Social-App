import React from 'react'

const ProfileCoverImage = ({coverImage}) => {
  return (
    <div className='w-full img-hover h-96 border-blue-800 border-2 rounded-xl p-2'>
      <img src={coverImage && coverImage} alt="Cover Image" className='h-full w-full rounded-xl object-fit' />
    </div>
  )
}

export default ProfileCoverImage
