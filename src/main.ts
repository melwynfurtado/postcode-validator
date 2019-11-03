import { CountryCodeStrings } from './postcode-types';
import { POSTCODE_REGEXES } from './postcode-regexes';

export const postcodeValidator = (postcode: string, country: CountryCodeStrings) => {
  if (!POSTCODE_REGEXES.hasOwnProperty(country)) {
    // Error out if the country code is not recognised
    throw new Error(`Invalid country code: ${country}`);
  }

  return POSTCODE_REGEXES[country].test(postcode);
};
