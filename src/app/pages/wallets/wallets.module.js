
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wallets', [])
      .config(routeConfig);

  function routeConfig($stateProvider, $locationProvider) {
    $stateProvider
        .state('wallets', {
          url: '/wallets',
          templateUrl: 'app/pages/wallets/wallets.html',
          controller: 'WalletsCtrl',
          controllerAs: 'walletVm',
          title: 'Wallets',
          sidebarMeta: {
            icon: 'fa fa-credit-card',
            order: 200,
          },
        });
    $locationProvider.html5Mode(true);
  }

})();
