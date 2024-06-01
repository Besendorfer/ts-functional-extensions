import '.';

describe('associateWith', () => {
  // TODO: write a few more tests
  it('should associate the elements of the array as the key with the calculated value', () => {
    const array = [1, 2, 3, 4, 5];
    const result = array.associateWith((key) => (key as number) % 2 === 0 ? 'even' : 'odd');
    expect(result).toEqual({
      '1': 'odd',
      '2': 'even',
      '3': 'odd',
      '4': 'even',
      '5': 'odd',
    });
  });
});