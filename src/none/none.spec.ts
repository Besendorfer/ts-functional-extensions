import '.';

describe('none', () => {
  it('should return true if the array is empty', () => {
    const arr: boolean[] = [];

    const result = arr.none();

    expect(result).toBe(true);
  });

  it('should return false if there are any elements in the array', () => {
    const arr = [0];

    const result = arr.none();

    expect(result).toBe(false);
  });

  it('should return true if all the elements in the array don\'t match the predicate', () => {
    const arr = [0, 2, 4];

    const result = arr.none(x => x % 2 === 1);

    expect(result).toBe(true);
  });

  it('should return false if any of the elements in the array match the predicate', () => {
    const arr = [0, 2, 3, 4];

    const result = arr.none(x => x % 2 === 1);

    expect(result).toBe(false);
  });
});