import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import sprint from './example_data/sprint.json'

ReactDOM.render(
  <React.StrictMode>
    <App sprint={sprint}/>
  </React.StrictMode>,
  document.getElementById('root')
);

