import ParticleBackground from "../../Components/Particles/Particles"
import './HomePage.css';

export default function HomePage() {

    const daysSinceLastEpisode = () =>  {
        const lastEpisodeDate = new Date('2022-10-03');
        let today = new Date();
        const timeDiff = Math.abs(today.getTime() - lastEpisodeDate.getTime());
        var daysPassed = Math.floor(timeDiff / (1000 * 3600 * 24));
        return daysPassed;
      }

    return(
        <>
        <ParticleBackground/>
        <div className="homepage-container">
            <h1> Days since Last Rick and Morty Episode Launched: {daysSinceLastEpisode()}</h1>
        </div>
        </>
    )
}