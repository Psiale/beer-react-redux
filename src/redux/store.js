import { createStore } from 'redux';
import filterReducer from './filter/filterReducer';

const store = createStore(filterReducer);

export default store;
