import {Routes, Route} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {getUser} from '../../utilities/users-service';
import NavBar from '../../Components/NavBar/NavBar';
import AllCharacters from '../AllCharacters/AllCharacters';
import FavoritesPage from '../FavoritesPage/FavoritesPage';
import AuthPage from '../AuthPage/AuthPage';
import CharacterDetailPage from '../CharacterDetailPage/CharacterDetailPage';
import HomePage from '../HomePage/HomePage';
import EpisodesPage from '../EpisodesPage/EpisodesPage';
import EpisodeDetailPage from '../EpisodeDetailPage/EpisodeDetailPage';
import './App.css';

function App() {
  const [user, setUser] = useState(getUser());
  const [favorites, setFavorites] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const apiUrlCharacters = 'https://rickandmortyapi.com/api/character';
  const apiUrlEpisodes = 'https://rickandmortyapi.com/api/episode';

    async function fetchEpisodes() {
        try {
            const response = await fetch(apiUrlEpisodes);
            const apiData = await response.json();
            let allEpisodes = [];
            for (let page_num = 1; page_num < apiData.info.pages; page_num++){
                const response = await fetch(apiUrlEpisodes + '?page=' + page_num);
                const apiData = await response.json();
                allEpisodes = [...allEpisodes, ...apiData.results];
            }
            setEpisodes(allEpisodes);
        } catch (error) {
            console.log(error);
        }
    } 

  async function fetchCharacters() {
    try {
        const response = await fetch(apiUrlCharacters);
        const apiData = await response.json();
        let allCharacters = [];
        for (let page_num = 1; page_num < apiData.info.pages; page_num++){
            const response = await fetch(apiUrlCharacters + '?page=' + page_num);
            const apiData = await response.json();
            allCharacters = [...allCharacters, ...apiData.results];
        }
        setCharacters(allCharacters);
    } catch (error) {
        console.log(error);
    }
}

useEffect(() => {
  fetchCharacters();
  fetchEpisodes();
}, []);

  return (
    <div className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/" element={<HomePage user={user} characters={characters} episodes={episodes} favorites={favorites}/>} />
            <Route path="/characters" element={<AllCharacters user={user} characters={characters} favorites={favorites} setFavorites={setFavorites} />} />
            <Route path="/favorites" element={<FavoritesPage user={user} favorites={favorites} setFavorites={setFavorites} />} />
            <Route path="/episodes" element={<EpisodesPage episodes={episodes}/>} />
            <Route path="/episodes/:id" element={<EpisodeDetailPage user={user} favorites={favorites} setFavorites={setFavorites}/>} />
            <Route path="/characters/:id" element={<CharacterDetailPage />} />
          </Routes>
        </>
        :
        <AuthPage path="/" setUser={setUser}/>
      }
    </div>
  );
}

export default App;
