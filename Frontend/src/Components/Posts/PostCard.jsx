import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BiLike, BiSolidLike  } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";
import { NavLink, useNavigate } from 'react-router-dom';
import { handleLikeUnLikeApi } from '../../Store/api/postApi';



const PostCard = (elem) => {
    const { _id, caption, image, likes, comments, owner } = elem.elem;
        const navigate = useNavigate();
        const dispatch = useDispatch();

        const { userData } = useSelector(state => state.auth);

        const handleLike = () => {
            dispatch(handleLikeUnLikeApi(_id));
        }


  return (
    <div className='post-card w-full bg-white rounded-[6px] my-[14px] text-[#626262] font-poppins'>
        <div className="post-card-inside p-[20px] pb-[5px]">


            {/* py-4 mt-2 p-6 */}
            <div className='flex items-center justify-between'>
                <div className='flex gap-4 items-center'>
                    <NavLink to={`/profile/${owner._id}`}>
                        <img src=
                                {owner?.avatar?
                                    owner.avatar 
                                    :
                                    'https://res.cloudinary.com/demo/image/upload/d_avatar.png/non_existing_id.png'
                                } 
                        alt="Profile Pic" 
                        className='img-hover h-10 w-10 rounded-full'/>
                    </NavLink>
                    <div className='flex-col'>
                        <div onClick={() => navigate(`/profile/${owner._id}`)} className='text-base font-semibold hover:underline cursor-pointer'>{owner.name}</div>
                        <span className='text-[13px] text-[#9a9a9a]'>July 24 2024, 13:40 pm</span>
                    </div>
                </div>

                <div className='flex gap-4'>
                    <div className='p-[.4rem] hover:bg-[#cfccccc0] rounded-full'>
                        <PiDotsThreeOutlineFill className='icon-hover text-[1.3rem]' />
                    </div>
                    <div className='p-[.4rem] hover:bg-[#cfccccc0] rounded-full'>
                        <RxCross1 className='icon-hover text-[1.3rem]' />
                    </div>
                </div>
            </div>


            <p className='my-[15px] text-[15px]'>{caption}</p>


            {/* {image && <hr className='bg-[black]'/>} */}


            <div className="post-image">
                {
                    image &&
                        <img src={image?.url} alt="img" 
                        className='w-full mb-[5px] rounded-[4px] max-h-[600px]' />
                }
            </div>


            <hr className={image? "" : 'mx-6'} />


            {/*  px-2 mx-2  */}
            <div className="like-comment-container flex justify-between">
                <div onClick={handleLike}
                className= {`icon-hover flex items-center justify-center w-1/3 py-2 my-1 hover:bg-[#00000015] rounded-md ${(likes?.includes(userData._id)) &&' text-blue-500'}`} >
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


        </div>
    </div>
  )
}

export default PostCard;












































// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { BiLike } from "react-icons/bi";
// import { FaRegComment } from "react-icons/fa";
// import { FaShare } from "react-icons/fa";
// import { PiDotsThreeOutlineFill } from "react-icons/pi";
// import { RxCross1 } from "react-icons/rx";
// import { NavLink, useNavigate } from 'react-router-dom';
// import { handleLikeUnLikeApi } from '../../Store/api/postApi';



// const PostCard = (elem) => {
//     const { _id, caption, image, likes, comments, owner } = elem.elem;
//         const navigate = useNavigate();
//         const dispatch = useDispatch();

//         const { userData } = useSelector(state => state.auth);

//         const handleLike = () => {
//             dispatch(handleLikeUnLikeApi(_id));
//         }


//   return (
//     <div className='post-card w-full bg-white rounded-xl'>
//         <div className="post-card-inside">


//             <div className='flex py-4 mt-2 items-center justify-between p-6'>
//                 <div className='flex gap-4 items-center'>
//                     <NavLink to={`/profile/${owner._id}`}>
//                         <img src=
//                                 {owner?.avatar?
//                                     owner.avatar 
//                                     :
//                                     'https://res.cloudinary.com/demo/image/upload/d_avatar.png/non_existing_id.png'
//                                 } 
//                         alt="Profile Pic" 
//                         className='img-hover h-10 w-10 rounded-full'/>
//                     </NavLink>
//                     <div className='flex-row'>
//                         <NavLink to={`/profile/${owner._id}`} className='text-base font-semibold hover:underline'>{owner.name}</NavLink>
//                     </div>
//                 </div>

//                 <div className='flex gap-4'>
//                     <div className='p-[.4rem] hover:bg-[#cfccccc0] rounded-full'>
//                         <PiDotsThreeOutlineFill className='icon-hover text-[1.3rem]' />
//                     </div>
//                     <div className='p-[.4rem] hover:bg-[#cfccccc0] rounded-full'>
//                         <RxCross1 className='icon-hover text-[1.3rem]' />
//                     </div>
//                 </div>
//             </div>


//             <p className='p-2'>{caption}</p>


//             {image && <hr className='bg-[black]'/>}


//             <div className="post-image">
//                 {
//                     image &&
//                         <img src={image?.url} alt="img" 
//                         className='w-full' />
//                 }
//             </div>


//             <hr className={image? "" : 'mx-6'} />


//             <div className="like-comment-container px-2 mx-2 flex justify-between">
//                 <div onClick={handleLike}
//                 className= {`icon-hover flex items-center justify-center w-1/3 py-2 my-1 hover:bg-[#00000015] rounded-md ${(likes?.includes(userData._id)) &&' text-blue-500'}`} >
//                     <BiLike className='text-2xl mx-2' />  
//                     <span className='text-lg'>Like</span>
//                 </div>
//                 <div className="icon-hover flex items-center justify-center w-1/3 py-2 my-1 hover:bg-[#00000015] rounded-md">
//                     <FaRegComment className='text-2xl mx-2' />
//                     <span className='text-lg'>Comment</span>
//                 </div>
//                 <div className="icon-hover flex items-center justify-center w-1/3 py-2 my-1 hover:bg-[#00000015] rounded-md">
//                     <FaShare className='text-2xl mx-2' />
//                     <span className='text-lg'>Share</span>
//                 </div>
//             </div>


//         </div>
//     </div>
//   )
// }

// export default PostCard;

