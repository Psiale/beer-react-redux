/* eslint-disable no-console */
import { getAll } from '../../api/helpers';

import { FETCH_ITEM_FAILURE, FETCH_ITEM_DATA_SUCCESS, FETCH_ITEM_REQUEST } from './itemTypes';

export const fetchItemFailure = error => ({
  type: FETCH_ITEM_FAILURE,
  payload: error,
});

export const fetchItemDataSuccess = items => ({
  type: FETCH_ITEM_DATA_SUCCESS,
  payload: items,
});

export const getSingleItem = item => {
  console.log(`this is the beer: ${item}`);
  return {
    type: 'GET_ITEM_ID',
    payload: item,
  };
};

export const fetchItemRequest = () => ({
  type: FETCH_ITEM_REQUEST,
});

export const fetchAllBeers = () => async dispatch => {
  dispatch(fetchItemRequest());
  getAll().then(response => {
    const items = response.data;
    dispatch(fetchItemDataSuccess(items));
  })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(fetchItemFailure(errorMsg));
    });
};
