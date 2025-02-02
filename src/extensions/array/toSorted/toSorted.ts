export {};

declare global {
  interface Array<T> {
    toSorted(cb?: (a: T, b: T) => number): Array<T>;
  }
}

/**
 * toSorted:
 *
 * `toSorted` is a method that allows you to sort an array, without mutating the array,
 * using a custom comparator function. It returns a new array with the sorted values.
 *
 * TODO: Work on making this more performant.
 *
 */

if (!Array.prototype.toSorted) {
  Object.defineProperty(Array.prototype, 'toSorted', {
    value: function toSorted<T>(this: T[], cb?: (a: T, b: T) => number): T[] {
      return [...this].sort(cb);
    },
  });
}
