/* eslint-disable no-console */
import { FETCH_ITEM_FAILURE, FETCH_ITEM_DATA_SUCCESS, FETCH_ITEM_REQUEST } from './itemTypes';

const initialState = {
  loading: false,
  items: [],
  error: '',
  item: null,
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_ITEM_FAILURE:
      return {
        ...state,
        loading: false,
        items: [],
        error: action.payload,
      };

    case FETCH_ITEM_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
        error: '',
      };

    case 'GET_ITEM_ID':
      return {
        ...state,
        item: action.payload,
      };

    default: return state;
  }
};

export default itemReducer;
