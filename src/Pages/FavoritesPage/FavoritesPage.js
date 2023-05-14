import HeartIcon from "../../Components/HeartIcon/HeartIcon";
import {Link} from 'react-router-dom';
import { useEffect, useState } from "react";

export default function FavoritesPage({favorites, setFavorites}) {
    const [currentFavorites, setCurrentFavorites] = useState([]);

    async function fetchFavorites() {
        const favoritesStr = favorites.join(',');
        if (favorites.length !== 0){
            const apiUrlFaves = `https://rickandmortyapi.com/api/character/${favoritesStr}`;
            const response = await fetch(apiUrlFaves);
            const favoritesData = await response.json();
            setCurrentFavorites(favoritesData);
        }
    }

    useEffect(() => {
        fetchFavorites();
    }, [favorites]);

    return(
        <section className='character-container'>
            {currentFavorites.map(char => {
                return(
                    <div className='character-card' key={char.id}>
                        <div className="favorite-icon">
                            <HeartIcon id={char.id} favorites={favorites} setFavorites={setFavorites}/>
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
            })}
        </section>
    )
}