import {Link} from 'react-router-dom';
import './NavBar.css';

export default function NavBar(){
    return(
        <nav>
            <Link to ="/characters"> Explore All Characters </Link>
            &nbsp; | &nbsp;
            <Link to ="/favorites"> Your Favorites </Link>
        </nav>
    )
}