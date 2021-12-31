const parser = require('../parse/parser.js');
const fileutils = require('../utils/fileutils.js');
const constants = require('../config/constants.js');
const breakingBad = require('../channels/breakingbad.js');
const finalSpace = require('../channels/finalspace.js');
const potter = require('../channels/potter.js');
const omdb = require('../channels/omdb.js');
const starwars = require('../channels/starwars.js');
const formatutils = require('../utils/responseformatutils.js');


var getParsedBreakingBadCharacterResponseData = async function(search_query, query_type) {
  let parsedBreakingBadCharacterResponse = {};
  let breakingBadResponse = await breakingBad.getBreakingBadCharacterResponseData(search_query, query_type);
  console.log(breakingBadResponse);
  if (breakingBadResponse.length == 0) {
    breakingBadResponse = await breakingBad.getBreakingBadCharacterResponseData(search_query,constants.BREAKING_BAD_RANDOM_CHARACTER_TYPE);
  }
  parsedBreakingBadCharacterResponse = parser.parseBreakingBadCharacterResponse(breakingBadResponse);
  var formattedResponse = formatutils.formatJsonResponseForTableUI(parsedBreakingBadCharacterResponse);
  return formattedResponse;
};

var getParsedBreakingBadQuoteResponseData = async function(search_query, query_type) {
  let parsedBreakingBadQuoteResponse = {};
  let breakingBadResponse = await breakingBad.getBreakingBadQuoteResponseData(search_query, query_type);
  console.log(breakingBadResponse);
  if (breakingBadResponse.length == 0) {
    breakingBadResponse = await breakingBad.getBreakingBadQuoteResponseData(search_query,constants.BREAKING_BAD_RANDOM_QUOTE_TYPE);
  }
  parsedBreakingBadQuoteResponse = parser.parseBreakingBadQuoteResponse(breakingBadResponse);
  var formattedResponse = formatutils.formatJsonResponseForTableUI(parsedBreakingBadQuoteResponse);
  return formattedResponse;
};

var getParsedFinalSpaceCharacerResponseData = async function() {
  let finalSpaceCharacterResponse = {};
  finalSpaceCharacterResponse = await finalSpace.getFinalSpaceCharacerResponseData();
  var parsedFinalSpaceCharacterResponse = parser.parseFinalSpaceCharacterResponse(finalSpaceCharacterResponse);
  var formattedResponse = formatutils.formatJsonResponseForTableUI(parsedFinalSpaceCharacterResponse);
  return formattedResponse;
};

var getParsedPotterResponseData = async function(searchType) {
  let potterResponseData = {};
  potterResponseData = await potter.getPotterResponseData(searchType);
  var parsedPotterResponseData = parser.parsePotterResponseData(potterResponseData, searchType);
  var formattedResponse = formatutils.formatJsonResponseForTableUI(parsedPotterResponseData);
  return formattedResponse;
};

var getParsedOMDBResponseData = async function(search_query) {
  let omdbResponseData = {};
  omdbResponseData = await omdb.getOMDBResponseData(search_query);
  var parsedOMDBResponseData = parser.parseOMDBResponseData(omdbResponseData);
  var formattedResponse = formatutils.formatJsonResponseForTableUI(parsedOMDBResponseData);
  return formattedResponse;
}

var getParsedStarWarsResponseData = async function(searchEntity) {
  let starwarsResponse = {};
  starwarsResponse = await starwars.getStarWarsResponseData(searchEntity);
  var parsedStarwarsResponseData = parser.parseStarwarsResponseData(starwarsResponse);
  var formattedResponse = formatutils.formatJsonResponseForTableUI(parsedStarwarsResponseData);
  return formattedResponse;
}

module.exports = {
  getParsedBreakingBadCharacterResponseData: getParsedBreakingBadCharacterResponseData,
  getParsedBreakingBadQuoteResponseData: getParsedBreakingBadQuoteResponseData,
  getParsedFinalSpaceCharacerResponseData: getParsedFinalSpaceCharacerResponseData,
  getParsedPotterResponseData: getParsedPotterResponseData,
  getParsedOMDBResponseData: getParsedOMDBResponseData,
  getParsedStarWarsResponseData: getParsedStarWarsResponseData
};
