import { useState, useEffect } from 'react';

import styles from '../sass/components/favorites/Favorites.module.scss';
import Card from "./Card";

function Favorites() {
    const [favorites, setFavorites] = useState();
    let favsArr = JSON.parse(localStorage.getItem('fav')) || [];

    useEffect(() => {
        if (favsArr !== null) {
            setFavorites(favsArr);
        }
        else {
            favsArr = [];
            setFavorites([]);
        }
    }, []);

    //Remove selected Favorited item from list
    const removeFavHandler = (...args) => {
        const id = args[1]
        favsArr = favsArr.filter((fav) => fav.id !== id);
        localStorage.setItem('fav', JSON.stringify(favsArr));
        setFavorites(favsArr);
    }

    return (
        <div className={styles.favorites}>
            <div className={styles.head}>
                Favorites: <span>{favorites?.length}</span>
            </div>
            <div className={styles.favContainer}>
                {favorites?.map((item) => {
                    return <Card name={item.name} type={item.brewery_type} city={item.city} favorites={favorites} favAddHandler={removeFavHandler} key={item.id} id={item.id} website_url={item.website_url} />
                })}
            </div>
        </div>
    );
}

export default Favorites;
