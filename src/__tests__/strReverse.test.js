import { strReverse } from "../strReverse.js";

describe(
    'tests for strReverse function',
    () => {
        test('reverse empty is empty', () => {
            expect(strReverse('')).toBe('');
        }),
        test('reverse single symbol - no change', () => {
            expect(strReverse('a')).toBe('a');
        }),
        test('reverse 2 symbols', () => {
            expect(strReverse('ab')).toBe('ba');
            expect(strReverse('Yo')).toBe('oY');
            expect(strReverse('42')).toBe('24');
            expect(strReverse('\n\t')).toBe('\t\n');
        }),
        test('reverse "Hello, world!"', () => {
            expect(strReverse('Hello, world!')).toBe('!dlrow ,olleH');
        })
    }
);
