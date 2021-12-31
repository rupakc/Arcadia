var constants = require('../config/constants.js');

var parseBreakingBadCharacterResponse = function(resultListJson) {
  let parsedResultList = [];
  for(let i = 0; i < resultListJson.length; i++) {
    parsedResultList[i] = {
      name: resultListJson[i]["name"],
      birthday: resultListJson[i]["birthday"],
      occupation: resultListJson[i]["occupation"].join(" | "),
      nickname: resultListJson[i]["nickname"]
    }
  }
  return parsedResultList;
}

var parseBreakingBadQuoteResponse = function(resultListJson) {
  let parsedResultList = [];
  for(let i = 0; i < resultListJson.length; i++) {
    parsedResultList[i] = {
      quote: resultListJson[i]["quote"],
      author: resultListJson[i]["author"],
      series: resultListJson[i]["series"]
    }
  }
  return parsedResultList;
}

var parseFinalSpaceCharacterResponse = function(resultListJson) {
  let parsedResultList = [];
  for (let i = 0; i < resultListJson.length; i++) {
    parsedResultList[i] = {
      name: resultListJson[i]["name"],
      species: resultListJson[i]["species"],
      hair: resultListJson[i]["hair"],
      alias: resultListJson[i]["alias"].join(" | "),
      origin: resultListJson[i]["origin"],
      abilities: resultListJson[i]["abilities"].join(" | ")
    }
  }
  return parsedResultList;
}

var parsePotterResponseData = function(resultListJson, resultType) {
  if(resultType.toLowerCase() == constants.POTTER_CHARACTER_TYPE) {
    return parsePotterCharacterResponse(resultListJson);
  } else if (resultType.toLowerCase() == constants.POTTER_SPELL_TYPE) {
    return parsePotterSpellResponse(resultListJson);
  } else {
    return parsePotterHouseResponse(resultListJson);
  }
}

var parsePotterCharacterResponse = function(resultListJson) {
  let parsedResultList = [];
  for (let i = 0; i < resultListJson.length; i++) {
    parsedResultList[i] = {
      name: resultListJson[i]["name"],
      role: resultListJson[i]["role"],
      house: resultListJson[i]["house"],
      school: resultListJson[i]["school"],
      bloodStatus: resultListJson[i]["bloodStatus"],
      species: resultListJson[i]["species"]
    }
  }
  return parsedResultList;
}

var parsePotterSpellResponse = function(resultListJson) {
  let parsedResultList = [];
  for (let i = 0; i < resultListJson.length; i++) {
    parsedResultList[i] = {
      spell: resultListJson[i]["spell"],
      type: resultListJson[i]["type"],
      effect: resultListJson[i]["effect"]
    }
  }
  return parsedResultList;
}

var parsePotterHouseResponse = function(resultListJson) {
  let parsedResultList = [];
  for (let i = 0; i < resultListJson.length; i++) {
    parsedResultList[i] = {
      name: resultListJson[i]["name"],
      mascot: resultListJson[i]["mascot"],
      headOfHouse: resultListJson[i]["headOfHouse"],
      houseGhost: resultListJson[i]["houseGhost"],
      founder: resultListJson[i]["founder"],
      school: resultListJson[i]["school"],
      values: resultListJson[i]["values"].join("|"),
      colors: resultListJson[i]["colors"].join("|")
    }
  }
  return parsedResultList;
}

var parseOMDBResponseData = function(resultJson) {
  let parsedResultList = [];
  let resultJsonList = resultJson["Search"];
  for (let i = 0; i < resultJsonList.length; i++) {
    parsedResultList[i] = {
      title: resultJsonList[i]["Title"],
      year: resultJsonList[i]["Year"],
      type: resultJsonList[i]["Type"],
      imdbId: resultJsonList[i]["imdbID"]
    }
  }

  return parsedResultList;
}

var parseStarwarsResponseData = function(resultJson) {
  let parsedResultList = [];
  let resultJsonList = resultJson["results"];
  for (let i = 0; i < resultJsonList.length; i++) {
    parsedResultList[i] = {
      name: resultJsonList[i]["name"],
      url: resultJsonList[i]["url"]
    }
  }
  return parsedResultList;
}

module.exports = {
  parseBreakingBadCharacterResponse: parseBreakingBadCharacterResponse,
  parseBreakingBadQuoteResponse: parseBreakingBadQuoteResponse,
  parseFinalSpaceCharacterResponse: parseFinalSpaceCharacterResponse,
  parsePotterResponseData: parsePotterResponseData,
  parseOMDBResponseData: parseOMDBResponseData,
  parseStarwarsResponseData: parseStarwarsResponseData
};
