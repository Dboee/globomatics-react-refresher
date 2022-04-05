import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './main-page.css';
import Header from './header';
import FeaturedHouseComponent from './featured-house';
import HouseFilterComponent from './house-filter';
import SearchResults from '../search-results';
import HouseFromQuery from '../house/HouseFromQuery';
import useHouses from '../hooks/useHouses';
import useFeaturedHouse from '../hooks/useFeaturedHouse';
import HousesContext from '../context/housesContext';

function App() {
  const allHouses = useHouses();
  const featuredHouse = useFeaturedHouse(allHouses);

  return (
    <BrowserRouter>
      <HousesContext.Provider value={allHouses}>
        <div className='container'>
          <Header
            subtitle='Providing houses all over the world'
            title='Some title'
          />
          <HouseFilterComponent />
          <Switch>
            <Route path='/searchresults/:country'>
              <SearchResults />
            </Route>

            <Route path='/house/:id'>
              <HouseFromQuery />
            </Route>
            <Route path='/'>
              <FeaturedHouseComponent house={featuredHouse} />
            </Route>
          </Switch>
        </div>
      </HousesContext.Provider>
    </BrowserRouter>
  );
}

export default App;
