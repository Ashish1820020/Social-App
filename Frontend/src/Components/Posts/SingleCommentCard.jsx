import React from 'react'
import { useNavigate } from 'react-router-dom';

const SingleCommentCard = ({comment}) => {

  const {content, user: owner } = comment;
  const navigate =  useNavigate();

  return (
    <div className='post-comment-card w-fit h-fit bg-white p-[20px] pb-0'>
        <div className='post-comment-card-inside w-full flex gap-4 justify-between'>
            <div className='w-[32px] h-[32px] '>
                <img
                onClick={() => navigate(`/profile/${owner._id}`)} 
                className='img-hover w-full h-full rounded-full' src={owner?.avatar} alt="avatar" />
            </div>
            {/* bg-[#9e9d9d2c] */}
            <div className='flex flex-col w-full max-h-[80px] p-2 bg-[#9e9d9d3d] rounded-lg'>
                <span 
                onClick={() => navigate(`/profile/${owner._id}`)} 
                className='text-[13px] hover:underline cursor-pointer'>{owner.name}</span>
                <div className='text-[15px] ml-1 text-black text-base'>{content}</div>
            </div>
        </div>
    </div>
  )
}

export default SingleCommentCard
