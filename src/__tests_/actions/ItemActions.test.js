import { fetchItemDataSuccess, fetchItemFailure, fetchItemRequest } from '../../redux/item/itemActions';

const testItems = ['first', 'second', 'third'];

describe('Testing all the fetching actions', () => {
  it('should return an error as the payload', () => {
    const result = fetchItemFailure('The horror');
    expect(result.payload).toEqual('The horror');
  });

  it('should return an array holding items as the payload', () => {
    const result = fetchItemDataSuccess(testItems);
    expect(result.payload).toEqual(expect.arrayContaining(['first', 'second', 'third']));
  });

  it('should only return an object containing a type matching the action dispatched', () => {
    const result = fetchItemRequest();
    expect(result.type).toEqual('FETCH_ITEM_REQUEST');
  });
});
