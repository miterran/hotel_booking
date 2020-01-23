import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './reducers';
import storage from 'redux-persist/lib/storage';

const middleware = __DEV__ ? applyMiddleware(logger) : applyMiddleware();

const persistConfig = {
	key: 'root',
	storage
};

export const store = createStore(persistReducer(persistConfig, rootReducer), middleware);
export const persistor = persistStore(store);
persistor.purge();
