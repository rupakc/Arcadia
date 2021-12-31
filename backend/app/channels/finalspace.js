const requestutils = require('../utils/requestutils.js');
const keys = require('../config/keys.js');
const constants = require('../config/constants.js');

var getFinalSpaceCharacerResponseData = function() {
  var baseUrl;
  var requestOptions;
  baseUrl = constants.FINAL_SPACE_CHARACTER_URL;
  requestOptions = {
      url: baseUrl
  };

  return requestutils.getPromise(requestOptions);
}

module.exports = {
  getFinalSpaceCharacerResponseData: getFinalSpaceCharacerResponseData
};
