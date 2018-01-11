(function () {
  'use strict';

  angular.module('BlurAdmin.pages.purchase')
    .service('calculateModal', calculateModal);

  /** @ngInject */
  function calculateModal($uibModal) {
      this.open = function(){
        return $uibModal.open({
          animation: false,
          templateUrl: 'app/pages/purchase/calculate/calculate.html',
          controller: 'calcCtrl',
          controllerAs: 'calcVm',
          size: 'lg',
          backdrop: 'static'
        });
      }
  }

})();