/**
 * @module SearchController
 */
(function (module) {
  'use strict';

  function SearchController($scope, searchService) {
    $scope.shows = [];

    $scope.search = {string : ''};
    var controller = this;

    controller.getShow = function(){
      searchService.getShow($scope.search.string).then(function (shows) {
       $scope.shows = shows;
     })

   };

  }

  module.controller('searchController', [
    '$scope',
    'searchService',
    SearchController
  ]);

}(angular.module('app.search')));
