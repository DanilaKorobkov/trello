import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
// import App from "./components/app";
import BOARD_W from "./components/wrapComponents/board_w";

ReactDOM.render(
  <Provider store={store}>
    <BOARD_W/>
  </Provider>,
  document.getElementById('root'));



