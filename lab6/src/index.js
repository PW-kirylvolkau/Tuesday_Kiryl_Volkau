import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import getStore from './store';

ReactDOM.render(
    <React.StrictMode>
      <Provider store={getStore()} >
        <App />
      </Provider>
    </React.StrictMode>,
  document.getElementById('root')
);
