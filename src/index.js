import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Normalize } from 'styled-normalize'
import store from "./store/store";
import {Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Normalize />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

