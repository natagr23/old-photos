import React, { useState, createContext } from 'react';

import photosColombia from '../data/photosColombia.json';
import citiesData from '../data/cities.json';

export const Context = createContext({});

export const ContextProvider = (props) => {
  const [photosBogota, setPhotosBogota] = useState(photosColombia);
  const [cities, setCities] = useState(citiesData);
  const [filteredData, setFilteredData] = useState(citiesData);

  const SelectPhotosBogota = (photos) => {
    setPhotosBogota({ photos });
  };

  // let selected_product = products.find((product) => {
  //   return product.id === product_id;
  // });
  // // let selected_place = products.find((place_id) => {
  // //   return place_id === selected_product.place;
  // // });
  // setSelectedProvider(() => {
  //   return selected_product;
  // });
  // console.log(selected_place.name, selected_place.place);
  const callCity = (city) => {
    filteredData.map((city_id) => {
      if (city_id == city.id) {
        return console.log(city.name);
      }
    });
  };

  return (
    <Context.Provider
      value={{
        callCity: callCity,
        cities: cities,
        photosBogota: photosBogota,
        // SelectPhotosBogota: SelectPhotosBogota,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
