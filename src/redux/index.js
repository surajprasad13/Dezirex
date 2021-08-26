import {createStore, applyMiddleware} from 'redux';

import {persistStore, persistReducer} from 'redux-persist';

import AsyncStorage from '@react-native-async-storage/async-storage';

import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = [thunk];
const initial_state = {};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer); // create a persisted reducer

const store = createStore(
  persistedReducer,
  initial_state,
  applyMiddleware(...middleware),
);

const persistor = persistStore(store);

export {store, persistor};
