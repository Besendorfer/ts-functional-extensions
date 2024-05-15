export {}

declare global {
  interface Array<T> {
    sortBy(cb?: (a: T, b: T) => number): Array<T>;
  }
}

/**
 * sortBy:
 *
 * `sortBy` is a method that allows you to sort an array, without mutating the array,
 * using a custom comparator function. It returns a new array with the sorted values.
 *
 */

if (!Array.prototype.sortBy) {
  Object.defineProperty(Array.prototype, 'sortBy', {
    value: function sortBy<T>(this: T[], cb?: (a: T, b: T) => number): T[] {
      return [...this].sort(cb);
    }
  });
}