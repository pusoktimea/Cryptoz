(function () {
  'use strict';

  angular.module('BlurAdmin.pages.purchase')
    .controller('purchaseModalCtrl', purchaseModalCtrl);

  /** @ngInject */
  function purchaseModalCtrl($uibModal) {
    var vm = this;

    vm.standardItem = {};
    vm.standardSelectItems = [
      {label: 'Bitcoin', value: 1, price: 1800},
      {label: 'Ethereum', value: 2, price: 1600},
      {label: 'Litecoin', value: 3, price: 2000},
      {label: 'Dash', value: 4, price: 1350},
       {label: 'SiaCoin', value: 5, price: 2850}
    ];

  }
})();