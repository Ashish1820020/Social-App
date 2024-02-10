import React from 'react'
import SingleCommentCard from './SingleCommentCard'

const PostDetailsCommentSection = ({comments}) => {
  return (
    <div className='w-full flex flex-col'>
    {
      comments.map((comment, index) => <SingleCommentCard key={comment._id+comment.createdAt} comment={comment} />)
    }
    </div>
  )
}

export default PostDetailsCommentSection
