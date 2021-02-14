import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import 'normalize.css';
import { Provider } from 'react-redux';
import { mainReducer } from './redux/mainReducer';
import { createStore } from 'redux';

const store = createStore(mainReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
