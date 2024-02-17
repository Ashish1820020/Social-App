import React from 'react'
import { Skeleton, Spin } from 'antd'; 
import PostCard from './PostCardSkeleton';

const PostLoader = (props) => {
  return (
    <Spin
    className=''
    indicator={<PostCard />}
    spinning={props.isLoading}
    delay={props.delay ? props.delay : 0}
    >
      {props.children}
    </Spin>
  )
}

export default PostLoader
