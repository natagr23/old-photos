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
  const callCity = (city_id) => {
    let selected_city = cities.find((city) => {
      // return city.id === city_id;
      return city_id.name;
    });
    console.log(selected_city);
  };

  const OnSelectCity = (city_id) => {
    //search selected Product from user using id, retorna el producto donde cumpla con ese id
    let selected_city = cities.find((city) => {
      return city_id;
    });

    // let selected_city2 = cities.find((provider) => {
    //   return provider.id === selected_city.id;
    // });
    // console.log('desde productList', city_id.name);
    console.log(selected_city.name);
    // setShowProduct(true);
  };

  return (
    <Context.Provider
      value={{
        OnSelectCity: OnSelectCity,
        cities: cities,
        photosBogota: photosBogota,
        // SelectPhotosBogota: SelectPhotosBogota,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
