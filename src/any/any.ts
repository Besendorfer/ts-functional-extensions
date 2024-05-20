export {};

declare global {
  interface Array<T> {
    any(cb?: (value: T, index: number, array: T[]) => unknown): boolean;
  }
}

/**
 * any:
 *
 * `any` is a method that allows you to check if an array has any elements that match the predicate.
 * If no predicate is provided, it simply checks if the array has any elements at all.
 *
 */

if (!Array.prototype.any) {
  Object.defineProperty(Array.prototype, 'any', {
    value: function any<T>(this: T[], cb?: (value: T, index: number, array: T[]) => unknown): boolean {
      if (!cb) return this.length > 0;
      else return this.some(cb);
    }
  });
}