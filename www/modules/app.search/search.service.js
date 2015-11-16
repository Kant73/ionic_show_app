(function (module) {
  'use strict';

  //var URL = 'http://series-ortiz.rhcloud.com/series?callback=JSON_CALLBACK&s=thetvdb&name=';
  var URL = 'http://www.omdbapi.com/?type=series&callback=JSON_CALLBACK&s=';

  /*
  Exemple du contenu d'une requete
  "id": "254867",
        "name": "Flash Gordon",
        "description": "Flash Gordon, Flash Gordon's Trip to Mars and Flash Gordon Conquers the Universe, the most expensive and popular movie serials ever made, have been favorites of movie and comic fans for decades.",
        "fromYear": 1936,
        "toYear": 0
   */
  
  /*
  API Rémi
{  
   "Search":[  
      {  
         "Title":"The Flash",
         "Year":"2014–",
         "imdbID":"tt3107288",
         "Type":"series",
         "Poster":"http://ia.media-imdb.com/images/M/MV5BNjAwNzkxNzAwNF5BMl5BanBnXkFtZTgwODg2NTc2NjE@._V1_SX300.jpg"
      }
   */

  function SearchService($http) {
    var service = this;

    service.getShow = function (showName) {
      return $http.jsonp(URL+showName).then(function (response) {
        return response.data.Search;
      });
    };

  }

  module.service('searchService', [
    '$http',
    SearchService
  ]);

}(angular.module('app.search')));
