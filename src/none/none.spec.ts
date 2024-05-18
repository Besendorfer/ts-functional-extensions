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
});