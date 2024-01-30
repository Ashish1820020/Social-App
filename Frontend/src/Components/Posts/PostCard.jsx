import React from 'react'
import { useSelector } from 'react-redux';
import { BiLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';



const PostCard = (elem) => {
    const { _id, caption, image, likes, comments, owner } = elem.elem;
        const navigate = useNavigate();
        const { userData } = useSelector(state => state.auth);

  return (
    // border-black border-2
    <div className='w-full bg-white rounded-xl'>

        <div className='flex py-2 mt-2 gap-4 items-center p-2'>
            <img src=
                    {owner?.image?
                        owner.image 
                        :
                        'https://res.cloudinary.com/demo/image/upload/d_avatar.png/non_existing_id.png'
                    } 
            alt="" className='img-hover h-10 w-10 border-black border-2 rounded-full'/>
            <div className='flex-row'>
                <p className='font-semibold text-lg'>{owner.name}</p>
            </div>
        </div>

        {image && <hr />}

        <p className='p-2'>{caption}</p>

        <div className="post-image">
            {
                image &&
                    <img src={image?.url} alt="img" 
                    className='h-96 w-full' />
            }
        </div>

        <div>

        </div>

        <div className="like-comment-container p-2 mx-2 flex justify-between border-t-2">
            <div className="icon-hover flex items-center justify-center w-1/3 hover:bg-[#00000015]">
                <BiLike className='text-2xl mx-2' />  
                <span className='text-lg'>Like</span>
            </div>
            <div className="icon-hover flex items-center justify-center w-1/3 hover:bg-[#00000015]">
                <FaRegComment className='text-2xl mx-2' />
                <span className='text-lg'>Comment</span>
            </div>
            <div className="icon-hover flex items-center justify-center w-1/3 hover:bg-[#00000015]">
                <FaShare className='text-2xl mx-2' />
                <span className='text-lg'>Share</span>
            </div>
        </div>
    </div>
  )
}

export default PostCard
