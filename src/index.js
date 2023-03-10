import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux';
import RootReducer from  './reducers/reducer';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <Provider store={RootReducer}>
  <BrowserRouter>
      <App />
  </BrowserRouter>
</Provider>,
document.getElementById("root")
);
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
