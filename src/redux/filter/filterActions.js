import CHANGE_FILTER from './filterTypes';

const changeFilter = category => ({
  type: CHANGE_FILTER,
  payload: category,
});

export default changeFilter;
