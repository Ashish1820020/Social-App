import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreatePostCard from "../utility/CreatePostCard";
import { setEnableCreatePost } from "../../Store/slices/utils"; 


const CreatePost = () => {

  const dispatch =  useDispatch();
  const { userData } = useSelector(state => state.auth);


  return (
    // border border-solid border-black border-r-2
    <div className="share-card rounded-lg bg-white w-full mx-auto py-2 px-2 text-black">
      <div className="p-20px w-full">


        <div className="flex-row items-center justify-center py-2">
          <div className="flex items-center flex-1">
            <div className="img-hover h-10 w-10 rounded-full border-solid border-black border-2 mr-3 focus:outline-none">
              <img src={userData.avatar} alt="" className="rounded-full h-full w-full" />
            </div>
            <input
              type="text"
              className="text-blue-500 w-3/4 h-10 bg-gray-300 rounded-3xl pl-3"
              placeholder={`What's on your mind ${userData && userData.name}?`}
              onChange={(e) => setDesc(e.target.value)}
              onClick={() => dispatch(setEnableCreatePost())}
            />
          </div>
        </div>

        <hr className="my-4"/>

        <div className="flex items-center justify-between px-4">
          <div className="flex items-center justify-between gap-5 w-full">
            
            <div className="flex items-center justify-center
            p-2 cursor-pointer gap-2 w-1/3"
            onClick={() => dispatch(setEnableCreatePost())}>
              <img src={Image} alt="" className="h-7"/>
              <span className="text-12px text-black">Add Image</span>
            </div>

            <div className="flex items-center justify-center p-2 cursor-pointer gap-2 w-1/3">
              <img src={Map} alt="" className="h-7"/>
              <span className="text-12px text-black">Add Place</span>
            </div>

            <div className="flex items-center justify-center p-2 cursor-pointer gap-2 w-1/3">
              <img src={Friend} alt="" className="h-7" />
              <span className="text-12px text-black">Tag Friends</span>
            </div>
          </div>

          {/* <div className="right">
            <button 
              className="border-none px-3 py-1 rounded text-white cursor-pointer bg-blue-500 border-r-3px"
            // onClick={handleClick}
            >Share</button>
          </div> */}

        </div>
      </div>
    </div>
  )
}

export default CreatePost;