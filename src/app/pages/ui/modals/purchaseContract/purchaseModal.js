(function () {
  'use strict';

  angular.module('BlurAdmin.pages.purchase')
    .service('purchaseContract', purchaseContract);

  /** @ngInject */
  function purchaseContract($uibModal) {
      this.open = function(){
        return $uibModal.open({
          animation: false,
          templateUrl: 'app/pages/ui/modals/purchaseContract/purchaseContract.html',
          controller: 'purchaseContractCtrl',
          controllerAs: 'purContVm',
          size: 'lg',
          backdrop: 'static'
        });
      }
  }

})();