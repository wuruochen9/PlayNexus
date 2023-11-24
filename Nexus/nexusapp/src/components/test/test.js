import React, { useState, useMemo, useCallback } from 'react';
// Import the DataListInput component
import DataListInput from 'react-datalist-input';
import 'react-datalist-input/dist/styles.css'

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
    <div style={{"display":"flex"}}>
    <DataListInput label="Select your favorite flavor" placeholder="Chocolate" items={items}  onSelect={onSelect}/>
    <h1>123</h1>
    </div>
    );
};
export default Test;
