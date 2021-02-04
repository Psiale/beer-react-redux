import changeFilter from '../../redux/filter/filterActions';

describe('it test the filter Actions', () => {
  it('should return the category as the payload', () => {
    const result = changeFilter('Stout');
    expect(result.payload).toEqual('Stout');
  });
});
