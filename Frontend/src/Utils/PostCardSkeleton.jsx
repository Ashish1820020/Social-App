import { Skeleton } from 'antd'
import React from 'react'

const PostCard = () => {
  return (
    <div style={{  display: 'flex', flexDirection: 'column', width: 782, height: 1000, left: 0}}>
      {
         Array(10).fill().map(() => {
          return (
            <div style={{  display: 'block', width: '100%', padding: 25, height: 1000, left: 0}}> 
              <h4></h4> 
              <Skeleton avatar paragraph={{ rows: 2 }} /> <br /> 
              <Skeleton active />  <br /> 
            </div> 
          )
         })
      }
    </div>
  )
}

export default PostCard
