import Rootreducer from './root-reducer';
import Logger from 'redux-logger';
import {createStore,applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import thunk from 'redux-thunk';

const middlewares = [Logger,thunk];  

export const store = createStore(Rootreducer,applyMiddleware(...middlewares));
export const persistor = persistStore(store);
export default {store,persistor};