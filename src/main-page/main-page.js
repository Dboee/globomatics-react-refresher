import { useEffect, useState, useMemo } from 'react';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';
import './main-page.css';
import Header from './header';
import FeaturedHouseComponent from './featured-house';
import HouseFilterComponent from './house-filter';
import SearchResults from '../search-results';
import HouseFromQuery from '../house/HouseFromQuery';

function App() {
  const [allHouses, setAllHouses] = useState([]);
  const userName = useState(['David']);

  // load data
  useEffect(() => {
    const fetchHouses = async () => {
      const rsp = await fetch('/houses.json');
      const houses = await rsp.json();
      function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
      }
      houses.map((house) => {
        house.nokPrice = numberWithSpaces(Math.floor(house.price * 8.71));
        house.price = numberWithSpaces(house.price);
      });
      setAllHouses(houses);
    };
    fetchHouses();
  }, []);

  const featuredHouse = useMemo(() => {
    if (allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }
  }, [allHouses]);

  return (
    <BrowserRouter>
      <div className='container'>
        <Header
          subtitle='Providing houses all over the world'
          title='Some title'
        />
        <HouseFilterComponent allHouses={allHouses} />
        <Switch>
          <Route path='/searchresults/:country'>
            <SearchResults allHouses={allHouses} />
          </Route>

          <Route path='/house/:id'>
            <HouseFromQuery allHouses={allHouses} />
          </Route>
          <Route path='/'>
            <FeaturedHouseComponent house={featuredHouse} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
