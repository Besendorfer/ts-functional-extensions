import '.';

describe('zip', () => {
  it('should zip two arrays', () => {
    const a = [1, 2, 3];
    const b = ['a', 'b', 'c'];
    const result = a.zip(b);
    expect(result).toEqual([[1, 'a'], [2, 'b'], [3, 'c']]);
  });

  it('should zip two arrays of different lengths', () => {
    const a = [1, 2, 3];
    const b = ['a', 'b'];
    const result = a.zip(b);
    expect(result).toEqual([[1, 'a'], [2, 'b'], [3, undefined]]);
  });
});