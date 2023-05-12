import {Routes, Route} from 'react-router-dom';
import {useState} from 'react';
import './App.css';
import NavBar from '../../Components/NavBar/NavBar';
import AllCharacters from '../AllCharacters/AllCharacters';
import FavoritesPage from '../FavoritesPage/FavoritesPage';
import AuthPage from '../AuthPage/AuthPage';

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">  
      { user ?
        <>
          <NavBar/>
          <Routes>
            <Route path="/characters" element={<AllCharacters/>} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </>
        :
        <AuthPage path="/"/>
      }
    </div>
  );
}

export default App;
