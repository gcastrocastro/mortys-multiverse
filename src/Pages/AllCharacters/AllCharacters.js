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

    const loaded = () => {
        return (
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

    const loading = () => {
        return (
            <div className="loading-container">
                <ParticleBackground/>
                <img className="loading-img" src="https://i.vimeocdn.com/video/714420464-f196a6e7c9e848632ed8d433cfd4b5ec973eadc122b85900d76a04211a3544a2-d" alt="morty-logo"/>
                <h1>Loading Characters...</h1>
            </div>
        )
    }

    return(
        characters.length !==0 ? loaded() : loading()
    )
}