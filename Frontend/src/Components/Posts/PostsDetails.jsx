import React from 'react'
import { setDetailedPost } from '../../Store/slices/PostSlice';
import { handleLikeUnLikeApi } from '../../Store/api/postApi';
import { dummyProfileImage } from '../../assets/helper';
import { BiLike, BiSolidLike } from 'react-icons/bi';
import { FaRegComment, FaShare } from 'react-icons/fa';
import { PiDotsThreeOutlineFill } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';

const PostsDetails = ({ _id, caption, image, likes, owner, userData, dispatch }) => {

    const navigate = useNavigate();
    
    // LIKE UNLIKE FEATURE DETAILED POST CARD
    const handleLike = () => {
        if(likes.includes(userData._id)){
            const newArr = likes.filter((elem) => elem !== userData._id)
            dispatch(setDetailedPost({...detailedPost, likes: newArr}));
        }
        else
            dispatch(setDetailedPost({...detailedPost, likes: [...likes, userData._id]}));
        dispatch(handleLikeUnLikeApi(_id));
    }



  return (
    <div className='post-card w-full bg-white rounded-[6px] text-[#626262] font-poppins'>
        <div className="post-card-inside pb-[5px]">


            {/* POST CARD TOP SECTION */}
            <div className='flex items-center justify-between px-[20px] pt-[20px]'>
                <div className='flex gap-4 items-center'>
                        <img src={owner?.avatar? owner.avatar : dummyProfileImage}
                        onClick={() => navigate(`/profile/${owner._id}`)}
                        alt="Profile Pic" 
                        className='img-hover h-10 w-10 rounded-full'/>
                    <div className='flex-col'>
                        <div onClick={() => navigate(`/profile/${owner._id}`)}
                        className='text-base font-semibold hover:underline cursor-pointer'>
                           {owner.name}
                        </div>
                        <span className='text-[13px] text-[#9a9a9a]'>July 24 2024, 13:40 pm</span>
                    </div>
                </div>

                <div className='flex gap-4'>
                    <div className='p-[.4rem] hover:bg-[#cfccccc0] rounded-full'>
                        <PiDotsThreeOutlineFill className='icon-hover text-[1.3rem]' />
                    </div>
                </div>
            </div>


            {/* POST CARD CAPTION SECTION */}
            <p className='my-[15px] text-[15px] px-[20px]'>{caption && caption}</p>


            {/* POST CARD IMAGE SECTION */}
            <div className="post-image object-contain">
                {
                    image?.url &&
                        <img 
                        src={image?.url}
                        className='w-full mb-[5px] rounded-[4px]' />
                }
            </div>


            
            {/* POST CARD HORIZONTAL BORDER SECTION */}
            <hr className={image? "" : 'mx-6'} />


            {/* POST CARD BOTTOM SECTION */}
            <div className="like-comment-container flex justify-between px-[20px]">
                <div onClick={handleLike}
                    className= {`icon-hover flex items-center justify-center w-1/3 py-2 my-1 hover:bg-[#00000015] rounded-md ${(likes?.includes(userData._id)) &&' text-blue-500'}`}
                >
                    {
                        likes?.includes(userData._id)? 
                            <BiSolidLike  className='text-[22px] mx-2' />  
                        :
                            <BiLike className='text-[22px] mx-2' />  
                    }
                    <span className='text-[17px]'>Like</span>
                </div>
                <div className="icon-hover flex items-center justify-center w-1/3 py-2 my-1 hover:bg-[#00000015] rounded-md">
                    <FaRegComment className='text-[22px] mx-2' />
                    <span className='text-[17px]'>Comment</span>
                </div>
                <div className="icon-hover flex items-center justify-center w-1/3 py-2 my-1 hover:bg-[#00000015] rounded-md">
                    <FaShare className='text-[22px] mx-2' />
                    <span className='text-[17px]'>Share</span>
                </div>
            </div>

            
            {/* POST CARD HORIZONTAL BORDER SECTION */}
            <hr className={image? "" : 'mx-6'} />


        </div>
    </div>
  )
}

export default PostsDetails;