/**
 * postcode-validator
 * Unit tests
 * @author Melwyn Furtado
 */

const assert = require('assert');
const postcode = require('../lib/index.js');

// Valid postcodes
[
  { code: "10014", country: "US" },
  { code: "W6 8DL", country: "UK" },
  { code: "M5P 2N7", country: "CA" },
  { code: "100-0005", country: "JP" },
  { code: "100020", country: "INTL" },
  { code: "KFPXWT7D", country: "INTL" },
  { code: "91180-560", country: "INTL" },
  { code: "135", country: "INTL" },
  { code: "SW1A 0AA", country: "UK" }
].forEach(function ({ code, country }) {
  assert.ok(
    postcode.validate(code, country), 
    `Valid postcode "${code}" for country "${country} was invalid`
  );
});

// Invalid postcodes
[
  { code: "!,$^ +@#", country: "INTL" },
  { code: "1234567", country: "UK" },
  { code: "M5P@2N7", country: "CA" },
  { code: "M5K3D8", country: "CA" },
  { code: "100-0005-9088", country: "JP" }
].forEach(function ({ code, country }) {
  assert.ok(
    !postcode.validate(code, country), 
    `Invalid postcode "${code}" for country "${country}" was invalid`
  );
});

// Throws error for invalid country
const invalidCountry = "GB";
assert.throws(
  () => postcode.validate("W6 8DL", invalidCountry), 
  `Country "${invalidCountry}" is not valid!`
)
