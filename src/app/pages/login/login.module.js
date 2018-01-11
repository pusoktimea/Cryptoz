(function () {
  'use strict';

  angular.module('BlurAdmin.pages.login', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $locationProvider) {
    $stateProvider
        .state('login', {
          url: '/login',
          templateUrl: 'app/pages/login/login.html',
          controller: 'LoginCtrl',
          controllerAs: 'loginVm'
        });
    $locationProvider.html5Mode(true);
  }

})();
