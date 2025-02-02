export {};

declare global {
  interface Array<T> {
    pushSorted(value: T, compareFn?: (a: T, b: T) => number): number;
  }
}

/**
 * pushSorted:
 *
 * `pushSorted` is a method that allows you to push a value into an array
 * while maintaining the array's sort order.
 *
 */

if (!Array.prototype.pushSorted) {
  Object.defineProperty(Array.prototype, 'pushSorted', {
    value: function pushSorted<T>(
      this: T[],
      value: T,
      compareFn?: (a: T, b: T) => number,
    ): number {
      if (compareFn == null) {
        // emulate the default Array.sort() comparator
        compareFn = (a: T, b: T) => {
          // @ts-ignore - allow coercing to string
          if (typeof a !== 'string') a = String(a);
          // @ts-ignore - allow coercing to string
          if (typeof b !== 'string') b = String(b);
          return a > b ? 1 : a < b ? -1 : 0;
        };
      }

      // Implement binary search to find the insertion point
      let min = 0;
      let max = this.length;
      let index = Math.floor((max + min) / 2);
      while (min < max) {
        const comparison = compareFn(value, this[index]);
        if (comparison < 0) {
          max = index;
        } else {
          min = index + 1;
        }
        index = Math.floor((max + min) / 2);
      }

      this.splice(index, 0, value);

      return index;
    },
  });
}
