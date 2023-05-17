import { useEffect, useState } from "react";
import CharacterCard from "../../Components/CharacterCard/CharacterCard";
import ParticleBackground from "../../Components/Particles/Particles";

export default function FavoritesPage({user, favorites, setFavorites}) {
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
        <>
        <ParticleBackground/>
        <section className='character-container'>
            {currentFavorites.map(char => {
                return(
                    <CharacterCard key={char.id} char={char} user={user} favorites={favorites} setFavorites={setFavorites}/>
                )
            })}
        </section>
        </>
    )
}