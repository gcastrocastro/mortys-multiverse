import {Routes, Route} from 'react-router-dom';
import {useEffect, useState} from 'react';
import './App.css';
import NavBar from '../../Components/NavBar/NavBar';
import AllCharacters from '../AllCharacters/AllCharacters';
import FavoritesPage from '../FavoritesPage/FavoritesPage';
import AuthPage from '../AuthPage/AuthPage';
import CharacterDetailPage from '../CharacterDetailPage/CharacterDetailPage';

function App() {
  const [user, setUser] = useState({});
  const [favorites, setFavorites] = useState([]);

  return (
    <div className="App">  
      { user ?
        <>
          <NavBar/>
          <Routes>
            <Route path="/characters" element={<AllCharacters favorites={favorites} setFavorites={setFavorites} />} />
            <Route path="/favorites" element={<FavoritesPage favorites={favorites} setFavorites={setFavorites} />} />
            <Route path="/characters/:id" element={<CharacterDetailPage />} />
          </Routes>
        </>
        :
        <AuthPage path="/"/>
      }
    </div>
  );
}

export default App;
