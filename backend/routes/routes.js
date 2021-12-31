var express = require('express');
var router = express.Router();
var channelPipeline = require('../app/pipeline/channelPipeline.js');
const constants = require('../app/config/constants.js');


router.route('/test').get(function (req, res) {
  res.json({"Message": "Hello World"});
});

router.route('/breaking').get(async function (request, response) {
  let search_query = request.query['q'];
  console.log(search_query);
  var behancePromise = channelPipeline.getParsedBreakingBadCharacterResponseData(search_query, constants.BREAKING_BAD_CHARACTER_TYPE);
  var resultList = await behancePromise;
  response.json(resultList);
});

router.route('/breakingquote').get(async function(request, response) {
  let search_query = request.query['q'];
  console.log(search_query);
  var breakingBadQuotePromise = channelPipeline.getParsedBreakingBadQuoteResponseData(search_query, constants.BREAKING_BAD_QUOTE_TYPE);
  var resultList = await breakingBadQuotePromise;
  response.json(resultList);
});

router.route('/finalspace').get(async function(request, response) {
  var finalSpacePromise = channelPipeline.getParsedFinalSpaceCharacerResponseData();
  var resultList = await finalSpacePromise;
  response.json(resultList);
});


router.route('/potter').get(async function(request, response) {
  let searchType = request.query['q'];
  console.log(searchType);
  var potterPromise = channelPipeline.getParsedPotterResponseData(searchType);
  var resultList = await potterPromise;  
  response.json(resultList);
});

router.route('/omdb').get(async function(request, response) {
  let search_query = request.query['q'];
  console.log(search_query);
  var omdbPromise = channelPipeline.getParsedOMDBResponseData(search_query);
  var resultList = await omdbPromise;
  response.json(resultList);
});

router.route('/starwars').get(async function(request, response) {
  let searchEntity = request.query['q'];
  console.log(searchEntity);
  var starWarsPromise = await channelPipeline.getParsedStarWarsResponseData(searchEntity);
  response.json(starWarsPromise);
});

module.exports = router;
