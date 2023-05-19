import EpisodeCard from '../../Components/EpisodeCard/EpisodeCard';
import ParticleBackground from '../../Components/Particles/Particles';
import './EpisodesPage.css';

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