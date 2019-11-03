import { postcodeValidator } from '../src/main';

describe('postcodeValidator', () => {
    test('should validate valid postcodes', () => {
        expect.assertions(1);
        expect(postcodeValidator('10014', 'US')).toBeTruthy();
    });
});