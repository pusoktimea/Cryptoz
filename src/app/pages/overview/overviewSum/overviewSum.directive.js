
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.overview')
      .directive('overviewSum', overviewSum);

  /** @ngInject */
  function overviewSum() {
    return {
      restrict: 'E',
      controller: 'overviewSumCtrl',
      templateUrl: 'app/pages/overview/overviewSum/overviewSum.html'
    };
  }
})();