import '.';

describe('tap', () => {
  it('should call the callback for each element in the array', () => {
    const arr = [1, 2, 3];
    const cb = jest.fn();

    arr.tap(cb);

    expect(cb).toHaveBeenCalledTimes(3);
    expect(cb).toHaveBeenNthCalledWith(1, 1);
    expect(cb).toHaveBeenNthCalledWith(2, 2);
    expect(cb).toHaveBeenNthCalledWith(3, 3);
  });

  it('should return the array', () => {
    const arr = [1, 2, 3];
    const cb = jest.fn();

    const result = arr.tap(cb);

    expect(result).toBe(arr);
  });
});
