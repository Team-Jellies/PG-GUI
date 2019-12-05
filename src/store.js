// import devToolsEnhancer from 'remote-redux-devtools';
import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducer/combineReducers.js';
import thunk from 'redux-thunk';


const store = createStore(reducers, compose(applyMiddleware(thunk)));

export default store;