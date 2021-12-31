var request = require('request');

var getPromise = function (options) {
  return new Promise(function(resolve, reject) {
    request(options,function(error,response,body) {
        if (error){
          reject(error);
        } else {
          resolve(JSON.parse(body));
        }
    });
  });
}

module.exports = {
  getPromise: getPromise
}
