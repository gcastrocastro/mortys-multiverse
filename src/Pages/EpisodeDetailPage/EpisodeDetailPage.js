import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import CharacterCard from '../../Components/CharacterCard/CharacterCard';
import ParticleBackground from '../../Components/Particles/Particles';
import './EpisodeDetailPage.css';

export default function EpisodeDetailPage({user, favorites, setFavorites}) {
    const { id } = useParams();
    const url = `https://rickandmortyapi.com/api/episode/${id}`
    const [episode, setEpisode] = useState([]);
    const [episodeCharacterIds, setEpisodeCharacterIds] = useState([]);
    const [episodeCharacters, setEpisodeCharacters] = useState([]);

    async function fetchEpisode() {
        try {
            const response = await fetch(url);
            const episodeData = await response.json();
            setEpisode(episodeData);
        } catch (error) {
            console.log(error);
        }
    }

    function getEpisodeCharacterIds(episode){
        let characters= [];
        characters = episode.characters.map((character) => 
        character.split('/')[5]);
        setEpisodeCharacterIds(characters);
    }

    async function fetchEpisodeCharacters() {
        const characterStr = episodeCharacterIds.join(',');
        if (episodeCharacterIds.length !== 0){
            const apiUrlEpisodeCharacters = `https://rickandmortyapi.com/api/character/${characterStr}`;
            const response = await fetch(apiUrlEpisodeCharacters);
            const characterData = await response.json();
            setEpisodeCharacters(characterData);
        }
    }

    useEffect(() => {
        fetchEpisode();
    },[]);

    useEffect(() => {
        if (episode.length !== 0){
            getEpisodeCharacterIds(episode);
        }
        fetchEpisodeCharacters();
    }, [episode]);

    return (
        <main>
            <ParticleBackground/>
            <div className="episode-info">
                <h1>{episode.episode}</h1>
                <h1>{episode.name}</h1>
                <h2>Aired On: {episode.air_date}</h2>
            </div>
            <div className="character-container">
                {episodeCharacters.map(episodechar => {
                    return (
                        <CharacterCard user={user} favorites={favorites} setFavorites={setFavorites} char={episodechar}/>
                    )
                })}
            </div>
        </main>
    )
}