/**
 * postcode-validator
 * Unit tests
 * @author Melwyn Furtado
 */

var assert = require('assert');
var postcode = require('../lib/index.js');

// Valid postcodes
[
  {
    code: "10014",
    country: "US"
  },
  {
    code: "W6 8DL",
    country: "UK"
  },
  {
    code: "M5P 2N7",
    country: "CA"
  },
  {
    code: "100-0005",
    country: "JP"
  },
  {
    code: "100020",
    country: "INT"
  },
  {
    code: "KFPXWT7D",
    country: "INT"
  },
  {
    code: "91180-560",
    country: "INT"
  },
  {
    code: "135",
    country: "INT"
  },
  {
    code: "SW1A 0AA",
    country: "UK"
  }
].forEach(function (item) {
  assert.ok(postcode.validate(item.code, item.country), "Valid postcode " + item.code + " for country " + item.country + " was invalid");
});

// Invalid postcodes
[
  {
    code: "!,$^ +@#",
    country: "INT"
  },
  {
    code: "1234567",
    country: "UK"
  },
  {
    code: "M5P@2N7",
    country: "CA"
  },
  {
    code: "100-0005-9088",
    country: "JP"
  }
].forEach(function (item) {
  assert.ok(!postcode.validate(item.code, item.country), "Invalid postcode " + item.code + " for country " + item.country + " was invalid");
});
