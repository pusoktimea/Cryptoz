(function () {
  'use strict';

  angular.module('BlurAdmin.pages.purchase')
    .controller('purchaseCtrl', purchaseCtrl);

  /** @ngInject */
  function purchaseCtrl(calculateModal) {
    var vm = this;

    vm.machineData = [
      {
      	id: 1,
        power: 1200,
        hashrate: '',
        change_dollar: '1.45',
        change_percent: '4.56',
        power_cost: '0.12'
      },{
      	id: 2,
        power: 1200,
        hashrate: '',
        change_dollar: '1.45',
        change_percent: '4.56',
        power_cost: '0.12'
      },{
      	id: 3,
        power: 1200,
        hashrate: '',
        change_dollar: '1.45',
        change_percent: '4.56',
        power_cost: '0.12'
      },{
      	id: 4,
        power: 1200,
        hashrate: '',
        change_dollar: '1.45',
        change_percent: '4.56',
        power_cost: '0.12'
      },{
      	id: 5,
        power: 1200,
        hashrate: '',
        change_dollar: '1.45',
        change_percent: '4.56',
        power_cost: '0.12'
      }
    ];

    vm.showCalculateModal = function() {
      calculateModal.open();
    };

  };
 })();
