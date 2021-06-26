# postcode-validator

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Node.js module for parsing and validating postcodes. Country specific validation is supported for most countries including GB, US, Canada, Japan and many others.

**Note:** I haven't tested all combinations of postcodes for the extended country regular expressions. Please raise a PR with necessary test coverage for as many countries possible.

## Install

```javascript
npm install postcode-validator
```

## Usage

```javascript
// commonjs
const { postcodeValidator, postcodeValidatorExistsForCountry } = require('postcode-validator');
// ES6
import { postcodeValidator, postcodeValidatorExistsForCountry } from 'postcode-validator';

postcodeValidator('W85TT', 'GB'); // returns true
postcodeValidator('1234567', 'GB'); // returns false

postcodeValidatorExistsForCountry('GB'); // returns true
postcodeValidatorExistsForCountry('Moon'); // returns false

country codes: US, GB, CA, JP, INTL(International), etc
```

## Testing

Run the unit tests with:
```javascript
npm test
```

## Conventional Commits

Commit code using below npm script or just follow conventional commits for commit messages using git commit.
```javascript
npm run commit
```