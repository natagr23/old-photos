import React, { useState, createContext } from 'react';

import photosBogota from '../data/photosBogota.json';
import photosMedellin from '../data/photosMedellin.json';
import photosTunja from '../data/photosTunja.json';
import photosVillavicencio from '../data/photosVillavicencio.json';
import photosBarranquilla from '../data/photosBarranquilla.json';
import photosPasto from '../data/photosPasto.json';
import photosBuenaventura from '../data/photosBuenaventura.json';
import photosIbague from '../data/photosIbague.json';
import photosChoachi from '../data/photosChoachi.json';
import citiesData from '../data/cities.json';

export const Context = createContext({});

export const ContextProvider = (props) => {
  const [name, setName] = useState('Bogota');
  const [cities] = useState(citiesData);
  const [photos, setPhotos] = useState(photosBogota);

  const getArrName = (name) => {
    setName(name);
    name === 'Medellin' && setPhotos(photosMedellin);
    name === 'Tunja' && setPhotos(photosTunja);
    name === 'Villavicencio' && setPhotos(photosVillavicencio);
    name === 'Barranquilla' && setPhotos(photosBarranquilla);
    name === 'Pasto' && setPhotos(photosPasto);
    name === 'Buenaventura' && setPhotos(photosBuenaventura);
    name === 'Ibague' && setPhotos(photosIbague);
    name === 'Bogota' && setPhotos(photosBogota);
    name === 'Choachi' && setPhotos(photosChoachi);
    // console.log(name);
  };

  // const callPhotos = (photo) => {
  //   setPhotos(photo.photos);
  // };

  return (
    <Context.Provider
      value={{
        // callPhotos: callPhotos,
        photos: photos,
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
