import Navbar from "../Components/Shared/Navbar";
import LeftBar from "../Components/Home/LeftBar";
import MidBar from "../Components/Home/MidBar";
import RightBar from "../Components/Home/RightBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getPostsApi } from "../Store/api/postApi";
import axios from "axios";
import CreatePostCard from "../Components/utility/CreatePostCard";
import PostDetailsContainer from "../Components/Posts/PostDetailsContainer";
import { setDetailedPost } from "../Store/slices/PostSlice";
import Spinner from "../Utils/Spinner";

const HomePage = () => {
    const auth = useSelector(state => state.auth);
    const { enableCreatePost } = useSelector(state => state.utilsSlice);
    const { detailedPost, isLoading } = useSelector(state => state.posts);
    // console.log(detailedPost);
    // const [detailedPost, setDetailedPost] = useState(null);
    
    console.log("home");
    console.log(auth.isLoggedIn, auth.userData);
    
    
    return( 
        <Spinner isLoading={auth.isLoading}>
            <div className='home text-black border-solid w-full h-full px-2 my-6'>
                <div className={`home-inside flex justify-center w-full ${enableCreatePost? 'overflow-hidden max-h-[calc(100vh-6rem)]' : ''}`}>
                    <LeftBar />
                    <MidBar {...{detailedPost, setDetailedPost}} />
                    <RightBar />
                </div>

                
                {
                    detailedPost?
                        <PostDetailsContainer detailedPost={detailedPost} />
                    :
                        <></>
                }
            </div>
        </Spinner>
    )
}

export default HomePage;