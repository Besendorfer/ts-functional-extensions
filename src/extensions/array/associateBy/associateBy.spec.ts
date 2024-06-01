import '.';

describe('associateBy', () => {
  // TODO: write a few more tests
  it('should associate the elements of the array as the value with the calculated key', () => {
    const array = [1, 2, 3, 4, 5];
    const result = array.associateBy((value) => (value as number) % 2 === 0 ? 'even' : 'odd');
    expect(result).toEqual({
      'even': 4,
      'odd': 5,
    });
  });
});