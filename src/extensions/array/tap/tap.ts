export {};

declare global {
  interface Array<T> {
    tap(cb: (it: T) => void): Array<T>;
  }
}

/**
 * tap:
 *
 * Primarily used (at least in my experience) for debugging,
 * `tap` is a method that allows you to "tap into" a method chain
 * and inspect the value at that point in the chain.
 *
 * It is similar to `forEach`, but it returns the original array,
 * allowing you to continue chaining methods.
 */

if (!Array.prototype.tap) {
  Object.defineProperty(Array.prototype, 'tap', {
    value: function tap<T>(this: T[], cb: (it: T) => void): T[] {
      this.forEach((it) => cb(it));
      return this;
    },
  });
}
