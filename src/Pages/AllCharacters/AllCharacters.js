import {useState, useEffect} from 'react';

export default function AllCharacters({apiUrl}) {
    const [characters, setCharacters] = useState([]);

    async function fetchCharacters() {
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character');
            const characterData = await response.json();
            console.log(characterData.results);
            setCharacters(characterData.results);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchCharacters()
    }, []);

    return(
        <section>
            <h1>AllCharactersPage</h1>
            {characters.map(char => {
                return(
                    <div className='character-card'>
                        <img src={char.image} alt={char.name}/>
                        <div className='character-info'>
                            <h3>Name: {char.name}</h3>
                            <h4>Species: {char.species}</h4>
                            <h4>Origin: {char.origin.name}</h4>
                            <h4>Most Recent Location: {char.location.name}</h4>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}