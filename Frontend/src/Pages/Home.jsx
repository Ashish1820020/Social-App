import Navbar from "../Components/Shared/Navbar";
import LeftBar from "../Components/Home/LeftBar";
import MidBar from "../Components/Home/MidBar";
import RightBar from "../Components/Home/RightBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPostsApi } from "../Store/api/postApi";
import axios from "axios";
import CreatePostCard from "../Components/utility/CreatePostCard";

const HomePage = () => {
    const {isLoggedIn, userData, isLoading} = useSelector(state => state.auth);
    const { enableCreatePost } = useSelector(state => state.utilsSlice);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPostsApi());
    }, []);
    
    return( 
        <div className=' home text-black border-solid w-full h-full px-2'>
            <div className=" home-inside flex justify-center w-full my-6">
                <LeftBar />
                <MidBar />
                <RightBar />
            </div>
            
            {/* {
                enableCreatePost?
                    <CreatePostCard />
                    :
                    <></>
            } */}
        </div>
    )
}

export default HomePage;