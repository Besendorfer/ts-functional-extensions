import '.';

describe('any', () => {
  it('should return true if any element in the array is true', () => {
    const arr = [false, true, false];

    const result = arr.any();

    expect(result).toBe(true);
  });

  it('should return false if the array is empty', () => {
    const arr: boolean[] = [];

    const result = arr.any();

    expect(result).toBe(false);
  });

  it('should return true if any element in the array is a string', () => {
    const arr = [0, 'a', 0];

    const result = arr.any();

    expect(result).toBe(true);
  });

  it('should return true if any element in the array is an object', () => {
    const arr = [0, {}, 0];

    const result = arr.any();

    expect(result).toBe(true);
  });

  it('should return true if any element in the array is an array', () => {
    const arr = [0, [], 0];

    const result = arr.any();

    expect(result).toBe(true);
  });

  it('should return true if any element in the array is a function', () => {
    const arr = [0, () => {}, 0];

    const result = arr.any();

    expect(result).toBe(true);
  });

  it('should return true if any element in the array is a number', () => {
    const arr = [0, 1, 0];

    const result = arr.any();

    expect(result).toBe(true);
  });

  it('should return true if any element in the array is a symbol', () => {
    const arr = [0, Symbol(), 0];

    const result = arr.any();
  });

  it('should return true if any element in the array matches the provided predicate', () => {
    const arr = [0, 1, 0];

    const result = arr.any((x) => x === 1);

    expect(result).toBe(true);
  });

  it('should return false if no element in the array matches the provided predicate', () => {
    const arr = [0, 1, 0];

    const result = arr.any((x) => x === 2);

    expect(result).toBe(false);
  });
});