import React from 'react';
import { FaCamera } from "react-icons/fa";

const ProfileCoverImage = ({setCoverImgFile, previewCoverImg, setPreviewCoverImg}) => {

  const handleCoverImgSelect = (e) => {
    setPreviewCoverImg(URL.createObjectURL(e.target.files[0]))
    setCoverImgFile(e.target.files[0])
  }

  return (
    <form action="put" encType="multipart/form-data"  className='cover-image w-full img-hover h-96 border-blue-800 border-2 rounded-lg p-2'>
      <div className="cover-image-inside w-full h-full relative">


        <img src={previewCoverImg && previewCoverImg} 
          alt="Cover Image" className='h-full w-full rounded-xl object-fit' />


        <input
          type="file"
          id="file1"
          name='file'
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleCoverImgSelect}
          />

        <label className="add-cover-pic-button bg-white w-fit px-3 p-2 rounded-lg absolute right-2 bottom-2 hover: cursor-pointer"
          htmlFor='file1'>
          <div className="add-cover-pic-button-inside flex items-center gap-3">
            
            <div className="">
              <FaCamera className='icon text-[1rem]' />
            </div>
            
            <span className="text-[1rem]">
              {previewCoverImg? "Edit cover photo": 'Add cover photo'}
            </span>

          </div>
        </label>


      </div>
    </form>
  )
}

export default ProfileCoverImage
