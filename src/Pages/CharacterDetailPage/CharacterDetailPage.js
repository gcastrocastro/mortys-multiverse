import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

export default function CharacterDetailPage(props) {
    const {id} = useParams();
    const url = `https://rickandmortyapi.com/api/character/${id}`
    const [character, setCharacter] = useState([]);

    async function fetchCharacter() {
        try {
            const response = await fetch(url);
            const charData = await response.json();
            setCharacter(charData);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchCharacter();
    },[])

    return(
        <main>
            <div>
                <img src={character.image} alt={character.name}/>
                <h2>{character.name}</h2>
            </div>
            <div>
                <h3>{character.status}</h3>
                <h3>{character.species}</h3>
                <h3>{character.gender}</h3>
            </div>
        </main>
    )
}