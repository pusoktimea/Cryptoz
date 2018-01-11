
(function () {
  'use strict';

  angular.module('BlurAdmin.pages', [
    'ui.router',

    'BlurAdmin.pages.login',
    'BlurAdmin.pages.insights',
    'BlurAdmin.pages.purchase',
    'BlurAdmin.pages.ui',
    'BlurAdmin.pages.payments',
    'BlurAdmin.pages.overview'
  ])
  .config(routeConfig);

  function routeConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
  }
})();
