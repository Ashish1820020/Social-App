import React, { useEffect, useRef, useState } from 'react'
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from 'react-redux';
import { setEnableCreatePost } from "../../Store/slices/utils"; 
import Friend from "../../assets/friend.png";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import { addNewPostApi } from '../../Store/api/postApi';

const CreatePostCard = () =>{
 
    const dispatch = useDispatch();
    const [file, setFile] = useState(null);
    const [desc, setDesc] = useState("");
    const { userData } = useSelector(state => state.auth);

 
  const handleClick = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('caption', desc);
    myForm.append('image', file);
    console.log(myForm);
    dispatch(addNewPostApi(myForm))
  }


  return (
    <div className= "absolute h-full w-full top-0 right-0 flex justify-center items-center bg-[#00000028] z-10">
        <form action="post" encType="multipart/form-data"  className='h-fit w-[36rem] bg-white border-2  rounded-3xl shadow-md'>
            <div className='flex-row p-4'>

                <div className='flex justify-between items-center text-center py-2 text-2xl font-semibold text-slate-900'>
                    <p className='w-[100%]'>Create Post</p>   
                    <div className='w-[10%] icon-hover icon' onClick={() => dispatch(setEnableCreatePost())}>
                        <div className='flex items-center justify-center p-2 h-8 w-8 bg-[#8080806e] rounded-full'>
                            <ImCross className='h-6 w-6' />
                        </div>
                    </div>
                </div>
                <hr />

                <div className='flex py-2 mt-2 gap-4 items-center'>
                    <img src={userData.avatar} alt="" className='img-hover h-12 w-12 border-black border-2 rounded-full'/>
                    <div className='flex-row'>
                        <p className= 'text-lg'>{userData.name}</p>
                        <div className= "bg-red p-1">
                            <select name="" id="" className='border-none outline-none text-lg'>
                                <option value="">Public</option>
                                <option value="">Friends</option>
                                <option value="">Only me</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='py-2'>
                        <textarea cols="30" rows="3" className='w-full text-xl p-2 border-none outline-none' placeholder="What's on your mind?"></textarea>
                    </div>
                    {file &&
                        <div className="selected-img my-4 rounded-md border-black border-2">
                            <img className="w-100px h-100px object-cover border-r-0" alt=""
                                src={URL.createObjectURL(file)}
                            />
                        </div>
                    }
                </div>




                <div className="flex items-center justify-center p-4 border-2 border-black border-dotted rounded-lg">
                    <div className="flex items-center gap-10">

                        <div className="file-select">
                            <input
                            type="file"
                            id="file1"
                            name='file'
                            accept="image/*"
                            style={{ display: "none" }}
                            onChange={(e) => setFile(e.target.files[0])}
                            />
                            
                            <label htmlFor="file1">
                                <div className="flex items-center cursor-pointer gap-2">
                                    <img src={Image} alt="" className="h-7"/>
                                    <span className="text-12px text-black">Add Image</span>
                                </div>
                            </label>
                        </div>

                        <div className="flex items-center cursor-pointer gap-2">
                            <img src={Map} alt="" className="h-7"/>
                            <span className="text-12px text-black">Add Place</span>
                        </div>

                        <div className="flex items-center cursor-pointer gap-2">
                            <img src={Friend} alt="" className="h-7" />
                            <span className="text-12px text-black">Tag Friends</span>
                        </div>
                    </div>
                </div>





                <div className="w-full flex justify-center py-6">
                    <button onClick={handleClick}
                    className='text-xl rounded-md bg-[#3578E5] text-white w-full py-2'>
                        Post
                    </button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default CreatePostCard
