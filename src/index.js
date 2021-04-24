import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import {Login} from "./component/class/Login";
import reportWebVitals from './reportWebVitals';
import {LoginNew} from "./component/class/LoginNew";
import {LoginNewOne} from "./component/class/LoginNewOne";
import {LoginNewTwo} from "./component/class/LoginNewTwo";
//import {AppNewTwo} from "./component/class/AppNewTwo";

ReactDOM.render(
  <React.StrictMode>
      <LoginNewTwo/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
