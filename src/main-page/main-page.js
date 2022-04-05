import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './main-page.css';
import Header from './header';
import FeaturedHouseComponent from './featured-house';
import HouseFilterComponent from './house-filter';
import SearchResults from '../search-results';
import HouseFromQuery from '../house/HouseFromQuery';
import useHouses from '../hooks/useHouses';
import useFeaturedHouse from '../hooks/useFeaturedHouse';

function App() {
  const allHouses = useHouses();
  const featuredHouse = useFeaturedHouse(allHouses);

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
