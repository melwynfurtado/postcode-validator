Node.js module for parsing and validating postcodes. Country specific validation is supported for most countries including UK, US, Canada, Japan and many others.

**Note:** I haven't tested all combinations of postcodes for the extended country regular expressions. Please be free to raise a PR with increased test coverage for as many countries possible.

## Install

```javascript
npm install postcode-validator
```

## Usage

```javascript
var postcode = require('postcode-validator');
postcode.validate('W85TT', 'UK'); // returns true
postcode.validate('1234567', 'UK'); // returns false

country codes: US, UK, CA, JP, INTL(International), etc
```

## Testing

Run the unit tests with:
```javascript
npm test
```