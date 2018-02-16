angular.module('BlurAdmin.pages.insights')
.controller('insightsCtrl', insightsCtrl);

function insightsCtrl(purchaseModal, purchaseContract) {
  var vm = this;
  vm.disabled = undefined;

  vm.tableData = [
  {
    id: 1,
    performance: 'SHA-256',
    change_percent: '1.45',
    change_dollar: '4.56'
  },
  {
    id: 2,
    performance: 'SHA-256',
    change_percent: '1.45',
    change_dollar: '4.56'
  },
  {
    id: 3,
    performance: 'SHA-256',
    change_percent: '1.45',
    change_dollar: '4.56'
  },
  {
    id: 4,
    performance: 'SHA-256',
    change_percent: '1.45',
    change_dollar: '4.56'
  }
  ];

  vm.lineData = [
  {y: "2006", a: 100},
  {y: "2007", a: 75},
  {y: "2008", a: 50},
  {y: "2009", a: 75},
  {y: "2010", a: 50},
  {y: "2011", a: 75},
  {y: "2012", a: 100}
  ];

  vm.totalEarnings = [
  {
    wallet: 'Wallet #1',
    total: '2000.45',
    date: '2'
  },
  {
    wallet: 'Wallet #2',
    total: '456.45',
    date: '3'
  },
  {
    wallet: 'Wallet #3',
    total: '557.56',
    date: '5'
  },
  {
    wallet: 'Wallet #4',
    total: '557.56',
    date: '3'
  }
  ];

  vm.showPurchaseMachineModal = function() {
    purchaseModal.open();
  };

  vm.showPurchaseContractModal = function() {
    purchaseContract.open();
  };

};
