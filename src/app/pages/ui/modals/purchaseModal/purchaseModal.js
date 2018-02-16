(function () {
  'use strict';

  angular.module('BlurAdmin.pages.purchase')
    .service('purchaseModal', purchaseModal);

  /** @ngInject */
  function purchaseModal($uibModal) {
      this.open = function(){
        return $uibModal.open({
          animation: false,
          templateUrl: 'app/pages/ui/modals/purchaseModal/purchase.html',
          controller: 'purchaseModalCtrl',
          controllerAs: 'purVm',
          size: 'md',
          backdrop: 'static'
        });
      }
  }

})();