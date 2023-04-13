import React, { useContext } from 'react';
import { UserContext } from './UserManagmentWrappar';

const BuyDogButton = () => {
  const loggadIN = useContext(UserContext);
  return <div>{loggadIN ? <button>Buy</button> : <p>Please Log in!</p>}</div>;
};

export default BuyDogButton;
