import filterReducer from '../../redux/filter/filterReducer';

const initialState = {
  filter: 'All',
};
describe('test all the possibles outcomes of the  Filter state when manipulated by different actions', () => {
  it('should return an empty filter when the action payload equals all', () => {
    const result = filterReducer(initialState, { type: 'CHANGE_FILTER', payload: 'all' });
    expect(result.filter).toEqual('');
  });

  it('should return a filter value equal to the passed by the payload when the action payload  dont equal all', () => {
    const result = filterReducer(initialState, { type: 'CHANGE_FILTER', payload: 'Stout' });
    expect(result.filter).toEqual('Stout');
  });

  it('should return an empty filter when the action payload is an empty string', () => {
    const result = filterReducer(initialState, { type: 'CHANGE_FILTER', payload: '' });
    expect(result.filter).toEqual('');
  });
});
