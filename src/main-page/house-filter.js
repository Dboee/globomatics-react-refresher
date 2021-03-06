import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import HousesContext from '../context/housesContext';

const HouseFilterComponent = () => {
  const allHouses = useContext(HousesContext);
  const history = useHistory();
  const countries = allHouses
    ? Array.from(new Set(allHouses.map((h) => h.country)))
    : [];
  countries.unshift(null);

  const onSearchChange = (e) => {
    const country = e.target.value;
    history.push(`/searchresults/${country}`);
  };

  return (
    <div className='row mt-2'>
      <div className='offset-md-2 col-md-4'>Look for your dream house in:</div>
      <div className='col-md-2 col-md-4'>
        <select className='form-select' onChange={onSearchChange}>
          {countries.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default HouseFilterComponent;
