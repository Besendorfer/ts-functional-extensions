import '.';
import '../sum/sum';

describe('toSorted', () => {
  it('should sort the values in an array', () => {
    const arr = [3, 1, 2];

    const result = arr.toSorted();

    expect(result).toEqual([1, 2, 3]);
  });

  it('should sort the values in an array with strings', () => {
    const arr = ['3', '1', '2'];

    const result = arr.toSorted();

    expect(result).toEqual(['1', '2', '3']);
  });

  it('should sort the values in an array with booleans', () => {
    const arr = [true, false, true];

    const result = arr.toSorted();

    expect(result).toEqual([false, true, true]);
  });

  it('should sort the values in an array with mixed types', () => {
    const arr = [3, '1', true];

    const result = arr.toSorted();

    expect(result).toEqual(['1', 3, true]);
  });

  it('should sort the values in an array with empty strings', () => {
    const arr = [3, '', 1];

    const result = arr.toSorted();

    expect(result).toEqual(['', 1, 3]);
  });

  it('should sort the values in an array with NaN', () => {
    const arr = [3, NaN, 1];

    const result = arr.toSorted();

    expect(result).toEqual([1, 3, NaN]);
  });

  it('should sort the values in an array, then allow the array to be chained', () => {
    const arr = [3, 1, 2];

    const result = arr.toSorted().sum();

    expect(result).toEqual(6);
  });

  it('should allow the user to pass a custom comparator function', () => {
    const arr = [3, 1, 2];

    const result = arr.toSorted((a, b) => b - a);

    expect(result).toEqual([3, 2, 1]);
  });
});