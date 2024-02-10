import React, { useState } from 'react';
import { BsFillSendFill } from "react-icons/bs";

const PostCommentInput = ({_id, userData, dispatch, commentOnPostApi}) => {
    const [commentText, setCommentText] = useState("");

    const handleCommentPosting = () => {
        const obj = {postId: _id, commentText, commentOwner: userData._id};
        setCommentText('');
        dispatch(commentOnPostApi(obj));
    }

  return (
    <div className='post-details-bottom sticky bottom-0 left-0 w-full h-[114px] bg-white p-[20px] border-2 border-t-2'>
        <div className='post-details-bottom-inside w-full flex gap-3 justify-between'>
            <div className='w-[32px] h-[32px] '>
                <img className='w-full h-full rounded-full' src={userData?.avatar} alt="" />
            </div>
            <div className='flex items-center justify-center gap-3 w-[calc(100%_-_32px)] h-[80px] px-4 bg-[#9e9d9d57] rounded-lg'>
                <input value={commentText} onChange={(e) => setCommentText(e.target.value)} type="text" 
                placeholder='write your comment' className='w-[90%] h-full bg-transparent outline-none text-black' 
                />
                <div 
                className='flex items-center justify-center p-[.6rem] rounded-full hover:bg-[#cfccccc0] w-[10%] h-[50px]'
                style={{pointerEvents: commentText.length === 0 && 'not-allowed'}}
                onClick={handleCommentPosting}>
                    <BsFillSendFill className='icon-hover text-2xl' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostCommentInput;
