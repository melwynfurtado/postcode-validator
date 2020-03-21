import { CountryCodeStrings } from './postcode-types';
import { POSTCODE_REGEXES } from './postcode-regexes';

export const postcodeValidator = (postcode: string, country: CountryCodeStrings) => {

  if (!POSTCODE_REGEXES.has(country)) {
    // throw Error if country code is unrecognised
    throw new Error(`Invalid country code: ${country}`);
  }

  return POSTCODE_REGEXES.get(country)?.test(postcode);
};
