import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { useState } from "react";
import { useSelector } from "react-redux";



const Share = () => {

  const [file, setFile] = useState();
  const [desc, setDesc] = useState();

  const currentUser = useSelector(state => state.auth);


  return (
    <div className="border-r-2 bg-white -m-20 w-screen mx-auto py-2 px-2 text-black">
      <div className="p-20px w-full">
        <div className="flex items-center justify-center py-2">

          <div className="flex items-center flex-1">
            {/* <img src={currentUser? "/upload/" + currentUser.profilePic : ""} alt="" /> */}
            <div className="h-10 w-10 rounded-full border-solid border-black border-2 mr-3 focus:outline-none"></div>
            <input
              type="text"
              className="text-blue-500 w-3/4 h-10 bg-gray-300 rounded-3xl pl-3"
              placeholder={`What's on your mind ${currentUser && currentUser.name}?`}
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
            />
          </div>

          <div className="right">
            {file && (
              <img className="w-100px h-100px object-cover border-r-0" alt=""
               src={URL.createObjectURL(file)}
                />
            )}
          </div>
        </div>

        <hr className="border-none h-0.5px my-20px py-2"/>

        <div className="flex items-center justify-between px-4">
          <div className="flex items-center gap-5">
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor="file">
              <div className="flex items-center cursor-pointer gap-2">
                <img src={Image} alt="" className="h-7"/>
                <span className="text-12px text-black">Add Image</span>
              </div>
            </label>
            <div className="flex items-center cursor-pointer gap-2">
              <img src={Map} alt="" className="h-7"/>
              <span className="text-12px text-black">Add Place</span>
            </div>
            <div className="flex items-center cursor-pointer gap-2">
              <img src={Friend} alt="" className="h-7" />
              <span className="text-12px text-black">Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button 
            className="border-none px-3 py-1 rounded text-white cursor-pointer bg-blue-500 border-r-3px"
            // onClick={handleClick}
            >Share</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Share;
