import { POSTCODE_REGEXES } from './postcode-regexes';

export { CountryCode } from './postcode-types';

export const postcodeValidator = (postcode: string, country: string): boolean => {

  if (!POSTCODE_REGEXES.has(country)) {
    // throw Error if country code is unrecognised
    throw Error(`Invalid country code: ${country}`);
  }

  return POSTCODE_REGEXES.get(country)!.test(postcode);
};

export const postcodeValidatorExistsForCountry = (country: string): boolean => {
  return POSTCODE_REGEXES.has(country);
};
