import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from '/src/components/App.jsx'
import '/src/index.css'

const renderApp = async () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
try{
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
} catch (error) {
  console.error('Error during rendering:', error);
}
};
renderApp();