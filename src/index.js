import React from 'react';
import { createRoot } from 'react-dom';
//import ReactDOM from 'react-dom';
import App from './App.jsx'; // Import your main application component (App.jsx)

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);





