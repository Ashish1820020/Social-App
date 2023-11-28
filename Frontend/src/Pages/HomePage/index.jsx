import Navbar from "../../Components/Shared/Navbar";
import LeftBar from "../../Components/Home/LeftBar";
import MidBar from "../../Components/Home/MidBar";
import RightBar from "../../Components/Home/RightBar";

const HomePage = () => {
    return( 
        <div className='text-black'>
            <div className="main-content flex justify-between w-full my-20">
                <LeftBar />
                <MidBar />
                <RightBar />
            </div>
        </div>
    )
}

export default HomePage;