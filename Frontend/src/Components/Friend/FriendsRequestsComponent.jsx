import Spinner from "../../Utils/Spinner"
import HelperComponent from "./HelperComponent"



const FriendsRequestsComponent = ({friendRequests, isLoading}) =>{
    console.log('====================================');
    console.log("Friend requests");
    console.log('====================================');
    return <HelperComponent isLoading={isLoading} helperArray={friendRequests}/>
}

export default FriendsRequestsComponent
