(function () {
  'use strict';

  angular.module('BlurAdmin.pages.wallets')
    .service('walletModal', walletModal);

  /** @ngInject */
  function walletModal($uibModal) {
      this.open = function(){
        return $uibModal.open({
          animation: false,
          templateUrl: 'app/pages/ui/modals/walletModal/wallet.html',
          controller: 'walletModalCtrl',
          controllerAs: 'walletModVm',
          size: 'md',
          backdrop: 'static'
        });
      }
  }

})();