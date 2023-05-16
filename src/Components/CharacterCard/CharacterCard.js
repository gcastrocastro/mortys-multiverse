import {Link} from 'react-router-dom';
import HeartIcon from "../HeartIcon/HeartIcon"

export default function CharacterCard({user, char, favorites, setFavorites}) {
    return (
        <div className='character-card' key={char.id}>
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