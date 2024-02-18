import React, { useState } from 'react'
import PostsDetails from './PostsDetails';
import { RxCross1 } from "react-icons/rx";
import PostDetailsCommentSection from './PostDetailsCommentSection';
import { setDetailedPost } from "../../Store/slices/PostSlice";
import { useDispatch, useSelector } from 'react-redux';
import { commentOnPostApi } from '../../Store/api/postApi';
import PostCommentInput from './PostCommentInput';

const PostDetailsContainer = ({postDetails}) => {
    const dispatch = useDispatch();
    const { userData } = useSelector(state => state.auth);
    const { detailedPost } = useSelector(state => state.posts);
    const { _id, caption, comments, image, likes, owner } = postDetails? postDetails : detailedPost;

  return (
    <div className='detailed-post-container fixed h-full w-full z-10 top-0 left-0 border-black border-2 bg-[rgba(0,0,0,0.3)]'>
        <div className='detailed-post-container-inside flex justify-center items-center h-full w-full'>
            
            <div className='detailed-post-card max-w-[700px] w-[800px] h-[94%] bg-white rounded-[8px] relative'>
                <div className='detailed-post-card-inside h-full relative rounded-[8px]'>


                    {/* DETAILED POST TOP */}
                    <div className='post-details-top sticky top-0 left-0 bg-white w-full h-[60px] border-2 border-b-2'>
                        <div className='flex justify-between items-center w-full h-full'>
                            <div className='h-[60px] w-[60px] mx-[16px]'></div>

                            <div><p className='text-[20px] font-bold'>TechDesign.Live's post</p></div>

                            <div onClick={() => dispatch(setDetailedPost(null))}
                            className='flex items-center justify-center h-[60px] w-[60px]'>
                                <div className='p-[.6rem] bg-[#cfccccc0] rounded-full mx-[16px] hover:bg-[#cfcccc79]'>
                                    <RxCross1 className='icon-hover text-[1rem] font-bold' />
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* DETAILED POST MAIN SECTION */}
                    <div className='post-details-mid my-1'>
                        <div className='post-details-mid-inside'>
                            <PostsDetails {...{ ...detailedPost, userData, dispatch }} />
                            <PostDetailsCommentSection comments={comments}/>
                        </div>
                    </div>


                    {/* DETAILED POST COMMENT SECTION */}
                    <PostCommentInput {...{_id, userData, dispatch, commentOnPostApi}} />


                </div>
            </div>

        </div>
    </div>
  )
}

export default PostDetailsContainer;





