import {Routes, Route} from 'react-router-dom';
import {useState} from 'react';
import './App.css';
import NavBar from '../../Components/NavBar/NavBar';
import AllCharacters from '../AllCharacters/AllCharacters';
import FavoritesPage from '../FavoritesPage/FavoritesPage';
import AuthPage from '../AuthPage/AuthPage';
import CharacterDetailPage from '../CharacterDetailPage/CharacterDetailPage';
import {getUser} from '../../utilities/users-service';
import HomePage from '../HomePage/HomePage';
import EpisodesPage from '../EpisodesPage/EpisodesPage';
import EpisodeDetailPage from '../EpisodeDetailPage/EpisodeDetailPage';

function App() {
  const [user, setUser] = useState(getUser());
  const [favorites, setFavorites] = useState([]);

  return (
    <div className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/characters" element={<AllCharacters user={user} favorites={favorites} setFavorites={setFavorites} />} />
            <Route path="/favorites" element={<FavoritesPage user={user} favorites={favorites} setFavorites={setFavorites} />} />
            <Route path="/episodes" element={<EpisodesPage/>} />
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
