import React from 'react'
import { BiLike, BiSolidLike } from 'react-icons/bi';
import { FaRegComment, FaShare } from 'react-icons/fa';
import { PiDotsThreeOutlineFill } from 'react-icons/pi';
import { RxCross1 } from 'react-icons/rx';

const PostsDetails = () => {
  return (
    <div className='post-card w-full bg-white rounded-[6px] text-[#626262] font-poppins'>
        <div className="post-card-inside pb-[5px]">


            {/* py-4 mt-2 p-6 */}
            <div className='flex items-center justify-between px-[20px] pt-[20px]'>
                <div className='flex gap-4 items-center'>
                    {/* <NavLink to={`/profile/${owner._id}`}> */}
                        <img src=
                                // {owner?.avatar?
                                //     owner.avatar 
                                //     :
                                    'https://res.cloudinary.com/demo/image/upload/d_avatar.png/non_existing_id.png'
                                // } 
                        alt="Profile Pic" 
                        className='img-hover h-10 w-10 rounded-full'/>
                    {/* </NavLink> */}
                    <div className='flex-col'>
                        <div 
                        // onClick={() => navigate(`/profile/${owner._id}`)} 
                        className='text-base font-semibold hover:underline cursor-pointer'>
                            {/* {owner.name} */}
                            Ashish Bhattacharyya
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


            <p className='my-[15px] text-[15px] px-[20px]'>I am Ashish Bhattacharyya from Rayan, Barddhaman.</p>


            {/* {image && <hr className='bg-[black]'/>} */}


            <div className="post-image">
                {
                    // image &&
                        <img 
                        src='https://res.cloudinary.com/dz9ezveb9/image/upload/v1706978185/hiievnzpnx0rrrijotlq.jpg'
                        // {image?.url} alt="img" 
                        className='w-full mb-[5px] rounded-[4px] max-h-[600px]' />
                }
            </div>


            {/* <hr className={image? "" : 'mx-6'} /> */}


            {/*  px-2 mx-2  */}
            <div className="like-comment-container flex justify-between px-[20px]">
                <div 
                // onClick={handleLike}
                className= {`icon-hover flex items-center justify-center w-1/3 py-2 my-1 hover:bg-[#00000015] rounded-md`}
                    >
                    {
                        // likes?.includes(userData._id)? 
                        //     <BiSolidLike  className='text-[22px] mx-2' />  
                        // :
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


        </div>
    </div>
  )
}

export default PostsDetails;
