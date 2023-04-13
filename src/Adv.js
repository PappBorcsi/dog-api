import React, { useContext } from 'react';
import { BreedContext } from './App';
import BuyDogButton from './BuyDogButton';

const Adv = () => {
  return (
    <div>
      <h3>Recomended products</h3>
      <AdvFood />
    </div>
  );
};
//propdrill
export default Adv;

const AdvFood = () => {
  const breed = useContext(BreedContext);

  const getFood = () => {
    return breed ? 'Food for ' + breed : 'General food';
  };
  return (
    <>
      <p>{getFood()}</p>
      <BuyDogButton />
    </>
  );
};
