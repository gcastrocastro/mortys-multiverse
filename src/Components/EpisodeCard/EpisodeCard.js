import {Link} from 'react-router-dom';
import './EpisodeCard.css';

export default function EpisodeCard ({episode}) {
    return (
        <Link to ={`/episodes/${episode.id}`}>
            <div className="episode-card-container">
                <h1>{episode.episode}</h1>
                <h2>{episode.name}</h2>
                <h3>{episode.air_date}</h3>
            </div>
        </Link>
    )
}