import React from 'react';
import ReactDOM from 'react-dom';
import './theme/index.scss';
import App from './App';
import {DataProvider} from "./contextGlobal";

ReactDOM.render(
  <DataProvider >
    <App />
  </DataProvider>,
  document.getElementById('root')
);
