import itemReducer from '../../redux/item/itemReducer';

const initialState = {
  loading: false,
  items: [],
  error: '',
  item: null,
};

describe('test all the possibles outcomes of the Item state when manipulated by different actions', () => {
  it('should change the items array from empty to equal the action payload', () => {
    const result = itemReducer(initialState, { type: 'FETCH_ITEM_DATA_SUCCESS', payload: ['first', 'second'] });
    expect(result.items).toEqual(['first', 'second']);
  });

  it('should change the loading value from false to true', () => {
    const result = itemReducer(initialState, { type: 'FETCH_ITEM_REQUEST' });
    expect(result.loading).toBe(true);
  });

  it('should change the item value from null to equal the payload action', () => {
    const result = itemReducer(initialState, { type: 'GET_ITEM_ID', payload: { name: "Alexi's Beer" } });
    expect(result.item).toEqual(
      { name: "Alexi's Beer" },
    );
  });
});
