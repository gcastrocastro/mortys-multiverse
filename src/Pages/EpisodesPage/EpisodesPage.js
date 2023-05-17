import {useState, useEffect} from 'react';
import EpisodeCard from '../../Components/EpisodeCard/EpisodeCard';
import './EpisodesPage.css';

export default function EpisodesPage() {
    const [episodes, setEpisodes] = useState([]);
    const apiUrl = 'https://rickandmortyapi.com/api/episode';

    async function fetchEpisodes() {
        try {
            const response = await fetch(apiUrl);
            const apiData = await response.json();
            let allEpisodes = [];
            for (let page_num = 1; page_num < apiData.info.pages; page_num++){
                const response = await fetch(apiUrl + '?page=' + page_num);
                const apiData = await response.json();
                allEpisodes = [...allEpisodes, ...apiData.results];
            }
            setEpisodes(allEpisodes);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchEpisodes();
    }, []);

    return (
        <section className='episode-page-container'>
            {episodes.map(episode => {
                return(
                    <EpisodeCard key={episode.id} episode={episode}/>
                )
            })}
        </section>
    )
}