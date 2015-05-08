Node.js module for parsing and validating postcodes. Country specific validation is supported for UK, US, Canada, Japan and rest of world as International.

## Install

```javascript
npm install postcode-validator
```

## Usage

```javascript
var postcode = require('postcode-validator');
postcode.validate('W85TT', 'UK'); // returns true
postcode.validate('1234567', 'UK'); // returns false

country codes: US, UK, CA, JP, INT(International)
```

## Testing

Run the unit tests with:
```javascript
npm test
```
