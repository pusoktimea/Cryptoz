(function () {
  'use strict';

  angular.module('BlurAdmin.pages.purchase')
    .service('reinvestModal', reinvestModal);

  /** @ngInject */
  function reinvestModal($uibModal) {
      this.open = function(){
        return $uibModal.open({
          animation: false,
          templateUrl: 'app/pages/ui/modals/reinvestModal/reinvest.html',
          controller: 'reinvestCtrl',
          controllerAs: 'reinvVm',
          size: 'sm',
          backdrop: 'static'
        });
      }
  }

})();