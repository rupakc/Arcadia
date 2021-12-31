const requestutils = require('../utils/requestutils.js');
const keys = require('../config/keys.js');
const constants = require('../config/constants.js');

var getPotterResponseData = function(searchType) {
  var baseUrl;
  var requestOptions;
  if (searchType.toLowerCase() == constants.POTTER_CHARACTER_TYPE) {
      baseUrl = constants.POTTER_CHARACTER_URL;
  } else if (searchType.toLowerCase() == constants.POTTER_SPELL_TYPE) {
    baseUrl = constants.POTTER_SPELL_URL;
  } else {
    baseUrl = constants.POTTER_HOUSE_URL;
  }
  requestOptions = {
      url: baseUrl,
      qs: {"key": keys.POTTER_API_KEY}
  };

  return requestutils.getPromise(requestOptions);
};

module.exports = {
  getPotterResponseData: getPotterResponseData
}
