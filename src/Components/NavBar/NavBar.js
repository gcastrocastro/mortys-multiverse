import {Link} from 'react-router-dom';

export default function NavBar(){
    return(
        <nav>
            <Link to ="/characters"> Explore all characters </Link>
            &nbsp; | &nbsp;
            <Link to ="/favorites"> Your Favorites </Link>
        </nav>
    )
}