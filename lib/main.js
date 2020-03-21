"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const postcode_regexes_1 = require("./postcode-regexes");
exports.postcodeValidator = (postcode, country) => {
    var _a;
    if (!postcode_regexes_1.POSTCODE_REGEXES.has(country)) {
        // throw Error if country code is unrecognised
        throw new Error(`Invalid country code: ${country}`);
    }
    return (_a = postcode_regexes_1.POSTCODE_REGEXES.get(country)) === null || _a === void 0 ? void 0 : _a.test(postcode);
};
