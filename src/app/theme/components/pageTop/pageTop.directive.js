/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  var app = angular.module('BlurAdmin.theme.components')

  app.directive('pageTop', pageTop);

  function pageTop() {
    return {
      restrict: 'E',
      templateUrl: 'app/theme/components/pageTop/pageTop.html'
    };
  }

  app.controller('TopPageCtrl', TopPageCtrl);

  function TopPageCtrl($scope, $cookies, $window) {
    $scope.logOut = function() {
      $window.location.href = '/login';
    }
  };
})();
