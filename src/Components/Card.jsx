import styles from '../sass/components/card/Card.module.scss';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import ImgComponent from './ImgComponent';

function Card({ breweryLogo, altTag, id, favorites, favAddHandler, website_url, name, type, city }) {
    const [isFavorited, setIsFavorited] = useState(false);

    //Check if the brewery is already Favorited or not
    useEffect(() => {
        setIsFavorited(favorites.find((item) => item.id === id));
    }, [favorites])

    return (
        <div className={styles.card}>
            <button onClick={() => favAddHandler(breweryLogo, id, website_url, name, type, city)} className={clsx(styles.favButton, isFavorited && styles.isFav)}></button>
            <Link to={`/breweries/${id}`}>
                <ImgComponent url={website_url} alt={altTag} />
                <div className={styles.details}>
                    <div className={styles.title}>Name: <span>{name}</span></div>
                    <div className={styles.title}>Type: <span>{type}</span></div>
                    <div className={styles.title}>City: <span>{city}</span></div>
                </div>
            </Link>
        </div>
    );
}

export default Card;
