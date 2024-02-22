// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import UserSearch from './componets/User_Search/UserSearch.jsx'; // Assuming UserSearch component is in the same directory

ReactDOM.render(
  <React.StrictMode>
    <UserSearch />
  </React.StrictMode>,
  document.getElementById('root') // Assuming you have a root element in your HTML file
);
