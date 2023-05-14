import {useState, useEffect} from 'react';
import 'boxicons';

export default function HeartIcon({id, favorites, setFavorites}) {
    const [heart, setHeart] = useState(false);

    useEffect(() => {
        setHeart(favorites.includes(id));
    }, [favorites]);

    function submitFavorite() {
        let isFavorite = favorites.includes(id);
        setFavorites(prevFavorites => {
            if (isFavorite) {
                return prevFavorites.filter(fave => fave !== id);
            } else {
                return [...prevFavorites, id]
            }
        });
    }

    const boxIcon = heart ? (
        <box-icon type='solid' name='heart'></box-icon>
    ) : (
        <box-icon name='heart'></box-icon>
    );

    return (
        <div onClick={submitFavorite} key={id}>
            {boxIcon}
        </div> 
    )
}