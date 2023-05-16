import {useState, useEffect} from 'react';
import 'boxicons';
import {addFavorite} from '../../utilities/users-service';

export default function HeartIcon({id, user, favorites, setFavorites}) {
    const [heart, setHeart] = useState(false);

    useEffect(() => {
        setHeart(favorites.includes(id));
    }, [favorites]);

    async function submitFavorite(user, id) {
        let userId = user._id;
        const faves = await addFavorite(id, userId);
        let updatedFavorites = [...favorites];
        updatedFavorites = updatedFavorites.filter(fave => fave !== id);

        for (let i = 0; i < faves.length; i++) {
            const favoriteId = faves[i].id;
            const isFavorite = updatedFavorites.includes(favoriteId);
        
            if (!isFavorite) {
              updatedFavorites.push(favoriteId);
            }
          }
      setFavorites(updatedFavorites);
    }

    const boxIcon = heart ? (
        <box-icon type='solid' name='heart'></box-icon>
    ) : (
        <box-icon name='heart'></box-icon>
    );

    return (
        <div onClick={() => submitFavorite(user, id)} key={id}>
            {boxIcon}
        </div> 
    )
}