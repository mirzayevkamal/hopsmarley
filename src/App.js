
import { Routes, Route } from "react-router-dom";

import '../src/sass/styles.scss';
import Header from "./Components/Header";
import Home from "./Components/Home";
import Favorites from "./Components/Favorites";
import InfoCard from "./Components/InfoCard.";

function App() {

  return (
    <div className='homeWrapper'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='favorites' element={<Favorites />} />
        <Route path='/breweries/:id' element={<InfoCard />} />
      </Routes>
    </div>
  );
}

export default App;
