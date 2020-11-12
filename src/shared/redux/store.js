import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const persistConfig = {
    key: 'root',
    storage
};

let store = null;

const configureStore = () => {
    return new Promise((resolve, reject) => {
        try {
            const persistedReducer = persistReducer(persistConfig, rootReducer);
            const sagaMiddleware = createSagaMiddleware();

            store = createStore(
                persistedReducer,
                undefined,
                compose(
                    applyMiddleware(logger, sagaMiddleware)
                )
            );

            persistStore(store, null, () => setTimeout(() => resolve(store)));

            sagaMiddleware.run(rootSaga);
        } catch (e) {
            reject(e);
        }
    });
};

export const getStore = () => {
    return store;
};

export default configureStore;
