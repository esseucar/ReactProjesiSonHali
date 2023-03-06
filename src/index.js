import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import bg from "./img/bg.jpg";

import Header from './Header';
import Bilgi from './Bilgi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='row'>
      <Header/>
    </div>
    <div style = {{
        backgroundImage: `url(${bg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
    }
} >
    <div className='row'>
      <div className='col-8'id="sol"></div> 
      <div className='col-4' id="sag"></div>     
    </div>
    </div>
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
