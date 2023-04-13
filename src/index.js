import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import UserManagmentWrappar from './UserManagmentWrappar';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <UserManagmentWrappar>
      <App />
    </UserManagmentWrappar>
  </StrictMode>
);
