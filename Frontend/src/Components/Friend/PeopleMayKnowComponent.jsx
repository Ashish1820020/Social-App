import Spinner from '../../Utils/Spinner';
import FriendCard from './FriendCard';
import HelperComponent from './HelperComponent';

const PeopleMayKnowComponent = ({allUsers, isLoading}) =>  <HelperComponent isLoading={isLoading} helperArray={allUsers} />

export default PeopleMayKnowComponent
