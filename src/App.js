import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
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

  // console.log(breeds);

  const subBreed = (sB) => {
    return sB.map((b, index) => b + (index === sB.length - 1 ? '' : ', '));
  };

  return (
    <div>
      <h1>Hello!</h1>
      <p>Here are the dog breeds :)</p>
      <ul>
        {breeds &&
          breeds.map((breed) => {
            /* 
            Sub breeds:
            console.log(breed[1])
            */
            return (
              <li>
                {breed[0]}s{subBreed(breed[1])}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
