import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './CharacterDetailPage.css';
import ParticlesBackground from '../../Components/Particles/Particles';

export default function CharacterDetailPage(props) {
    const {id} = useParams();
    const url = `https://rickandmortyapi.com/api/character/${id}`
    const [character, setCharacter] = useState([]);
    const [episodes, setEpisodes] = useState([]);

    async function fetchCharacter() {
        try {
            const response = await fetch(url);
            const charData = await response.json();
            setCharacter(charData);
        } catch (error) {
            console.log(error);
        }
    }

    function getEpisodes(character) {
        let episodes = [];
        episodes = character.episode.map((episode) => 
        episode.split('/')[5]);
        setEpisodes(episodes);
    }

    useEffect(() => {
        fetchCharacter();
    },[])

    useEffect(() => {
        if (character.length !== 0){
            getEpisodes(character);
        }
    }, [character]);

    return(
        <>
        <ParticlesBackground />
        <main className='character-detail-main'>
            <div className="character-detail-info">
                <img src={character.image} alt={character.name}/>
                <h2>{character.name}</h2>
                {character.type && <h3>Type: {character.type}</h3>}
                <h3>Species: {character.species}</h3>
                <h3>Gender: {character.gender}</h3>
            </div>
            <div className="episode-container">
                <h2>Episodes This Character Appears In:</h2>
                <div className="character-episodes">
                    {episodes.map( episode => {
                        return (
                            <div key={episode}> Episode {episode}</div>
                        )
                    })}
                </div>
            </div>
        </main>
        </>
    )
}