import Rootreducer from './root-reducer';
import Logger from 'redux-logger';
import {createStore,applyMiddleware} from 'redux';
import {persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import Rootsaga from './root-saga'

const saga_middleware = createSagaMiddleware();

const middlewares = [Logger,thunk,saga_middleware];  

export const store = createStore(Rootreducer,applyMiddleware(...middlewares));
saga_middleware.run(Rootsaga);     
export const persistor = persistStore(store);
export default {store,persistor};