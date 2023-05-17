import {useState, useEffect} from 'react';
import './AllCharacters.css';
import {getFavorites} from '../../utilities/users-service';
import CharacterCard from '../../Components/CharacterCard/CharacterCard';
import ParticleBackground from '../../Components/Particles/Particles';

export default function AllCharacters({user, favorites, setFavorites}) {
    const [characters, setCharacters] = useState([]);
    const apiUrl = 'https://rickandmortyapi.com/api/character';

    async function fetchCharacters() {
        try {
            const response = await fetch(apiUrl);
            const apiData = await response.json();
            let allCharacters = [];
            for (let page_num = 1; page_num < apiData.info.pages; page_num++){
                const response = await fetch(apiUrl + '?page=' + page_num);
                const apiData = await response.json();
                allCharacters = [...allCharacters, ...apiData.results];
            }
            setCharacters(allCharacters);
        } catch (error) {
            console.log(error);
        }
    }

    async function getFavesForHearts(user) {
        let userId = user._id;
        const favesForHearts = await getFavorites(userId);
        const keyIds = [];
        for (let i = 0; i < favesForHearts.length; i++) {
            const keyid = favesForHearts[i].id;
            keyIds.push(keyid);
        }
        setFavorites(keyIds);
    }

    useEffect(() => {
        fetchCharacters();
        getFavesForHearts(user);
    }, []);

    return(
        <>
        <ParticleBackground/>
        <section className='character-container'>
            {characters.map(char => {
                return(
                    <CharacterCard key={char.id} user={user} char={char} favorites={favorites} setFavorites={setFavorites}/>
                )
            })}
        </section>
        </>
    )
}