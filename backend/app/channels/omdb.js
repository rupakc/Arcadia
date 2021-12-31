const requestutils = require('../utils/requestutils.js');
const keys = require('../config/keys.js');
const constants = require('../config/constants.js');

var getOMDBResponseData = function(search_query) {
  var baseUrl;
  var requestOptions;
  baseUrl = constants.OMDB_API_URL;
  requestOptions = {
      url: baseUrl,
      qs: {"apiKey": keys.OMDB_API_KEY,"s": search_query}
  };

  return requestutils.getPromise(requestOptions);
}

module.exports = {
  getOMDBResponseData: getOMDBResponseData
};
