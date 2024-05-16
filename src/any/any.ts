export {};

declare global {
  interface Array<T> {
    any(): boolean;
  }
}

/**
 * any:
 *
 * `any` is a method that allows you to check if an array has any elements.
 *
 */

if (!Array.prototype.any) {
  Object.defineProperty(Array.prototype, 'any', {
    value: function any<T>(this: T[]): boolean {
      return this.length > 0;
    }
  });
}