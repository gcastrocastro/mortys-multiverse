import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './AllCharacters.css';

export default function AllCharacters() {
    const [characters, setCharacters] = useState([]);
    const apiUrlChars = 'https://rickandmortyapi.com/api/character';

    async function fetchCharacters() {
        try {
            const response = await fetch(apiUrlChars);
            const apiData = await response.json();
            let allCharacters = [];
            for (let page_num = 1; page_num < apiData.info.pages; page_num++){
                const response = await fetch(apiUrlChars + '?page=' + page_num);
                const apiData = await response.json();
                allCharacters = [...allCharacters, ...apiData.results];
            }
            setCharacters(allCharacters);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchCharacters()
    }, []);

    return(
        <section className='character-container'>
            {characters.map(char => {
                return(
                    <Link to={`/characters/${char.id}`} key={char.id}>
                        <div className='character-card'>
                            <img src={char.image} alt={char.name}/>
                            <div className='character-info'>
                                <h2>{char.name}</h2>
                                <h4>Species: {char.species}</h4>
                                <h4>Origin: {char.origin.name}</h4>
                                <h4>Most Recent Location: {char.location.name}</h4>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </section>
    )
}