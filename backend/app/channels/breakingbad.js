const requestutils = require('../utils/requestutils.js');
const parse = require('../parse/parser.js');
const keys = require('../config/keys.js');
const constants = require('../config/constants.js');

var getBreakingBadCharacterResponseData = function(search_query,query_type) {
  var baseUrl;
  var options;
  if (query_type.toLowerCase() == constants.BREAKING_BAD_CHARACTER_TYPE) {
        baseUrl = constants.BREAKING_BAD_CHARACTER_URL;
        options = {
          url: baseUrl,
          qs: {"name": search_query}
        };
    }
    else if (query_type.toLowerCase() == constants.BREAKING_BAD_RANDOM_CHARACTER_TYPE) {
      baseUrl = constants.BREAKING_BAD_RANDOM_CHARACTER_URL;
      options = {
        url: baseUrl
      };
    }
    return requestutils.getPromise(options);
}

var getBreakingBadQuoteResponseData = function(search_query,query_type) {
  var baseUrl;
  var options;
  if (query_type.toLowerCase() == constants.BREAKING_BAD_QUOTE_TYPE) {
        baseUrl = constants.BREAKING_BAD_QUOTE_URL;
        options = {
          url: baseUrl,
          qs: {"author": search_query}
        };
    }
    else if (query_type.toLowerCase() == constants.BREAKING_BAD_RANDOM_QUOTE_TYPE) {
      baseUrl = constants.BREAKING_BAD_RANDOM_QUOTE_URL;
      options = {
        url: baseUrl
      };
    }
    return requestutils.getPromise(options);
}

module.exports = {
  getBreakingBadCharacterResponseData: getBreakingBadCharacterResponseData,
  getBreakingBadQuoteResponseData: getBreakingBadQuoteResponseData
};
