import Rootreducer from './root-reducer';
import Logger from 'redux-logger';
import {createStore,applyMiddleware} from 'redux';

const middlewares = [Logger];

const store = createStore(Rootreducer,applyMiddleware(...middlewares));

export default store;