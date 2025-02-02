export {};

declare global {
  interface Array<T> {
    zip<U>(other: U[]): Array<[T, U]>;
  }
}

/**
 * zip:
 *
 * `zip` is a method that allows you to combine two arrays into a single array
 * of tuples, where each tuple contains one element from each array in respective order.
 *
 * Note that this is a simple implementation of zip that doesn't take a transformation
 * function and only interates on the length of the first array, but these changes will
 * be added later.
 *
 */

if (!Array.prototype.zip) {
  Object.defineProperty(Array.prototype, 'zip', {
    value: function zip<T, U>(this: T[], other: U[]): Array<[T, U]> {
      return this.map((it, index) => [it, other[index]]);
    },
  });
}
