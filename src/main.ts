import { CountryCodeStrings } from './postcode-types';
import { POSTCODE_REGEXES } from './postcode-regexes';

export const postcodeValidator = (postcode: string, country: string) => {
  const countryUppercase = country.toUpperCase() as CountryCodeStrings;
  
  if (!POSTCODE_REGEXES.hasOwnProperty(countryUppercase)) {
    // throw Error if country code is unrecognised
    throw new Error(`Invalid country code: ${country}`);
  }

  return POSTCODE_REGEXES[countryUppercase].test(postcode);
};
