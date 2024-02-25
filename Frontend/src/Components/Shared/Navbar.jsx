import React, { useEffect, useRef, useState } from "react";
import {
  MdNotificationsActive,
  MdMessage,
  MdLightMode,
  MdDarkMode,
  MdSearch,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import Logo from "../../assets/SocialEcho.png";
import { useDispatch, useSelector } from "react-redux";
import { logoutApi, searchUserWithNameApi } from "../../Store/api/authApi";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { userData } = useSelector(state => state.auth);
  const [profileMenu, setProfileMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchData, setSearchData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [searchBarText, setSearchBarText] = useState("");
  const [suggestionBar, setSuggestionBar] = useState(false);
  const refOne = useRef(null);

  
  const mode = "light";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOutsideClick = (e) => {
    if (refOne && !refOne?.current?.contains(e.target)) {
      setSuggestionBar(false);
    }
  };

  const searchForUser = async () => {
    setIsLoading(true);
    try {
      const { data } = await searchUserWithNameApi(searchBarText)
      console.log(data);
      setSearchData(data);
    } catch (error) {
      setIsError(true);
    }
    finally{
      setIsLoading(false);
    }
  }

  const removeFromSearchResult = (userId) => {
    const result = searchData.filter((user) => (user._id !== userId))
    setSearchData(result);
  }


  const clickOnUserSearch = () => {
    setSearchData([])
    setSearchBarText("")
  }

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      searchBarText.length > 0 && searchForUser()
    }, 2000)

    return () => clearTimeout(delayDebounceFn)
  }, [searchBarText])

  return (
    <div className="shadow bg-white flex items-center justify-between px-5 h-16">

      <NavLink to={'/home'}>
        <div className="left flex flex-col text-center justify-center">
          <img className="w-36 h-5" src={Logo} />
        </div>
      </NavLink>

      <div className="search-bar-container relative" ref={refOne}>
        
        <div className="h-10 text-black py-1 bg-gray-50 border w-full hidden sm:flex items-center justify-between rounded-full text-sm shadow-sm focus:shadow-outline-blue focus:border-blue-500 transition duration-300 pl-5 pr-5 md:w-[420px] lg:w-[660px] ">
          <input type="text" placeholder="search for peoples" className="bg-gray-50 focus:outline-none md:w-[400px]" 
            name="search" value={searchBarText} onChange={(e) => setSearchBarText(e.target.value)} />
          <MdSearch className="text-xl cursor-pointer" />
        </div>

        {searchData.length > 0  &&
          <div className="search-result-container bg-white max-h-[30rem] w-[41rem] absolute shadow-sm shadow-[#949191] z-50">
            <div className="search-result-container-inside p-2 overflow-y-auto rounded-lg">
              {
                searchData && searchData.length > 0 &&
                searchData.map((user) => {
                  return (
                    <div className="search-result-card w-full bg-white rounded-md">
                      <div className="search-result-card-inside flex justify-between items-center py-2 px-2 hover:bg-[#f0eeee]">
                        <NavLink to={`/profile/${user._id}`} key={user._id}>
                          <div className="flex items-center w-[560px]" onClick={clickOnUserSearch}>
                            <img src={user.avatar} alt="avatar" className="w-[2rem] object-fit rounded-full h-[2rem]"/>
                            <p className="text-black font-semibold ml-[1.45rem]">{user.name}</p>
                          </div>
                        </NavLink>
                        <RxCross1 className="icon-hover w-[2rem] h-[2rem] hover:bg-[#cecdcd] rounded-full p-2" onClick={() => removeFromSearchResult(user._id)}/>
                      </div>
                    </div>
                  );
                })
              }
            </div>
          </div>
        }
      </div>

      <div className="flex flex-column items-center text-xl">
        {mode === "light" ? (
          <MdDarkMode className="mx-4 cursor-pointer" />
        ) : (
          <MdLightMode className="mx-4 cursor-pointer" />
        )}
        <MdMessage className="mx-2 text-xl cursor-pointer" />
        <MdNotificationsActive className="mx-4 cursor-pointer" />
        <div className="profile-pic h-[32px] w-[32px] rounded-full relative" onClick={() => setProfileMenu(!profileMenu)}>
          <div className='flex items-center gap-3  h-[32px] w-[32px] hover:bg-[#80808028] rounded-full overflow-hidden'>
            <img src={userData.avatar} alt="" className='img-hover  h-[32px] w-[32px] rounded-full'/>
          </div>
          <div className={`w-[8rem] absolute ${profileMenu? 'top-4' : 'top-[-1000px] none'} left-[-7rem] p-4 py-6 z-50`}>
            <button onClick={() => navigate(`/profile/${userData._id}`)}
            className="px-2 py-2 w-full hover:bg-[#a39f9f2f] hover:text-white text-2xl font-body bg-white">
              profile
            </button>


            <button 
            className="px-2 py-2 w-full hover:bg-[#a39f9f27] hover:text-white text-2xl font-body bg-white"
            onClick={() =>{
              dispatch(logoutApi())
              navigate('/')
            }}>logout</button>

            <button 
            className="px-2 py-2 w-full hover:bg-[#a39f9f36] hover:text-white text-2xl font-body bg-white">others</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
