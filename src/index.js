import React from 'react';

import ReactDOM from 'react-dom';

import App from './components/App';

import store from './config/redux-store'


ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);
