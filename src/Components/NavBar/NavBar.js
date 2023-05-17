import {Link} from 'react-router-dom';
import './NavBar.css';
import * as userService from '../../utilities/users-service';
import AudioPlayer from '../AudioPlayer/AudioPlayer';

export default function NavBar({user, setUser}){
    function handleLogout() {
        userService.logOut();
        setUser(null);
    }

    return(
        <nav>
            {user && <Link to="/"><h2>&nbsp; Welcome, {user.name}</h2></Link>}
            <Link to ="/characters"> Explore All Characters </Link>
            <Link to ="/favorites"> Your Favorites </Link>
            <Link to="/" onClick={handleLogout}>Log Out</Link>
            <AudioPlayer/>
        </nav>
    )
}