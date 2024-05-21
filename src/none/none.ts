export {}

declare global {
  interface Array<T> {
    none(cb?: (value: T, index: number, array: T[]) => unknown): boolean;
  }
}

/**
 * none:
 *
 * `none` is a method that allows you to check if an array has no elements that match the predicate.
 * If no predicate is provided, it simply checks if the array has no elements at all.
 *
 */

if (!Array.prototype.none) {
  Object.defineProperty(Array.prototype, 'none', {
    value: function none<T>(this: T[], cb?: (value: T, index: number, array: T[]) => unknown): boolean {
      if (!cb) return this.length === 0;
      else return !this.some(cb);
    }
  });
}