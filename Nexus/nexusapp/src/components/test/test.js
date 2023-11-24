import React, { useState, useMemo, useCallback } from 'react';
// Import the DataListInput component
import DataListInput from 'react-datalist-input';
import 'react-datalist-input/dist/styles.css'
import "./test.css"
// Your data source


const Test = () => {
    const options = [
        { name: 'Chocolate' },
        { name: 'Coconut' },
        { name: 'Mint' },
        { name: 'Strawberry' },
        { name: 'Vanilla' },
      ];
  const [item, setItem] = useState(); // The selected item will be stored in this state.


  //The onSelect callback function is called if the user selects one option out of the dropdown menu.
  const onSelect = useCallback((selectedItem) => {
    console.log('selectedItem', selectedItem);
    setItem(selectedItem);
  }, []);

  // dropdown menu
  const items = useMemo(
    () =>
      options.map((option) => ({
        id: option.name,
        value: option.name,
      })),
    [],
  );

  return (
    <div className="a">
      <h2>Games</h2>
      <div  className="list">
        <img src="http://cdn.akamai.steamstatic.com/steam/apps/38740/header.jpg" alt="game1"/>
        <img src="http://cdn.akamai.steamstatic.com/steam/apps/15700/header.jpg?t=1461320042" alt="game1"/>
        <img src="http://cdn.akamai.steamstatic.com/steam/apps/38740/header.jpg" alt="game1"/>
        <img src="http://cdn.akamai.steamstatic.com/steam/apps/15700/header.jpg?t=1461320042" alt="game1"/>
      </div>
    </div>
    );
};
export default Test;
