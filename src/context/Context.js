import React, { useState, createContext } from 'react';

import photosColombia from '../data/photosColombia.json';
import citiesData from '../data/cities.json';

export const Context = createContext({});

export const ContextProvider = (props) => {
  const [photosBogota, setPhotosBogota] = useState(photosColombia);
  const [cities, setCities] = useState(citiesData);

  const SelectPhotosBogota = (photos) => {
    setPhotosBogota({ photos });
  };
  return (
    <Context.Provider
      value={{
        cities: cities,
        photosBogota: photosBogota,
        // SelectPhotosBogota: SelectPhotosBogota,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
