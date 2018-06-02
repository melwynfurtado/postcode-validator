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

// Valid postcodes without country
[
  {
    code: "10014"
  },
  {
    code: "W6 8DL"
  },
  {
    code: "M5P 2N7"
  },
  {
    code: "100-0005"
  },
  {
    code: "100020"
  },
  {
    code: "SW1A 0AA"
  }
].forEach(function (item) {
  assert.ok(postcode.validate(item.code), "Valid postcode " + item.code + " was invalid");
});

// Valid postcodes without country and lenient on
[
  {
  code: "KFPXWT7D",
  lenient: true
  },
  {
    code: "91180-560",
    lenient: true
  },
  {
    code: "135",
    lenient: true
  }
].forEach(function (item) {
  assert.ok(postcode.validate(item.code, null, item.lenient), "Valid postcode " + item.code + " was invalid");
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
  assert.ok(!postcode.validate(item.code, item.country), "Invalid postcode " + item.code + " for country " + item.country + " was valid");
});

// Invalid postcodes without country code
[
  {
    code: "!,$^ +@#"
  },
  {
    code: "1234567asdfafsadf4567"
  },
  {
    code: "M5P@2N7"
  },
  {
    code: "100-0005-9088"
  }
].forEach(function (item) {
  assert.ok(!postcode.validate(item.code), "Invalid postcode " + item.code + " was valid");
});
