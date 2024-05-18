export {}

declare global {
  interface Array<T> {
    none(): boolean;
  }
}

/**
 * none:
 *
 * `none` is a method that allows you to check if an array has no elements.
 *
 */

if (!Array.prototype.none) {
  Object.defineProperty(Array.prototype, 'none', {
    value: function none<T>(this: T[]): boolean {
      return this.length === 0;
    }
  });
}