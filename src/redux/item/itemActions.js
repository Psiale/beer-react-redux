import axios from 'axios';

import { FETCH_ITEM_FAILURE, FETCH_ITEM_DATA_SUCCESS, FETCH_ITEM_REQUEST } from './itemTypes';

export const fetchItemFailure = error => ({
  type: FETCH_ITEM_FAILURE,
  payload: error,
});

export const fetchItemDataSuccess = items => ({
  type: FETCH_ITEM_DATA_SUCCESS,
  payload: items,
});

export const fetchItemRequest = () => ({
  type: FETCH_ITEM_REQUEST,
});

export const fetchBeers = () => dispatch => {
  dispatch(fetchItemRequest);
  axios.get('https://api.punkapi.com/v2/beers?page=2&per_page=80').then(response => {
    const items = response.data;
    // eslint-disable-next-line no-console
    console.log(response.data);
    dispatch(fetchItemDataSuccess(items));
  })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(fetchItemFailure(errorMsg));
    });
};
