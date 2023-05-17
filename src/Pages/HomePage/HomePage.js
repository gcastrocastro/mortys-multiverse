import ParticleBackground from "../../Components/Particles/Particles"
import './HomePage.css';

export default function HomePage() {
    return(
        <>
        <ParticleBackground/>
        <div className="homepage-container">
            <h1> Days since Last Rick and Morty Episode Launched: </h1>
        </div>
        </>
    )
}