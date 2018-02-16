(function () {
  'use strict';

  angular.module('BlurAdmin.pages.purchase')
    .controller('purchaseContractCtrl', purchaseContractCtrl);

  /** @ngInject */
  function purchaseContractCtrl($uibModal) {
    var vm = this;
    vm.disabled = undefined;

    vm.standardItem = {};
    vm.standardSelectItems = [
      {label: 'Bitcoin', value: 1},
      {label: 'Ethereum', value: 2},
      {label: 'Litecoin', value: 3},
      {label: 'Dash', value: 4},
       {label: 'SiaCoin', value: 5}
    ];

  }
})();