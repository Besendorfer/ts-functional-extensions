import '.';

describe('pushSorted', () => {
  it('should insert the value in the correct position', () => {
    const arr = [1, 3, 5];

    arr.pushSorted(4);

    expect(arr).toEqual([1, 3, 4, 5]);
  });

  it('should insert the value in the correct position with duplicates', () => {
    const arr = [1, 3, 3, 5];

    arr.pushSorted(4);

    expect(arr).toEqual([1, 3, 3, 4, 5]);
  });

  it('should insert the value in the correct position with strings', () => {
    const arr = ['a', 'c', 'e'];

    arr.pushSorted('d');

    expect(arr).toEqual(['a', 'c', 'd', 'e']);
  });

  it('should insert the value in the correct position emulating the built-in sort', () => {
    const arr = [1, 13];

    arr.pushSorted(2);

    expect(arr).toEqual([1, 13, 2]);
  });

  it('should insert the value in the correct position with a comparator function', () => {
    const arr = [1, 13];

    arr.pushSorted(2, (a, b) => a - b);

    expect(arr).toEqual([1, 2, 13]);
  });

  // Weird case, but it does what is expected.
  it('should insert the value in the correct position with a comparator function inverting the array', () => {
    const arr = [1, 3, 5];

    arr.pushSorted(4, (a, b) => b - a);

    expect(arr).toEqual([4, 1, 3, 5]);
  });
});
