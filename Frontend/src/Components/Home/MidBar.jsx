import CommonLoading from "../Loaders/CommonLoaders";
import Share from "../SharePost/Share";
import Stories from "./Stories";
import PostCard from "../Posts/PostCard";
import { useDispatch, useSelector } from "react-redux";
import PostLoader from "../../Utils/PostLoader";
import { getPostsApi } from "../../Store/api/postApi";
import { useEffect } from "react";
import PostsContainerComponent from "./PostsContainerComponent";

const MidBar = () => {
  const { isLoading, allPosts, isError } = useSelector(state => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getPostsApi());
  }, []);


  return (
    
    <div className="mid-bar w-[840px] max-w-[850px] px-[2rem]  border-solid md:flex">
        <div className="mid-inside h-full flex flex-col w-full p-2">
          <Share from='home' />

          <PostLoader isLoading={isLoading}>
            <PostsContainerComponent allPosts={allPosts} />
          </PostLoader>
        </div>
      </div>
  )
}

export default MidBar;
