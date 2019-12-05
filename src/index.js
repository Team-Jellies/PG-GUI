import React from 'react';
import { render } from 'react-dom';
import MainContainer from './container/MainContainer';
import { Provider } from 'react-redux';
import store from './store'

render(
    <Provider store={store}>
      <MainContainer/> 
    </Provider>,
  document.getElementById('root')
);