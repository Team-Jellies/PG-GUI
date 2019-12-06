import React from 'react';
import { render } from 'react-dom';
import MainContainer from './container/MainContainer';
import { Provider } from 'react-redux';
import store from './store'
import * as serviceWorker from '../worker.js';

render(
    <Provider store={store}>
      <MainContainer/> 
    </Provider>,
  document.getElementById('root')
);
serviceWorker.register();