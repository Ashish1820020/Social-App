import CreatePostCard from "../utility/CreatePostCard";
import CommonLoading from "../Loaders/CommonLoaders";
import Share from "../SharePost/Share";
import Stories from "./Stories";
import PostCard from "../Posts/PostCard";
import { useSelector } from "react-redux";
import PostLoader from "../../Utils/PostLoader";

const MidBar = () => {

    
  const { isLoading, allPosts, isError } = useSelector(state => state.posts);

  return (
    
    <div className="mid-bar w-[840px] max-w-[850px] px-[2rem]  border-solid md:flex">
        <div className="mid-inside h-full flex flex-col w-full p-2">
          {/* <Stories/> */}
          <Share />

          <PostLoader isLoading={isLoading}>
            {
              allPosts?.map((elem) => {
                return <PostCard key={elem._id} {...{elem}}/>
              })
            }
          </PostLoader>
        </div>
      </div>
  )
}

export default MidBar;
