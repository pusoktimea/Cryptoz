
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.payments', [])
      .config(routeConfig);

  function routeConfig($stateProvider, $locationProvider) {
    $stateProvider
        .state('payments', {
          url: '/payments',
          templateUrl: 'app/pages/payments/payments.html',
          controller: 'PaymentsCtrl',
          controllerAs: 'payVm',
          title: 'Payments',
          sidebarMeta: {
            icon: 'fa fa-dollar',
            order: 200,
          },
        });
    $locationProvider.html5Mode(true);
  }

})();
