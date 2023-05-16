import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './AllCharacters.css';
import HeartIcon from '../../Components/HeartIcon/HeartIcon';
import {getFavorites} from '../../utilities/users-service';

export default function AllCharacters({user, favorites, setFavorites}) {
    const [characters, setCharacters] = useState([]);
    const apiUrl = 'https://rickandmortyapi.com/api/character';

    async function fetchCharacters() {
        try {
            const response = await fetch(apiUrl);
            const apiData = await response.json();
            let allCharacters = [];
            for (let page_num = 1; page_num < apiData.info.pages; page_num++){
                const response = await fetch(apiUrl + '?page=' + page_num);
                const apiData = await response.json();
                allCharacters = [...allCharacters, ...apiData.results];
            }
            setCharacters(allCharacters);
        } catch (error) {
            console.log(error);
        }
    }

    async function getFavesForHearts(user) {
        let userId = user._id;
        const favesForHearts = await getFavorites(userId);
        const keyIds = [];
        for (let i = 0; i < favesForHearts.length; i++) {
            const keyid = favesForHearts[i].id;
            keyIds.push(keyid);
        }
        setFavorites(keyIds);
    }

    useEffect(() => {
        fetchCharacters();
        getFavesForHearts(user);
    }, []);

    return(
        <section className='character-container'>
            {characters.map(char => {
                return(
                    <div className='character-card' key={char.id}>
                        <div className="favorite-icon">
                            <HeartIcon id={char.id} user={user} favorites={favorites} setFavorites={setFavorites}/>
                        </div>
                        <img src={char.image} alt={char.name}/>
                        <div className='character-info'>
                            <Link to={`/characters/${char.id}`}>
                                <h2>{char.name}</h2>
                                <h4>Species: {char.species}</h4>
                                <h4>Origin: {char.origin.name}</h4>
                                <h4>Most Recent Location: {char.location.name}</h4>
                            </Link>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}