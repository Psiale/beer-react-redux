import { createStore, combineReducers } from 'redux';
import filterReducer from './filter/filterReducer';
import itemReducer from './item/itemReducer';

const root = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});

const store = createStore(root);

export default store;
