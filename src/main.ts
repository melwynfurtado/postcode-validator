import { CountryCodeStrings } from './postcode-types';
import { POSTCODE_REGEXES } from './postcode-regexes';

export const postcodeValidator = (postcode: string, country: CountryCodeStrings): boolean => {

  if (!POSTCODE_REGEXES.has(country)) {
    // throw Error if country code is unrecognised
    throw Error(`Invalid country code: ${country}`);
  }

  return POSTCODE_REGEXES.get(country)!.test(postcode);
};

export const postcodeValidatorExistsForCountry = (country: CountryCodeStrings): boolean => {
  return POSTCODE_REGEXES.has(country);
};