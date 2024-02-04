import SidebarLinks from '../utility/SidebarLinks'
import React from 'react';

const LeftBar = () => {
  return (
    <div className='flex flex-col h-90 w-[340px] max-w-[360px] h-full md:flex'>
      
      {
        [1, 2, 3, 4].map((elem, index) => {
          return  <SidebarLinks key={index} index={index+1} />
        })
      }
    </div>
  )
}

export default LeftBar
