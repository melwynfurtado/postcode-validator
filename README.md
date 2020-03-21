Node.js module for parsing and validating postcodes. Country specific validation is supported for most countries including UK, US, Canada, Japan and many others.

**Note:** I haven't tested all combinations of postcodes for the extended country regular expressions. Please raise a PR with necessary test coverage for as many countries possible.

## Install

```javascript
npm install postcode-validator
```

## Usage

```javascript
// commonjs
const { postcodeValidator, postcodeValidatorExists } = require('postcode-validator');
// ES6
import { postcodeValidator, postcodeValidatorExists } from 'postcode-validator';

postcodeValidator('W85TT', 'UK'); // returns true
postcodeValidator('1234567', 'UK'); // returns false

postcodeValidatorExists('UK'); // returns true
postcodeValidatorExists('Moon'); // returns false

country codes: US, UK, CA, JP, INTL(International), etc
```

## Testing

Run the unit tests with:
```javascript
npm test
```