export {};

declare global {
  interface Array<T> {
    sum(): number;
  }
}

/**
 * sum:
 *
 * This is a terminal operation that sums the values in an array.
 *
 * It is likely that it is too permissive. This allows summing not
 * just numbers, but also booleans and strings that can be coerced
 * into numbers. This includes `Number('')` which is `0`. I'll want
 * to revisit this later.
 */

if (!Array.prototype.sum) {
  Object.defineProperty(Array.prototype, 'sum', {
    value: function sum<T>(this: T[]): number {
      return this.reduce((acc, it) => {
        if (Number.isNaN(Number(it))) return acc;
        return acc + Number(it);
      }, 0);
    },
  });
}
