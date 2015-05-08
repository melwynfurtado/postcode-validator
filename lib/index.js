exports.validate =   function (code, country) {
  var regexes = {
    us:  /^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/,
    uk: /^([A-Z]){1}([0-9][0-9]|[0-9]|[A-Z][0-9][A-Z]|[A-Z][0-9][0-9]|[A-Z][0-9]|[0-9][A-Z]){1}([ ])?([0-9][A-z][A-z]){1}$/i,
    ca: /^([A-Z][0-9][A-Z])\s*([0-9][A-Z][0-9])$/i,
    jp: /^([0-9]){3}[-]([0-9]){4}$/,
    intl: /^(?:[A-Z0-9]+([- ]?[A-Z0-9]+)*)?$/i
  }

  country = country.toLowerCase();

  if (country in regexes) {
    return regexes[country].test(code)
  }
  for (reKey in regexes) {
    if(regexes[reKey].test(code)) { return true }
  }
  return false;
};
