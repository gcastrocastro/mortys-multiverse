import {Link} from 'react-router-dom';
import HeartIcon from "../HeartIcon/HeartIcon";
import './CharacterCard.css';

export default function CharacterCard({user, char, favorites, setFavorites}) {
    const getBackgroundColor = () => {
        if (char.status === 'Alive') {
          return 'green';
        } else if (char.status === 'Dead') {
          return 'red';
        } else {
          return 'gray';
        }
      };

    return (
        <div className='character-card' key={char.id}>
            <span className='character-status' style={{ backgroundColor: getBackgroundColor() }}>
                {/* <span status_icon></span> */}
                <span>{char.status}</span>
            </span>
            <div className="favorite-icon">
                <HeartIcon user={user} id={char.id} favorites={favorites} setFavorites={setFavorites}/>
            </div>
            <img src={char.image} alt={char.name}/>
            <div className='character-info'>
                <Link to={`/characters/${char.id}`}>
                    <h2>{char.name}</h2>
                    <h4>Species: {char.species}</h4>
                    <h4>Origin: {char.origin.name}</h4>
                    <h4>Most Recent Location: {char.location.name}</h4>
                </Link>
            </div>
        </div>
    )
}