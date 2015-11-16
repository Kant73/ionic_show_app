/**
 * @module ShowService
 */
(function (module) {
  'use strict';

  var API_URL = 'http://www.omdbapi.com/?type=series&callback=JSON_CALLBACK&i=';

  function ShowService($http) {
    var service = this;

    service.getShow = function (showId) {
      return $http.jsonp(API_URL+showId).then(function (response) {
        return response.data;
      });
    };
  }
  //
  module.service('showService', [
    '$http',
    ShowService
  ]);

}(angular.module('app.show')));