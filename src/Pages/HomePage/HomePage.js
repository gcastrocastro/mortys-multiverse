import {useState} from 'react';
import ParticleBackground from "../../Components/Particles/Particles"
import './HomePage.css';

export default function HomePage({user}) {
    const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleClick = () => {
    setClicked(true);
  };

  const handleDivClick = () => {
    setClicked(false);
  };

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
        <h1 className="home-title"> Morty's Multiverse</h1>
        <div
          className="robot-container"
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          <h3>{hovered ? `You show ${user.name} their current stats!` : 'What is my purpose?'}</h3>
          <img src={hovered ? 'https://i.imgur.com/TxHmKCo.png' : 'https://i.imgur.com/mrik8SS.png'} alt="Image" />
        </div>
    
        {clicked && (
          <div className="stats" onClick={handleDivClick}>
            <h2> Days since Last Rick and Morty Episode Launched: <br></br> {daysSinceLastEpisode()}</h2>  
            <h2>Number of Character's {user.name} has Favorited: <br></br> {user.favorites.length}</h2>
            <h2>Number of Character's Included so far: <br></br> </h2>
            <h2>Number of Episodes Included so far: <br></br> </h2>
          </div>
      )}
        </>
    )
}