import getItemsFiltered from '../utils';
import Beer from '../classes/Beer';

const test = [Beer(1, 'Ale', 'something', 'fdksjas', 'a', []), Beer(1, 'Pale Ale', 'something', 'fdksjas', 'a', []), Beer(1, 'PAle ale', 'something', 'fdksjas', 'a', []), Beer(1, 'Stout', 'something', 'fdksjas', 'a', []), Beer(1, 'IPA', 'something', 'fdksjas', 'a', [])];
describe('test the functions from the utils file', () => {
  it('should return an array with the items that match the filter', () => {
    const result = getItemsFiltered(test, 'Ale');
    expect(result.length).toBe(3);
  });
});
