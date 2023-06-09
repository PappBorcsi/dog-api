import React, { useState, useEffect, createContext } from 'react';
import './style.css';
import BuyDogButton from './BuyDogButton';
import Adv from './Adv';

export default function App() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all') //promis-t ad vissza
      .then((b) => b.json())
      .then((b) => {
        const { message: breedsResponse } = b;
        const breedsArray = Object.entries(breedsResponse);
        setBreeds(breedsArray);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <h1>Hello!</h1>
      <p>Here are the dog breeds :)</p>
      <BreedsSelect breedList={breeds} />
    </div>
  );
}
export const BreedContext = createContext();

//componens lh
const BreedsSelect = ({ breedList }) => {
  const [breedSelect, setBreedSelect] = useState();
  const [subBreedSelect, setsubBreedSelect] = useState();
  const [subBreedList, setsubBreedList] = useState();

  const handleBreedChange = (event) => {
    const actualBreed = event.target.value;
    setBreedSelect(actualBreed);
    setsubBreedSelect(undefined);
    const actualSubBreeds = getSelectedSubBreeds(actualBreed);
    setsubBreedList(actualSubBreeds);
  };

  const handleSubBreedChange = (event) => {
    setsubBreedSelect(event.target.value);
  };

  const getSelectedSubBreeds = (breed) => {
    const subBreeds = breedList.find((br) => br[0] == breed);
    if (subBreeds) {
      return subBreeds[1];
    }
    return [];
  };

  // console.log('Sub Breed', getSelectedSubBreeds(breedSelect));

  return (
    <>
      <select value={breedSelect} onChange={handleBreedChange}>
        <option value="">-</option>
        {breedList.map((breed) => {
          return <option value={breed[0]}>{breed[0]}</option>;
        })}
      </select>

      {subBreedList && subBreedList.length > 0 && (
        <select value={subBreedSelect} onChange={handleSubBreedChange}>
          <option value="">-</option>
          {subBreedList.map((sbName) => (
            <option value={sbName}>{sbName}</option>
          ))}
        </select>
      )}
      <BreedContext.Provider
        value={
          subBreedSelect ? breedSelect + ' ' + subBreedSelect : breedSelect
        }
      >
        <Adv />
      </BreedContext.Provider>
    </>
  );
};
