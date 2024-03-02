import { BsPersonFillAdd, BsPersonFillCheck, BsPersonFillDown  } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import FriendsRequestsComponent from '../Components/Friend/FriendsRequestsComponent';
import PeopleMayKnowComponent from '../Components/Friend/PeopleMayKnowComponent';
import AllFriends from "../Components/Friend/AllFriends";
export const links = [
    {
        name: 'friend requests',
        icon: BsPersonFillAdd,
        link: 'friendrequests',
        component: FriendsRequestsComponent
    },
    {
        name: 'suggestions',
        icon: BsPersonFillCheck,
        link: 'suggestions',
        component: PeopleMayKnowComponent
    },
    {
        name: 'all friends',
        icon: FaUserFriends,
        link: 'allfriends',
        component: AllFriends
    },
]