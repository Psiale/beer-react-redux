import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import filterReducer from './filter/filterReducer';
import itemReducer from './item/itemReducer';

const root = combineReducers({
  itemsStore: itemReducer,
  filterStore: filterReducer,
});

const store = createStore(root, applyMiddleware(thunk));

export default store;
