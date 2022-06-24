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
      { postcode: '08028', country: 'ES' },
      { postcode: 'MD-6219', country: 'MD' },
      { postcode: 'FO927', country: 'FO' },
      { postcode: '927', country: 'FO' },
      { postcode: 'D6W XH30', country: 'IE' },
      { postcode: 'D6W', country: 'IE' },
      { postcode: 'AD100', country: 'AD' },
      { postcode: '0049', country: 'AM' },
      { postcode: '1160', country: 'AT' },
      { postcode: 'AZ 1122', country: 'AZ' },
      { postcode: '75001', country: 'FR' },
      { postcode: 'GX11 1AA', country: 'GI' },
      { postcode: '741 00', country: 'GR' },
      { postcode: 'GY1 1AR', country: 'GG' },
      { postcode: 'P31 XN96', country: 'IE' },
      { postcode: 'IM4 7HB', country: 'IM' },
      { postcode: 'JE1 1JP', country: 'JE' },
      { postcode: '84326', country: 'ME' },
      { postcode: '22244', country: 'RS' },
      { postcode: '22130', country: 'AX' },
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
      { postcode: '00999', country: 'ES' }
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
    expect.assertions(3);
    expect(postcodeValidatorExistsForCountry('PR')).toBeTruthy();
    expect(postcodeValidatorExistsForCountry('AU')).toBeTruthy();
    expect(postcodeValidatorExistsForCountry('DE')).toBeTruthy();
  });

  test('should return false for invalid country code', () => {
    expect.assertions(3);
    expect(postcodeValidatorExistsForCountry('PO')).toBeFalsy();
    expect(postcodeValidatorExistsForCountry('SUN')).toBeFalsy();
    expect(postcodeValidatorExistsForCountry('STAR')).toBeFalsy();
  });
});
