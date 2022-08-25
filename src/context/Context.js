import React, { useState, createContext } from 'react';

import photosColombia from '../data/photosColombia.json';
import citiesData from '../data/cities.json';

export const Context = createContext({});

export const ContextProvider = (props) => {
  const [name, setName] = useState('Bogota');
  const [cities, setCities] = useState(citiesData);
  // const [filteredData, setFilteredData] = useState(citiesData);

  const getArrName = (name) => {
    setName(name);
    console.log(name);
  };

  return (
    <Context.Provider
      value={{
        name: name,
        getArrName: getArrName,
        cities: cities,

        // SelectPhotosBogota: SelectPhotosBogota,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
