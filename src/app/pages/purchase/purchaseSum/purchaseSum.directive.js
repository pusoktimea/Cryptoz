
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.purchase')
      .directive('purchaseSum', purchaseSum);

  /** @ngInject */
  function purchaseSum() {
    return {
      restrict: 'E',
      controller: 'purchaseSumCtrl',
      templateUrl: 'app/pages/purchase/purchaseSum/purchaseSum.html'
    };
  }
})();