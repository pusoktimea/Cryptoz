
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.overview', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $locationProvider) {
    $stateProvider
        .state('overview', {
          url: '/overview',
          templateUrl: 'app/pages/overview/overview.html',
          controller: 'overviewCtrl',
          controllerAs: 'overviewVm',
          title: 'Overview',
          sidebarMeta: {
            icon: 'fa fa-home',
            order: 0,
          },
        });
    $locationProvider.html5Mode(true);
  }

})();
