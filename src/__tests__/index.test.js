// const multiply = require('./index');

// test('multiply 1 * 0 to equal 0', () => {
//      expect(multiply(1, 0)).toBe(1);
// });

import { multiply } from "../index.js";

xdescribe(
    'test multiply',
    () => {
        test('multiply 1 * 0 to equal 0', () => {
            const result = multiply(1, 0);
            expect(result).toBe(0);
        }),
        test('multiply 1 * 1 to equal 1', () => {
            const result = multiply(1, 1);
            expect(result).toBe(1);
        })
    }
);
