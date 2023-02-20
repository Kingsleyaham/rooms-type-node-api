const removeQuoteFromString = (str = "") => str.replace(/['"]+/g, "");

module.exports = removeQuoteFromString;
