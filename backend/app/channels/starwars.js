const constants = require('../config/constants.js');
const keys = require('../config/keys.js');
const requestutils = require('../utils/requestutils.js');

var getStarWarsResponseData = function(searchEntity) {
   var baseUrl;
   var requestOptions;
   if (searchEntity.toLowerCase() == constants.STAR_WARS_PLANETS_TYPE) {
      baseUrl = constants.STAR_WARS_PLANETS_URL;
   } else if (searchEntity.toLowerCase() == constants.STAR_WARS_STARSHIPS_TYPE) {
      baseUrl = constants.STAR_WARS_STARSHIPS_URL;
   } else {
      baseUrl = constants.STAR_WARS_PEOPLE_URL;
   }
   requestOptions = {
     url: baseUrl
   };
   return requestutils.getPromise(requestOptions);
}

module.exports = {
  getStarWarsResponseData: getStarWarsResponseData
}
