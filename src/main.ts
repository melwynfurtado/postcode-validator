import { POSTCODE_REGEXES } from './postcode-regexes';

import { CountryCode } from './postcode-types';

export type OtherStringOr<T extends string> = T | (string & {});

export const postcodeValidator = (postcode: string, country: OtherStringOr<CountryCode>): boolean => {
  const regex = POSTCODE_REGEXES.get(country);
  if (!regex) {
    // throw Error if country code is unrecognised
    throw Error(`Invalid country code: ${country}`);
  }

  return regex.test(postcode);
};

export const postcodeValidatorExistsForCountry = (country: OtherStringOr<CountryCode>): boolean => {
  return POSTCODE_REGEXES.has(country);
};
export { CountryCode };
