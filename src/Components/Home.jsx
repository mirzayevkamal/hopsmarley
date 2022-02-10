
import { useState, useEffect } from 'react';

import '../sass/styles.scss';
import Button from "./Button";
import Search from "./Search";
import Loader from "./Loader";
import Card from "./Card";
import { getBreweries } from '../services';

function App() {
  const [searchKeyword, setSearchKeyword] = useState(null);
  const [foundBreweries, setFoundBreweries] = useState([]);
  const [favorites, setFavorites] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [resText, setResText] = useState('Breweries will be shown here');
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

  //Add selected brewery to Favorites list
  const favAddHandler = (breweryLogo, id, website_url, brewery_type, city, name) => {
    if (favsArr.find((item) => item.id === id)) {
      favsArr = favsArr.filter((fav) => fav.id !== id);
      localStorage.setItem('fav', JSON.stringify(favsArr));
      setFavorites(favsArr);
    } else {
      favsArr.push({
        breweryLogo,
        website_url,
        id,
        brewery_type,
        city,
        name
      });
      localStorage.setItem('fav', JSON.stringify(favsArr));
      setFavorites(favsArr);
    }
  }

  //Search brewery
  const searchBrewery = async () => {
    setFoundBreweries([]);
    try {
      setIsLoading(true);
      const res = await getBreweries(searchKeyword).then(res => {
        return res;
      });
      setFoundBreweries(res.data)
      setIsLoading(false);
      res.data.length < 1 && setResText('No brewery found')
    } catch (error) {
      setResText('Error occured wen fetching data');
    }
  }



  return (
    <div className='wrapper'>
      <div className='headline'>
        Search breweries and get detailed information
        <span>for free</span>
      </div>
      <Search searchBrewery={searchBrewery} setSearchKeyword={setSearchKeyword} />
      <Button onButtonClick={searchBrewery}> Search </Button>
      {isLoading ? <Loader /> : ''}
      {foundBreweries.length ? (
        <div className='cardsWrapper'>
          {
            foundBreweries.map((item) => {
              return <Card name={item.name} type={item.brewery_type} city={item.city} favorites={favorites} favAddHandler={favAddHandler} key={item.id} id={item.id} website_url={item.website_url} />
            })
          }
        </div>
      ) : ''}
      {!isLoading && !foundBreweries.length && resText}
    </div>
  );
}

export default App;
