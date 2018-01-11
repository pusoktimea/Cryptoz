(function () {
  'use strict';

  angular.module('BlurAdmin.pages.purchase', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('purchase', {
        url: '/purchase',
        templateUrl: 'app/pages/purchase/purchase.html',
        controller: 'purchaseCtrl',
        controllerAs: 'purchaseVm',
        title: 'Purchase',
        sidebarMeta: {
          icon: 'fa fa-cart-plus',
          order: 300,
        },
      });
  }

})();