import React, { createContext, useState } from 'react';
import './style.css';

export const UserContext = createContext();
const UserManagmentWrappar = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const loggedInHandler = () => {
    setLoggedIn(true);
  };

  const loggedOutHandler = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      {loggedIn ? (
        <button onClick={loggedOutHandler}> Log out </button>
      ) : (
        <button onClick={loggedInHandler}> Log in </button>
      )}
      <UserContext.Provider value={loggedIn}>{children}</UserContext.Provider>
    </div>
  );
};

export default UserManagmentWrappar;
