import '.';

describe('groupBy', () => {
  // TODO: write a few more tests
  it('should group the elements of the array as a list of values with the calculated key', () => {
    const array = [1, 2, 3, 4, 5];
    const result = array.groupBy((value) => (value as number) % 2 === 0 ? 'even' : 'odd');
    expect(result).toEqual({
      'even': [2, 4],
      'odd': [1, 3, 5],
    });
  });
});