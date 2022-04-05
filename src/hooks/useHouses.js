import { useState, useEffect } from 'react';

const useHouses = () => {
  const [allHouses, setAllHouses] = useState([]);
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
  return allHouses;
};

export default useHouses;
