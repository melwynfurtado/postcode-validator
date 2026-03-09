import { postcodeValidator, postcodeValidatorExistsForCountry } from '../src/main';

describe('postcodeValidator', () => {
  test('should return true for valid postcodes', () => {
    const validPostcodes = [
      { postcode: '10014', country: 'US' },
      { postcode: 'W6 8DL', country: 'GB' },
      { postcode: 'M5P 2N7', country: 'CA' },
      { postcode: '100-0005', country: 'JP' },
      { postcode: '100020', country: 'INTL' },
      { postcode: 'KFPXWT7D', country: 'INTL' },
      { postcode: '91180-560', country: 'INTL' },
      { postcode: '135', country: 'INTL' },
      { postcode: 'SW1A 0AA', country: 'GB' },
      { postcode: '1010', country: 'AT' },
      { postcode: 'D02 TN83', country: 'IE' },
      { postcode: 'FI-00121', country: 'FI' },
      { postcode: '9103401', country: 'IL' },
      { postcode: '60198', country: 'IL' },
      { postcode: '41008', country: 'ES' },
      { postcode: 'KY3-0001', country: 'KY' },
      { postcode: '01000', country: 'PE' },
      { postcode: '12345', country: 'TW' },
      { postcode: '123456', country: 'TW' },
      { postcode: '12341-12213', country: 'IR' },
      { postcode: '9487', country: 'LI' },
    ];

    expect.assertions(validPostcodes.length);
    validPostcodes.forEach(({ postcode, country }) => {
      expect(postcodeValidator(postcode, country)).toBeTruthy();
    });
  });

  test('should return false for invalid postcodes', () => {
    const invalidPostcodes = [
      { postcode: '!,$^ +@#', country: 'INTL' },
      { postcode: '123456', country: 'US' },
      { postcode: '12345 6789', country: 'US' },
      { postcode: '1234567', country: 'GB' },
      { postcode: 'M5P@2N7', country: 'CA' },
      { postcode: 'M5K3D8', country: 'CA' },
      { postcode: '100-0005-9088', country: 'JP' },
      { postcode: '0234', country: 'AT' },
      { postcode: 'DTN83', country: 'IE' },
      { postcode: '53000', country: 'ES' },
      { postcode: '00999', country: 'ES' },
      { postcode: 'KY4-0000', country: 'KY' },
      { postcode: '0100', country: 'PE' },
      { postcode: '010000', country: 'PE' },
      { postcode: '0A000', country: 'PE' },
      { postcode: '1121234', country: 'IR' },
      { postcode: '9485aaaa', country: 'LI' },
    ];

    expect.assertions(invalidPostcodes.length);
    invalidPostcodes.forEach(({ postcode, country }) => {
      expect(postcodeValidator(postcode, country)).toBeFalsy();
    });
  });

  test('should throw error for invalid country codes', () => {
    expect.assertions(1);
    expect(() => postcodeValidator('SW1A 0AA', 'MOON')).toThrow('Invalid country code: MOON');
  });
});

describe('postcodeValidatorExistsForCountry', () => {
  test('should return true for valid country code', () => {
    expect.assertions(6);
    expect(postcodeValidatorExistsForCountry('PR')).toBeTruthy();
    expect(postcodeValidatorExistsForCountry('AU')).toBeTruthy();
    expect(postcodeValidatorExistsForCountry('DE')).toBeTruthy();
    expect(postcodeValidatorExistsForCountry('KY')).toBeTruthy();
    expect(postcodeValidatorExistsForCountry('PE')).toBeTruthy();
    expect(postcodeValidatorExistsForCountry('IR')).toBeTruthy();
  });

  test('should return false for invalid country code', () => {
    expect.assertions(3);
    expect(postcodeValidatorExistsForCountry('PO')).toBeFalsy();
    expect(postcodeValidatorExistsForCountry('SUN')).toBeFalsy();
    expect(postcodeValidatorExistsForCountry('STAR')).toBeFalsy();
  });
});
