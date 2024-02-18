import ProfileDataAndPostsComponent from "../Components/Profile Page/ProfileDataAndPostsComponent";
import ProfileComponent from "../Components/Profile Page/ProfileComponent";
import ProfileCoverImage from "../Components/Profile Page/CoverImage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUserPostApi } from '../Store/api/postApi';
import { getUserProfileData, updateUserProfileApi } from "../Store/api/authApi";
import { useLocation } from "react-router-dom";
import Spinner from "../Utils/Spinner";
import PostDetailsContainer from "../Components/Posts/PostDetailsContainer";

const ProfilePage = () => {

    const { userData } = useSelector(state => state.auth);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ detailedPost, setDetailedPost ] = useState(null);
    const [ userProfileData, setUserProfileData ] = useState(null);
    const [ isError, setIsError ] = useState(false);
    const dispatch = useDispatch();

    const [coverImgFile, setCoverImgFile] = useState(null);
    const [profileImgFile, setProfileImgFile] = useState(null);
    const [previewProfileImg, setPreviewProfileImg] = useState(null);
    const [previewCoverImg, setPreviewCoverImg] = useState(null);
    const location = useLocation();


    const handleClick = (e) => {
      e.preventDefault();
      const myForm = new FormData();
      if(coverImgFile)
        myForm.append('coverImg', coverImgFile);
      if(profileImgFile)
        myForm.append('avatar', profileImgFile);

      dispatch(updateUserProfileApi(myForm));
      setCoverImgFile(null);
      setProfileImgFile(null);
    }

    useEffect(() => {
        const profileId = location.pathname.split('/')[2]
        const fetchProfileData = async () => {
            setIsLoading(true);
            try {
                const data = await getUserProfileData(profileId)
                setPreviewCoverImg(data?.coverImage);
                setPreviewProfileImg(data?.avatar);
                setUserProfileData(data);
            } catch (error) {
                console.log(error);
                setIsError(true)
            }
            finally{
                setIsLoading(false);
            }

        }
        fetchProfileData();
    }, []);

    return( 
        <>
            {
                (coverImgFile || profileImgFile) &&
                <div className="flex justify-between items-center w-full h-14 bg-[#00000048] absolute z-10">
                    <p className="mx-4 text-lg">Your cover photo is public</p>
                    <div className="flex gap-4 h-9 mx-4">
                        <button className="bg-[#8080806e]  px-6 p-2 rounded-lg text-white">Cancel</button>
                        <button
                         onClick={handleClick}
                         className="bg-blue-500 px-6 p-2 rounded-lg text-white">
                            Save changes
                        </button>
                    </div>
                </div>
            }
            <Spinner isLoading={isLoading}>
                {
                    isError? 
                    <div>Error occurred</div>
                    :
                    userProfileData &&
                    <div className="profile-page flex items-center justify-center w-full">
                        <div className="flex flex-col gap-8 profile-page-inside w-[1400px] my-10">
                            <ProfileCoverImage {...{setCoverImgFile, previewCoverImg, setPreviewCoverImg}} />
                            <ProfileComponent {...{setProfileImgFile, previewProfileImg, setPreviewProfileImg, userProfileData}} />
                            <ProfileDataAndPostsComponent {...{detailedPost, setDetailedPost}} />
                        </div>
                    </div>
                }

                {
                    detailedPost?
                        <PostDetailsContainer postDetails={detailedPost} />
                    :
                        <></>
                }
            </Spinner>
        </>
    )
}

export default ProfilePage;