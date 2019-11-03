import { CountryCodeStrings } from './../src/postcode-types';
import { postcodeValidator } from '../src/main';

describe('postcodeValidator', () => {
    test('should return true for valid postcodes', () => {
        const validPostcodes = [
            { postcode: "10014", country: "US" },
            { postcode: "W6 8DL", country: "UK" },
            { postcode: "M5P 2N7", country: "CA" },
            { postcode: "100-0005", country: "JP" },
            { postcode: "100020", country: "INTL" },
            { postcode: "KFPXWT7D", country: "INTL" },
            { postcode: "91180-560", country: "INTL" },
            { postcode: "135", country: "INTL" },
            { postcode: "SW1A 0AA", country: "UK" },
            { postcode: "1010", country: "AT" },
            { postcode: "D02 TN83", country: "IE" }
        ];

        expect.assertions(validPostcodes.length);
        validPostcodes.forEach(({ postcode, country }) => {
            expect(postcodeValidator(postcode, country)).toBeTruthy();
        });
    });

    test('should return false for invalid postcodes', () => {
        const invalidPostcodes = [
            { postcode: "!,$^ +@#", country: "INTL" },
            { postcode: "1234567", country: "UK" },
            { postcode: "M5P@2N7", country: "CA" },
            { postcode: "M5K3D8", country: "CA" },
            { postcode: "100-0005-9088", country: "JP" },
            { postcode: "0234", country: "AT" },
            { postcode: "DTN83", country: "IE" }
        ];
        
        expect.assertions(invalidPostcodes.length);
        invalidPostcodes.forEach(({ postcode, country }) => {
            expect(postcodeValidator(postcode, country)).toBeFalsy();
        });
    });

    test('should throw error for invalid country codes', () => {
        expect.assertions(1);
        expect(() => postcodeValidator('SW1A 0AA', 'GB')).toThrow('Invalid country code: GB');
    });
});