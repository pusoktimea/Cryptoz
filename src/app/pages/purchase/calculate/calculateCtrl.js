(function () {
  'use strict';

  angular.module('BlurAdmin.pages.purchase')
    .controller('calcCtrl', calcCtrl);

  /** @ngInject */
  function calcCtrl() {
    var vm = this

    vm.miningSum = [
      {
      	time_frame: 'Hourly',
        mined: 0.01465465,
        usd: '0.64',
        power_cost: '0.12',
        fee: '1.45',
        profit: '4.56'
      },{
      	time_frame: 'Daily',
        mined: 0.3355758,
        usd: '15.26',
        power_cost: '1.45',
        fee: '4.56',
        profit: '0.12'
      },{
      	time_frame: 'Weekly',
        mined: 2.34547,
        usd: '106.79',
        power_cost: '1.45',
        fee: '4.56',
        profit: '0.12'
      },{
      	time_frame: 'Monthly',
        mined: 10.0953452,
        usd: '457.68',
        power_cost: '1.45',
        fee: '4.56',
        profit: '0.12'
      },{
      	time_frame: 'Annually',
        mined: 122.8424546,
        usd: '5,568.40',
        power_cost: '1.45',
        fee: '4.56',
        profit: '0.12'
      }
    ];
  }
})();