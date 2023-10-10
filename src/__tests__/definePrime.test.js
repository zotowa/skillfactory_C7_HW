import { definePrime } from "../definePrime.js";

describe(
    'tests for definePrime function',
    () => {
        test('prime', () => {
            expect(definePrime(17)).toBe("Число 17 - простое число");
        }),
        test('not prime', () => {
            expect(definePrime(77)).toBe("Число 77 - составное число");
        }),
        test('invalid data', () => {
            expect(definePrime(1001)).toBe("Данные неверны");
        })
    }
);