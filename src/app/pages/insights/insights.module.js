
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.insights', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $locationProvider) {
    $stateProvider
        .state('insights', {
          url: '/insights',
          templateUrl: 'app/pages/insights/insights.html',
          controller: 'insightsCtrl',
          controllerAs: 'insightsVm',
          title: 'Insights',
          sidebarMeta: {
            icon: 'fa fa-bar-chart',
            order: 100,
          },
        });
    $locationProvider.html5Mode(true);
  }

})();
