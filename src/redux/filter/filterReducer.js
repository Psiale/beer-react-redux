import CHANGE_FILTER from './filterTypes';

const initialState = {
  filter: 'All',
};
const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      if (action.payload === 'all') {
        return {
          ...state,
          filter: '',
        };
      }
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return {
        ...state,
        filter: '',
      };
  }
};

export default filterReducer;
