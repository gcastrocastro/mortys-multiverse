import EpisodeCard from '../../Components/EpisodeCard/EpisodeCard';
import './EpisodesPage.css';
import ParticleBackground from '../../Components/Particles/Particles';

export default function EpisodesPage({episodes}) {
    return (
        <>
        <ParticleBackground/>
        <section className='episode-page-container'>
            {episodes.map(episode => {
                return(
                    <EpisodeCard key={episode.id} episode={episode}/>
                )
            })}
        </section>
        </>
    )
}