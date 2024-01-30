import ProfileDataAndPostsComponent from "../Components/Profile Page/ProfileDataAndPostsComponent";
import ProfileComponent from "../Components/Profile Page/ProfileComponent";
import ProfileCoverImage from "../Components/Profile Page/CoverImage";
import { useSelector } from "react-redux";

const ProfilePage = () => {
    
    const { userData } = useSelector(state => state.auth);

    return( 
        <div className="profile-page flex items-center justify-center w-full">
            <div className="flex flex-col gap-4 profile-page-inside w-[1400px] border-black border-2 my-10">
                <ProfileCoverImage coverImage={userData.avatar} />
                <ProfileComponent userData={userData} />
                <ProfileDataAndPostsComponent />
            </div>
        </div>
    )
}

export default ProfilePage;