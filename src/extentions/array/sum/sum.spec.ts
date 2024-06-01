import '.';

describe('sum', () => {
  it('should sum the values in an array', () => {
    const arr = [1, 2, 3];

    const result = arr.sum();

    expect(result).toBe(6);
  });

  it('should sum the values in an array with strings', () => {
    const arr = ['1', '2', '3'];

    const result = arr.sum();

    expect(result).toBe(6);
  });

  it('should sum the values in an array with booleans', () => {
    const arr = [true, true, true];

    const result = arr.sum();

    expect(result).toBe(3);
  });

  it('should sum the values in an array with mixed types', () => {
    const arr = [1, '2', true];

    const result = arr.sum();

    expect(result).toBe(4);
  });

  it('should sum the values in an array with empty strings', () => {
    const arr = [1, '', 3];

    const result = arr.sum();

    expect(result).toBe(4);
  });

  it('should sum the values in an array with NaN', () => {
    const arr = [1, NaN, 3];

    const result = arr.sum();

    expect(result).toBe(4);
  });

  it('should return zero by default', () => {
    const arr: number[] = [];

    const result = arr.sum();

    expect(result).toBe(0);
  });
});