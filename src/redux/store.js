import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import filterReducer from './filter/filterReducer';
import itemReducer from './item/itemReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const root = combineReducers({
  itemsStore: itemReducer,
  filterStore: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, root);

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };
