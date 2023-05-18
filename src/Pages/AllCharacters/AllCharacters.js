import {useEffect} from 'react';
import './AllCharacters.css';
import {getFavorites} from '../../utilities/users-service';
import CharacterCard from '../../Components/CharacterCard/CharacterCard';
import ParticleBackground from '../../Components/Particles/Particles';

export default function AllCharacters({characters, user, favorites, setFavorites}) {

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